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
function countWord(word)
{
    if (word.trim() ==="")
    {
        return 0;
    }
}