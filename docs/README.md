# API Docs for Soketto Client

## Table of contents

### Classes

- [ClientInstance](classes/ClientInstance.md)
- [WebSocketTransport](classes/WebSocketTransport.md)

### Interfaces

- [ITransport](interfaces/ITransport.md)

### Functions

- [connect](README.md#connect)
- [createClient](README.md#createclient)

## Functions

### connect

▸ **connect**(`serverAddr`, `transport`, `pakettoInstance?`): `Promise`<[`ClientInstance`](classes/ClientInstance.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverAddr` | `string` |
| `transport` | [`ITransport`](interfaces/ITransport.md) |
| `pakettoInstance?` | `PakettoInstance` |

#### Returns

`Promise`<[`ClientInstance`](classes/ClientInstance.md)\>

#### Defined in

[Client.ts:121](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L121)

___

### createClient

▸ **createClient**(`transport`, `pakettoInstance?`): [`ClientInstance`](classes/ClientInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`ITransport`](interfaces/ITransport.md) |
| `pakettoInstance?` | `PakettoInstance` |

#### Returns

[`ClientInstance`](classes/ClientInstance.md)

#### Defined in

[Client.ts:114](https://github.com/tufcode/soketto-client/blob/2718fee/src/Client.ts#L114)
