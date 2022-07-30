// 7 kyu
// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Instructions
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b )
{
   //Good luck!
}

// # Working

// Find the lowest and highest values,
// iterate through each number between the two, adding to a variable
// return variable

function getSum( a,b )
{
  console.log(a,b)
  const lowest = Math.min(a,b);
  console.log(lowest);
  const highest = Math.max(a,b);
  console.log(highest);
  let sum = 0;
  for (let i = lowest; i <= highest; i++) {
    sum = sum + i
  }
  return sum;
}

// Works! I did have an error when i used commas instead of semi colons in the For loop.


// # Solutions

// ## Solutions #1 
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// ## Solution #2
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

// ## Solution #3
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}