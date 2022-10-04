function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector(`input`);
// console.log(inputRef);

const divBoxesRef = document.querySelector(`#boxes`);
const createBtnRef = document.querySelector(`[data-create]`);
// console.log(createBtnRef);
const destroyBtnRef = document.querySelector(`[data-destroy]`);
// console.log(destroyBtnRef);

inputRef.addEventListener(`input`, onInputChange);

let inputValue = 0;

function onInputChange(event) {
	inputValue = Number(event.target.value);
	// console.log(inputValue);
}

createBtnRef.addEventListener(`click`, () => {
	createBoxes(inputValue);
});

destroyBtnRef.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
	divBoxesRef.innerHTML = ``;
	boxSize = 30;
}

let boxSize = 30;

function createBoxes(amount) {
	for (let i = 1; i <= amount; i += 1) {
		boxSize += 10;
		const divRef = document.createElement(`div`);
		divRef.style.backgroundColor = getRandomHexColor();
		divRef.style.width = `${boxSize}px `;
		divRef.style.height = `${boxSize}px`;

		divBoxesRef.append(divRef);

		// console.log(divRef);
		// console.log(i);
	}
}
