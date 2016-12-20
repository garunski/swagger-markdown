Uber API
========
Move your app forward with the Uber API

**Version:** 1.0.0

### /products
---
##### ***GET***
**Summary:** Product Types

**Description:** The Products endpoint returns information about the *Uber* products
offered at a given location. The response includes the display name
and other details about each product, and lists the products in the
proper display order.


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| latitude | query | Latitude component of location. | Yes | double |
| longitude | query | Longitude component of location. | Yes | double |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | An array of products  | Product[] |
| default | Unexpected error  | string |

### /estimates/price
---
##### ***GET***
**Summary:** Price Estimates

**Description:** The Price Estimates endpoint returns an estimated price range
for each product offered at a given location. The price estimate is
provided as a formatted string with the full price range and the localized
currency symbol.<br><br>The response also includes low and high estimates,
and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for
situations requiring currency conversion. When surge is active for a particular
product, its surge_multiplier will be greater than 1, but the price estimate
already factors in this multiplier.


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| start_latitude | query | Latitude component of start location. | Yes | double |
| start_longitude | query | Longitude component of start location. | Yes | double |
| end_latitude | query | Latitude component of end location. | Yes | double |
| end_longitude | query | Longitude component of end location. | Yes | double |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | An array of price estimates by product  | PriceEstimate[] |
| default | Unexpected error  | string |

### /estimates/time
---
##### ***GET***
**Summary:** Time Estimates

**Description:** The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| start_latitude | query | Latitude component of start location. | Yes | double |
| start_longitude | query | Longitude component of start location. | Yes | double |
| customer_uuid | query | Unique customer identifier to be used for experience customization. | No | string (uuid) |
| product_id | query | Unique identifier representing a specific product for a given latitude & longitude. | No | string |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | An array of products  | Product[] |
| default | Unexpected error  | string |

### /me
---
##### ***GET***
**Summary:** User Profile

**Description:** The User Profile endpoint returns information about the Uber user that has authorized with the application.

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | Profile information for a user  | string |
| default | Unexpected error  | string |

### /history
---
##### ***GET***
**Summary:** User Activity

**Description:** The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | Offset the list of returned results by this amount. Default is zero. | No | integer |
| limit | query | Number of items to retrieve. Default is 5, maximum is 100. | No | integer |

**Responses**

| Code | Description | Type |
| ---- | ----------- | ---- |
| 200 | History information for the given user  | string |
| default | Unexpected error  | string |

### Product
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| product_id | Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. | string | No |
| description | Description of product. | string | No |
| display_name | Display name of product. | string | No |
| capacity | Capacity of product. For example, 4 people. | string | No |
| image | Image URL representing the product. | string | No |
### PriceEstimate
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| product_id | Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles | string | No |
| currency_code | [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. | string | No |
| display_name | Display name of product. | string | No |
| estimate | Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. | string | No |
| low_estimate | Lower bound of the estimated price. | number | No |
| high_estimate | Upper bound of the estimated price. | number | No |
| surge_multiplier | Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. | number | No |
### Profile
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| first_name | First name of the Uber user. | string | No |
| last_name | Last name of the Uber user. | string | No |
| email | Email address of the Uber user | string | No |
| picture | Image URL of the Uber user. | string | No |
| promo_code | Promo code of the Uber user. | string | No |
### Activity
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| uuid | Unique identifier for the activity | string | No |
### Activities
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| offset | Position in pagination. | int32 | No |
| limit | Number of items to retrieve (100 max). | int32 | No |
| count | Total number of items available. | int32 | No |
| history |  | Activity[] | No |
### Error
---
| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| code |  | int32 | No |
| message |  | string | No |
| fields |  | string | No |