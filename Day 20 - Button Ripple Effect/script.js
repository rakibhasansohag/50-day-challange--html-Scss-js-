'use strict';
console.log('working ....');

// task : 1 for getting click event
//  variable
const clickButton = document.querySelectorAll('.click');

// console.log(clickButton);

clickButton.forEach((button) => {
	button.addEventListener('click', function (event) {
		const x = event.clientX;
		const y = event.clientY;
		// console.log(x, y); /// for testing  x,y

		const buttonTop = event.target.offsetTop;
		const buttonLeft = event.target.offsetLeft;

		// console.log(buttonTop, buttonLeft); /// for testing  buttonTop,buttonLeft

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		// console.log(xInside, yInside); /// for testing  xInside,yInside

		const circle = document.createElement('span');

		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';

		// console.log(circle); /// for testing  circle
		this.appendChild(circle);

		setTimeout(() => circle.remove(), 500);
	});
});
