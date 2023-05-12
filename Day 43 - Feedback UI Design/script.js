'use strict';
console.log('working ....');

// point : all the variables

const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
const ratingsContainer = document.querySelector('.ratings-container');
let selectedRating = 'Satisfied';

// point  : event listener
ratingsContainer.addEventListener('click', (e) => {
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive();
		e.target.parentNode.classList.add('active');
		selectedRating = e.target.nextElementSibling.innerHTML;
		console.log(selectedRating);
	}
});

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active');
	}
}

sendBtn.addEventListener('click', (e) => {
	panel.innerHTML = `
		<i class="fas fa-heart"></i>
		<strong>Thank You!</strong>
		<br>
		<strong>Feedback: ${selectedRating}</strong>
		<br>
		<p>We'll use your feedback to improve my work Flow</p>
	`;
});
