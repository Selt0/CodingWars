// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!

//p Number Number String
//r result(Number) of two numbers and operator
//e 5, 2, "add"      --> 7
//   5, 2, "subtract" --> 3
//p

function arithmetic(a, b, operator){
  switch (operator) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
  }
}

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//p array of numbers
//r index of number
//e gimme([2, 3, 1]) => 0
//  gimme([5, 10, 14]) => 1
//p

function gimme (triplet) {
  // sort the arr & grab the middle index
  let middle = triplet.slice().sort((a,b) => a - b, 0)[1]
  //find index from original arr and return it
  return triplet.indexOf(middle)
}


// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

//p number number number
//r number => sum of increment
//e 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
//p

const sequenceSum = (begin, end, step) => {
  // increment
  let sum = 0
  for ( let i = begin; i <= end; i += step) {
    //add
    sum += i
  }
  return sum
};


// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

//p array of numbers
//r array of two numbers, highest
//e twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
//p

function twoOldestAges(ages){
  let sorted = ages.slice().sort((a,b) => a - b, 0)
  return sorted.slice(-2)
}

console.log(twoOldestAges([1,5,87,45,8,8]))