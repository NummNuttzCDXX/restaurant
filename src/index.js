// Main JS Script
// Imports
import { createHome as home, createBody as body } from "./pages/home";

// Create/Load initial Home Page
home();

// Tab switching
const tabBtns = document.querySelectorAll('header button');
const content = Array.from(document.querySelector('#content').children);

tabBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Remove all content children
		content.forEach(element => {
			element.remove()
		})

		const tab = btn.className;
		
		// Check tab and load New Content
		if (tab === 'home') {
			body();
		} else if (tab === 'menu') {
			menu();
		} else if (tab === 'contact') {
			contact()
		};
	});
});