'use strict';
console.log('working ....');

// point : all the variables
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

// point : all the data
const testimonials = [
	{
		name: 'John Doe',
		position: 'Web Designer',
		photo: 'https://randomuser.me/api/portraits/men/11.jpg',
		text: "I've worked with many designers in the past, but this guy stands out from the crowd. His attention to detail and creativity are unparalleled. I'm extremely satisfied with his work.",
	},
	{
		name: 'Jane Smith',
		position: 'Marketing Specialist',
		photo: 'https://randomuser.me/api/portraits/women/22.jpg',
		text: "I've had the pleasure of collaborating with this person on several marketing campaigns. Their strategic thinking and ability to execute ideas have brought excellent results. I highly endorse them.",
	},
	{
		name: 'Alex Johnson',
		position: 'Software Engineer',
		photo: 'https://randomuser.me/api/portraits/men/33.jpg',
		text: 'As a fellow developer, I must say that this guy is exceptional. His coding skills are impressive, and he always delivers high-quality solutions. Working with him has been a fantastic experience.',
	},
	{
		name: 'Emily Davis',
		position: 'Graphic Designer',
		photo: 'https://randomuser.me/api/portraits/women/44.jpg',
		text: "I've collaborated with this talented designer on various projects, and I'm always amazed by her creativity and unique design concepts. She consistently exceeds expectations.",
	},
	{
		name: 'Michael Johnson',
		position: 'Product Manager',
		photo: 'https://randomuser.me/api/portraits/men/55.jpg',
		text: "This person is an exceptional product manager. Their leadership skills and ability to drive projects forward are unmatched. It's a pleasure working with them.",
	},
	{
		name: 'Samantha Thompson',
		position: 'Content Writer',
		photo: 'https://randomuser.me/api/portraits/women/66.jpg',
		text: "I've worked closely with this writer on several content projects, and I'm always impressed by her exceptional writing skills and attention to detail. I highly recommend her services.",
	},
	{
		name: 'David Lee',
		position: 'UX Designer',
		photo: 'https://randomuser.me/api/portraits/men/77.jpg',
		text: "Working with this UX designer has been a pleasure. Their user-centered approach and ability to create intuitive designs have significantly improved our product's user experience.",
	},
	{
		name: 'Olivia Brown',
		position: 'Social Media Manager',
		photo: 'https://randomuser.me/api/portraits/women/88.jpg',
		text: 'This person is an expert in social media management. They have helped our brand gain significant online visibility and engagement. I highly recommend their services.',
	},
	{
		name: 'Robert Wilson',
		position: 'Project Manager',
		photo: 'https://randomuser.me/api/portraits/men/99.jpg',
		text: "I've had the pleasure of working with this project manager on multiple projects, and their organizational skills and attention to detail have made a significant impact on our success.",
	},
	{
		name: 'Sophia Rodriguez',
		position: 'UI Designer',
		photo: 'https://randomuser.me/api/portraits/women/100.jpg',
		text: "I've collaborated with this designer on various UI projects, and their ability to create visually stunning interfaces is truly impressive. They are a valuable asset to any design team.",
	},
];

let id = 1;

// point : all the functions
function updateTestimonial() {
	const { name, position, photo, text } = testimonials[id];

	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	role.innerHTML = position;
	id++;

	if (id > testimonials.length - 1) {
		id = 0;
	}

	testimonialsContainer.classList.remove('animate');
	setTimeout(() => {
		testimonialsContainer.classList.add('animate');
	}, 100);
}

// point : for time interval
setInterval(updateTestimonial, 10000);
