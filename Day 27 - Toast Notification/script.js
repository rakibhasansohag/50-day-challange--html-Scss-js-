'use strict';
console.log('working ....');

// declare variables
const button = document.querySelector('.btn');
const toasts = document.querySelector('#toasts');

// for messages on toast
const messages = [
	'Message One',
	'Message Two',
	'Message Three',
	'Message Four',
	// 'Message Five',
];

const types = ['info', 'success', 'error', 'warning'];

// point add event listener
button.addEventListener('click', () => createNotification());
// point for create notification
function createNotification(message = null, type = null) {
	const notification = document.createElement('div');
	notification.classList.add('toast');
	notification.classList.add(type ? type : getRandomType());
	notification.innerText = message ? message : getRandomMessage();
	toasts.appendChild(notification);
	console.log(notification, messages, message);
	setTimeout(() => {
		notification.remove();
	}, 3000);
}

// point for random messages
function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}

// point for random types
function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}
