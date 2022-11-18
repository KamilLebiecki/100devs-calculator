const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
	const { target } = event;
	const { value } = target;
	if (!target.matches('button')) {
		return;
	} else {
		//pass to parse method;
		console.log(event);
	}
});
