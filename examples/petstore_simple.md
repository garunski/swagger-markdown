Swagger Petstore (Simple)
=========================
A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification

**Version:** 1.0.0

**Terms of service:**  
http://helloreverb.com/terms/

**Contact information:**  
Swagger API team  
http://swagger.io  
foo@example.com  

**License:** [MIT](http://opensource.org/licenses/MIT)

### /pets
---
##### ***GET***
**Description:** Returns all pets from the system that the user has access to

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| tags | query | tags to filter by | No | array |
| limit | query | maximum number of results to return | No | integer |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | pet response  | pet[] |
| default | unexpected error  | string |

##### ***POST***
**Description:** Creates a new pet in the store.  Duplicates are allowed

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| pet | body | Pet to add to the store | Yes |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | pet response  | string |
| default | unexpected error  | string |

### /pets/{id}
---
##### ***GET***
**Description:** Returns a user based on a single ID, if the user does not have access to the pet

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | ID of pet to fetch | Yes | long |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | pet response  | string |
| default | unexpected error  | string |

##### ***DELETE***
**Description:** deletes a single pet based on the ID supplied

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | ID of pet to delete | Yes | long |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 204 | pet deleted  | string |
| default | unexpected error  | string |

### pet
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id |  | int64 | No |
| name |  | string | No |
| tag |  | string | No |
### newPet
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id |  | int64 | No |
| name |  | string | No |
| tag |  | string | No |
### errorModel
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| code |  | int32 | No |
| message |  | string | No |