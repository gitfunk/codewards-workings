// 8 kyu
// # Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// # Instructions

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {

// }

// # Working

// get array
// check array for null, none, nothing etc. Test for a non integer? > return 0
// Sort array by true value (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// slice to remove index 0 and index.length-1 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
// reduce to sum the remaining values (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

function sumArray(array) {
  if (array == null || array.length < 3) {
    return 0
  } else {
    let sortedArray = array.sort((a, b) => a - b)
    let slicedArray = sortedArray.slice(1, sortedArray.length - 1)
    // console.log(slicedArray)
    let reducedArray = slicedArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    )
    // console.log(reducedArray)
    return reducedArray
  }
}
// that worked a treat but is quite a lot of lines. 


function sumArray(array) {
  if (array == null || array.length < 3) {
    return 0
  } else {
    return array.sort((a, b) => a - b).slice(1, - 1).reduce(
      (p, c) => p + c)
  }
}
// more succinct but i'm sure this can be written as a ternary



sumArray([0, 1, 6, 10, 10])
sumArray([-6, -20, -1, -10, -12])


// # Solutions

// Solution #1
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

// Solution #2
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// Solution #3
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

