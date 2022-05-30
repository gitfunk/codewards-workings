// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/javascript
// 8 kyu
// Parse nice int from char problem

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
}

// Workings: 
// I need to detect the number and extract it from the string. I guess regex works here. 
// Since its always only the first character (number between 0 and 9) i should be able to take the charAt(0) and return it as a number

function getAge(inputString){
    return inputString.charAt(0).parseInt()
}
// nope

function getAge(inputString){
    return Number(inputString.charAt(0))
} 
// yup. Accepted solution. 



// So close to the top solution. 
function getAge(inputString){
    return parseInt(inputString);
  }