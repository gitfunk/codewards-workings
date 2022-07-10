// # 8 kyu Is it a palindrome?

// # Instructions

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
}

// ## Working

// I need to make a copy of the string, reverse it, then compare the two. 

function isPalindrome(x) {
  return (x.toLowerCase() === x.toLowerCase().split("").reverse().join("")) ? true : false; 
}
// Forgot about converting to lowercase before comparing. 

// ## Other Solutions

// My solution matched the top spot nearly exactly:
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}