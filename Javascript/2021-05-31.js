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
