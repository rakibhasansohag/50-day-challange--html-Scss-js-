'use strict';
console.log('working ....');

// task 1 make the bg blurry with setInterval

// point 1: this project is created by the reference of javascript map a rang of number to another range of numbers
const loadText = document.querySelector('.loadingText');

const bg = document.querySelector('.bg');

let load = 0;

let init = setInterval(blurring, 30);

function blurring() {
	load++;
	if (load > 99) {
		clearInterval(init);
	}
	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

	console.log(load);
}

// /  implementation of point 1 solution
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
