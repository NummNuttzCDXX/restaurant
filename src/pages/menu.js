// Menu Page
// Import food Images
import baconMac from '../img/bacon-mac.jpg';
import bbq from '../img/bbq-burg.jpg';
import burgDog from '../img/burg-dog.jpg';
import double from '../img/double.jpg';
import fries from '../img/fries.jpg';

export function createMenu() {
	const content = document.querySelector('#content');
	const container = document.createElement('div');
	container.classList.add('menu-container');

	// Heading
	const menuHead = document.createElement('h2');
	menuHead.textContent = 'Menu';
	content.appendChild(menuHead);

	// Menu
	// Item 1
	const itemContainer1 = document.createElement('div');
	itemContainer1.classList.add('item');
	
	const doubleBurg = new Image();
	doubleBurg.src = double;
	itemContainer1.appendChild(doubleBurg);
	
	const doubleTxt = document.createElement('p');
	doubleTxt.textContent = 'Double Cheeseburger';
	itemContainer1.appendChild(doubleTxt);

	container.appendChild(itemContainer1);
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

	// Add Menu-Container to content
	content.appendChild(container);
}

// Double attribute
// <a href="https://www.freepik.com/free-ai-image/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_39518159.htm?log-in=google">Image By svstudioart</a>
// Fries
// <a href="https://www.freepik.com/free-photo/side-view-french-fries-with-seasoning_8196330.htm#query=french%20fries&position=6&from_view=search&track=ais">Image by stockking</a> on Freepik