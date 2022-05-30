// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:


// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// array of strings | array of strings
// a number, if negative, return 0
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
//

function checkExam(array1, array2) { 
  let score = 0
  // compare array1 i with array2 i
  for (let i = 0; i < array1.length; i++) {
  // add/subtrat to score | do nothing if blank
    if (array1[i] === array2[i]) {
      score += 4
    } else if (array2[i] === '') {
      continue
    } else {
      score--
    }
  }
  // return final score
  return score < 0 ? 0 : score
 }

//  In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

//p number | throw error if below 0 or above 12
//r number
//e factorial(5) => 120
//  factorial(0) => 1
//p

function factorial(n){
  if (n < 0 || n > 12){
    throw new RangeError('Must be between 0 and 12')
  }

  if (n == 1 || n == 0 ){
    return 1
  }

  return n * factorial(n-1)
}

// refactored
function factorial(n){
  if (n < 0 || n > 12) throw new RangeError()
  return n <= 1 ? 1 : n * factorial(n - 1)
}




// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// string
// array of index of capital letters
// capitals('CodEWaRs') => [0,3,4,6] 
//

var capitals = function (word) {
  //turn string into arr of letters
  let arr = word.split('')
  let capitalIndex = []
  //loop through letters marking capital letter
  for (let i = 0; i < arr.length; i++){
  //push index into arr
    if (arr[i] == arr[i].toUpperCase()){
      capitalIndex.push(i)
    }
  }
  //return arr
  return capitalIndex

};



// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

// number
// number
// sumDigits(10) => 1
// sumDigits(-35) => 8
//

function sumDigits(number) {
  number = Math.abs(number)

  numberString = String(number)

  return numberString.split('').reduce((a,b) => Number(a) + Number(b), 0)

}



// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// arr | num
// boolean
// smallEnough([66, 101], 200) =>  true
// smallEnough([1,2,3], 1) => false
//

function smallEnough(a, limit) {
  return a.every(num => num <= limit)
}

//clever
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}