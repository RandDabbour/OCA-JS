"use strict";
//1- Use a for loop to find the factorial of a number. 


let n=5;
let factorial =1;
for (let i=1; i<=n; i++)
{
    factorial= factorial*i;
}
 console.log(factorial);
// 2.Use a for loop to print the Fibonacci sequence up to a given number. 

let n1=0;
let n2 =1;
let sequence;
let range=10;
console.log(n1);
console.log(n2);

for(let i =3; i<=range; i++)
{
    sequence = n1 + n2; 
    console.log(sequence); 
    n1 = n2; 
    n2 = sequence; 
}

// 3.Use a for loop to print the prime numbers up to a given number. 

let limit = 20;
for(let num = 2; num <=limit ; num++)
{
    let isPrime = true;
for (let i =2; i<=Math.sqrt(num); i++ )
{
    if(num % i ==0){
    
        isPrime = false;
        break;
    }
}
if (isPrime==true) 
    console.log(num); 
}

// 4.Use a for loop to print the elements of a 2D array .
let array= 
[
    [0,1,2],
    [3,4,5],
    [6,7,8]
];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j])
    }
  }
//   5.Use a for loop to print the elements of an array in reverse order. Without using
//   built in function

for (let i = array.length -1; i <=0; i--) {
    for (let j = array[i]; j =0 ; j--) {
      console.log(array[i][j])
    }
  }

//   .Use the concat() method to combine two arrays into a single array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);

console.log(combinedArray); 

// Use the slice() method to extract a portion of an array. 

const slice_array = array1.slice(2);
console.log(slice_array);

// Use the splice() method to add and remove elements from an array. 
console.log(array1.splice(2,1));
array1.splice(3,0,10,20,30)
console.log(array1);

// Use the for...of loop to iterate through an array.

for (let index of array1)
{
    console.log(index);
}

// Create an array of numbers and use the forEach() method to print each element to the
// console. 
array1.forEach(function(index)
{
    console.log(index);
});

// 1.Check if a variable named "password" is at least 8 characters long and display a
// message "Your password is strong" if it is. 
var password=prompt("Enter password");
if (password.length >= 8) {
    console.log("Your password is strong");
  } else {
    console.log("Your password is too short");
  }

//   2. Check if a variable named "color" is either "red", "green", or "blue" and display a
// message "color is a primary color" if it is. 
var color =prompt("choose a color");
if (color == "red" || color=="blue"||color=="green")
{
    console.log("color is a primary color");
}else{
    console.log("color is not a primary color");}

//     Check if a variable named "y" is a negative number and display a message "y is a
// negative number" if it is. 

var y = prompt("Enter Nubmer");
if(y < 0)
{
    console.log("y is a negative number");
}
else if (y=0)
{
    console.log ("y is Zero");
}
else {
    console.log("y is positive number");
}

// . Check if a variable named "list" is an array and display a message "It's an array" if it
// is.

var list = [1,2,3,4,5];
if (typeof list === "object" && list !== null && list.length !== undefined) {
    console.log("It's an array");
  } else {
    console.log("It's not an array");
  }

//   1.Create an object and add a new property to it using bracket notation. 
var me =
{
    name:"Ran",
    age:"22"
};
var classmate =
{
    name:"Mayar"
};
me["hobby"] = "reading";
console.log(me);

// . Use the Object.values() method to get an array of an object's values

console.log(Object.values(me));

// Use the Object.entries() method to get an array of key-value pairs for an object. 

console.log(Object.entries(me));

// Use the Object.assign() method to merge two objects. 
console.log(Object.assign({}, me , classmate));

// 5. Use the Object.seal() method to prevent changes to an object's properties but allows changes to its
// values.


Object.seal(me);
me["fav food"] ="pasta";
delete me.name;
me.age="100";
console.log(me);

