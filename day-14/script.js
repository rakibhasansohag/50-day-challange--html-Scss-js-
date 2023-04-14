'use strict';
console.log('working ....');

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
	nav.classList.toggle('active');
});
