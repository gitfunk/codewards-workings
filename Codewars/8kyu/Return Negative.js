// 8 kyu
// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    // Code?
  }


// this fails for negative numbers. 
function makeNegative(num) {
  // Code?
  return num * -1
}


// this works
function makeNegative(num) {
  // Code?
 if (num > 0) {return num * -1} else return num
}

// can i use a ternary? Yes i can
function makeNegative(num) {
  // Code?
  return num > 0 ? num * -1 : num;
}

// what does this look like as an arrow function??
// figured it out eventually
let makeNegative = num => return num > 0 ? num * -1 : num;