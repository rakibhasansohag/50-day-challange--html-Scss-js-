'use strict';
console.log('working ....');

const tagsEl = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
	createTagsFunction(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		randomSelectFunction();
	}
});

// creating tags
function createTagsFunction(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());
	// console.log(tags);
	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}
// for random selection
function randomSelectFunction() {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTagFunction();
		highlightTagFunction(randomTag);
		setTimeout(() => {
			unHighlightTagFunction(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTagFunction();
			highlightTagFunction(randomTag);
		}, 100);
	}, times * 100);
}

// random tag picker
function pickRandomTagFunction() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

// random highlight tag
function highlightTagFunction(tag) {
	tag.classList.add('highlight');
}

function unHighlightTagFunction(tag) {
	tag.classList.remove('highlight');
}
