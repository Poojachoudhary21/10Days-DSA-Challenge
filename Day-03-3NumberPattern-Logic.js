// 3️⃣ Print the Fibonacci series up to n terms.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter the number of terms for the Fibonacci series: ");

function fibonacci(n){
    if(n<=0){
        return "Please enter a positive integer.";
    }else if(n===1){
        return [0];
    }else if(n===2){
        return [0,1];
    }

    let fibSeries = [0, 1];
    for(let i = 2; i < n; i++){
        fibSeries[i] = fibSeries[i-1]+fibSeries[i-2];
    }
    return fibSeries;
}

let result = fibonacci(parseInt(userInput));
console.log("The Fibonacci series up to " + userInput + " terms is: " + result);

// statement
// The function fibonacci takes a number n as input.
// It checks if n is less than or equal to 0, in which case it returns a message asking for a positive integer.
// If n is 1, it returns an array with the first term [0].
// If n is 2, it returns the first two terms [0, 1].
// For n greater than 2, it initializes an array with the first two terms [0, 1].
// It then uses a for loop to calculate the next terms by adding the last two terms in the series.
// The loop continues until it has generated n terms.
// Example: fibonacci(5) returns [0, 1, 1, 2, 3].
// Note: The Fibonacci series starts with 0 and 1, and each subsequent term is the sum of the two preceding ones.
// This implementation efficiently generates the series using an iterative approach.
