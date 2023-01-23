export default function Subscribe() {
	const subscribeExit = document.querySelector('.subscribe__exit');
	const subscribe = document.querySelector('.subscribe');

	subscribeExit.addEventListener('click', handleSubscribeExitClick);

	function handleSubscribeExitClick() {
		subscribe.classList.add('hidden');	
	}
};