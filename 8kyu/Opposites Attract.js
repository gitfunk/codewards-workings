// https://www.codewars.com/kata/555086d53eac039a2a000083/javascript
// 8 kyu
// Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    // moment of truth
  }
// Determine if the flowers have odd or even petals. Use a modulus?
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love
// even + odd = love
// even + even = false
// odd + odd = false

function lovefunc(flower1, flower2){
  // moment of truth
  if (flower1 % 2 == 0 && flower2 % 2 == 1) {
    return true
  } else if (flower1 % 2 == 1 && flower2 % 2 == 0) {
    return true
  } else return false
}



// there are so many good solutions. Mine has way too much code.
// SteveRuble, greylined, McIceT, vertumnus, believeinalex, zvytas, dsddm, daveschoutens, user2892154, crazytim (plus 224 more warriors)
// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 == 1;
// }