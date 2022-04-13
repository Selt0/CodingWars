// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str){
  let strArr = str.split('')
  let xLength = strArr.filter(letter => letter.toLowerCase() == 'x').length
  let oLength = strArr.filter(letter => letter.toLowerCase() == 'o').length
  return xLength == oLength
}


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
 for (let i = 0; i < str.length; i++){
   for (let j = i+1; j < str.length; j++){
    if (str[i].toLowerCase() == str[j].toLowerCase())
      return false
   }
 }
 return true
}

// best practice 
function isIsogram2(str){
  return new Set(str.toUpperCase()).size == str.length
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
  let start, end, sum = 0
  if (a > b){
    start = b
    end = a
  } else {
    start = a
    end = b
  }  

  for(let i = start; i <= end; i++ ){
    sum += i
    console.log(sum)
  }
  return sum
}

//best practice
function getSum2(a, b){
  let min = Math.min(a, b),
      max = Math.max(a, b)

  return (max - min + 1) * (min + max) / 2
}


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  let lowest = Math.min(...numbers)
  numbers.splice(numbers.indexOf(lowest),1)
  let secondLowest = Math.min(...numbers)
  return lowest + secondLowest
}

//best practice
function sumTwoSmallestNumbers2(numbers){
  numbers = numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1]
}


// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"  --> "####################################man!"

function maskify(cc) {
  let masked = ''
  for (let i = 0; i < cc.length - 4; i++){
    masked += '#'
  }

  return masked += cc.slice(-4)
}

//best practice 
function maskify2(cc){
  return cc.slice(0, -4).replcae(/./g, '#') + cc.slice(-4)
}