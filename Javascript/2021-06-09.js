
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const duplicates = duplicatedLetters(word)
  let newString = ''

  word.split('').forEach(letter => {
    duplicates.includes(letter.toLowerCase()) ? newString += ')' : newString += '('
  })

  return newString
}


function duplicatedLetters(word) {
  const letters = word.split('').map(letter => letter.toLowerCase())
  const duplicates = letters.filter((letter, index) => letters.indexOf(letter) !== index)
  return duplicates
}


// best practice

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((letter, index, arr) => arr.indexOf(letter) == arr.lastIndexOf(letter) ? '(' : ')')
    .join('')
}


function findDuplicates(word) {
  const duplicates = word.toLowerCase().split('').filter((letter, index, arr) => arr.indexOf(letter) != index)
  return [...new Set(duplicates)]
}



// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(word) {
  const duplicates = word.toLowerCase().split('').filter((letter, index, arr) => arr.indexOf(letter) != index)

  return [...new Set(duplicates)].length
}


// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


function isValidWalk(walk) {
  let startingPoint = [0, 0]

  walk.forEach(direction => {
    switch (direction) {
      case 'n':
        startingPoint[0]++
        break
      case 'e':
        startingPoint[1]++
        break
      case 's':
        startingPoint[0]--
        break
      default:
        startingPoint[1]--
    }
  })

  return (startingPoint[0] == 0 && startingPoint[1] == 0 && walk.length == 10)
}
