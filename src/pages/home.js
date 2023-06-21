// Initial Home Page File

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

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    btnContainer.appendChild(homeBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);

    header.appendChild(btnContainer);

    return header;
}

const createBody = function () {
    const main = document.querySelector('div#content');
    const desc = document.createElement('p');
    
    desc.innerHTML = "Are you feeling famished for some delicious beef? <br>" + 
        "The kind of beef that makes you realize you've been missing out your entire life? <br>" + 
        "Well you're in luck! Here at Big Brehns Beef Burgs we only serve the best of the best of burgs.";
    main.appendChild(desc);
}

export const createHome = function () {
    const body = document.querySelector('body');
    body.prepend(createHeader());
    createBody();
}