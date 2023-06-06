# Interface: ITransport

## Implemented by

- [`WebSocketTransport`](../classes/WebSocketTransport.md)

## Table of contents

### Properties

- [client](ITransport.md#client)
- [onConnect](ITransport.md#onconnect)
- [onDisconnect](ITransport.md#ondisconnect)
- [onError](ITransport.md#onerror)
- [onMessage](ITransport.md#onmessage)

### Methods

- [close](ITransport.md#close)
- [connect](ITransport.md#connect)
- [isConnected](ITransport.md#isconnected)
- [send](ITransport.md#send)

## Properties

### client

• **client**: [`ClientInstance`](../classes/ClientInstance.md)

The client that owns this transport.

#### Defined in

[Transports/ITransport.ts:7](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L7)

___

### onConnect

• **onConnect**: () => `void`

#### Type declaration

▸ (): `void`

Should be called when connection is established.

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:18](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L18)

___

### onDisconnect

• **onDisconnect**: () => `void`

#### Type declaration

▸ (): `void`

Should be called when connection is closed.

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:22](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L22)

___

### onError

• **onError**: (`error`: `string`) => `void`

#### Type declaration

▸ (`error`): `void`

Should be called when an error occurs during connection.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | The error that occurred. |

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:27](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L27)

___

### onMessage

• **onMessage**: (`message`: `Uint8Array`) => `void`

#### Type declaration

▸ (`message`): `void`

Should be called when a message is received.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Uint8Array` | The message received. |

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:32](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L32)

## Methods

### close

▸ **close**(): `void`

Closes the connection.

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:42](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L42)

___

### connect

▸ **connect**(`serverAddr`): `void`

Connects to a server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverAddr` | `string` |

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:47](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L47)

___

### isConnected

▸ **isConnected**(): `boolean`

Whether the transport is connected to a server.

#### Returns

`boolean`

true if connected, false otherwise.

#### Defined in

[Transports/ITransport.ts:13](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L13)

___

### send

▸ **send**(`message`): `void`

Sends a message to the server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Uint8Array` | The message to send. |

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:38](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/ITransport.ts#L38)
