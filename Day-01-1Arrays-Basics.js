// 1️⃣ Find the maximum element in an array.
const prompt = require('prompt-sync')();

const userInput = prompt("Enter the elements of the array : ");
const arr = userInput.split(" ").map(Number);

function findMax(arr){
    let max = arr[0];
    for(let i= 0 ; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }else{
            continue;
        }
    }
    return max;
}

let max = findMax(arr);
console.log("The maximum element in the array is: " + max);


// statement

// .split() converts a single string into an array of substrings.
// .map(Number) converts each substring to a number.
// Example: "1 2 3" becomes [1, 2, 3]