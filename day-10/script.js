'use strict';
console.log('working ....');

// api for the project
const api = 'https://icanhazdadjoke.com';

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const applause = new Audio('/sound/applause.mp3');
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
	// setTimeout(() => {
	// 	applause.play();

	// 	// setTimeout(() => {
	// 	// 	applause.pause();
	// 	// 	applause.currentTime = 0;
	// 	// }, 3000);
	// }, 4000);
};

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
jokeBtn.addEventListener('click', function () {
	setTimeout(() => {
		applause.play();
		setTimeout(() => {
			applause.pause();
			applause.currentTime = 0;
		}, 3000);
	}, 3000);
});
