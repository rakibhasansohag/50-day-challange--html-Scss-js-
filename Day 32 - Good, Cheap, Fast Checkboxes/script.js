'use strict';
console.log('working ....');

// point : declaration all the variables

const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
const resetBtn = document.querySelector('.reset');
const summery = document.querySelector('#summery');

// point : function to check the toggle
function doTheTrick(theClickedOne) {
	if (good.checked && cheap.checked && fast.checked) {
		if (good === theClickedOne) {
			fast.checked = false;
		}
		if (cheap === theClickedOne) {
			good.checked = false;
		}
		if (fast === theClickedOne) {
			cheap.checked = false;
		}
	}
}

// point : event listener
toggles.forEach((toggle) =>
	toggle.addEventListener('change', (e) => doTheTrick(e.target)),
);

// point : add reset button to reset all the toggles
resetBtn.addEventListener('click', () => {
	toggles.forEach((toggle) => {
		toggle.checked = false;
		toggle.nextElementSibling.classList.remove('is-checked');
		summery.innerText = 'You Chose Reset';
	});
});

// point : for the summery of the project
function updateSummary() {
	const choices = [];
	if (good.checked) {
		choices.push('Good');
	}
	if (cheap.checked) {
		choices.push('Cheap');
	}
	if (fast.checked) {
		choices.push('Fast');
	}
	summery.innerText = `You Chose ${choices.join(', ')}`;
}

toggles.forEach((toggle) => {
	toggle.addEventListener('change', () => {
		doTheTrick(toggle);
		updateSummary();
	});
});

updateSummary();
