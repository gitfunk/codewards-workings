// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  // Add code here
  if (name === owner){
    return "Hello boss"
  } else {
    return "Hello guest"}
}


function greet (name, owner) {
  // Add code here
  return name === owner ? "Hello boss" : "Hello guest"
}