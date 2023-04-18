'use strict';
console.log('working ....');

const body = document.body;
const slides = document.querySelectorAll('.slide');
const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');

// Set the first slide to be active initially
slides[0].classList.add('active');

// Set the active slide to 0 initially
let activeSlide = 0;

rightBtn.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});

leftBtn.addEventListener('click', () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
});

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	for (let i = 0; i < slides.length; i++) {
		if (i === activeSlide) {
			slides[i].classList.add('active');
		} else {
			slides[i].classList.remove('active');
		}
	}
}
