
//
// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript
//

function fakeBin(x){
  let newX = x.replace(/\d/g, function(d){return d < 5 ? 0 : 1})
  return newX
}


function fakeBin(x){
  return x.replace(/\d/g, d => d < 5 ? 0 : 1)
 }


//
//  Dentzil, EnigmaWasp, icyfire, gabbek, nam.nguyen.code, ctoppel, user156333, daphne, Pira, jonwallsten (plus 355 more warriors)
//  function fakeBin(x) {
//      return x.split('').map(n => n < 5 ? 0 : 1).join('');
//  }
//