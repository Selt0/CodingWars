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

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {
  let sum = 0
  arr.forEach(arr => sum += Math.min(...arr))
  return sum
}


//best practice
function sumOfMinimums2(arr){
  return arr.reduce((init, currVal) => init + Math.min(...currVal), 0)
}

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

//p array of numbers
//r array of two numbers
//e rowWeights([13, 27, 49])  ==>  return (62, 27)
//p

function rowWeights(array){
  let weight1 = []
  let weight2 = []

  array.forEach((num, ind) => {
    ind % 2 == 0 ? weight1.push(num) : weight2.push(num)
  })

  return [weight1.reduce((init, curr) => init + curr, 0),
    weight2.reduce((init, curr) => init + curr, 0)]
}


// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
function flattenAndSort(array) {
 let sortedArr = []

 array.forEach(arr => sortedArr = sortedArr.concat(arr))

 return sortedArr.sort((a, b) => a - b)
}

// best practice
function flattenAndSort1(arr) {
  return [].concat(...arr).sort((a,b) => a -b)
}
