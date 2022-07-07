// # 7 kyu Find the middle element

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {

}

// ## Working

// I will need to sort the array to find the middle value, then return the index number that matches in the original array

// Doesn't work. It returns '1' every time. 
function gimme (triplet) {
  console.log(triplet)
  const sorted = triplet.sort((a,b) => a-b);
  console.log(sorted)
  return triplet.indexOf(sorted[1]);
}

// Adding square brackets and ... around the array.sort works. I have no idea why. 
// Update: .sort() is an in place sort. Meaning my code was sorting the original 'triplet' array as well as creating the 'sorted' pointer to said array. 
// I would have seen this by console.log the original triplet AFTER the sort line. 
function gimme (triplet) {
  const sorted = [...triplet].sort((a,b) => a-b);
  return triplet.indexOf(sorted[1]);
}

// ## Solutions
// The solutions to this problem are wildly different. '

// #1 solution is 
// function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }

// #2 Solution:
// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };

