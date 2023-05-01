'use strict';
console.log('working ....');

// point String.fromCharCode() to the String object
// point Using ASCII code to convert to character

// point all the variables
const resultEl = document.querySelector('.result');
const lengthEl = document.querySelector('#length');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const generateEl = document.querySelector('#generate');
const clipboardEl = document.querySelector('#clipboard');

// point for random password
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

// point generate event listener
generateEl.addEventListener('click', () => {
	const length = +lengthEl.value; /// + is to convert string to number
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	// console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);
	resultEl.classList.add('fade-in');
	resultEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length,
	);
});

// point for generate password function
function generatePassword(lower, upper, number, symbol, length) {
	// point 1. Init pw var
	// point 2. Filter out unchecked types
	// point 3. Loop over length call generator function for each type
	// point 4. Add final pw to the pw var and return

	let generatedPassword = '';

	const typesCount = lower + upper + number + symbol;

	// console.log('typesCount: ', typesCount);

	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0],
	);

	// console.log('typesArr: ', typesArr);

	if (typesCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];

			// console.log('funcName: ', funcName);

			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

// point copy password to clipboard
clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard!');
});

// point get random for lower case
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// point get random for upper case
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// point get random for number
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// point get random for symbol
function getRandomSymbol() {
	return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
// / another way to get the symbol
// function getRandomSymbol() {
// 	const symbols = '!@#$%^&*(){}[]=<>/,.';
// 	return symbols[Math.floor(Math.random() * symbols.length)];
//}

// console.log(getRandomLower());/// test codes
// console.log(getRandomUpper());/// test codes
// console.log(getRandomNumber()); /// test codes
console.log(getRandomSymbol()); /// test codes
