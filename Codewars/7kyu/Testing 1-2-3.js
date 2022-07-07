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
  for(let i = 0; i < array.lenth; i++){
    return (i+1) + ": " + array[i]
  }
}
// Derp. Totally missed it needs to be returned as an array. 

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
var number=function(array){
  const newArray = array.map((curVal, index, array) => (index + 1) + ": " + curVal)
  return newArray
}


// Top solutions

// I'm annoyingly close to the #1 solution. 

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// The #2 spot uses arrow functions and template literals. This is just showin goff. 

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
