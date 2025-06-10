// 2️⃣ Implement Linear Search and Binary Search (assume sorted array for Binary Search).

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the elements of the array separated by spaces: ");

function linearSerach(arr,target){
    
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;

}

function binarySerach(arr,target){
    let sortedArr = arr.sort((a,b)=> a-b);
    console.log("Sorted Array: " + sortedArr);

    let initialValue = 0;
    let lastValue = sortedArr.length - 1;
    let mid;

    while(lastValue >= initialValue){
        mid = initialValue + Math.floor((lastValue - initialValue) / 2);

        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid] > target){
            lastValue = mid - 1;
        }else{
            initialValue = mid + 1;
        }

    }
    return -1;
    

}



let arr = userInput.split(" ").map(Number);
if(arr.length === 0){
    console.log("Array must contain at least two element.");
}else if(arr.length === 1){
    console.log("Array must contain at least two elements.");
}else{
    let target = parseInt(prompt("Enter the target element to search : "));
    let linearResult = linearSerach(arr, target);
    if(linearResult === -1 ){
        console.log("Element not found in the array using Linear Search.");
    }else{
        console.log("Element found at index " + linearResult + " using Linear Search(without sort).");
    }
    let binaryResult = binarySerach(arr, target);
    if(binaryResult === -1 ){
        console.log("Element not found in the array using Binary Search.");
    }else{
        console.log("Element found at index " + binaryResult + " using Binary Search.");
    }   
}

// statement
// The function linearSerach takes an array and a target value as input.
// It iterates through the array and checks if each element matches the target.
// If a match is found, it returns the index of the element.
// If no match is found, it returns -1.
// The function binarySerach takes a sorted array and a target value as input.
// It first sorts the array in ascending order.
// It then uses a binary search algorithm to find the target value.
// The algorithm divides the array into halves, checking if the middle element is equal to the target.
// If the middle element is greater than the target, it narrows the search to the left half; otherwise, it narrows to the right half.
// The function returns the index of the target if found, or -1 if not found.
// Example: linearSerach([1, 2, 3, 4, 5], 3) returns 2; binarySerach([5, 3, 1, 4, 2], 3) returns 1 after sorting to [1, 2, 3, 4, 5].