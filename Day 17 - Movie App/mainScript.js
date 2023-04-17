'use strict';
console.log('working ....');

const apiKey = '930ef87935b15c37f17e429d16d4dc9c';

const movieApi = 'https://enigmatic-falls-21769.herokuapp.com/movie';
const tvSeriesApi =
	' https://enigmatic-falls-21769.herokuapp.com/tvserisupload';

const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1`;

const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi =
	'https://api.themoviedb.org/3/search/movie?api_key=930ef87935b15c37f17e429d16d4dc9c&query="';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const paginationEl = document.querySelector('.pagination');

// getting the movie from the Api

// getting the movie from the Api

getMovies(apiUrl);
search.focus();
async function fetchData(page) {
	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
	getMovies(url);
}

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	showMovies(data.results);

	// Get pagination buttons
	const totalPages = data.total_pages;
	const currentPage = data.page;

	const pageNumbersEl = document.querySelector('.page-numbers');
	pageNumbersEl.innerHTML = '';

	// Add previous and next buttons
	const prevBtn = document.createElement('button');
	prevBtn.innerText = 'Prev';
	prevBtn.classList.add('prev');
	if (currentPage === 1) {
		prevBtn.disabled = true;
	}
	prevBtn.addEventListener('click', () => {
		// set the new page number and fetch new data from API
		fetchData(currentPage - 1);
	});

	const nextBtn = document.createElement('button');
	nextBtn.innerText = 'Next';
	nextBtn.classList.add('next');
	if (currentPage === totalPages) {
		nextBtn.disabled = true;
	}
	nextBtn.addEventListener('click', () => {
		// set the new page number and fetch new data from API
		fetchData(currentPage + 1);
	});

	paginationEl.innerHTML = ''; // clear existing buttons
	paginationEl.appendChild(prevBtn);

	// Calculate which page numbers to display
	const maxPageNumbers = 5; // maximum number of page numbers to display
	const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);
	let startPage = currentPage - halfMaxPageNumbers;
	if (startPage < 1) {
		startPage = 1;
	}
	let endPage = startPage + maxPageNumbers - 1;
	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = endPage - maxPageNumbers + 1;
		if (startPage < 1) {
			startPage = 1;
		}
	}

	// Add page number buttons
	for (let i = startPage; i <= endPage; i++) {
		const pageBtn = document.createElement('button');
		pageBtn.innerText = i;
		pageBtn.classList.add('page');
		if (i === currentPage) {
			pageBtn.classList.add('active');
		}
		pageBtn.addEventListener('click', () => {
			// set the new page number and fetch new data from API
			fetchData(i);
		});
		pageNumbersEl.appendChild(pageBtn);
	}

	paginationEl.appendChild(prevBtn);
	paginationEl.appendChild(pageNumbersEl);
	paginationEl.appendChild(nextBtn);
}
function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { poster_path, title, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');

		movieEl.innerHTML = `
		<img src="${imgPath + poster_path}" alt="${title}">
		<div class="movie-info">
			<h3>${title}</h3>
			<span class="${getClassByRate(vote_average)}">${vote_average}</span>
		</div>
		<div class="overview">
			<h3>Overview</h3>
			${overview}
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

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		const url = searchApi + searchTerm;

		getMovies(url);

		search.value = '';
	} else {
		window.location.reload();
	}
});
