'use strict';
console.log('working ....');

//  all the variables
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// text to be displayed
const text = 'Hello , I am a web developer';

// function to display the text
let id = 1;
let speed = 300 / speedEl.value;

function writeText() {
	textEl.innerText = text.slice(0, id);
	id++;

	if (id > text.length) {
		id = 1;
	}
	setTimeout(writeText, speed); // recursive function
}

writeText();

// event listener for speed
speedEl.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
});
