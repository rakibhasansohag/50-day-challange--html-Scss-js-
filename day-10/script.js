'use strict';
console.log('working ....');

// api for the project
const api = 'https://icanhazdadjoke.com';

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// using Fetch API
// const generateJoke = function () {
// 	const config = {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	};
// 	// using fetch
// 	fetch(api, config)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			jokeEl.innerHTML = data.joke;
// 		});
// };

// using Async Await
const generateJoke = async function () {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const res = await fetch(api, config);
	const data = await res.json();

	jokeEl.innerHTML = data.joke;
};

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
