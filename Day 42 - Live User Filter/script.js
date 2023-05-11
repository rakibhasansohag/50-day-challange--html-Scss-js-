'use strict';
console.log('working ....');
// / resources : https://randomuser.me/

// point : all the variables
const result = document.getElementById('result');
const filter = document.getElementById('filter');

// point : initial value
const listItems = [];

// point : fetch random user and add money
const getRandomUser = async () => {
	result.innerHTML = `<li> Loading ... </li>`;

	const res = await fetch('https://randomuser.me/api?results=50');
	const { results } = await res.json();

	result.innerHTML = '';

	results.forEach((user) => {
		const li = document.createElement('li');
		listItems.push(li);
		li.innerHTML = `
			<img src="${user.picture.large}" alt="${user.name.first}">
			<div class="user-info">
				<h4>${user.name.first} ${user.name.last}</h4>
				<p>${user.location.city}, ${user.location.country}</p>
				</div>
		`;
		result.appendChild(li);
	});

	filterData(filter.value);
};

getRandomUser();

// point : search filter

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(searchUser) {
	const noUserFound = document.getElementById('no-user-found');
	if (noUserFound) {
		noUserFound.remove();
	}

	let count = 0;

	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchUser.toLowerCase())) {
			item.classList.remove('hide');
			count++;
		} else {
			item.classList.add('hide');
		}
	});

	// point : check if no users are found and display a message

	if (count === 0) {
		const li = document.createElement('li');
		li.setAttribute('id', 'no-user-found');
		li.innerHTML = `<h3> No User Found </h3>`;
		result.appendChild(li);
	}
}
