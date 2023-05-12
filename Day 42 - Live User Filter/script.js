'use strict';

// Point: all the variables
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Point: initial value
let currentPage = 1;
const usersPerPage = 5;
let filteredUsers = [];
let totalPages = 0;

// Point: fetch random user and add money
const getRandomUser = async () => {
	const res = await fetch('https://randomuser.me/api?results=50');
	const { results } = await res.json();

	filteredUsers = results;
	totalPages = Math.ceil(filteredUsers.length / usersPerPage);
	showUsers();
};

// Point: Show users based on the current page
const showUsers = () => {
	result.innerHTML = '';

	if (filteredUsers.length === 0) {
		result.innerHTML = '<li class="no-results">No users found.</li>';
		return;
	}

	const startIndex = (currentPage - 1) * usersPerPage;
	const endIndex = startIndex + usersPerPage;
	const usersToShow = filteredUsers.slice(startIndex, endIndex);

	usersToShow.forEach((user) => {
		const li = document.createElement('li');
		li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
		result.appendChild(li);
	});

	// Update pagination
	updatePagination();
};

// Point: Update pagination buttons
const updatePagination = () => {
	prevBtn.disabled = currentPage === 1;
	nextBtn.disabled = currentPage === totalPages;
};

// Point: Go to the previous page
const prevPage = () => {
	if (currentPage > 1) {
		currentPage--;
		showUsers();
	}
};

// Point: Go to the next page
const nextPage = () => {
	if (currentPage < totalPages) {
		currentPage++;
		showUsers();
	}
};

getRandomUser();

// Point: search filter
filter.addEventListener('input', (e) => {
	const searchTerm = e.target.value.toLowerCase();
	filteredUsers = searchTerm
		? filteredUsers.filter((user) => {
				const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
				return fullName.includes(searchTerm);
		  })
		: getRandomUser();

	currentPage = 1;
	totalPages = Math.ceil(filteredUsers.length / usersPerPage);
	showUsers();
});

// Point: Previous and Next buttons
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);
