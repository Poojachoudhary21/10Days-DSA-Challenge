// 1️⃣ Find the second largest element in an array.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array separated by spaces: ");


function secondLargest(arr) {
     const sortArr = arr.sort((a,b) => a-b);
     console.log("Sorted Array: " + sortArr);
     let secondLarger = arr[arr.length -2];
     return secondLarger;

}

let arr = userInput.split(' ').map(Number);
if (arr.length < 2) {
    console.log("Array must contain at least two elements.");
}
else {
    let result = secondLargest(arr);
    console.log("The second largest element in the array is: " + result);
}

//statement
// The function secondLargest takes an array as input.
// It first sorts the array in ascending order using the sort method.
// After sorting, it retrieves the second largest element by accessing the second last element of the sorted array.
// The function returns the second largest element.
// Example: secondLargest([3, 1, 4, 1, 5, 9]) returns 5.
// Note: The sort method modifies the original array, so if you need to keep the original order, consider making a copy of the array before sorting.
