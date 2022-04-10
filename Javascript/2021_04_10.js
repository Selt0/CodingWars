// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ['a','e','i','o','u']
  return [...str].filter( letter => vowels.includes(letter)).length
}


// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  //save vowels
  let vowels = 'aeiou'

  return str
    //split sentence into letters
    .split('')
    //remove each letter that's a vowel
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    //put sentence back together
    .join('')
}

//best practice solution
function disemvowel(str){
  return str.replcae(/[aeiou]/gi, '')
}


// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
function squareDigits(num){
  return Number(String(num).split('').map(x => x*x).join(''))
}


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5");   return "5 1"
// highAndLow("1 2 -3 4 5");  return "5 -3"
// highAndLow("1 9 3 4 -5");  return "9 -5"
function highAndLow(numbers){
  let minMax = []
  // convert string to array of number
  let numArr = numbers.split(' ').map(x => Number(x))
  // use min max function and save values to new array
  minMax.push(Math.max(...numArr))
  minMax.push(Math.min(...numArr))
  // turn new array back to string
  return minMax.join(' ')
}

//best practice solution
function highandlow2(numbers){
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}



// // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// getMiddle("test") should return "es"

// getMiddle("testing") should return "t"

// getMiddle("middle") should return "dd"

// getMiddle("A") should return "A"

function getMiddle(s){
  //grab middle
  let middle = s.length/2
  //if length is odd return middle
  if (s.length % 2)
    return s[Math.floor(middle)]
  //else if even return middle 2 char
  else
    return s.slice(middle-1, middle+1)
}

//best practice solution
function getMiddle2(s){
  let middle = s.length / 2
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1)
}