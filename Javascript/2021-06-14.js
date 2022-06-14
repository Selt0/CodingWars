// Description:

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
	if (words === '') return ''

	words = words.split(' ')
	let wordsCopy = [...words]

	words.forEach(word => {
		let index = word.match(/\d/).join('')
		wordsCopy[index - 1] = word
	})

	return wordsCopy.join(' ')
}

//best practice
function order(words) {
	return words
		.split(' ')
		.sort((a, b) => a.match(/\d/) - b.match(/\d/))
		.join(' ')
}

// Description:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
	let counter = 0
	while (String(num).length != 1) {
		num = String(num)
			.split('')
			.reduce((prev, curr) => Number(prev) * Number(curr))
		counter++
	}
	return counter
}
