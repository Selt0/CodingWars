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
