// 7 kyu
// # Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/

// ## DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return 0;
}

// ## Tests


// ## Working
// Another recent challenge used .each() to run a function aginst every element in an array. 
// .split() the number into an array of integers 
// .each() to square every element
// concatenate each element into a new string
// convert to a number


function squareDigits(num){
  console.log(num)
  const stringArray = num.toString().split('')
  console.log(stringArray)
  stringArray.forEach(element.parseInt() => {
    element**2
  });
  console.log(stringArray)
}
// further reading suggests Map is better for looping through each index of the string array. 

function squareDigits(num){
  let stringArray = num.toString().split('')

  stringArray.map(function(val) { return val * val;})
  stringArray.join('')
  return stringArray
}
// Still not getting it. 


// # Unlocked
// ## Solution 1
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

// ## Solution 2
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

// ## Solution 3
function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}