// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript
// ****** Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
//
//
// ****** Workings 
// How can I detect a space between two words? Regex?
// I can use CharAt() to get the letter at a specific index of the string. 

function abbrevName(name){
  // code away
  const firstInitial = name.charAt(0)
  const secondInitial = name.split(' ').charAt(0)
  return initials = "firstInitial" +"."+ "secondInitial"
}
// this doesn't work at all. 


// Found a stackoverflow that suggests using Split(' ') to split the two words at the space. 
// I have to map the separate words into a new array
// I can get the CharAt(0) and convert it to uppercase
// Then join the new array values with a .
function abbrevName(name){
  // code away
  const initials = name.split(' ').map(x => x[0]).toUpperCase().join('.')
  return initials
}