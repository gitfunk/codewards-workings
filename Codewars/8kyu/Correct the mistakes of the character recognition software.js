// 8 kyu
// Correct the mistakes of the character recognition software
// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	// your code here
}

//Test cases
assert.strictEqual(correct("L0ND0N"),"LONDON");
assert.strictEqual(correct("DUBL1N"),"DUBLIN");
assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
assert.strictEqual(correct("PAR15"),"PARIS");


// My attempts:
// MDN has a replace() option to replace characters in strings. This can also be a regex. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function correct(string)
{
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
} // this was accepted. and also matched the top solution woo!


// Alternate solutions:
const corrections = {
  '5': 'S',
  '0': 'O',
  '1': 'I',
};

const correct = string => (
  string.replace(/[501]/g, character => corrections[character])
);
// i don't understand how the arrow function works in this solution
// i suppose character is being created as a new var/let and is being passed a lookup table in the const corrections, then the [501] brackets only matches one of the characters
