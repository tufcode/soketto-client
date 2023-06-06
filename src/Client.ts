import { Protocol } from "./Enums/Protocol";
import { ITransport } from "./Transports/ITransport";
import { PakettoInstance, paketto, serializeUInt8 } from "paketto";

export class ClientInstance {
  /**
   * @internal
   */
  private _buffer: Uint8Array;
  /**
   * @internal
   */
  private _onceConnect?: () => void;
  /**
   * @internal
   */
  private _onceError?: (error: string) => void;

  readonly transport: ITransport;
  private _paketto: PakettoInstance;

  constructor(
    transport: ITransport,
    pakettoInstance = paketto(),
    bufferSize: number = 1024 * 1024
  ) {
    this.transport = transport;
    this.transport.client = this;
    this._paketto = pakettoInstance;
    this._buffer = new Uint8Array(bufferSize);

    this.transport.onConnect = () => {
      this._onceConnect!(); // always defined when connecting
      this._onceConnect = undefined;
    };
    this.transport.onDisconnect = () => this.onClose?.();
    this.transport.onError = (error) => {
      this._onceError?.(error);
    };
    this.transport.onMessage = this._onMessage.bind(this);
  }

  onMessage?: (event: string | number, data: unknown) => void = () => {};
  onClose?: () => void;

  /**
   * @internal
   */
  private _onMessage(message: Uint8Array): void {
    const packetId = message[0];

    switch (packetId) {
      // Message
      case Protocol.SC_Message: {
        let deserialized = this._paketto.deserialize(message, 1);
        const event = deserialized.value as string | number;
        deserialized = this._paketto.deserialize(message, deserialized.offset);
        const msg = deserialized.value;

        Promise.resolve().then(() => this.onMessage?.(event, msg));

        break;
      }

      default: {
        throw new Error(`Unknown packet identifier: ${packetId}`);
      }
    }
  }

  send(event: string | number, message: unknown): void {
    if (!this.transport.isConnected())
      throw new Error("Cannot send a message before connecting");

    // Packet identifier
    let offset = serializeUInt8(this._buffer, Protocol.SC_Message);

    // Event
    offset = this._paketto.serialize(this._buffer, event, offset);

    // Message
    offset = this._paketto.serialize(this._buffer, message, offset);

    // Send
    this.transport.send(this._buffer.subarray(0, offset));
  }

  connect(serverAddr: string): Promise<ClientInstance> {
    if (this.transport.isConnected())
      throw new Error("Cannot connect a client that is already connected");
    return new Promise<ClientInstance>((resolve, reject) => {
      this._onceConnect = () => {
        this._onceError = undefined;
        resolve(this);
      };

      this._onceError = (error) => {
        this._onceConnect = undefined;
        this._onceError = undefined;
        reject(error);
      };

      this.transport.connect(serverAddr);
    });
  }

  close(): void {
    if (!this.transport.isConnected())
      throw new Error("Cannot close a client that is not connected");
    this.transport.close();
  }
}

export function createClient(
  transport: ITransport,
  pakettoInstance?: PakettoInstance
): ClientInstance {
  return new ClientInstance(transport, pakettoInstance);
}

export function connect(
  serverAddr: string,
  transport: ITransport,
  pakettoInstance?: PakettoInstance
): Promise<ClientInstance> {
  return createClient(transport, pakettoInstance).connect(serverAddr);
}
