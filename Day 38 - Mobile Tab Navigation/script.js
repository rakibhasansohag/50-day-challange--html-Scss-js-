'use strict';
console.log('working ....');

// point : all the variables for this global
const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

// point : all the functions for this global
listItems.forEach((item, id) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();

		item.classList.add('active');
		contents[id].classList.add('show');
	});
});

function hideAllContents() {
	contents.forEach((content) => {
		content.classList.remove('show');
	});
}

function hideAllItems() {
	listItems.forEach((item) => {
		item.classList.remove('active');
	});
}
