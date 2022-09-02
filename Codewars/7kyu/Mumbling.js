// # 7 kyu Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

// # DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
// 	// your code
// }


// # Working
// Split the parameter string into an array of letters
// Loop through the array of characters
//  For each index, while less than array.length 
//   If array index is 0, return uppcase character   


function accum(s) {
	// your code
  const array = s.split("");
  console.log("Original Array: " + array);
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
//     console.log(s[i])
    
    let tempArray = []
    for (let c = 0; c < i; c++) {
      if (c == 0) {
        tempArray.push(s[i].toUpperCase())
      } else {
        tempArray.push(s[i].toLowerCase())
      }
//       console.log(tempArray)
      newArray.push(tempArray.join(''))
    }
    console.log(newArray)
  };
}

// Results in an ASCII Christmas Tree. Clearly pushing each index iteration is creating too many arrays. 

// Can't i concatenate text strings with + ?
function accum(s) {

  const array = [];

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    let str = s[i].toUpperCase();
    
    for (let c = 0; c < i; c++) {
      str = str + s[i].toLowerCase()
    };
    console.log(str);
    array.push(str)
    
  };
  console.log(array)
  return array.join("-");
}
