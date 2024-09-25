"use strict;"
//Cash flow ratio
//Sample Input: cash: 1000, current liabilities: 500 
//Sample Output: 2 

var cash_flow =1000;
var current_liability=500;
var cash_flow_ration = cash_flow / current_liability;
console.log(cash_flow_ration);

//Net income
//Sample Input: revenues: 1000, expenses: 500 Sample
//Output: 500 
var revenues = 1000;
var expenses =500;
console.log(revenues + expenses);

//Net income
// (using profit
//     margin and
//     sales)
//     Sample Input: profit: 1000, sales: 500 Sample
//     Output: 500000 

var profit = 1000;
var sales= 500;
console.log(profit * sales);

// Average
// Sample Input: numbers: 7, 9, 2
// Sample Output: 6
console.log( (7+9+2)/3);

// Discount
// Sample Input: price: 150, discount: 30%
// Sample Output: 105 

let price = 150;
let disscount = 0.3;
console.log(price - disscount * price);

//Age limit (older
// than 18 and less
// than 30)
// Sample Input: 20
// Sample Output: true 

let age = 20;
let selected_age = age > 18 && age<30;
console.log (selected_age);

// Exponential
// Sample Input: number 1: 2, number 2: 3 Sample
// Output: 8 

console.log (2 ** 3);

// Remainder
// Sample Input: number 1: 10, number 2: 4
// Sample Output: 2 

console.log(10%4);