'use strict';
console.log('working ....');

const img =
	'https://images.unsplash.com/photo-1682148708195-32a41d488235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80';

// point 1 : declare all the variables
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// point 2 : set the timeout
setTimeout(getData, 2500);

// point 3 : create the function for animation loading
function getData() {
	header.innerHTML = `<img src=${img} alt="A Man standing some where"/>`;
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
	profile_img.innerHTML =
		'<img src="https://randomuser.me/api/portraits/men/30.jpg" alt="I am cool 😎 ">';
	name.innerHTML = 'Rakib Hasan';
	date.innerHTML = 'Oct 10 , 2021';

	// point 4 : remove the animation
	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
