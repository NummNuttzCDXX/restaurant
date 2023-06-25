// Initial Home Page File
	import githubIcon from '../img/github-mark-white.svg';
	import burger from '../img/burg-steamy.jpg';

// Main Header Module
const createHeader = function () {
    const header = document.createElement('header');
    const heading = document.createElement('h1');

    // Title Text
    heading.textContent = "Big Brehn's Beef Burgs";
    header.appendChild(heading);

    // Tabs
    const homeBtn = document.createElement('button'),
    menuBtn = document.createElement('button'),
    contactBtn = document.createElement('button'),
    btnContainer = document.createElement('div');

	// Set button text and add class
    homeBtn.textContent = 'Home';
	homeBtn.classList.add('home', 'active')
    menuBtn.textContent = 'Menu';
	menuBtn.classList.add('menu')
    contactBtn.textContent = 'Contact';
	contactBtn.classList.add('contact')

    btnContainer.appendChild(homeBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);

    header.appendChild(btnContainer);

    return header;
}

export const createBody = function () {
    const main = document.querySelector('div#content');
    const desc = document.createElement('p');
    
    desc.innerHTML = "Are you feeling famished for some delicious beef? <br>" + 
        "The kind of beef that makes you realize you've been missing out your entire life? <br>" + 
        "Well you're in luck! Here at Big Brehns Beef Burgs we only serve the best of the best of burgs.";
    main.appendChild(desc);

	// Tagline
	const tag = document.createElement('p')
	tag.classList.add('tagline');
	tag.textContent = 'Come on down to Big Brehn\'s Beef Burgs, where all you\'re beefy desires are cured';
	main.appendChild(tag);

	// Motto
	const motto = document.createElement('h2');
	motto.classList.add('motto');
	motto.textContent = 'We have the beefs!';
	main.appendChild(motto)

	// Add image
	const burg = new Image();
	burg.src = burger;
	main.appendChild(burg);
}

const createFooter = function () {
	const foot = document.createElement('footer');
	const link = document.createElement('a');

	// Add signature
	foot.innerHTML = 'NummNuttzCDXX';

	// Add github Icon
	const reposIcon = new Image();
	reposIcon.src = githubIcon;
	link.appendChild(reposIcon);
	link.href = 'https://github.com/NummNuttzCDXX/restaurant';

	foot.appendChild(link);

	return foot;
}

// Create whole page
export const createHome = function () {
    const body = document.querySelector('body');
    body.prepend(createHeader());
    createBody();
	body.appendChild(createFooter());
}