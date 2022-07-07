// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// 8 kyu
// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
  return 0;
}

// The sum of the interior corner angles of a triangle should equal 180 degrees. 
// 180 - a - b = c ??

function otherAngle(a, b) {
  let c = 180 - a - b;
  return c;
}