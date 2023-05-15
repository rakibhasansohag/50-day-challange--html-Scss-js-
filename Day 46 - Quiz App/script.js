'use strict';
console.log('working ....');

// point: for quiz data
const quizData = [
	{
		question: 'Which language runs in a web browser?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'What does CSS stand for?',
		a: 'Cascading Style Sheets',
		b: 'Central Style System',
		c: 'Computer Style Sheets',
		d: 'Creative Style Solutions',
		correct: 'a',
	},
	{
		question: 'What is the largest planet in our solar system?',
		a: 'Saturn',
		b: 'Jupiter',
		c: 'Neptune',
		d: 'Uranus',
		correct: 'b',
	},
	{
		question: 'Who is known as the father of computer science?',
		a: 'Alan Turing',
		b: 'Bill Gates',
		c: 'Steve Jobs',
		d: 'Mark Zuckerberg',
		correct: 'a',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hyper Text Markup Language',
		b: 'Highly Typed Markup Language',
		c: 'Home Tool Markup Language',
		d: 'Hyperlink and Text Markup Language',
		correct: 'a',
	},
	{
		question: 'Which company developed the JavaScript programming language?',
		a: 'Oracle',
		b: 'Microsoft',
		c: 'Google',
		d: 'Netscape',
		correct: 'd',
	},
	{
		question: 'What is the symbol for the chemical element oxygen?',
		a: 'Ox',
		b: 'Oi',
		c: 'Om',
		d: 'O',
		correct: 'd',
	},
	{
		question: 'Who painted the famous artwork "The Starry Night"?',
		a: 'Pablo Picasso',
		b: 'Vincent van Gogh',
		c: 'Leonardo da Vinci',
		d: 'Claude Monet',
		correct: 'b',
	},
	{
		question: 'Which continent is the most populous?',
		a: 'Asia',
		b: 'Africa',
		c: 'Europe',
		d: 'North America',
		correct: 'a',
	},
	{
		question: 'Which year was the World Wide Web invented?',
		a: '1985',
		b: '1991',
		c: '1998',
		d: '2003',
		correct: 'b',
	},
];

//  point : all the variables
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const timerElement = document.getElementById('timer');

// point: initial values
let currentQuiz = 0;
let score = 0;
let timeInterval; // to store the setInterval() function
let timeLeft;
let shouldResetTimer = false;

// point: for quiz data to load/get the quiz
loadQuiz();

function loadQuiz() {
	// point: for quiz data to deselect the answer
	deselectAnswers();

	// point :  Start time timer
	startTimer();

	const randomQuestionIndex = Math.floor(Math.random() * quizData.length);

	const currentQuizData = quizData[randomQuestionIndex];
	questionEl.innerText = currentQuizData.question;
	aText.innerText = currentQuizData.a;
	bText.innerText = currentQuizData.b;
	cText.innerText = currentQuizData.c;
	dText.innerText = currentQuizData.d;
}

// point: deselect the answer
function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// point : add event listener to the submit button
submitBtn.addEventListener('click', () => {
	// submitBtn.disabled = true;

	// check to see the answer
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
				<h2 class="h2">You answered ${score}/${quizData.length} questions correctly</h2>
				<button onclick="location.reload()">Reload</button>
			`;
		}

		// point : reset the timer
		shouldResetTimer = true;
	}
});

// point: get the selected answer
function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

// point: start timer
function startTimer() {
	const timeLimit = 10;
	timeLeft = timeLimit; // Initial time left

	updateTimerDisplay();

	timeInterval = setInterval(() => {
		timeLeft--;
		updateTimerDisplay();

		if (timeLeft === 0) {
			clearInterval(timeInterval);
			handleTimeUp();
		}

		if (shouldResetTimer) {
			clearInterval(timeInterval);
			resetTimer();
			shouldResetTimer = false;
		}
	}, 1000);
}

function updateTimerDisplay() {
	timerElement.innerText = `Time Left: ${timeLeft} seconds`;
}

function handleTimeUp() {
	currentQuiz++;
	if (currentQuiz < quizData.length) {
		loadQuiz();
	} else {
		quiz.innerHTML = `
      <h2 class="h2">You answered ${score}/${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>
    `;
	}
}
