'use strict';
console.log('working...');

// point : all the variables
const calendar = document.querySelector('.calendar');
const date = document.querySelector('.date');
const daysContainer = document.querySelector('.days');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const todayBtn = document.querySelector('.today-btn');
const gotoBtn = document.querySelector('.goto-btn');
const dateInput = document.querySelector('.date-input');

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

//  point : add event listener to prev and next button
prev.addEventListener('click', prevMonth);
next.addEventListener('click', nextMonth);
// prev month
function prevMonth() {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	initCalendar();
}
// next month
function nextMonth() {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	initCalendar();
}

// point : add event listener to days
// daysContainer.addEventListener('click', (e) => {
// 	if (e.target.classList.contains('day')) {
// 		if (activeDay) {
// 			activeDay.classList.remove('active');
// 		}
// 		e.target.classList.add('active');
// 		activeDay = e.target;
// 	}
// });

// point : add event listener to today button
todayBtn.addEventListener('click', () => {
	month = today.getMonth();
	year = today.getFullYear();
	initCalendar();
	// console.log('today');
});

// point : add event listener to goto button
dateInput.addEventListener('input', (e) => {
	// point : allow only numbers
	dateInput.value = dateInput.value.replace(/[^0-9/]/g, '');
	// point : check if date is valid
	if (dateInput.value.length === 2) {
		dateInput.value += '/';
	}
	if (dateInput.value.length > 7) {
		dateInput.value = dateInput.value.slice(0, 7);
	}
	// point : if backspace pressed
	if (e.inputType === 'deleteContentBackward') {
		if (dateInput.value.length === 3) {
			dateInput.value = dateInput.value.slice(0, 2);
		}
	}
});

// point : function to go to date
gotoBtn.addEventListener('click', gotoDate);
function gotoDate() {
	const dateArr = dateInput.value.split('/');

	if (dateArr.length === 2) {
		if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
			month = dateArr[0] - 1;
			year = dateArr[1];
			initCalendar();
			return;
		}
	}
	// if invalid data
	alert('Invalid Date');
}

/// task for right part of the calendar
