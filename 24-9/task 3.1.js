"use strict";
// Write the code to make this string “Welcome to Orange” outputted in the following forms using
// string methods:






let text ="welcome to Orange";

let output1 = text.toUpperCase();
console.log(output1);// ● Output: WELCOME TO ORANGE

let output2 = text.slice(8, 10).toLocaleUpperCase();
console.log(output2);// ● Output: TO

let output3 = text.replace("welcome to" , "Hello from");
console.log(output3);// ● Output: Hello from Orange

let output4 = text.toLocaleLowerCase();
console.log(output4);// ● Output: welcome to orange

let output5 = text.length;
console.log(output5);// ● Output: 17 
let output6 = text.replace("Orange" ,"“Orange”");
console.log(output6);

let output7 = text + "Jordan"; //Output: Welcome to “Orange”
console.log(output7); //Output: Welcome to Orange Jordan 