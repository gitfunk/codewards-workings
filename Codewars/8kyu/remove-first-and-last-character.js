//
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//
// Remove First and Last Character
//
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
//

// I'm going to iterate through the string, dropping the first and last characters, and then return the rebuilt string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// 
// Found StackOverflow from 2012 that used a now deprecated built-in function .substring(). Newer option includes .slice()
// https://stackoverflow.com/questions/20196088/how-to-remove-the-first-and-the-last-character-of-a-string/25567247#25567247

function removeChar(str){
  //You got this!
  return str.slice(1,-1)
 };
 
 
 
 