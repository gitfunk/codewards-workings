// 7 kyu
// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  //...
}

// Working
// I think i'll need to split the string into an array of individual characters, then interate through each character to see if there are any duplicates. 

function isIsogram(str){
    str = str.toLowerCase().split("");
    console.log(str)
  
}
// i'm a bit stumped with this one. 
// possible options include using .includes() or .some()

