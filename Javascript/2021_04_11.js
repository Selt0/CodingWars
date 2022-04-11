// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){
 return Numnber(Array.from(String(n), Number).sort((a,b) => b - a).join(''))
}

// best practice solution
function descendingOrder1(n){
  return Number(String(n).split('').sort().reverse().join(''))
}


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l){
  return l.filter(item => Number.isInteger(item))
}


// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s){
  let accumString = '';
  let strArr = [...s]
  strArr.forEach((letter, i) => {
    for (let j = 0; j < i + 1; j++){
      if (j == 0)
        accumString += letter.toUpperCase()
      else
        accumString += letter.toLowerCase()  
    }
    if (i < strArr.length-1)
      accumString += '-'
  })
  return accumString
}

//best practice
function accum1(s){
  return s.split('').map((letter, i) => 
  (letter.toUpperCase() + letter.toLowerCase().repeat(i))).join('-')
}


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
 return this.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
}


// Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length))
}