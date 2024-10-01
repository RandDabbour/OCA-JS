// 1.Create a function that will display the smallest value in the array. 
const array1 = [1, 2, 3];
function smallest(array) {
    if (array.length === 0) {
        console.log("Array is empty.");
        return; 
    }

    let smallest = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]; 
        }
    }

    console.log("The smallest value in the array is:", smallest);
}
smallest(array1);

// 2.Function that will return your string in Alphabetical order 

function AlphabeticalString(inputString) {
    var letters = inputString.split('');
    letters.sort(); 
    var sortedString = letters.join(''); 
    return sortedString; 
}

var string = "hey its Ran"; 
const sortedString = AlphabeticalString(string);
console.log("Sorted string:", sortedString);

//. Return how many words was given 


function countWords(wordCount) {
    return wordCount.trim().split(/\s+/).length;
  }
  
  const sentence = "Hey im Ran!";
  const wordCount = countWords(sentence);
  console.log(wordCount);



// 4.Create function to Multiply all elements in an array by it's length 

function ArrayLengthmultiply(arr) {
    return arr.map(element => element * arr.length);
  }
  
  const array = [4, 7, -3, 1];
  const result = ArrayLengthmultiply(array);
  console.log(result);

//   5. Create a function that will repeat each string character two times 

function doubleChar(repeatedString) {
    return repeatedString.split('').map(char => char + char).join('');
  }
    console.log(doubleChar('heyy there')); 