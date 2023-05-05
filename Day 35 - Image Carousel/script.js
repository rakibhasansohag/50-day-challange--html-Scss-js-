'use strict';
console.log('working ....');

// point : all the variables
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');

// point : all the functionality

let id = 0;
let interval = setInterval(run, 2000);
function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

// point : all the functions
function run() {
	id++;

	changeImage();
}

function changeImage() {
	if (id > img.length - 1) {
		id = 0;
	} else if (id < 0) {
		id = img.length - 1;
	}

	imgs.style.transform = `translateX(${-id * 700}px)`; // / : 700px is the width of the image
}

// point : all the event listeners
rightBtn.addEventListener('click', () => {
	id++;
	changeImage();
	resetInterval();
});

leftBtn.addEventListener('click', () => {
	id--;
	changeImage();
	resetInterval();
});
