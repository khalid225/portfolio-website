const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const dropDownMenu = document.querySelector(".dropdown_menu");
// const arrowUp = document.querySelector("#arrowUp");

// toggle menu icon
menuIcon.addEventListener("click", () => {
	dropDownMenu.classList.toggle("open");
	closeIcon.classList.toggle("hidden");
	menuIcon.classList.toggle("hidden");
});
closeIcon.addEventListener("click", () => {
	dropDownMenu.classList.toggle("open");
	closeIcon.classList.toggle("hidden");
	menuIcon.classList.toggle("hidden");
});
