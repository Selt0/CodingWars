// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 == 0)
}

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let totalSum = 0
  for(let i = 0; i < arguments.length; i++){
    totalSum += arguments[i]**2
  }
  let sqrt = Math.sqrt(totalSum)
  return Math.floor(sqrt / 2)
}

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  let newNum = String(n).split('')
  if (n < 0){
    newNum.reverse()
    let neg = newNum.pop()
    newNum.unshift(neg)
    return parseInt(newNum.join(''))
  } else {
    return Number(newNum.reverse().join(''))
  }
}

//best pratice
function reverseNumber(n){
  let isNegative = n < 0
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('')
  let result = Number(reverseAsString)
  return isNegative ? -result : result
}

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array){
  let longest = 0
  let longestLength = 0
  array.forEach(num => {
    if (String(num).length > longestLength){
      longest = num
      longestLength = String(num).length
    }
  })

  return longest
}


// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

//     Vertical mirror: vert_mirror (or vertMirror or vert-mirror)

//     vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

//     Horizontal mirror: hor_mirror (or horMirror or hor-mirror)

//      hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:

// vertical mirror   |horizontal mirror
// abcd --> dcba     |abcd --> mnop
// efgh     hgfe     |efgh     ijkl
// ijkl     lkji     |ijkl     efgh
// mnop     ponm     |mnop     abcd

// Task:

//     Write these two functions

// and

//     high-order function oper(fct, s) where

//     fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:

// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

function vertMirror(strng) {
  let str = ''
  let arr = []
  for(let i = 0; i < strng.length; i++){

    if (strng[i] == '\n'){
      arr.push(str)
      str = ''
    } else {
      str += strng[i]
      if (i == strng.length-1){
        arr.push(str)
      }
    }
  }
  return arr.map(word => word.split('').reverse().join('')).join('\n')

}

function horMirror(strng) {
  return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
  return fct(s)
}
