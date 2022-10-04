const inputRef = document.querySelector(`#name-input`);
// console.log(inputRef);

const outputRef = document.querySelector(`#name-output`);

inputRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
	const outputValue = event.currentTarget.value;

	outputValue === `` ? (outputRef.textContent = `Anonymous`) : (outputRef.textContent = outputValue);
	// console.log(outputValue);
}
