// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// 8 kyu
// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){

}

function squareSum(numbers){
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + (numbers[i] * numbers[i])
    }
    return sum;
}



// MDN has Math.sqrt() to get the square root of a number
// Can i also use .reduce to sum them as we go?

function squareSum(numbers){
    return numbers.reduce(p, Math.sqrt(c))
}
// this doesn't work at all

function squareSum(numbers){
    return numbers.reduce((previous, current) => previous + (current * current), 0)
}
