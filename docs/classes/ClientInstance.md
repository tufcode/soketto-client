# Class: ClientInstance

## Table of contents

### Constructors

- [constructor](ClientInstance.md#constructor)

### Properties

- [\_paketto](ClientInstance.md#_paketto)
- [onClose](ClientInstance.md#onclose)
- [onMessage](ClientInstance.md#onmessage)
- [transport](ClientInstance.md#transport)

### Methods

- [close](ClientInstance.md#close)
- [connect](ClientInstance.md#connect)
- [send](ClientInstance.md#send)

## Constructors

### constructor

• **new ClientInstance**(`transport`, `pakettoInstance?`, `bufferSize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`ITransport`](../interfaces/ITransport.md) |
| `pakettoInstance` | `PakettoInstance` |
| `bufferSize` | `number` |

#### Defined in

[Client.ts:22](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L22)

## Properties

### \_paketto

• `Private` **\_paketto**: `PakettoInstance`

#### Defined in

[Client.ts:20](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L20)

___

### onClose

• `Optional` **onClose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Client.ts:44](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L44)

___

### onMessage

• `Optional` **onMessage**: (`event`: `string` \| `number`, `data`: `unknown`) => `void`

#### Type declaration

▸ (`event`, `data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `number` |
| `data` | `unknown` |

##### Returns

`void`

#### Defined in

[Client.ts:43](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L43)

___

### transport

• `Readonly` **transport**: [`ITransport`](../interfaces/ITransport.md)

#### Defined in

[Client.ts:19](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L19)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[Client.ts:107](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L107)

___

### connect

▸ **connect**(`serverAddr`): `Promise`<[`ClientInstance`](ClientInstance.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverAddr` | `string` |

#### Returns

`Promise`<[`ClientInstance`](ClientInstance.md)\>

#### Defined in

[Client.ts:88](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L88)

___

### send

▸ **send**(`event`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `number` |
| `message` | `unknown` |

#### Returns

`void`

#### Defined in

[Client.ts:71](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L71)
