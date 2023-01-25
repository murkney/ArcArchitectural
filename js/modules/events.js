export default function Events() {

	const upcomingEvents = document.querySelectorAll('.events');
	const buttonEvents = document.querySelector('.events__navigation');
	const activeButtons = document.querySelectorAll('.events__navigation button');

	if (buttonEvents) {
		buttonEvents.addEventListener('click', handleButtonSort);
	}

	function handleButtonSort(event) {

		let filterEvents = event.target.dataset['f'];
		let filterButtons = event.target.dataset['f'];

		for (const upcomingEvent of upcomingEvents) {	
			
			upcomingEvent.style.display = 'block';
			if (!upcomingEvent.classList.contains(filterEvents)) {
				upcomingEvent.style.display = 'none';
			}	
		}

		for (const activeButton of activeButtons) {	
			
			activeButton.style.background = 'white';
			activeButton.style.color = 'black';
			if (activeButton.classList.contains(filterButtons)) {
				activeButton.style.background = 'black';
				activeButton.style.color = 'white';
			}	
		}
	}
}