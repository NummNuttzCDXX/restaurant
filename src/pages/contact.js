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
	const addCont = document.createElement('div');
	const addHead = document.createElement('h3');
	addHead.textContent = 'Address';
	
	const address = document.createElement('p');
	address.textContent = '1234 NotAFake Rd YourCity, State';

	addCont.appendChild(addHead);
	addCont.appendChild(address);
	container.appendChild(addCont);

	// Hours
	const hourCont = document.createElement('div');
	const hourHead = document.createElement('h3');
	hourHead.textContent = 'Hours';
	
	const hours = document.createElement('p');
	hours.textContent = 'Everyday: 7am-11pm';

	hourCont.appendChild(hourHead);
	hourCont.appendChild(hours);
	container.appendChild(hourCont);

	// Phone
	const phoneCont = document.createElement('div');
	const phoneHead = document.createElement('h3');
	phoneHead.textContent = 'Call us';

	const phone = document.createElement('p');
	phone.textContent = '(555)555-5555';

	phoneCont.appendChild(phoneHead);
	phoneCont.appendChild(phone);
	container.appendChild(phoneCont);

	// Email
	const mailCont = document.createElement('div');
	const mailHead = document.createElement('h3');
	mailHead.textContent = 'E-Mail';

	const mail = document.createElement('p');
	mail.textContent = 'definitelyRealEmail@notFake.com';

	mailCont.appendChild(mailHead);
	mailCont.appendChild(mail);
	container.appendChild(mailCont);

	// Add Container
	content.appendChild(container);
}