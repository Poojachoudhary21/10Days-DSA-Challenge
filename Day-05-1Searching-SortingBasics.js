// 1️⃣ Implement Bubble Sort on an array.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array separated by spaces: ");

function bubbleSort(arr){
    

    for(let i = 0; i< arr.length ; i++){
        for(let j =0 ; j< arr.length - i - 1; j++){
            let temp= 0;
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

        }
        
    }
    return arr;

}

let arr = userInput.split(" ").map(Number);
if(arr.length === 0){
    console.log("Array must conatain at least two elements")
}else if(arr.length === 1){
    console.log("Array must conatain at least two elements")
}else{
    bubbleSort(arr);
    console.log("Array after bubble sort: " + arr)
}

// statement
// The function bubbleSort takes an array as input.
// It uses a nested loop to iterate through the array multiple times.
// In each iteration, it compares adjacent elements and swaps them if they are in the wrong order (i.e., the first element is greater than the second).
// The outer loop runs for the length of the array, while the inner loop runs for the length of the array minus the current outer loop index.
// This ensures that the largest unsorted element bubbles up to its correct position in each pass.
// The function returns the sorted array.
// Example: bubbleSort([5, 3, 8, 4, 2]) returns [2, 3, 4, 5, 8].