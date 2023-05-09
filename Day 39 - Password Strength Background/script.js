'use strict';
console.log('working ....');

// all the variables
const password = document.getElementById('password');
const background = document.getElementById('background');

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
