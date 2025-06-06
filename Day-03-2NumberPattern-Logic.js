// 2️⃣ Check if a number is prime.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter a number to check if it is prime: ");

function isPrime(n) {
    if(n <= 1){
        return false;
    }

    // check for divisiblity from 2 to n-1
    for(let i = 2; i < n ; i++){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}   

let result = isPrime(parseInt(userInput));
let massage = result ? "is a prime number." : "is not a prime number.";
console.log("The number " + userInput + " " + massage);

// statement
// The function isPrime takes a number n as input.
// It checks if n is less than or equal to 1, in which case it returns false (not prime).
// It then iterates from 2 to n-1, checking if n is divisible by any of these numbers.
// If it finds a divisor, it returns false (not prime).
// If no divisors are found, it returns true (is prime).
// Example: isPrime(7) returns true, while isPrime(10) returns false.
// Note: This implementation is not optimized for large numbers.
// For larger numbers, a more efficient algorithm like the Sieve of Eratosthenes or trial division up to the square root of n is recommended.
