'use strict';
console.log('working ....');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', (e) =>
	container.classList.add('hover-left'),
);

right.addEventListener('mouseenter', (e) =>
	container.classList.add('hover-right'),
);

left.addEventListener('mouseleave', (e) =>
	container.classList.remove('hover-left'),
);

right.addEventListener('mouseleave', (e) =>
	container.classList.remove('hover-right'),
);
