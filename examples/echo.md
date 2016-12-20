Echo
====
#### Echos back every URL, method, parameter and header
Feel free to make a path or an operation and use **Try Operation** to test it. The echo server will
render back everything.


**Version:** 1.0.0

### /
---
##### ***GET***
**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Echo GET  | string |

##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| name | formData | name | No | string |
| year | formData | year | No | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Echo POST  | string |

### /test-path/{id}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | ID | Yes | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Echo test-path  | string |
