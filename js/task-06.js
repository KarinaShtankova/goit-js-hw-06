const inputRef = document.querySelector(`#validation-input`);
// console.log(inputRef);

inputRef.addEventListener(`input`, onInputChange);
inputRef.addEventListener(`blur`, onInputBlur);

let inputLength = 0;

function onInputChange(event) {
	inputLength = event.currentTarget.value.length;
	// console.log(inputLength);
}

const validInputLength = Number(inputRef.getAttribute(`data-length`));
//  console.log(typeof validInputLength);

function onInputBlur() {
	if (inputLength === validInputLength) {
		inputRef.classList.add(`valid`), inputRef.classList.remove(`invalid`);
	} else {
		inputRef.classList.add(`invalid`), inputRef.classList.remove(`valid`);
	}

	// console.log(validInputLength);
}
