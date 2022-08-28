// # 6 kyu Counting Duplicates

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript


// ## Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// ## Example
// ```
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// ```

// ## Solution
// ```
// function duplicateCount(text){
//   //...
// }
// ```


// ## My Working

// I should start by coverting the string to lowercase. 
// Split it into an array of separate characters.
// Loop though and tally each occurance of vowels. 

// ```
function duplicateCount(text){
  let duplicates = 0;
  let newArray = text.toLowerCase().split('');
  console.log(newArray);

 for (let i = 0; i < newArray.length; i++){
    console.log(newArray[i]);
    if (newArray.includes(newArray[i], i+1)) {
      duplicates++;
      console.log(duplicates)
    }
 };
 return duplicates;
}
// Not working. Works when there are only two instances but just keeps adding for all subsequent matches. 
// ```

function duplicateCount(text){
  let duplicates = 0;
  let newArray = text.toLowerCase().split('');
  console.log(newArray);

 for (let i = 0; i < newArray.length; i++){
    console.log(newArray[i]);
    if (newArray.indexOf(...newArray[i]) !== newArray.lastIndexOf(newArray[i]) ) {
      duplicates++;
      console.log(duplicates)
    }
 };
 return duplicates;
  
}
// also doesn't work.  


// ## Unlocked Solutions
// Solution #1
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// Solution #2
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}