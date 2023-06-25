// Main JS Script
// Imports
import { createHome as home, createBody as body } from "./pages/home";

// Create/Load initial Home Page
home();

// Tab switching
const tabBtns = document.querySelectorAll('header button');

tabBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Get all content elements
		const content = Array.from(document.querySelector('#content').children);
		// Remove all content children
		content.forEach(element => element.remove())

		const tab = btn.className;

		// Add/remove 'active' class from btn
		tabBtns.forEach(btn => btn.classList.remove('active'));
		btn.classList.add('active');
		
		// Check tab and load New Content
		if (tab.includes('home')) {
			body();
		} else if (tab.includes('menu')) {
			menu();
		} else if (tab.includes('contact')) {
			contact()
		};
	});
});