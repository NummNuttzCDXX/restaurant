// Main Header Module

export const createHeader = function () {
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    const desc = document.createElement('p');

    heading.textContent = "Big Brehn's Beef Burgs";
    header.appendChild(heading);

    desc.innerHTML = "Are you feeling famished for some delicious beef? <br>" + 
        "The kind of beef that makes you realize you've been missing out your entire life? <br>" + 
        "Well you're in luck! Here at Big Brehns Beef Burgs we only serve the best of the best of burgs.";
    header.appendChild(desc);

    return header;
}