'use strict';
console.log('working ....');

// point all the variables

const nav = document.querySelector('.nav');

// point event listener
window.addEventListener('scroll', fixName);

// point fix Now function

function fixName() {
	console.log('scrolling ....');
	console.log(window.scrollY, nav.offsetHeight);

	// / 120 is for if the user scroll down 194px then the nav will be fixed ( 120 + 74) = 194
	if (window.scrollY > nav.offsetHeight + 120) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}
