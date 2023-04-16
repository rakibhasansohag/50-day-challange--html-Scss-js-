'use strict';
console.log('working ....');

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

const remained = document.querySelector('.remained');

smallCups.forEach((cup, id) => {
	cup.addEventListener('click', () => highlightCups(id));
});

function highlightCups(id) {
	if (
		smallCups[id].classList.contains('full') &&
		!smallCups[id].nextElementSibling.classList.contains('full')
	) {
		id--;
	}

	// console.log(id);
	smallCups.forEach((cup, id2) => {
		if (id2 <= id) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
}
