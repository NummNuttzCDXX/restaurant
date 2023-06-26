// Menu Page
// Import food Images
import baconMac from '../img/bacon-mac.jpg';
import bbq from '../img/bbq-burg.jpg';
import burgDog from '../img/burg-dog.jpg';
import double from '../img/double.jpg';
import fries from '../img/fries.jpg';

export function createMenu() {
	// Create Elements
	const content = document.querySelector('#content');
	const parentContainer = document.createElement('div');
	parentContainer.classList.add('menu-parent');
	const menuContainer = document.createElement('div');
	menuContainer.classList.add('menu-container');

	// Add parent to doc
	content.appendChild(parentContainer);

	// Heading
	const menuHead = document.createElement('h2');
	menuHead.classList.add('menu-heading')
	menuHead.textContent = 'Menu';
	parentContainer.appendChild(menuHead);

	// Create function to add/create items
	function addItem(img, id, head, desc, price) {
		// Create Item Container
		const itemContainer = document.createElement('div');
		itemContainer.classList.add('item');
		itemContainer.setAttribute('id', id);

		// Create/add image
		const image = new Image();
		image.src = img;
		itemContainer.appendChild(image);

		// Create container to hold the Text info
		const descContainer = document.createElement('div');
		descContainer.classList.add('description-container')

		// Create item Heading
		const itemHead = document.createElement('h3');
		itemHead.classList.add('item-heading')
		itemHead.textContent = head;
		descContainer.appendChild(itemHead);

		// Create item Description
		const description = document.createElement('p');
		description.classList.add('description')
		description.textContent = desc;
		descContainer.appendChild(description);

		// Create Price
		const itemPrice = document.createElement('p');
		itemPrice.classList.add('price');
		itemPrice.textContent = price;

		// Add link
		if (itemContainer.id === 'double') {
			const link = document.createElement('a');
			const txtBox = document.createElement('span');

			link.href = 'https://www.freepik.com/free-ai-image/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_39518159.htm?log-in=google'
			txtBox.textContent = 'Image By svstudioart';

			link.appendChild(txtBox);
			itemContainer.appendChild(link);
		} else if (itemContainer.id === 'fry') {
			const link = document.createElement('a');
			const txtBox = document.createElement('span');

			link.href = 'https://www.freepik.com/free-photo/side-view-french-fries-with-seasoning_8196330.htm#query=french%20fries&position=6&from_view=search&track=ais'
			txtBox.textContent = 'Image by stockking'

			link.appendChild(txtBox);
			itemContainer.appendChild(link);
		}

		// Add containers to doc
		itemContainer.appendChild(descContainer);
		itemContainer.appendChild(itemPrice);
		menuContainer.appendChild(itemContainer);
	}

	// Menu
	// Item 1
	let doubleDesc = 'An all American double cheeseburger, topped with a sesame seed bun, lettuce, tomato, onions, and mayo.';
	addItem(double, 'double', 'Double Cheeseburg', doubleDesc, '$8.99');

	// Item 2
	let bbqDesc = 'The perfect burger with bacon, sweet barbecue sauce, and onion rings. As if it couldn\'t get any better it\'s a double!';
	addItem(bbq, 'bbq', 'BBQ Burg', bbqDesc, '$10.99');

	// Item 3
	let dogDesc = 'Have you ever had a hotdog and wished that it was a burger? Try our new Burger Dog! It\'s the best of both worlds!';
	addItem(burgDog, 'dog', 'Burger Dog', dogDesc, '$7.99');

	// Item 4
	let macBurgDesc = 'Original beef burg topped with bacon and mac n cheese ... YUM';
	addItem(baconMac, 'bacon-mac', 'Bacon Mac n Cheese Burg', macBurgDesc, '$10.99')

	// Item 5
	let fryDesc = 'All time fan favorite seasoned french fries';
	addItem(fries, 'fry', 'Seasoned French Fries', fryDesc, '$2.99');

	// Add Menu-Container to parent
	parentContainer.appendChild(menuContainer);
}

// Double attribute
// <a href="https://www.freepik.com/free-ai-image/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_39518159.htm?log-in=google">Image By svstudioart</a>
// Fries
// <a href="https://www.freepik.com/free-photo/side-view-french-fries-with-seasoning_8196330.htm#query=french%20fries&position=6&from_view=search&track=ais">Image by stockking</a> on Freepik