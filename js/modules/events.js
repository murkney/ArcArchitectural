export default function Events() {

	let isLecturesFiltered = false;
	let isExhibitionsFiltered = false;
	let isSeminarsFiltered = false;

	const upcomingEvents = document.querySelectorAll('.events');
	const buttonLectures = document.querySelector('.events__navigation-lectures');
	const buttonExhibitions = document.querySelector('.events__navigation-exhibitions');
	const buttonSeminars = document.querySelector('.events__navigation-seminars');

	buttonLectures.addEventListener('click', handleFilterLectures);
	buttonExhibitions.addEventListener('click', handleFilterExhibitions);
	buttonSeminars.addEventListener('click', handleFilterSeminars);

	function handleFilterLectures() {
		visibilityLectures();
		renderHTMLLectures();
	}

	function handleFilterExhibitions() {
		visibilityExhibitions();
		renderHTMLExhibitions();
	}

	function handleFilterSeminars() {
		visibilitySeminars();
		renderHTMLSeminars();
	}

	function visibilityLectures() {
		isLecturesFiltered = !isLecturesFiltered;
	}

	function visibilityExhibitions() {
		isExhibitionsFiltered = !isExhibitionsFiltered;
	}

	function visibilitySeminars() {
		isSeminarsFiltered = !isSeminarsFiltered;
	}

	function renderHTMLLectures() {

		if (isLecturesFiltered === true) {
			isExhibitionsFiltered = false;
			isSeminarsFiltered = false;
			buttonExhibitions.style.background = 'white';
			buttonExhibitions.style.color = 'black';
			buttonSeminars.style.background = 'white';
			buttonSeminars.style.color = 'black';
			for (const upcomingEvent of upcomingEvents) {	
				upcomingEvent.style.display = 'block';
				if (!upcomingEvent.classList.contains('events__content-lectures')) {
					upcomingEvent.style.display = 'none';	
				}
			}
			buttonLectures.style.background = 'black';
			buttonLectures.style.color = 'white';	
		}
		
		else {
			isExhibitionsFiltered = false;
			isSeminarsFiltered = false;
			for (const upcomingEvent of upcomingEvents) {
				if (!upcomingEvent.classList.contains('events__content-lectures')) {
					upcomingEvent.style.display = 'block';	
				}
				buttonLectures.style.background = 'white';
				buttonLectures.style.color = 'black';
			}	
		}
	}	

	function renderHTMLExhibitions() {

		if (isExhibitionsFiltered === true) {
			isLecturesFiltered = false;
			isSeminarsFiltered = false;
			buttonLectures.style.background = 'white';
			buttonLectures.style.color = 'black';
			buttonSeminars.style.background = 'white';
			buttonSeminars.style.color = 'black';
			for (const upcomingEvent of upcomingEvents) {	
				upcomingEvent.style.display = 'block';
				if (!upcomingEvent.classList.contains('events__content-exhibitions')) {
					upcomingEvent.style.display = 'none';	
				}
			}
			buttonExhibitions.style.background = 'black';
			buttonExhibitions.style.color = 'white';
		}

		else {
			isLecturesFiltered = false;
			isSeminarsFiltered = false;
			for (const upcomingEvent of upcomingEvents) {	
				if (!upcomingEvent.classList.contains('events__content-exhibitions')) {
					upcomingEvent.style.display = 'block';	
				}
			}
			buttonExhibitions.style.background = 'white';
			buttonExhibitions.style.color = 'black';
		}
	}	

	function renderHTMLSeminars() {

		if (isSeminarsFiltered === true) {
			isLecturesFiltered = false;
			isExhibitionsFiltered = false;
			buttonLectures.style.background = 'white';
			buttonLectures.style.color = 'black';
			buttonExhibitions.style.background = 'white';
			buttonExhibitions.style.color = 'black';
			for (const upcomingEvent of upcomingEvents) {
				upcomingEvent.style.display = 'block';
				if (!upcomingEvent.classList.contains('events__content-seminars')) {
					upcomingEvent.style.display = 'none';	
				}
			}	
			buttonSeminars.style.background = 'black';
			buttonSeminars.style.color = 'white';
		}

		else {
			isLecturesFiltered = false;
			isExhibitionsFiltered = false;
			for (const upcomingEvent of upcomingEvents) {	
				if (!upcomingEvent.classList.contains('events__content-seminars')) {
					upcomingEvent.style.display = 'block';
				}
			}
			buttonSeminars.style.background = 'white';
			buttonSeminars.style.color = 'black';
		}
	}	
}