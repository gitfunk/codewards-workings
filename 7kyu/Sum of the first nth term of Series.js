// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// 7 kyu
// Sum of the first nth term of Series

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n)
{
  // Happy Coding ^_^
}


// MDN has a Number.toPrecision(3) method to round a number to 2 decimal places. 
// I


function SeriesSum(n)
{
    let sum = 0;
    for (let i = 1; i <= n ; i++){
        if (i == 1) {
            sum = 1
        } else 
        sum += 1 / (i*3) // i don't know fraction math well enough. Should i convert this to a decimal first? I should have paid more attention in highschool
    }
    return (1 + sum).toPrecision(3).toString()
}
// this does not work. I don't clearly don't know math. 


// Top unlocked solution: 
function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1); 
    }
    return sum.toFixed(2);
  }
// Damn. I was close. I originally started down this path of doing all the calculation on a single line, but I would still have got it wrong with the toPrecision.toString methods. 