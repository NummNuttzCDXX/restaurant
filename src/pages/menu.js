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
	function addItem(img, head, desc, price) {
		// Create Item Container
		const itemContainer = document.createElement('div');
		itemContainer.classList.add('item');

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

		// Add containers to doc
		itemContainer.appendChild(descContainer);
		itemContainer.appendChild(itemPrice);
		menuContainer.appendChild(itemContainer);
	}

	// Menu
	// Item 1
	const itemContainer1 = document.createElement('div');
	itemContainer1.classList.add('item');
	
	const doubleBurg = new Image();
	doubleBurg.src = double;
	itemContainer1.appendChild(doubleBurg);

	// Create container to hold the Text info
	const descContainer = document.createElement('div');
	descContainer.classList.add('description-container')

	// Create item Heading
	const doubleTxt = document.createElement('h3');
	doubleTxt.classList.add('item-heading')
	doubleTxt.textContent = 'Double Cheeseburger';
	descContainer.appendChild(doubleTxt);

	// Create item Description
	const doubleDesc = document.createElement('p');
	doubleDesc.classList.add('description')
	doubleDesc.textContent = 'An all American double cheeseburger, topped with a sesame seed bun, lettuce, tomato, onions, and mayo.';
	descContainer.appendChild(doubleDesc);

	// Create Price
	const doublePrice = document.createElement('p');
	doublePrice.classList.add('price');
	doublePrice.textContent = '$8.99';
	
	// Add containers to doc
	itemContainer1.appendChild(descContainer);
	itemContainer1.appendChild(doublePrice);
	menuContainer.appendChild(itemContainer1);

	// Item 2
	const bbqBurg = new Image();
	bbqBurg.src = bbq;

	// Item 3
	const dogBurg = new Image();
	dogBurg.src = burgDog;

	// Item 4
	const macBurg = new Image();
	macBurg.src = baconMac;

	// Item 5
	const fry = new Image();
	fry.src = fries;

	// Add Menu-Container to parent
	parentContainer.appendChild(menuContainer);
}

// Double attribute
// <a href="https://www.freepik.com/free-ai-image/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_39518159.htm?log-in=google">Image By svstudioart</a>
// Fries
// <a href="https://www.freepik.com/free-photo/side-view-french-fries-with-seasoning_8196330.htm#query=french%20fries&position=6&from_view=search&track=ais">Image by stockking</a> on Freepik