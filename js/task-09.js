function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(`.change-color`);
// console.log(btnRef);

const bodyRef = document.querySelector(`body`);
// console.log(bodyRef);

const colorValueRef = document.querySelector(`.color`)
// console.log(colorValueRef);

btnRef.addEventListener(`click`, onBtnClick);

function onBtnClick(event) {

  bodyRef.style.backgroundColor = getRandomHexColor();

  const newColor = bodyRef.style.backgroundColor;
  // console.log(newColor);

  colorValueRef.textContent = newColor;
}
