// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}


// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
var number=function(array){
  return array.map((ele,i) => `${i+1}: ${ele}`)
}

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
function dontGiveMeFive(start, end){
  let range = []
  for (let i = start; i <= end; i++){
    let numString = i +''
    if(numString.indexOf('5') == -1){
      range.push(i)
    }
  }
  return range.length
}


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
function stray(numbers) {
  let unique = numbers.filter((x, i, a) => a.indexOf(x) == i)
  
  for (let i = 0; i < unique.length; i++){
   let count = 0
   for (let j  = 0; j < numbers.length; j++){
     if (numbers[j] == unique[i]) count++
     if (count > 1) break
   }
    if (count == 1) return unique[i]
  }
 
 }

 // best practice
 function stray(numbers){
  for (let i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}