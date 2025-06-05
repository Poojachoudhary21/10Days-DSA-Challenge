// 2️⃣ Count the number of vowels in a string.

const prompt = require('prompt-sync')();
const userInput = prompt("Enter a string : ");

function countVowels(str) {
    let count = 0;
    let char = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        char.includes("a" || "e" || "i" || "o" || "u") ? count++ : count;

    }
    return count;

}

// function countVowels(str){
//     let count = 0;
//     let char = str.toLowerCase();

//     for(let i = 0 ; i<str.length; i++){
//         if(char[i]==='a' || char[i]==='e' || char[i]=== 'i' || char[i]==='o' || char[i]=== 'u'){
//             count++;
//         }else{
//             continue;
//         }
        
//     }
//     return count;
// }

let vowelsCount = countVowels(userInput);
console.log("The number of vowels in the string is: " + vowelsCount);

// statement
// The function countVowels takes a string as input.
// It initializes a count variable to 0.
// It converts the string to lowercase to handle case insensitivity.
// It iterates through each character of the string.
// If the character is a vowel (a, e, i, o, u), it increments the count.
// Finally, it returns the count of vowels.
// Example: "Hello World" has 3 vowels (e, o, o).
