// # 6 kyu Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// Instructions

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  //...
}

// # Tests
it("test1", () => {
  var string = "The quick brown fox jumps over the lazy dog."
  assert.strictEqual(isPangram(string), true)
})
it("test2", () => {
  var string = "This is not a pangram."
  assert.strictEqual(isPangram(string), false)
});

// ## Working
// I guess i'll need to loop through the string for each letter of the alphabet.
// Regex would make the code much shorter than 26 IF statements. 
// Perhaps splitting the string into an array of individual charactesr, then looping 


function isPangram(string){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (let i = 0; i <= alphabet.length; i++) 
  {
    console.log(string.toLowerCase())
    if (!string.toLowerCase().indexOf(alphabet[i])) 
    {
      console.log(alphabet[i])
      return false
    } else return true
  }
}
// This doesn't work. It passes the first test but fails the second. 

function isPangram(string){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  console.log(string.toLowerCase());
  let letterCount = 0
  for (let i = 0; i < alphabet.length; i++) 
  {
    
    console.log(string.toLowerCase())
    let letter = alphabet[i]
    console.log(letter)
    
    if (string.toLowerCase().includes(letter))
    {      
      letterCount = letterCount +1
      console.log(letterCount)
      if (letterCount >= 26) {return true}
    } else return false
  }
}
// gross


// # Solutions
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}