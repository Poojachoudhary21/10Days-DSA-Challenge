// 2️⃣ Calculate the sum of all elements in an array.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array : ");
const arr = userInput.split(" ").map(Number);

// first approach
// function calculateSum(arr){
//     let sum = 0;
//     for(let i=0 ; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// second approach
function calculateSum(arr){
     const returnSum = arr.reduce((sum,current)=> sum+current);
     return returnSum;

}

let sum = calculateSum(arr);
console.log("The sum of all elements in the array is: " + sum);


// statement
// .reduce() is a method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// The reduce method takes a callback function with two parameters:
        // - sum: the accumulated value (initially set to 0)
        // - current: the current element being processed in the array
        // The callback function adds the current element to the accumulated sum.
        // The reduce method returns the final accumulated value, which is the sum of all elements in the array.