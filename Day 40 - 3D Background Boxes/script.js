'use strict';
console.log('working ....');

// point : all the variable
const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

// point : all the function
function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement('div');
			box.classList.add('box');
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxesContainer.appendChild(box);
		}
	}
}

createBoxes();

// point : add event listener
btn.addEventListener('click', () => {
	boxesContainer.classList.toggle('big');
});
