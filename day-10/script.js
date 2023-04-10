'use strict';
console.log('working ....');

// api for the project
const api = 'https://icanhazdadjoke.com';

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = function () {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};
	fetch(api, config)
		.then((res) => res.json())
		.then((data) => {
			jokeEl.innerHTML = data.joke;
		});
};
generateJoke();

jokeBtn.addEventListener('click', generateJoke);
