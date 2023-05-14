'use strict';
console.log('working ....');

// point : all the variables
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

// point : add event listener to open button
openBtn.addEventListener('click', () => {
	nav.forEach((navEl) => navEl.classList.add('visible'));
});

// point : add event listener to close button
closeBtn.addEventListener('click', () => {
	nav.forEach((navEl) => navEl.classList.remove('visible'));
});

//
