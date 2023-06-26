// Contact Page

export function createContact() {
	const content = document.querySelector('#content');
	const container = document.createElement('div');
	container.setAttribute('id', 'contact-container');

	// Heading
	const head = document.createElement('h2');
	head.textContent = 'Contact Us';
	container.appendChild(head);

	// Address
	const address = document.createElement('p');
	address.textContent = '1234 NotAFake Rd YourCity, State';
	container.appendChild(address);

	// Hours
	const hours = document.createElement('p');
	hours.textContent = 'Everyday: 7am-11pm'
	container.appendChild(hours);

	// Phone
	const phone = document.createElement('p');
	phone.textContent = '(555)555-5555';
	container.appendChild(phone);

	// Email
	const mail = document.createElement('p');
	mail.textContent = 'definitelyRealEmail@notFake.com';
	container.appendChild(mail);

	// Add Container
	content.appendChild(container);
}