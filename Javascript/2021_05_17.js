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
  let middle = triplet.sort((a,b) => a - b, 0)[1]
  //find index from original arr and return it
  return triplet.indexOf(middle)
}

gimme([-40, -3, -11])