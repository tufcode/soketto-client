# Class: WebSocketTransport

## Implements

- [`ITransport`](../interfaces/ITransport.md)

## Table of contents

### Constructors

- [constructor](WebSocketTransport.md#constructor)

### Properties

- [client](WebSocketTransport.md#client)
- [onConnect](WebSocketTransport.md#onconnect)
- [onDisconnect](WebSocketTransport.md#ondisconnect)
- [onError](WebSocketTransport.md#onerror)
- [onMessage](WebSocketTransport.md#onmessage)

### Methods

- [close](WebSocketTransport.md#close)
- [connect](WebSocketTransport.md#connect)
- [isConnected](WebSocketTransport.md#isconnected)
- [send](WebSocketTransport.md#send)

## Constructors

### constructor

• **new WebSocketTransport**()

## Properties

### client

• **client**: [`ClientInstance`](ClientInstance.md)

The client that owns this transport.

#### Implementation of

[ITransport](../interfaces/ITransport.md).[client](../interfaces/ITransport.md#client)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:13](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L13)

___

### onConnect

• **onConnect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onConnect](../interfaces/ITransport.md#onconnect)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:19](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L19)

___

### onDisconnect

• **onDisconnect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onDisconnect](../interfaces/ITransport.md#ondisconnect)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:20](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L20)

___

### onError

• **onError**: (`error`: `string`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onError](../interfaces/ITransport.md#onerror)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:21](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L21)

___

### onMessage

• **onMessage**: (`message`: `Uint8Array`) => `void`

#### Type declaration

▸ (`message`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onMessage](../interfaces/ITransport.md#onmessage)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:22](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L22)

## Methods

### close

▸ **close**(): `void`

Closes the connection.

#### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[close](../interfaces/ITransport.md#close)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:31](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L31)

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

#### Implementation of

[ITransport](../interfaces/ITransport.md).[connect](../interfaces/ITransport.md#connect)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:38](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L38)

___

### isConnected

▸ **isConnected**(): `boolean`

Whether the transport is connected to a server.

#### Returns

`boolean`

true if connected, false otherwise.

#### Implementation of

[ITransport](../interfaces/ITransport.md).[isConnected](../interfaces/ITransport.md#isconnected)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:15](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L15)

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

#### Implementation of

[ITransport](../interfaces/ITransport.md).[send](../interfaces/ITransport.md#send)

#### Defined in

[Transports/WebSocketTransport/WebSocketTransport.ts:24](https://github.com/tufcode/soketto-client/blob/2718fee/src/Transports/WebSocketTransport/WebSocketTransport.ts#L24)
