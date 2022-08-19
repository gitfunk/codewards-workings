// 8 kyu
// # L1: Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

// # Instructions

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// # 
// function setAlarm(employed, vacation){

// }


// Working
// True if employed and not vacation 
// 

function setAlarm(employed, vacation){
  if (employed == true && vacation == false) {
    return true
  } else return false
}

// As an arrow ternary
const setAlarm = (employed, vacation) => (employed == true && vacation == false) ? true : false ;


// Solutions
// of course there is a simpler way
const setAlarm = (employed, vacation) => employed && !vacation;