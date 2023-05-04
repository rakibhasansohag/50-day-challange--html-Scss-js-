'use strict';
console.log('working ....');

// point : all the variable
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

// point for the animation
runAnimation();

function runAnimation() {
	nums.forEach((num, id) => {
		const nextToLast = nums.length - 1;
		num.addEventListener('animationend', (e) => {
			if (e.animationName === 'goIn' && id !== nextToLast) {
				num.classList.remove('in');
				num.classList.add('out');
			} else if (e.animationName === 'goOut' && num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				finalMessage.classList.add('show');
			}
		});
	});
}

//point : for the replay button
function replayBtn() {
	counter.classList.remove('hide');
	finalMessage.classList.remove('show');
	nums.forEach((num) => {
		num.classList.value = '';
	});
	nums[0].classList.add('in');
}

replay.addEventListener('click', () => {
	replayBtn();
	runAnimation();
});
