'use strict';
console.log('working ....');

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.querySelector('.remained');

updateCUp();

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
	updateCUp();
}

function updateCUp() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;

	const totalCups = smallCups.length;
	if (fullCups === 0) {
		percentage.style.display = 'none';
		percentage.style.height = 0;
	} else {
		percentage.style.display = 'block';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
