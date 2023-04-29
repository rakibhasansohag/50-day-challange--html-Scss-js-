'use strict';
console.log('working ....');

// point all the variables
const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('.times');

// create a variable to store the click times
let clickTime = 0;

// create a variable to store the times
let timesClicked = 0;

// create a variable to store the double click
let doubleClick = false;

// create a function to handle the click
loveMe.addEventListener('click', (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime();
		// console.log(clickTime);/// for test
	} else {
		if (new Date().getTime() - clickTime < 800) {
			createHeart(e);
			clickTime = 0;
			doubleClick = true;
			console.log(doubleClick); /// for test
		} else {
			clickTime = new Date().getTime();
		}
	}
});

// create a function to handle the heart
const createHeart = (e) => {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');

	// get the x and y coordinates
	const x = e.clientX;
	const y = e.clientY;
	// console.log(x,y) /// for test

	// get the top and left offset
	const leftOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;

	// get the x and y inside the loveMe
	const xInside = x - leftOffset;
	const yInside = y - topOffset;

	// set the style for the heart
	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	loveMe.appendChild(heart);
	times.innerHTML = ++timesClicked;

	// remove the heart after 1 second
	setTimeout(() => heart.remove(), 1000);
};
