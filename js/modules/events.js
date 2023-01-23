export default function Navigation() {

	const eventsLectures = document.querySelectorAll('events__content-lectures');
	const eventsExhibitions = document.querySelectorAll('events__content-exhibitions');
	const eventsSeminars = document.querySelectorAll('events__content-seminars');
	const buttonLectures = document.querySelector('.events__navigation-lectures');
	const buttonExhibitions = document.querySelector('.events__navigation-exhibitions');
	const buttonSeminars = document.querySelector('.events__navigation-seminars');

	let visibileLectures = false;
	let visibileExhibitions = false;
	let visibileSeminars = false;

	buttonLectures.addEventListener('click', handleButtonLectures);
	buttonExhibitions.addEventListener('click', handleButtonExhibitions);
	buttonSeminars.addEventListener('click', handleButtonSeminars);

	function changeVisibilityLectures() {
		visibileLectures = !visibileLectures;
	}
	function changeVisibilityExhibitions() {
		visibileExhibitions = !visibileExhibitions;
	}
	function changeVisibilitySeminars() {
		visibileSeminars = !visibileSeminars;
	}

	function handleButtonLectures() {
		changeVisibilityLectures();
		renderHTML();
	}

	function handleButtonExhibitions() {
		changeVisibilityExhibitions();
		renderHTML();
	}

	function handleButtonSeminars() {
		changeVisibilitySeminars();
		renderHTML();
	}

	function renderHTML() {

		if (visibileLectures === true) {
			//(visibileExhibitions = false)
			//(visibileSeminars = false)
			eventsLectures.style.display = 'block';
			eventsExhibitions.style.display = 'none';
			eventsSeminars.style.display = 'none';
		}

		else {
			eventsLectures.style.display = 'none';
			eventsExhibitions.style.display = 'block';
			eventsSeminars.style.display = 'block';
		}
	}

}