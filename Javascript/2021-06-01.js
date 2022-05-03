// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
  let sum = 0
  for(let i = 0; i <= n; i++){
    sum += i * ((i + 1) / 2)
  }
  return sum
}

// best practice
function sumTriangularNumbers(n) {
  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}


// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.
function largestPairSum (numbers) {
  let numSorted = [...numbers].sort((a,b) => b - a)
  return numSorted[0] + numSorted[1]
}


// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)
function vowelIndices(word){
  let vowels = 'aeiou'
  let vowelIndex = []
  for (let i =0; i < word.length; i++){
    if (vowels.includes(word[i])){
      vowelIndex.push(i + 1)
    }
  }

  return vowelIndex
}


// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Notes

//     Array/list size is at least 2.

//     Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples

// adjacentElementsProduct([1, 2, 3]); ==> return 6

// Explanation:

//     The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

//     adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

//     Explanation:

// Max product obtained from multiplying 5 * 10 = 50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

// Explanation:

//     The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
