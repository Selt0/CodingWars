// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
// Example: (Input1, Input2 --> Output)

// "a", 5 --> "aaaaa"
function repeater(string, n){
  return string.repeat(n)
}


// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.
function isSortedAndHow(array) {
  let order = array[0] < array[1] ? 'ascending' : 'descending'
  let prev = array[0]
  for (let i = 1; i < array.length; i++){
    if (prev <= array[i] && order == 'ascending'){
      prev = array[i]
    } else if ( prev >= array[i] && order == 'descending'){
      prev = array[i]
    } else {
      return 'no'
    }
  }

  return `yes, ${order}`
}

//best practice
function isSortedAndHow(arr){
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i-1]) ? 'yes, ascending' :
         arr.every((x, i) => i == 0 || arr[i] <= arr[i-1]) ? 'yes, descending' : 'no'
}


// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight){
   let leftSide = {
     w: 4,
     p: 3,
     b: 2,
     s: 1
   }

   let rightSide = {
      m: 4,
      q: 3,
      d: 2,
      z: 1
   }
   let leftSideScore = 0, rightSideScore = 0
   let strArr = fight.split('')

   strArr.forEach(letter => {
     if (letter in leftSide){
       leftSideScore += leftSide[letter]
     } else if(letter in rightSide){
       rightSideScore += rightSide[letter]
     }
   })

   if (leftSideScore > rightSideScore){
     return 'Left side wins!'
   } else if (rightSideScore > leftSideScore){
     return 'Right side wins!'
   } else {
     return 'Let\'s fight again!'
   }
}


// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
  let alphabet = [null, 'a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  let score = 0

  string.split('').forEach(letter => {
    score += alphabet.indexOf(letter)
  })
  return score
}


// best practice
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
