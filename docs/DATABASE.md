# Database Design

## Orders

| Field | Type |
|------|------|
| id | string |
| customer | string |
| contact | string |
| product | string |
| quantity | number |
| method | string |
| deadline | date |
| notes | text |
| status | string |
| price | number |
| createdAt | datetime |

---

## Customers

| Field | Type |
|------|------|
| id | string |
| name | string |
| contact | string |
| email | string |
| address | text |

---

## Products

| Field | Type |
|------|------|
| id | string |
| name | string |
| category | string |
| price | number |

---

## Inventory

| Field | Type |
|------|------|
| id | string |
| item | string |
| stock | number |
| unit | string |


Orders

id
customer
contact
product
quantity
method
deadline
notes
status
price