// 7 kyu
// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0
// DESCRIPTION:
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// function min(arr, toReturn) {
//   // TODO
// }

// # Working
// 
// if toReturn is value, return Math.min(....arr), else return arr.indexOf[Math.min(.....arr)]
// 

function min(arr, toReturn) {
  console.log(arr, toReturn)
  const lowest = Math.min(...arr)
  console.log(lowest)
  const index = arr.indexOf(lowest)
  console.log(index)
  
  if (toReturn == 'value') {
    return lowest
  } else return index
}
// My initial attempt at pseudo logic was good, it just neede syntax tweaking. 

// Rewritten as a ternary arrow function 
const min = (arr, toReturn) => (toReturn == 'value') ? Math.min(...arr) : arr.indexOf(Math.min(...arr));



// # Solutions

// Solution #1
function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}

// Solution #1
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));


// Solution #1
function min (a, r) {
  var m = Math.min.apply(null, a);
  return r === "value" ? m : a.indexOf(m);
}