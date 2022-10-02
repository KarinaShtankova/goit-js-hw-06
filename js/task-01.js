const categoriesListRef = document.querySelectorAll(".item");
const numberOfCategories = categoriesListRef.length;

console.log(`Number of categories:`, numberOfCategories);

const categoriesAndQuantity = categoriesListRef.forEach(element => {
	const categories = element.querySelector("h2").textContent;
	const guantity = element.querySelectorAll("li").length;

	console.log(`Category:`, categories);
	console.log(`Elements:`, guantity);
});
