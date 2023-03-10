export default function Subscribe() {
	const subscribeExit = document.querySelector('.subscribe__exit');
	const subscribe = document.querySelector('.subscribe');
	const subscribeDesktop = document.querySelector('.subscribe__desktop');
	const subscribeMobile = document.querySelector('.subscribe__mobile');
	const subscribeEmail = document.querySelector('.subscribe__email');
	const subscribing = document.querySelector('.subscribe__subscribing');

	if (subscribeDesktop, subscribeExit, subscribeMobile, subscribeEmail) {
		subscribeDesktop.addEventListener('click', handleSubscribeClick);
		subscribeExit.addEventListener('click', handleSubscribeExitClick);
		subscribeMobile.addEventListener('click', handleSubscribeClick);
		subscribeEmail.addEventListener('keydown', handleEnterKeyPress)
	}

	function handleSubscribeExitClick() {
		subscribe.classList.add('hidden');	
	}

	function handleSubscribeClick() {
		hideText();
		showInput();
	}
	
	function hideText() {
		subscribeDesktop.classList.add('hidden');
		subscribing.classList.add('hidden');
		subscribeMobile.style.display = 'none';
	}
	
	function showInput() {
		subscribeEmail.classList.remove('hidden');
	}

	function showSubscribedText() {
		subscribeEmail.classList.add('hidden');
		subscribing.classList.remove('hidden');
	}

	function handleEnterKeyPress(event) {
		if (event.key === 'Enter') {
			showSubscribedText();
		}
	}
};