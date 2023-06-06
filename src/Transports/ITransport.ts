import { ClientInstance } from "../Client";

export interface ITransport {
  /**
   * The client that owns this transport.
   */
  client: ClientInstance;

  /**
   * Whether the transport is connected to a server.
   * @returns true if connected, false otherwise.
   */
  isConnected(): boolean;

  /**
   * Should be called when connection is established.
   */
  onConnect: () => void;
  /**
   * Should be called when connection is closed.
   */
  onDisconnect: () => void;
  /**
   * Should be called when an error occurs during connection.
   * @param error The error that occurred.
   */
  onError: (error: string) => void;
  /**
   * Should be called when a message is received.
   * @param message The message received.
   */
  onMessage: (message: Uint8Array) => void;

  /**
   * Sends a message to the server.
   * @param message The message to send.
   */
  send(message: Uint8Array): void;
  /**
   * Closes the connection.
   */
  close(): void;

  /**
   * Connects to a server.
   */
  connect(serverAddr: string): void;
}
