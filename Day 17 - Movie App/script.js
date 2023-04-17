'use strict';
console.log('working ....');

const apiKey = '930ef87935b15c37f17e429d16d4dc9c';

const movieApi = 'https://enigmatic-falls-21769.herokuapp.com/movie';
const tvSeriesApi =
	' https://enigmatic-falls-21769.herokuapp.com/tvserisupload';

const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=930ef87935b15c37f17e429d16d4dc9c&page=1`;

const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi =
	'https://api.themoviedb.org/3/search/movie?api_key=930ef87935b15c37f17e429d16d4dc9c&query="';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// getting the movie from the Api
getMovies(apiUrl);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	// console.log(data.results);
	showMovies(data.results);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTeam = search.value;
	if (searchTeam && searchTeam !== '') {
		getMovies(searchApi + searchTeam);
		search.value = '';
		console.log(searchTeam);
	} else {
		window.location.reload();
	}
});

function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement('div');

		movieEl.classList.add('movie');
		movieEl.innerHTML = `
			
		
			<img src=${imgPath + poster_path} alt=${title}>
			<div class="movie-info">
				<h3>${title}</h3>
				<span class="${getClassByRate(vote_average)}">${vote_average}</span>
			</div>
			<div class="overview">
				<h3>Overview</h3>
				<p>${overview}</p>
			</div>
	


		`;

		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'yellow';
	} else {
		return 'red';
	}
}
