// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//p string
//r array of strings
//e capitalize(hello) => [HeLlO, hElLo]
//p

function capitalize(s){
  let sArr = s.split('')
  let capArr = []

  capArr.push(sArr.map((letter, ind) => {
    return ind % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
  }).join(''))
  capArr.push(sArr.map((letter, ind) => {
     return ind % 2 == 0 ? letter.toLowerCase() : letter.toUpperCase()
  }).join(''))

  return capArr
};


// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'
function removeDuplicateWords (s) {
  let words = s.split(' ')
  return [...new Set(words)].join(' ')
}
