// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// 8 kyu
// Count of positives / sum of negatives
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    return ?;
}

// Should I loop through the array, incrementing a variable every time i get a positive integer AND += adding negative interegers to another variable
// Expected to return an array
function countPositivesSumNegatives(input) {
    let countData = [0, 0];
    if (input === null || input.length === 0) {
        return [];
      } else { 
        input.forEach(function(i){
          if (i > 0) {
            countData[0]++ 
          } else if (i < 0) {
            countData[1] += i 
          } 
        })
      }
    return countData;
// not entirely sure why this isn't working. Probably not properly referencing the loop iterator?



// I need to understand pushing and popping with arrays better. 
function countPositivesSumNegatives(input) {
    let positives = 0;
    let negatives = 0;
    if (input === null || input.length === 0) {
        return [];
    } else { 
      input.forEach((i) => {
        if (i > 0) {
          positives++ 
        } else {
          negatives += i 
        } 
       });
      };

    return [positives, negatives];
}