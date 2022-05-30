// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//p string
//r string
//e "www.codewars.com#about" --> "www.codewars.com"
//p

function removeUrlAnchor(url){
  // check index of #
  let index = url.indexOf('#')
  // remove # with slice if there is one and return
  if (index != -1) {
    return url.slice(0,index)
  } else {
    return url
  }
}

//best practice
function removeUrlAnchor(url){
  return url.split('#')[0]
}

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

//     Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//     Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 

//p arr
//r number
//e minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
//p

function minValue(values){
  // remove duplicates
  // sort new arr
  // return as number
  let num = [...new Set(values)].sort().join('')
  return Number(num)
}

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
function solve(s){
  //check how many are cap
  let capitalized = s.match(/[A-Z]/g) || 0
  //check how many are lower
  let loweracase = s.match(/[a-z]/g) || 0
  //compare
  //return all cap or lower based on higher number
  return capitalized.length > loweracase.length ? s.toUpperCase() : s.toLowerCase()
}

// Are the numbers in order?

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

function inAscOrder(arr) {
  let sortedArr = arr.slice().sort((a,b) => a-b)
  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] != arr[i]) return false
  }
   return true
 }


//  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) return -1
      
  let differenceLength = []
  for (word1 of a1) {
    for(word2 of a2){
      console.log(`${word1} vs ${word2}`)
      differenceLength.push(Math.abs(word1.length - word2.length))
      console.log(differenceLength)
    }
  }
  return Math.max(...differenceLength)
}