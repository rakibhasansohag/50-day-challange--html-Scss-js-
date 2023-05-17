'use strict';

console.log('working ....');

// Point: All the variables
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');
let todos = JSON.parse(localStorage.getItem('todos'));

input.focus();
// Point: Todos
if (todos) {
	todos.forEach((todo) => addTodoElement(todo));
} else {
	todos = [];
	console.log('No todos');
}

// Point: All the event listeners
form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTodo();
});

function addTodo() {
	const todoText = input.value.trim();
	if (todoText) {
		const todo = {
			id: Date.now(),
			text: todoText,
			completed: false,
		};
		todos.push(todo);
		addTodoElement(todo);
		updateLocalStorage();
		input.value = '';
	}
}

function addTodoElement(todo) {
	const todoElement = document.createElement('li');
	todoElement.innerHTML = `
    <span class="todo-text">${todo.text}</span>
    <div class="todo-options">
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-trash"></i>
    </div>
  `;
	todoElement.classList.add('todo-item');
	if (todo.completed) {
		todoElement.classList.add('completed');
	}

	const todoText = todoElement.querySelector('.todo-text');
	todoText.addEventListener('click', () => {
		toggleTodoCompletion(todo.id);
	});

	const todoOptions = todoElement.querySelector('.todo-options');
	const completionIcon = todoOptions.querySelector('.fa-check-circle');
	completionIcon.addEventListener('click', (e) => {
		e.stopPropagation(); // / Prevent the click event from bubbling up to the todoText element
		toggleTodoCompletion(todo.id);
	});

	const deleteIcon = todoOptions.querySelector('.fa-trash');
	deleteIcon.addEventListener('click', (e) => {
		e.stopPropagation();
		deleteTodoElement(todo.id);
		updateLocalStorage();
	});

	todoElement.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		deleteTodoElement(todo.id);
		updateLocalStorage();
	});

	todosUl.appendChild(todoElement);
}
function toggleTodoCompletion(todoId) {
	todos = todos.map((todo) => {
		if (todo.id === todoId) {
			return { ...todo, completed: !todo.completed };
		}
		return todo;
	});
	updateLocalStorage();
	renderTodos();
}

function deleteTodoElement(todoId) {
	todos = todos.filter((todo) => todo.id !== todoId);
	updateLocalStorage();
	renderTodos();
}

function updateLocalStorage() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
	todosUl.innerHTML = '';
	todos.forEach((todo) => addTodoElement(todo));
}
