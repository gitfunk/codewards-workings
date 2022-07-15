// # 8 kyu N-th Power
// https://www.codewars.com/kata/57d814e4950d8489720008db

// # DESCRIPTION:
// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
  //your code here
}

// # Working
// Should be able to use Math.pow()

function index(array, n){
  const base = array[n];
  const exp = n;
  const findPower = Math.pow(base, exp);
  return (findPower.isNan ? -1 : findPower);
}
// Doesn't work. It returns NaN even though I should be checking for it and instead returning -1. 

function index(array, n){
  const base = array[n];
  const exp = n;
  if (base ** exp){
    return base**exp
  } else return -1
}
// Using the ** operator worked. I guess I don't fully understand how the .pow() and .isNaN() methods are supposed to work. 


// # Solutions
// I'm embarrased I didn't think of checking the array length against n first. 
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

// 
function index(array, n){
  //your code here
  return array[n] ** n || -1;
}