// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  let numberOfPeopleOn = 0
  busStops.forEach(stop => {
    
    numberOfPeopleOn += stop[0]
    numberOfPeopleOn -= stop[1]
    
    if (numberOfPeopleOn < 0) numberOfPeopleOn = 0
  })
  return numberOfPeopleOn
}

//best pratice
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors(integer) {
  let divisors = []
  for (let i = 2; i <= integer; i++){
    if(integer % i == 0 && i != integer) divisors.push(i)
  }
  if (divisors.length == 0) return `${integer} is prime`
  return divisors
};

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
function oddOrEven(array) {
  let sum = array.reduce((a,b) => a + b, 0)
  return sum % 2 == 0 ? 'even' : 'odd'
}

// Your task is to write a function which returns the sum of following series upto nth term(parameter)
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
//     You need to round the answer to 2 decimal places and return it as String.
//     If the given value is 0 then it should return 0.00
//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
  if (n == 0) return Number(0).toFixed(2)
  let arr = [1]
  let x  = 4

  for (let i = n-1; i > 0; i--){
    arr.push(1/x)
    x+=3
  }
    return arr.reduce((a,b) => a + b, 0).toFixed(2)    
 }

 //best practice
 function SeriesSum2(n) {
  for (let s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers) {
  if (numbers.length == 0) return []
  let smallest = numbers[0]
  for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < smallest) smallest = numbers[i]
  }
  
  let arrCopy = numbers.slice()
  arrCopy.splice(arrCopy.indexOf(smallest),1)
  return arrCopy
}