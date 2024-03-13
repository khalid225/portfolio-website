const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const dropDownMenu = document.querySelector(".dropdown_menu");
const arrowUp = document.querySelector("#arrowUp");

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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		arrowUp.style.display = "block";
	} else {
		arrowUp.style.display = "none";
	}
}

arrowUp.addEventListener("click", () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
});
