'use strict';
console.log('working ....');

const primaryColorInput = document.getElementById('primary-color');
const secondaryColorInput = document.getElementById('secondary-color');
const kineticLoader = document.querySelector('.kinetic');
const animationSpeedInput = document.getElementById('animation-speed');
// point for loader size
const loaderSizeInput = document.getElementById('loader-size');
loaderSizeInput.addEventListener('input', () => {
	const newSize = loaderSizeInput.value + 'px';
	document.documentElement.style.setProperty('--loader-size', newSize);
});

// point  color change

// Add event listener for primary color input
primaryColorInput.addEventListener('input', () => {
	// Get the value of the primary color input
	const newPrimaryColor = primaryColorInput.value;
	// Set the new primary color on the kinetic loader
	document.documentElement.style.setProperty(
		'--primary-kinetic-border-color',
		newPrimaryColor,
	);
});

// Add event listener for secondary color input
secondaryColorInput.addEventListener('input', () => {
	// Get the value of the secondary color input
	const newSecondaryColor = secondaryColorInput.value;
	// Set the new secondary color on the kinetic loader
	document.documentElement.style.setProperty(
		'--secondary-kinetic-border-color',
		newSecondaryColor,
	);
});

// point :  for animation speed
animationSpeedInput.addEventListener('input', () => {
	const newAnimationDuration = animationSpeedInput.value + 's';
	kineticLoader.style.setProperty('--animation-duration', newAnimationDuration);
});
