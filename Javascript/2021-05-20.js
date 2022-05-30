// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

//p fighter obj | fighter obj | first attacker
// fighter(name, health, dmg)
//r name of the winner
//e declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4)) => "Lew"
//p

function declareWinner(fighter1, fighter2, firstAttacker) {
  // loop until either first or second health is below 0
  while (fighter1. health > 0 && fighter2.health > 0){
    // grab first health and subtract second attacker dmg
    fighter1.health -= fighter2.damagePerAttack
  // grab second health and subtract first attacker dmg
    fighter2.health -= fighter1.damagePerAttack
  }
  if (fighter1.health <= 0 && fighter2.health <= 0){
    return firstAttacker
  } else if (fighter1.health <= 0){
    return fighter2.name
  } else {
    return fighter1.name
  }
}


// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
//     N is divisible by divisor
//     N is less than or equal to bound
//     N is greater than 0.

// Notes
//     The parameters (divisor, bound) passed to the function are only positive values .
//     It's guaranteed that a divisor is Found .
//     Input >> Output Examples

// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// maxMultiple (10,50)  ==> return (50)
// Explanation:
// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// maxMultiple (37,200) ==> return (185)
// Explanation:
// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
function maxMultiple(divisor, bound){
  for (let i = bound; i > 0; i--){
    if (i % divisor == 0) return i
  }
}

//best practice:
function maxMultiple2(divisor, bound){
  return bound-bound%divisor
}


// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
  let t = test.toLowerCase().split('').sort().join('')
  let o = original.toLowerCase().split('').sort().join('')
  return t==o
};

// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net
function solution(digits){
  let answer = 0
  for (let i = 0; i < digits.length; i++){
    let sequence = digits.substr(i ,5)
    if (Number(sequence) > answer ){
      answer = Number(sequence)
    }
  }
  return answer
}


// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
//     [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//     [output] a string

function reverseLetter(str) {
  return str.match(/[a-z]/g).reverse().join('')
}