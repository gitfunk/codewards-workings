
# 7 kyu Reverse words
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

## INSTRUCTIONS
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

### Examples
```
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```

## SOLUTION
```
function reverseWords(str) {
  // Go for it
  return str.reverse()
}
```

## My working
I could split out the string into an array of words, then reverse each word, then join the array back to a string. But i'm not sure how i'll save double spaces.

split("").reverse().join("") will reverse a full string. 

To reverse each words i need to split 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

### My solution
```
function reverseWords(str) {
  console.log(str) 
  const newStr = str.split(" ").map((e) => e.split("").reverse().join("")).join(" ")
  console.log(newStr)
  return newStr
}
```


## Other Solutions

### Solution #1

Basically the same solution I came up with. 
```
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
```

### Solution #2

Much more elegant

```
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
```