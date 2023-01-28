export default function Search() {
	//model
	let isVisible = false;

	//query selectors
	const searchButton = document.querySelector('.aside__search-button');
	const searchInputField = document.querySelector('.aside__search-input');
	const searchIconCircle = document.querySelector('.search-icon-circle');
	const searchIconStick = document.querySelector('.search-icon-stick');

	//event listeners
	if (searchButton) {
		searchButton.addEventListener('click', handleToggleSearch);
	}

	//handlers
	function handleToggleSearch() {
		toggleVisibility();
		renderHTML();
	};

	//methods
	function toggleVisibility() {
		isVisible = !isVisible;
	};

	//render
	function renderHTML() {
		if (isVisible === true) {
			searchInputField.classList.add('aside__search-input--active');
			searchIconCircle.classList.add('search-icon-circle--active');
			searchIconStick.classList.add('search-icon-stick--active')
			searchInputField.focus();
		} else {
			searchInputField.classList.remove('aside__search-input--active');
			searchIconCircle.classList.remove('search-icon-circle--active');
			searchIconStick.classList.remove('search-icon-stick--active');
		}
	};
}
