// Initial Home Page File

// Main Header Module
const createHeader = function () {
    const header = document.createElement('header');
    const heading = document.createElement('h1');

    heading.textContent = "Big Brehn's Beef Burgs";
    header.appendChild(heading);

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