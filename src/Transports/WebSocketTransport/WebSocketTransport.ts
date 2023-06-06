import NodeWS from "ws";
import { ClientInstance } from "../../Client";
import { ITransport } from "../ITransport";

const WebSocket = globalThis.WebSocket || NodeWS;

export class WebSocketTransport implements ITransport {
  /**
   * @internal
   */
  private _ws?: WebSocket;

  client: ClientInstance;

  isConnected(): boolean {
    return this._ws !== undefined && this._ws.readyState === WebSocket.OPEN;
  }

  onConnect: () => void;
  onDisconnect: () => void;
  onError: (error: string) => void;
  onMessage: (message: Uint8Array) => void;

  send(message: Uint8Array): void {
    if (!this._ws || this._ws.readyState !== WebSocket.OPEN)
      throw new Error("Not connected");

    this._ws.send(message);
  }

  close(): void {
    if (this._ws) {
      this._ws.close();
      this._ws = undefined;
    }
  }

  connect(serverAddr: string): void {
    if (this._ws) throw new Error("Already connected or connecting");

    this._ws = new WebSocket(serverAddr);
    this._ws.binaryType = "arraybuffer";
    this._ws.onopen = () => {
      this.onConnect();
    };
    this._ws.onclose = () => {
      this.onDisconnect();
    };
    this._ws.onerror = (error: ErrorEvent) => {
      this.onError(error.message);
    };
    this._ws.onmessage = (message) => {
      this.onMessage(new Uint8Array(message.data));
    };
  }
}
