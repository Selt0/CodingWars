// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(num) {
  let sum = 0

  for (let i = 0; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum
}

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  let obj = {}
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1
  }

  const filteredOdd = Object.entries(obj).filter(([key, value]) => value % 2 == 0)

  console.log(filteredOdd)
  // create an object {item: numOfTimes}
  // grab the element with odd numOfTimes
}

function findOdd(arr) {
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value % 2 != 0) return Number(key)
  }
}

// best practice
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  return string.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word
    }
  }).join(' ')
}
