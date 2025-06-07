// 3️⃣ Left rotate an array by one position.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array separated by spaces: ");

function leftRotate(arr) {
    let firstElement = arr[0];
    for(let i = 1 ; i < arr.length; i++){
        arr[i-1]= arr[i];
    }
    arr[arr.length -1 ] = firstElement;
    return arr;

}

let arr = userInput.split(" ").map(Number);
if (arr.length === 0) {
    console.log("Array must contain at least one element.");
}else if (arr.length === 1) {
    console.log("Array must contain at least two elements.");
} else {
    leftRotate(arr);
    console.log("Array after left rotation: " + arr);
}

// statement
// The function leftRotate takes an array as input.
// It stores the first element of the array in a variable.
// It then iterates through the array starting from the second element, shifting each element to the left by one position.
// Finally, it places the first element at the end of the array.
// The function returns the modified array.
// Example: leftRotate([1, 2, 3, 4, 5]) returns [2, 3, 4, 5, 1].
// Note: This implementation modifies the original array in place. If you need to keep the original array unchanged, consider creating a copy of the array before performing the rotation.
// This approach is efficient for small to medium-sized arrays. For larger arrays, consider using a more optimized algorithm to avoid excessive shifting.