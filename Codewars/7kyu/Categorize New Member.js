// 7 kyu
// # Categorize New Member

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

// # DESCRIPTION:
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// # SOLUTION
// function openOrSenior(data){
//   // ...
// }

// Test case: 
([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])


// # Working
// Senior == age >= 55 && handicap > 7

function openOrSenior(data) {
  let newData = []
  data.forEach(element => {
    if (element[0] >= 55 && element[1] > 7) { newData.push('Senior') }
    else {newData.push('Open')}
  })
  return newData
}

// using Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function openOrSenior(data) {
  data.forEach(element => {
    if (element[0] >= 55 && element[1] > 7) { newData.push('Senior') }
    else {newData.push('Open')}
  })
  data.Map()
  return newData
}
