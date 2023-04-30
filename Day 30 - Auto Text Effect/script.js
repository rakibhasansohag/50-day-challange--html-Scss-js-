'use strict';
console.log('working ....');

//  all the variables
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// text to be displayed
const texts = [
	'Hello , I am a web developer',
	'And My Name Is Rakib Hasan Sohag',
	'I love to code',
	'I am Passionate about coding',
	'I am a self taught developer',
	'And  I am still learning',
];

// function to display the text
let id = 1;
let speed = 100 / speedEl.value;

// new features
let textIndex = 0;
let text = texts[textIndex];

// function to write the text
function writeText() {
	textEl.innerText = text.slice(0, id);
	id++;

	if (id > text.length) {
		id = 1;
		textIndex++;
		if (textIndex > texts.length - 1) {
			textIndex = 0;
		}
		text = texts[textIndex];
	}
	setTimeout(writeText, speed); // recursive function
}

writeText();

// event listener for speed
speedEl.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
});
