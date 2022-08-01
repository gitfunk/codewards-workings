// 6 kyu
// # Build Tower

// ## Instructions

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// # Solution 

// function towerBuilder(nFloors) {
//   // build here
// }


// # My Working
// I haven't the faintest idea how to do this. 
// I'm guessing there is some kind of recursion needed. There should also be a simple formulae for the number of spaces and stars needed for each level. 
// Stars per level = 2 * level -1
// Spaces per level = number of levels - something. 


// I've watched this solution https://www.youtube.com/watch?v=2UFOhRoECTM 
// They use .repeat to create a series of the same character multiple times
// string.repeat() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat


function towerBuilder(nFloors) {
  let space, star, tower = [];

  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}


console.log(towerBuilder(10))