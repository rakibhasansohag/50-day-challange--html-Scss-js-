'use strict';
console.log('working ....');

// point all the variables
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

//  point the initial position of the slides
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`; // 100vh = 100% of the viewport height

//  point

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// function to change the slides
const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight;
	// console.log(sliderHeight);/// test the height of the slider

	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex > slidesLength - 1) {
			activeSlideIndex = 0; // reset the slide to the first slide
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1; // reset the slide to the last slide
		}
	}

	slideRight.style.transform = `translateY(-${
		activeSlideIndex * sliderHeight
	}px)`;

	slideLeft.style.transform = `translateY(${
		activeSlideIndex * sliderHeight
	}px)`;
};
