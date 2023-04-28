'use strict';
console.log('working ....');

// / git hub docs link : https://docs.github.com/en
// / git hub docs link : https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
// /git hub axios link :

/// point all the variables
const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// point the search
getUser('devoloper-rakib');

// / point function to get the data from the api
async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);
		console.log(data);
		createUsersCard(data);
		getRepos(username);
	} catch (error) {
		console.log(error);

		if (error.response && error.response.status == 404) {
			createErrorCard('No profile with this username');
		}
	}

	// const res = await axios(APIURL + username);
	// .then((res) => console.log(res.data))
	// .catch((err) => console.log(err));

	// console.log(res.data);
}

// / function to get the repos
async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + '/repos?sort=created');
		console.log(data);
		addReposToCard(data);
	} catch (error) {
		createErrorCard('Problem fetching repository');
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = search.value;
	if (user) {
		getUser(user);
		search.value = '';
	}
});

/// function to get the users data
function createUsersCard(user) {
	// / reference => https://api.github.com/users/devoloper-rakib
	const card = `
	<div class="card">
		<div>
			<img src="${user.avatar_url}" alt="${user.name}" class="avatar">
		</div>
		<div class="user-info">
			<h2>${user.name}</h2>
			<p>${user.bio}</p>
			<ul>
				<li>${user.followers}<strong>Followers</strong></li>
				<li>${user.following}<strong>Following</strong></li>
				<li>${user.public_repos}<strong>Repos</strong></li>
			</ul>
			<div id="repos">
				
			</div>
		</div>
	</div>
	`;
	main.innerHTML = card;
}

// /  function for error card

function createErrorCard(message) {
	const card = `
		<div class="card">
			<h1>${message}</h1>
		</div>
	`;
	main.innerHTML = card;
}

// / function to add the repos to the card
function addReposToCard(repos) {
	const reposEl = document.getElementById('repos');

	repos.slice(0, 10).forEach((repo) => {
		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = repo.html_url; /// link to the repo
		repoEl.target = '_blank'; // / open in new tab
		repoEl.innerText = repo.name;
		reposEl.appendChild(repoEl);
	});
}
