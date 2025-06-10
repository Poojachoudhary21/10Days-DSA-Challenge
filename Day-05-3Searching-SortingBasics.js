// 3️⃣ Count the number of even and odd elements in an array.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array separated by spaces: ");

function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    return {evenCount, oddCount};

}

let arr = userInput.split(" ").map(Number);
if (arr.length === 0) {
    console.log("Array must contain at least one element.");
}else{
    let {evenCount, oddCount} = countEvenOdd(arr);
    console.log("Number of even elements: " + evenCount);
    console.log("Number of odd elements: " + oddCount);
}

// statement
// The function countEvenOdd takes an array as input.
// It initializes two counters, evenCount and oddCount, to zero.
// It iterates through the array, checking each element to determine if it is even or odd.
// If an element is even (i.e., divisible by 2), it increments the evenCount.
// If an element is odd, it increments the oddCount.
// The function returns an object containing the counts of even and odd elements.
// Example: countEvenOdd([1, 2, 3, 4, 5]) returns {evenCount: 2, oddCount: 3}.
// Note: This implementation efficiently counts even and odd elements in a single pass through the array, making it suitable for large datasets.