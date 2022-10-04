// const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// const ulRef = document.querySelector("#ingredients");

// const listOfIngredients = document.createElement("li");

// const listRef = ingredients.forEach(ingredient => {
// 	const itemRef = document.createElement("li");
// 	itemRef.textContent = ingredient;
// 	itemRef.classList.add("item");
// 	listOfIngredients.append(itemRef);

// 	// console.log(itemRef);
// });

// ulRef.appendChild(listOfIngredients);

// // console.log(ulRef);





const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulRef = document.querySelector("#ingredients");

const listOfIngredients = [];

const listRef = ingredients.forEach(ingredient => {
	const itemRef = document.createElement("li");
	itemRef.textContent = ingredient;
	itemRef.classList.add("item");
	listOfIngredients.push(itemRef);

	// console.log(itemRef);
});

ulRef.append(...listOfIngredients);

// console.log(ulRef);

