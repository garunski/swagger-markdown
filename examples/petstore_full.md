Swagger Petstore
================
This is a sample server Petstore server.

[Learn about Swagger](http://swagger.io) or join the IRC channel `#swagger` on irc.freenode.net.

For this sample, you can use the api key `special-key` to test the authorization filters


**Version:** 1.0.0

**Terms of service:**  
http://helloreverb.com/terms/

**Contact information:**  
apiteam@swagger.io  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

### Security
---
**api_key**  

|apiKey|*API Key*|
|---|---|
|Name|api_key|
|In|header|

**petstore_auth**  

|oauth2|*OAuth 2.0*|
|---|---|
|Authorization URL|http://petstore.swagger.io/api/oauth/dialog|
|Flow|implicit|
|**Scopes**||
|write_pets|modify pets in your account|
|read_pets|read your pets|

### /pets
---
##### ***POST***
**Summary:** Add a new pet to the store

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Pet object that needs to be added to the store | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 405 | Invalid input  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| petstore_auth | write_pets | read_pets |

##### ***PUT***
**Summary:** Update an existing pet

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Pet object that needs to be added to the store | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 400 | Invalid ID supplied  | string |
| 404 | Pet not found  | string |
| 405 | Validation exception  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| petstore_auth | write_pets | read_pets |

### /pets/findByStatus
---
##### ***GET***
**Summary:** Finds Pets by status

**Description:** Multiple status values can be provided with comma seperated strings

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| status | query | Status values that need to be considered for filter | No | array |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | Pet[] |
| 400 | Invalid status value  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| petstore_auth | write_pets | read_pets |

### /pets/findByTags
---
##### ***GET***
**Summary:** Finds Pets by tags

**Description:** Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| tags | query | Tags to filter by | No | array |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | Pet[] |
| 400 | Invalid tag value  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| petstore_auth | write_pets | read_pets |

### /pets/{petId}
---
##### ***GET***
**Summary:** Find pet by ID

**Description:** Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| petId | path | ID of pet that needs to be fetched | Yes | long |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | string |
| 400 | Invalid ID supplied  | string |
| 404 | Pet not found  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| api_key | | |
| petstore_auth | write_pets | read_pets |

##### ***POST***
**Summary:** Updates a pet in the store with form data

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| petId | path | ID of pet that needs to be updated | Yes | string |
| name | formData | Updated name of the pet | Yes | string |
| status | formData | Updated status of the pet | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 405 | Invalid input  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| petstore_auth | write_pets | read_pets |

##### ***DELETE***
**Summary:** Deletes a pet

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| api_key | header |  | Yes | string |
| petId | path | Pet id to delete | Yes | long |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 400 | Invalid pet value  | string |

**Security**

| Security Schema | Scopes | |
| --- | --- | --- |
| petstore_auth | write_pets | read_pets |

### /stores/order
---
##### ***POST***
**Summary:** Place an order for a pet

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | order placed for purchasing the pet | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | string |
| 400 | Invalid Order  | string |

### /stores/order/{orderId}
---
##### ***GET***
**Summary:** Find purchase order by ID

**Description:** For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| orderId | path | ID of pet that needs to be fetched | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | string |
| 400 | Invalid ID supplied  | string |
| 404 | Order not found  | string |

##### ***DELETE***
**Summary:** Delete purchase order by ID

**Description:** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| orderId | path | ID of the order that needs to be deleted | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 400 | Invalid ID supplied  | string |
| 404 | Order not found  | string |

### /users
---
##### ***POST***
**Summary:** Create user

**Description:** This can only be done by the logged in user.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Created user object | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| default | successful operation  | string |

### /users/createWithArray
---
##### ***POST***
**Summary:** Creates list of users with given input array

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | List of user object | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| default | successful operation  | string |

### /users/createWithList
---
##### ***POST***
**Summary:** Creates list of users with given input array

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | List of user object | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| default | successful operation  | string |

### /users/login
---
##### ***GET***
**Summary:** Logs user into the system

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| username | query | The user name for login | No | string |
| password | query | The password for login in clear text | No | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | string |
| 400 | Invalid username/password supplied  | string |

### /users/logout
---
##### ***GET***
**Summary:** Logs out current logged in user session

**Description:** 

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| default | successful operation  | string |

### /users/{username}
---
##### ***GET***
**Summary:** Get user by user name

**Description:** 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path | The name that needs to be fetched. Use user1 for testing. | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | successful operation  | string |
| 400 | Invalid username supplied  | string |
| 404 | User not found  | string |

##### ***PUT***
**Summary:** Updated user

**Description:** This can only be done by the logged in user.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path | name that need to be deleted | Yes | string |
| body | body | Updated user object | No |  |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 400 | Invalid user supplied  | string |
| 404 | User not found  | string |

##### ***DELETE***
**Summary:** Delete user

**Description:** This can only be done by the logged in user.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path | The name that needs to be deleted | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 400 | Invalid username supplied  | string |
| 404 | User not found  | string |

### User
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id | undefined | int64 | No | int64 |
| username | undefined | string | No | undefined |
| firstName | undefined | string | No | undefined |
| lastName | undefined | string | No | undefined |
| email | undefined | string | No | undefined |
| password | undefined | string | No | undefined |
| phone | undefined | string | No | undefined |
| userStatus | User Status | int32 | No | int32 |
### Category
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id | undefined | int64 | No | int64 |
| name | undefined | string | No | undefined |
### Pet
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id | undefined | int64 | No | int64 |
| category | undefined | undefined | No | undefined |
| name | undefined | string | No | undefined |
| photoUrls | undefined | array | No | undefined |
| tags | undefined | array | No | undefined |
| status | pet status in the store | string | No | undefined |
### Tag
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id | undefined | int64 | No | int64 |
| name | undefined | string | No | undefined |
### Order
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| id | undefined | int64 | No | int64 |
| petId | undefined | int64 | No | int64 |
| quantity | undefined | int32 | No | int32 |
| shipDate | undefined | date-time | No | date-time |
| status | Order Status | string | No | undefined |
| complete | undefined | boolean | No | undefined |