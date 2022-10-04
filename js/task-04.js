const ValueRef = document.querySelector("#value");
// console.log(ValueRef);

let counterValue = 0;
// console.log(counterValue);

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
// console.log(decrementBtn);

const incrementtBtn = document.querySelector(`button[data-action="increment"]`);
// console.log(incrementtBtn);

decrementBtn.addEventListener(`click`, onDecrementBtnClick);

function onDecrementBtnClick() {
	counterValue -= 1;
	// console.log(`click decrementBtn`);
	// console.log(counterValue);
	ValueRef.textContent = counterValue;
}

incrementtBtn.addEventListener(`click`, onIncrementtBtnClick);

function onIncrementtBtnClick() {
	counterValue += 1;
	// console.log(`click incrementtBtn`);
	// console.log(counterValue);
	ValueRef.textContent = counterValue;
}
