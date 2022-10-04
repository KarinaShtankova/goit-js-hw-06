const inputRef = document.querySelector(`#font-size-control`);
// console.log(inputRef);

const textRef = document.querySelector(`#text`);
// console.log(textRef);

inputRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
	const inputValue = event.currentTarget.value;
	// console.log(inputValue);
	textRef.style.fontSize = `${inputValue}px`;
}
