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

// point : add todo
function addTodoElement(todo) {
	const todoElement = document.createElement('li');
	todoElement.innerHTML = `
    <span class="todo-text">${todo.text}</span>
    <div class="todo-options">
      <button class="complete-button">
        <i class="fas fa-check-circle"></i>
      </button>
      <button class="edit-button">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-button">
        <i class="fas fa-trash"></i>
      </button>
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

	const completeButton = todoElement.querySelector('.complete-button');
	completeButton.addEventListener('click', (e) => {
		e.stopPropagation();
		toggleTodoCompletion(todo.id);
	});

	const editButton = todoElement.querySelector('.edit-button');
	editButton.addEventListener('click', (e) => {
		e.stopPropagation();
		handleEdit(todoElement, todo.id);
	});

	const deleteButton = todoElement.querySelector('.delete-button');
	deleteButton.addEventListener('click', (e) => {
		e.stopPropagation();
		deleteTodoElement(todo.id);
	});

	todoElement.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		deleteTodoElement(todo.id);
	});

	todosUl.appendChild(todoElement);
}

function handleEdit(todoElement, todoId) {
	const todoText = todoElement.querySelector('.todo-text');
	const currentText = todoText.textContent;
	const newText = prompt('Enter new text:', currentText);

	if (newText) {
		todoText.textContent = newText;
		todos.forEach((todo) => {
			if (todo.id === todoId) {
				todo.text = newText;
			}
		});
		updateLocalStorage();
	}
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
