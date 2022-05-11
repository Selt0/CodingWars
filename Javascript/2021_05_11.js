// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  let total = a + b
  let remainder = 0
  let binaryNum = []

  while (total > 0){
    remainder = total % 2
    total = Math.floor(total / 2)
    binaryNum.unshift(remainder)
  }
  return binaryNum.join('')
}

//best practice
function addBinary(a,b){
  return (a+b).toString(2)
}

// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8



// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"



//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//Examples:
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false



// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
