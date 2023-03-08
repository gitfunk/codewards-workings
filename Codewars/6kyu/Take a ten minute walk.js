// 6 kyu
// Take a Ten Minutes Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// Instructions
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// SOLUTION

function isValidWalk(walk) {
  //insert brilliant code here
}

// SAMPLE TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     //some test cases for you...
//     assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
//     assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
//     assert.isFalse(isValidWalk(['w']), 'should return false');
//     assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

//   });
// });



// MY WORK

// I can track position using x and y like a map. N and E incrememnt by 1, while W and S decrement by 1. if x AND y == 0, we're back at the original location. 
// We also need to track a 'distance walked' to make sure we walk exactly 10 blocks regardless of direction. 

function isValidWalk(walk) {
  //insert brilliant code here
  let ew = 0, ns = 0, distance = 0;

  for (let i = 0; i < walk.length; i++){
    console.log(walk[i])
    if (walk[i] === 'e'){ew+=1; distance++}
    else if (walk[i] === 'w'){ew-=1; distance++}
    else if (walk[i] === 'n'){ns+=1; distance++}
    else if (walk[i] === 's'){ns-=1; distance++}
    console.log(ew, ns)
  };
  return (walk.length===10 && ew===0 && ns===0) 
}
  

