'use strict';
console.log('working ....');

// all the variables
const password = document.getElementById('password');
const background = document.getElementById('background');
const passwordInput = document.getElementById('password');

// event listener for the input field
password.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
});

// event listener for the button
document.getElementById('btn').addEventListener('click', () => {
	password.select();
	document.execCommand('copy');
	alert('Password copied to clipboard');
});

// point: Password strength function
function checkPasswordStrength(password) {
	const regexList = [
		/\d/, // Match a digit
		/[a-z]/, // Match a lowercase letter
		/[A-Z]/, // Match an uppercase letter
		/[^A-Za-z0-9]/, // Match a symbol
	];

	let strength = 0;
	regexList.forEach((regex) => {
		if (regex.test(password)) {
			strength++;
		}
	});

	if (password.length >= 8 && strength >= 3) {
		return 'strong';
	} else if (password.length >= 6 && strength >= 2) {
		return 'medium';
	} else {
		return 'weak';
	}
}

// point : Password Strength Checker
passwordInput.addEventListener('input', () => {
	const password = passwordInput.value;
	const passwordStrength = checkPasswordStrength(password);
	const feedbackElement = document.querySelector('.password-strength-feedback');
	feedbackElement.textContent = `Password strength: ${passwordStrength}`;
});
