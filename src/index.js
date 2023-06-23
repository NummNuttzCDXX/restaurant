// Main JS Script
// Imports
import { createHome as home} from "./pages/home";

// Create/Add home page to doc
home()

// Tab switching
const tabBtns = document.querySelectorAll('header button');

tabBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// var = btn class which is the name of the function that loads the page
		let tab = btn.className;
		
		// eval lets you run the function name which is saved as a string inside tab
		eval(tab + '()')
	})
})