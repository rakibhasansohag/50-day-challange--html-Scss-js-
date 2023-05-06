'use strict';
console.log('working ....');

// point : all the variable

const container = document.querySelector('.container');
const colors = ['#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c', '#c7ecee'];
const SQUARES = 500;
const colorPicker = document.querySelector('#color-picker');

// point : all the function
for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseout', () => removeColor(square));

	container.appendChild(square);
}

// point set color
function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// point remove color
function removeColor(element) {
	element.style.background = '#1d1d1d'; /// primary color
	element.style.boxShadow = '0 0 2px #000'; /// primary shadow
}

// point : get random color
function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

// point : color picker
colorPicker.addEventListener('change', (e) => {
	container.querySelectorAll('.square').forEach((square) => {
		square.style.background = e.target.value;
		square.style.boxShadow = `0 0 2px ${e.target.value}, 0 0 10px ${e.target.value}`;
	});
});
