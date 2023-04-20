'use strict';
console.log('working ....');

// task : 1 for getting click event
//  variable
const buttons = document.querySelectorAll('.click');

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const x = e.pageX;
		const y = e.pageY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';

		this.appendChild(circle);

		setTimeout(() => circle.remove(), 1000);
	});
});
