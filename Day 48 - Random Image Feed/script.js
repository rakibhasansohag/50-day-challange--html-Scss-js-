'use strict';
console.log('working ...');

// point: all the variables
const container = document.querySelector('.container');
const rows = 10;
const apiKey = 'N1RKr4Q9WZs1CHcfNEvfqNup9sklLQIOzP1zTGcmqxU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${
	rows * 3
}`;

// point:  fetch the data
fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((photo) => {
			const img = document.createElement('img');
			img.src = photo.urls.regular;
			img.alt = photo.alt_description;

			img.addEventListener('load', () => {
				img.classList.add('loaded');
			});

			container.appendChild(img);
		});
	})
	.catch((error) => {
		console.error('Error fetching random images:', error);
	});
