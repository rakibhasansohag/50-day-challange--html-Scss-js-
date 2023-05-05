'use strict';
console.log('working ....');

// point : all the variables
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

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

// point : function for pause and play

function pauseAutoSlide() {
	clearInterval(interval);
}
function resumeAutoSlide() {
	interval = setInterval(run, 2000);
}
// / for pause
img1.addEventListener('mouseover', pauseAutoSlide);
img2.addEventListener('mouseover', pauseAutoSlide);
img3.addEventListener('mouseover', pauseAutoSlide);
img4.addEventListener('mouseover', pauseAutoSlide);
img5.addEventListener('mouseover', pauseAutoSlide);

// / for resume
img1.addEventListener('mouseout', resumeAutoSlide);
img2.addEventListener('mouseout', resumeAutoSlide);
img3.addEventListener('mouseout', resumeAutoSlide);
img4.addEventListener('mouseout', resumeAutoSlide);
img5.addEventListener('mouseout', resumeAutoSlide);

// point : function for keyboard
document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowRight') {
		id++;
		changeImage();
		resetInterval();
	} else if (e.key === 'ArrowLeft') {
		id--;
		changeImage();
		resetInterval();
	}
});
