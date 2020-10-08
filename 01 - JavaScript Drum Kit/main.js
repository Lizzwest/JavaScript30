function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"`);

	if (!audio) return; //stops function running
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
	// console.log(key)
}
function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // skip if not transform
	// console.log(e.propertyName)
	this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
