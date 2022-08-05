// Count the Digit
// https://www.codewars.com/kata/566fc12495810954b1000030/javascript
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// function nbDig(n, d) {
//   // your code
// }


// # Working
// In plain english we want to find the number of times the character d occurs in the squares of numbers between 0 and n. 

// create an array of numbers between 0 and n
// sqrt each number in the array

// square the i
// split the i into a new array of characters
// loop through new array to check if character matches d
// increase the count

function nbDig(n, d) {
  const nArray = [];
  let newN = n
  let dCount = 0
  while (nArray.length <= n)
  {
    nArray.unshift(newN**2)
    newN -= 1
  }
  console.log(nArray)
  for (let i = 0; i <= nArray.length; i++) {
    if (nArray[i] == d) {
      dCount++;
  }
  
  }
}
nbDig( 50, 2)
// squaring the initial array values is the easy part. But i'm struggling to figure out the nested loop to then loop through each value to find characters. 


function nbDig(n, d) {
  const newArray = []

  for (let i = 0; i <= n.length; i++) {
    newArray.unshift(n**2).toString();
    
  }
  return newArray.split(d)
  console.log(newArray)
}
nbDig( 50, 2)

