
// 7 kyu
// Number of People in the Bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  // Good Luck!
}

//  Test cases
//     assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
//     assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
//     assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
//     assert.strictEqual(number([[0,0]]),0);



// Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Loop through the array and: 
// add arr[0]
// subtract arr[1]
// return new array 


var number = function(busStops){
  let peopleOnBus = 0
  // Loop through the array and: 
  for (let i = 0; i < busStops.length; i++ ) {  
    // add arr[0]  ... but make sure its the index not the 0
    peopleOnBus += busStops[i][0]; 
    // subtract arr[1] ... ditto make sure its the array[index][second number]
    peopleOnBus -= busStops[i][1];
    // return new array 
  }
  return peopleOnBus
}
