// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// 7 kyu
// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let vowelsCount = 0;
  
  // enter your magic here
  
  return vowelsCount;
}

// Test Cases
assert.strictEqual(getCount("abracadabra"), 5) ;



// Googled 'loop through string counting vowels' and found this doozy: 
function getCount(str) {
  return str.match(/[aeiou]/g).length;
}

// Doesn't work for strings with no vowels. 
Vowels Count Tests
should return 5 for 'abracadabra'
should return 4 for 'pear tree'
should return 13 for 'o a kak ushakov lil vo kashu kakao'
should return 0 for 'my pyx'
should return 168 for a long input
should return correct results for random tests



// Unlocked Solutions: 

Balkoth, dsumner25, idieeasy, vingojw, dhensche, Azuaron, Raman_Kozar, Raman_Nerad, gazzaa, Howzieky (plus 227 more warriors)

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}