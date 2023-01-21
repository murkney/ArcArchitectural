export default function Navigation() {
	const menu = document.querySelector('#mobile-navigation');
	const menuLinks = document.querySelector('.aside__navigation');


	menu.addEventListener('click', toggleNavbar);

	function toggleNavbar() {
		menu.classList.toggle('open');
		menuLinks.classList.toggle('active');
	};
}	