export const productPrices = {

"T-Shirt": 3.00,
"Custom T-Shirt": 3.00,
"Jersey": 5.00,
"Hoodie": 8.00,
"Polo Shirt": 6.00

};


export const printPrices = {

"Sublimation": 2.50,
"DTF": 2.00,
"DTG": 3.50,
"Screen Print": 1.50

};


export function calculatePrice(
product,
method,
quantity
){

const productCost =
productPrices[product] || 0;


const printingCost =
printPrices[method] || 0;


const base =
(productCost + printingCost)
*
quantity;


// 30% profit margin

const profit =
base * 0.30;


return {

cost: base.toFixed(2),

profit: profit.toFixed(2),

total:
(base + profit).toFixed(2)

};


}