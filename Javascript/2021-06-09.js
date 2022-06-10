
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
