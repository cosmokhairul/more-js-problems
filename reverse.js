// const myString = 'Hello how are you?'

// console.log(myString);
// console.log(myString.length);
// console.log(myString[0]);
// console.log(myString[2]);

// myString[0] = 'w'
// console.log(myString);

// for (const char of myString) {
//     console.log(char);
// }

const myString = 'Hello how are you?';
function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
        console.log(reverse);
    }
}

const reversed = reverseString(myString);
console.log(reversed);