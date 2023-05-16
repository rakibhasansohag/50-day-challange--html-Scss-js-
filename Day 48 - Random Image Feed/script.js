'use strict';
console.log('working ....');

// point: all the variables
const container = document.querySelector('.container');
const unsplashUrl = 'https://source.unsplash.com/user/wsanter/';
const rows = 10;

// point: all the functions

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img');
	img.src = `${unsplashUrl}${getRandomSize()}`;
	container.appendChild(img);
}

function getRandomSize() {
	return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 300;
}

// point: all the event listeners
