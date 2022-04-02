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
