// 3️⃣ Find the index of a given element in an array using linear search.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array : ");
const arr = userInput.split(" ").map(Number);

function findIndex(arr,element){
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]==element){
            return i;
        }
    }
    return -1;

}

const element = parseInt(prompt("Enter the element to find its index : "));
let index = findIndex(arr,element);

let message = index ===-1 ? "Element not found in the array." : `The index of the element ${element} in the array is: ${index}`;
console.log(message);

// Alternative way to print the message
// if(index == -1){
//     console.log("Element not found in the array.");
// }else{
//     console.log("The index of the element " + element + " in the array is : " + index);
// }

// statement
// The function findIndex takes an array and an element as input.
// It iterates through the array using a for loop.
// If it finds the element, it returns its index.