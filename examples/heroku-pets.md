PetStore on Heroku
==================
**This example has a working backend hosted in Heroku**

You can try all HTTP operation described in this Swagger spec.

Find source code of this API [here](https://github.com/mohsen1/petstore-api)


**Version:** 1.0.0

### /
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | number of pets to return | No | integer |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | List all pets  | Pet[] |

##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| pet | body | The pet JSON you want to post | Yes |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Make a new pet  | string |

##### ***PUT***
**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| pet | body | The pet JSON you want to post | Yes |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Updates the pet  | string |

### /{petId}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| petId | path | ID of the pet | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Sends the pet with pet Id  | string |

### Pet
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| name |  | string | No |
| birthday |  | int32 | No |