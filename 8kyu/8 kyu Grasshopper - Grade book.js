// 8 kyu
// Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  // Code here
}

// Working
// I can use IF ELSE or SWITCH functions. 

function getGrade (s1, s2, s3) {
  // Code here
  const score = (s1+s2+s3)/3;
  console.log(score);
  if (score<=60) {
    return 'F'
  }else if (  score < 70){
    return 'D'
  }else if (  score < 80){
    return 'C'
  }else if (  score < 90){
    return 'B'
  }else if (  score <= 100){
    return 'A'
  }
}

// With a SWITCH
function getGrade (s1, s2, s3) {
  // Code here
  const score = (s1+s2+s3)/3;
  switch (true) {
    case (score <=60) :
      return 'F'
      break;
    case (  score < 70):
      return 'D';
      break;
    case (  score < 80):
      return 'C';
      break;
    case (  score < 90):
      return 'B';
      break;
    case (  score <= 100):
      return 'A';
      break;
    }
  }
