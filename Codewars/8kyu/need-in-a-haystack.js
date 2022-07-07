
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
// A Need in a Haystck
// 

function findNeedle(haystack) {
  // your code here
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] === "needle") {
        return "found the needle at position " + index
       }
    }
  }
