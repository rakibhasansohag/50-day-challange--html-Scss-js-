'use strict';
console.log('working ....');

//  all the resource for the project
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// point 1: all the variable name for the html elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// task implementing the codes

// / for days
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
// / for months
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

// / for the toggle button
toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
});

// / for the time

function setTime() {
	const time = new Date();
	// console.log(time);
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360,
	)}deg)`;

	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360,
	)}deg)`;

	secondEl.style.transform = `translate(-50%, -100%)rotate(${scale(
		seconds,
		0,
		59,
		0,
		360,
	)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} <span class="ampm">${ampm}</span>`;

	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

	// to fix the bug on dark mode
}

// Call the function to update the clock every second
setInterval(setTime, 1000);
