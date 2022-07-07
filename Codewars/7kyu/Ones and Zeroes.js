// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
// 7 kyu
// # Ones and Zeros

// ## Instructions:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  // your code
};

// ## Working

// I think i need to join the array as a string/number and then convert the binary to decimal with Number()

const binaryArrayToNumber = arr => {
  // your code
  binaryArrayToNumber.join().Number()
};
// gets an error TypeError: arr.join(...).Number is not a function



// Had to unlockt his one. My googling never came up with parseInt
// I was close to his accepted answer
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

