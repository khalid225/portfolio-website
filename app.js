const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const dropDownMenu = document.querySelector(".dropdown_menu");
const arrowUp = document.querySelector("#arrowUp");
const links = document.querySelectorAll(".dropdown_menu li a");

// toggle menu icon
function toggleMenu() {
	dropDownMenu.classList.toggle("open");
	closeIcon.classList.toggle("hidden");
	menuIcon.classList.toggle("hidden");
}

//checks if the user scrolls down 20px from the top of the document then show the button
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		arrowUp.style.display = "block";
	} else {
		arrowUp.style.display = "none";
	}
}
menuIcon.addEventListener("click", (event) => {
	event.preventDefault();
	toggleMenu();
});
closeIcon.addEventListener("click", (event) => {
	event.preventDefault();
	toggleMenu();
});

// Get all navigation links
links.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault();
		const targetSection = document.querySelector(this.getAttribute("href"));
		targetSection.scrollIntoView({ behavior: "smooth" });
		toggleMenu();
	});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

arrowUp.addEventListener("click", () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
});
