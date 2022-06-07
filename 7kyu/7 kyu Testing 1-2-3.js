// 7 kyu
// Testing 1-2-3

// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number=function(array){
  //your awesome code here
}

// Test cases
Test.assertSimilar(number([]), [], 'Empty array should return empty array');
Test.assertSimilar(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                


// My attempts
var number=function(array){
  for(i = 0; i < array.lenth; i++){
    
  }
}