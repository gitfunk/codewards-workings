// 7 kyu
// # Find the next perfect square!
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// # DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// # Solution
// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return -1;
// }

// # Working
// We have to return the next largest perfect integer. 
// Test if current value is a perfect integer
// To find the next highest square:
// Calculate current square root then add 1 and square it


function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 == 0){ 
    return (Math.sqrt(sq)+1)**2
  } else {
    return -1
  }
}
// had to remember powers are double asterisk ** not single * multipliers.

const findNextSquare = sq => Math.sqrt(sq) % 1 ? Math.sqrt(sq)+1)**2 : -1;
// this returns a syntax error. Can't figure out why. Arrow functions are my bane. 


// # Solutions

// Solution #1
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// Solution #2
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}

// Solution #3
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}