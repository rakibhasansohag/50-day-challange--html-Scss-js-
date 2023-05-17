'use strict';
console.log('working ....');

// point : all the variable

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

// point : all the event listener
form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;
	if (todo) {
		todoText = todo.text;
	}

	if (todoText) {
		const todoEl = document.createElement('li');
		if (todo && todo.completed) {
			todoEl.classList.add('completed');
		}
		todoEl.innerText = todoText;

		todoEl.addEventListener('click', () =>
			todoEl.classList.toggle('completed'),
		);

		todoEl.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			todoEl.remove();
		});

		todosUl.appendChild(todoEl);

		input.value = '';
	}
}
