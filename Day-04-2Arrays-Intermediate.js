// 2️⃣ Remove duplicates from an array.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array separated by spaces: ");

function removeDuplicates(arr) {
    let uniqueElements = [];
    uniqueElements = [...new Set(arr)];
    return uniqueElements;
    
}

let arr = userInput.split(" ").map(Number);
let unique = [];
if(arr.length === 0){
    console.log("Array must contain at least two elements.")
}else if(arr.length === 1){
    console.log("Array must contain at least two elements.");
}else{
     unique = removeDuplicates(arr);
     console.log("Array after removing duplicates: "+ unique);
}

// statement
// The function removeDuplicates takes an array as input.
// It uses the Set object to create a collection of unique elements from the array.
// The spread operator (...) is used to convert the Set back into an array.
// The function returns the array with duplicates removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4]) returns [1, 2, 3, 4].
// Note: This implementation is efficient and concise, leveraging the properties of Set to handle duplicates.

