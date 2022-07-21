// 8 kyu
// # Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989


// # Description
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

var min = function(list){
    
  return list[0];
}

var max = function(list){
  
  return list[0];
}

// # Working
// Sort the array by real value . 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples

var min = function(list){
  const sorted = [...list].sort((a, b) => a - b);
  return sorted[0];
}

var max = function(list){
  const sorted = [...list].sort((a, b) => a - b);
  return sorted[sorted.length-1];
}
// lovely. 


// # Solution 1
// Of course there is a default method to find the min or max. I should read more MDN. 

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// # Solution 2
// This is the same thing I did, only they sorted in reverse order for Max. 
var min = function(list){
  list.sort((a, b) => (a - b));
  return list[0];
}

var max = function(list){
  list.sort((a, b) => (b - a));
  return list[0];
}
