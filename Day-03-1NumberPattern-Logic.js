// 1️⃣ Find the factorial of a given number.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter a number to find its factorial: ");

function factorial(n) {
    if(n == 1 || n == 0){
        return 1;
    }else if(n < 0){
        return "Factorial is not defined for negative numbers.";
    }else if(isNaN(n)){
        return "Please enter a valid number.";
    }

    return n * factorial(n-1);
}

let result = factorial(parseInt(userInput));
console.log("The factorial of " + userInput + " is: " + result);

// statement
// The function factorial takes a number n as input.    
// It checks if n is 0 or 1, in which case it returns 1 (base case).
// If n is negative, it returns a message indicating that factorial is not defined for negative numbers.
// If n is not a number, it returns a message asking for a valid number.
// Otherwise, it recursively calls itself with n-1 and multiplies the result by n.
// Example: factorial(5) returns 120 (5 * 4 * 3 * 2 * 1).
