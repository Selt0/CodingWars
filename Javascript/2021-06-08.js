// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// best pratice
function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n.toString().split('').reduce(function (acc, d) { return acc + +d; }, 0));
}


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  } else if (names.length == 0) {
    return 'no one likes this'
  } else if (names.length == 1) {
    return `${names[0]} likes this`
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    str = ''
    names.forEach(name => {
      if (name == names[names.length - 1]) {
        str += `and ${name} likes this`
      } else {
        str += `${name}, `
      }
    })
  }
  return str
}



// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function (n) {
  return dec2bin(n).split('').filter(bit => bit == 1).length
};

function dec2bin(dec) {
  return dec.toString(2);
}
