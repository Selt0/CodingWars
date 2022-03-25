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


// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Example:

// evaporator(10, 10, 5) -> 29

// Note:

// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold){
  let days = 0
  let thresholdvalue = content * (threshold / 100)
  while (content > thresholdvalue){
    content = content - (content * (evap_per_day / 100))
    days ++
  }
  return days
}


// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
