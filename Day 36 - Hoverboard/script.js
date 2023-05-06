'use strict';
console.log('working ....');

// point : all the variable

const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

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
