// https://www.codewars.com/kata/5601409514fc93442500010b/javascript
// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const arr = classPoints.push(yourPoints)
  const startValue = 0;
  const totalValue = arr.reduce(
    (a,b) => a + b, startValue
  )
  const avg => totalValue / arr.length
}
// effing eff the eff


const classPoints = [100, 40, 34, 57, 29, 72, 57, 88]
const yourPoints = 75

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let array = classPoints.push(yourPoints);
  const classAverage = array.reduce(( a, b) => a + b, 0) / array.length;
  return (yourPoints > classAverage ? true : false);
}
// the isntructions state to add your points to the classes poitns to determine the overall average. This should work!

// but this is accepted as a valid answer: 
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const classAverage = classPoints.reduce(( a, b) => a + b, 0) / classPoints.length;
  return (yourPoints > classAverage ? true : false);
}
