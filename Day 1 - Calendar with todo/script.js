'use strict';
console.log('working...');

// point : all the variables
const calendar = document.querySelector('.calendar');
const date = document.querySelector('.date');
const daysContainer = document.querySelector('.days');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// point :
let today = new Date();
console.log(today);
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

// point : function to add days
function initCalendar() {
	// to get prev months days and current month all days and next months days
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const prevLastDay = new Date(year, month, 0);
	const prevDays = prevLastDay.getDate();
	const lastDate = lastDay.getDate();
	const day = firstDay.getDay();
	const nextDays = 7 - lastDay.getDay() - 1;

	// point : update date top of the calendar
	date.innerHTML = months[month] + ' ' + year;

	// point : add days on dom

	let days = '';
	// point : add prev months days
	for (let i = day; i > 0; i--) {
		days += `<div class="day prev-date">${prevDays - i + 1}</div>`;
	}

	// point : add current months days
	for (let i = 1; i <= lastDate; i++) {
		// point : add active class to current day

		if (
			i === today.getDate() &&
			month === today.getMonth() &&
			year === today.getFullYear()
		) {
			days += `<div class="day today ">${i}</div>`;
		} else {
			days += `<div class="day">${i}</div>`;
		}
	}

	// point : add next months days
	for (let i = 1; i <= nextDays; i++) {
		days += `<div class="day next-date">${i}</div>`;
	}

	daysContainer.innerHTML = days;
}

initCalendar();




