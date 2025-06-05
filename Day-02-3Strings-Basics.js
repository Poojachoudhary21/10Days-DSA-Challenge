// 3️⃣ Reverse a string using iterative or built-in methods.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter a string : ");

function reverseString(str) {
    return str.split("").reverse().join("");
}

// function reverseString(str) {

//     let reversedStr = " ";
//     for(let i = str.length-1; i>=0 ; i--){
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }

let reversed = reverseString(userInput);
console.log("The reversed string is: " + reversed);

// statement
// The function reverseString takes a string as input.
// It uses the split method to convert the string into an array of characters.
// It then reverses the array using the reverse method.
// Finally, it joins the reversed array back into a string using the join method.
// Example: "hello" becomes "olleh".
// Alternatively, it can be done using a for loop to iterate through the string in reverse order.
// This method builds the reversed string character by character.
// Example: "hello" becomes "olleh" using a loop.