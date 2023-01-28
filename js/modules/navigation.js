export default function Navigation() {
	//model
	let isVisible = false;

	
	//query selectors
	const menu = document.querySelector('#mobile-navigation');
	const navigationLinks = document.querySelector('.aside__navigation');
	const navigationBar = document.querySelector('.aside__title');
	const hamburgerIconLines = document.querySelectorAll('.hamburger-icon-line');
	const asideLogo = document.querySelector('.aside__logo');
	const navigationLinksHidden = document.querySelector('.aside__navigation-hidden');
	const navigationBarHidden = document.querySelector('.aside__title-hidden');

	let navigationFixedThreshold = asideLogo.getBoundingClientRect().bottom;

	//event listener
	if (menu) {
		menu.addEventListener('click', handleToggleNavigation);
	}

	if (navigationBar) {
		window.addEventListener('scroll', handleNavigationScroll);
	}
	
	//handler
	function handleToggleNavigation() {
		toggleVisibility();
		renderHTML();
	};

	function handleNavigationScroll() {
		renderHTML();
	}

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

		const scrollY = window.scrollY;		
		
		if (isVisible === true && scrollY >= navigationFixedThreshold) {
			navigationLinks.classList.add('aside__navigation--fixed');
			navigationLinksHidden.classList.add('aside__navigation-hidden--active');
		} else {
			navigationLinks.classList.remove('aside__navigation--fixed');
			navigationLinksHidden.classList.remove('aside__navigation-hidden--active');
		}

		if (scrollY >= navigationFixedThreshold) {
			navigationBar.classList.add('aside__title--fixed');
			navigationBarHidden.classList.add('aside__title-hidden--active');
		} else {
			navigationBar.classList.remove('aside__title--fixed');
			navigationBarHidden.classList.remove('aside__title-hidden--active');
		}
	}
}	