// 8 kyu
// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    
  }
}

// Working
// Should be straightforward to iterate through the array comparing each integers to find the lowest. 
// For loop jumps to mind, but perhaps there is an array method that makes it easier... reduce?
// 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let minvalue = args[0]
    for (var i = 0; i < args.length; i++) {
      if(args[i] < minvalue)
      {
        return minvalue
      } else minvalue = args[i];
  
  }
  }
}
// just returns the first integer every time. 

//MDN has Math.min() 
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
// had to add three dots before args. Still not sure why but the examples i found had them. 