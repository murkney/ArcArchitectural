export default function Navigation() {
	//model
	let isVisible = false;
	
	//query selectors
	const menu = document.querySelector('#mobile-navigation');
	const navigationLinks = document.querySelector('.aside__navigation');
	const hamburgerIconLines = document.querySelectorAll('.hamburger-icon-line');

	//event listener
	if (menu) {
		menu.addEventListener('click', handleToggleNavigation);
	}
	
	//handler
	function handleToggleNavigation() {
		toggleVisibility();
		renderHTML();
	};

	//methods
	function toggleVisibility() {
		isVisible = !isVisible;
	};

	//render DOM
	function renderHTML() {
		if (isVisible === true) {
			navigationLinks.classList.add("aside__navigation--active");

			for (const line of hamburgerIconLines) {
				line.classList.add('hamburger-icon-line--active');
			}
		} else {
			navigationLinks.classList.remove("aside__navigation--active");

			for (const line of hamburgerIconLines) {
				line.classList.remove('hamburger-icon-line--active');
			}
		}

	}
}	