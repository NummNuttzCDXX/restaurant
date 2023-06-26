// Contact Page

export function createContact() {
	const content = document.querySelector('#content');
	const container = document.createElement('div');
	container.setAttribute('id', 'contact-container');

	// Heading
	const head = document.createElement('h2');
	head.textContent = 'Contact Us';
	content.appendChild(head);

	// Address
	const address = document.createElement('p');

	// Hours
	const hours = document.createElement('p');

	// Phone
	const phone = document.createElement('p');

	// Email
	const mail = document.createElement('p');

	// Embed Map?
}