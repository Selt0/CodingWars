// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *

// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0
function triangular( n ) {
  if (n < 0) return 0
  return n*(n+1) / 2
}


// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.
function noOdds( values ){
  // Return all non-odd values
  return values.filter((item) => item % 2 == 0 )
}
