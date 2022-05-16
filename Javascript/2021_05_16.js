// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

//P n (width) m (height)
//R number of breaks until 1x1
//E breakChocolate(2,1) => 1
//  breakChocolate(3,1) => 2
//  breakChocolate('hello') => 0
//P

function breakChocolate(n,m) {
  // counter
  let count = 0
  //check if n or m is a number
  if (typeof n != 'number' || typeof m != 'number') return  count
  return (n*m) -1 == -1 ? count : (n*m) -1 
}

// best practice
function breakChocolate2(n,m){
  return (n*m == 0) ? 0 : n * m - 1
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.

//P Number n (up to), Number d (number in question)
//R Number of times 'd' showed
//E nbDig( 5750, 0) => 4700
//  nbDig(10, 1) => 4
//  nbDig(25, 1) => 11
//P

function nbDig(n, d) {
  let count = 0
  let sqArr = []
  //loop up to n
  for (let i = 0; i <= n; i++){
    //sqaure each number as we loop
    //push into array
    sqArr.push(i * i)
  }

  //loop through array of numbers
  sqArr.forEach(ele => {
    // check every digit of number
    String(ele).split('').forEach(digit => {
    //if d is in number, increase count
      if (digit == d ) count++
    })
  })
  //return counter

  return count
}
