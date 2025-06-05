// 1️⃣ Check if a string is a palindrome.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter a string : ");

function isPlaindrome(str){
    let resveresdStr = str.split("").reverse().join("");
    if(resveresdStr === str){
        console.log("The String is a palindrome.");
    }else{
        console.log("The String is not a palindrome.");
    }

}

isPlaindrome(userInput);

//statement
// The function isPlaindrome takes a string as input.
// It reverses the string using split, reverse, and join methods.
// It then compares the reversed string with the original string.   
// If they are equal, it prints that the string is a palindrome.
// Otherwise, it prints that the string is not a palindrome.
// Example: "madam" is a palindrome, while "hello" is not.