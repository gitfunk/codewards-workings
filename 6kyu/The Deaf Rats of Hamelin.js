// 6 kyu
// The Deaf Rats of Hamelin
// https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript

// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// Series
// The deaf rats of Hamelin (2D)

var countDeafRats = function(town) {
  // Your code here
  return 0;
}

// test code
console.log(countDeafRats("~O~O~O~O P"), 0);
console.log(countDeafRats("P O~ O~ ~O O~"), 1);
console.log(countDeafRats("~O~O~O~OP~O~OO~"), 2);


// The fist approach I can think of is to filter out the Piper P and Rats going the right way ~O.
// Second thoughts looks like the rats need to be looking at the Piper to be 'going the right way', its not every rat that is going towards the 'right' end of the string. 
// 





