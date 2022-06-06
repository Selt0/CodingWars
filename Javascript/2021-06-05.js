// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
  const bumpsLeft = 15

  let bumpsOnRoad = x.split('').filter(letter => letter == 'n').length
  return bumpsLeft < bumpsOnRoad ? "Car Dead" : "Woohoo!"
}

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    let string = ''
    let sum = 0
    if (count == 0) return '0=0'
    if (count < 0) return `${count}<0`
    for (let i = 0; i <= count; i++) {
      if (i == count) {
        sum += i
        string += `${i} = ${sum}`
      } else {
        sum += i
        string += `${i}+`
      }
    }
    return string
  };

  return SequenceSum;

})();

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

function partlist(arr) {
  let newArray
  let returnArray = []

  for (let i = 1; i < arr.length; i++) {
    newArray = []
    newArray.push(arr.slice(0, i).join(" "))
    newArray.push(arr.slice(i).join(" "))
    returnArray.push(newArray)
  }
  return returnArray
}


// Task

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.
function halvingSum(n) {
  let sum = 0
  while (n > 0) {
    sum += n
    n = Math.floor(n / 2)
  }
  return sum
}


// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  let filteredEven = array.filter(num => num % 2 == 0)
  filteredEven.reverse()
  return filteredEven.slice(0, number).reverse()
}

//best pracice
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
