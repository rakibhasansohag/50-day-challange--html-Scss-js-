'use strict';
console.log('working ....');

// point : all the variables
const addBtn = document.querySelector('.add');
const notes = JSON.parse(localStorage.getItem('notes'));

// point : check if there is any notes in local storage
if (notes) {
	notes.forEach((note) => addNewNote(note));
}

// point : add button event listener
addBtn.addEventListener('click', () => addNewNote());

// point : add new note function
function addNewNote(text = '') {
	const note = document.createElement('div');
	note.classList.add('note');
	note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;
	// point : all the variables
	const editBtn = note.querySelector('.edit');
	const deleteBtn = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	textArea.value = text;
	main.innerHTML = marked(text);

	// point : delete button event listener
	deleteBtn.addEventListener('click', () => {
		note.remove();
		updateLs(); // point : update local storage
	});

	// point : toggle using edit button
	editBtn.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});

	// point : text area event listener
	textArea.addEventListener('input', (e) => {
		const { value } = e.target;
		main.innerHTML = marked(value);

		updateLs();
	});

	document.body.appendChild(note);
}

// point : local storage

function updateLs() {
	const notesText = document.querySelectorAll('textarea');
	const notes = [];

	notesText.forEach((note) => notes.push(note.value));
	// console.log(notes);

	localStorage.setItem('notes', JSON.stringify(notes));
}

// point : text area event listener
textArea.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' && !e.shiftKey) {
		e.preventDefault();
		addNewNote();
	}
});
