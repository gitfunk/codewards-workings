// 8 kyu
// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c/javascript

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return 0;
}


// working

// Find the number of litres Nathan needs to drink (at 0.5/hr) give the time
// Math.round doesn't always round down. 
// Math.floor() returns the nearest lower integer. 
function litres(time) {
  return drink = Math.floor(time/2);
}

