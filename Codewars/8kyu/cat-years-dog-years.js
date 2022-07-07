// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
// 8 kyu
// Cat years, Dog years


// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// [15,9,4]
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// [15,9,5]
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

// describe("Example Tests", function() {

//   it("one", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//   });

//   it("two", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//   });

//   it("ten", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//   });

// });


var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = function(humanYears) {
    for (let i = 1; i < humanYears; i++) {
      if (humanYears === 1){
        catYears += 15
      } else if (humanYears === 2) {
        catYears += 9
      } else if (humanYears >= 3) {
        catYears += 4
      }        
    }
  }
  let dogYears = function(humanYears) {
    for (let i = 1; i < humanYears; i++) {
      if (humanYears === 1){
        dogYears += 15
      } else if (humanYears === 2) {
        dogYears += 9
      } else if (humanYears >= 3) {
        dogYears += 4
      }        
    }
  }

  return [humanYears,catYears,dogYears];
}
// errors :(





  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears = 0;
    let dogYears = 0;

    for (let i = 1; i <= humanYears; i++) {
      if (humanYears === 1){
        catYears = 15
        dogYears = 15
      } else if (humanYears === 2) {
        catYears += 9
        dogYears += 9
      } else if (humanYears >= 3) {
        catYears += 4
        dogYears += 4
      }
      console.log(humanYears, catYears, dogYears)
    };
  
    return [humanYears,catYears,dogYears];
  }
// test 1 works, but test 2 and 3 fail
  
  

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i < 2){
      catYears = 15
      dogYears = 15
    } else if (i === 2) {
      catYears += 9
      dogYears += 9
    } else if (i >= 3) {
      catYears += 4
      dogYears += 5
    }
    console.log(humanYears, catYears, dogYears)
  };

  return [humanYears,catYears,dogYears];
}
// passed. But i don't understand why using the input variable doesnt' work. 