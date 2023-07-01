"use strict";

const navbar = document.querySelector(".nav-bar");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownableArea = dropdownMenu.querySelector(".dropdown-menu__dropdownable-area");
const dropdownMenuActualSelectedLink = dropdownMenu.querySelector(".dropdown-menu__selected-link");

//* Toggle Effect for Nav Links
navbar.addEventListener("click", toggleActiveEffectForNavLinks);
function toggleActiveEffectForNavLinks (event) {
	event.preventDefault();
	const LINK = "nav-bar__link";
	const ACTIVE = "nav-bar__link--active";
	const clickedTarget = event.target;
	const activeElement = navbar.querySelector(`.${ACTIVE}`);
	if (clickedTarget.classList.contains(LINK)) {
		if (!clickedTarget.classList.contains(ACTIVE)) {
			activeElement.classList.remove(ACTIVE);
			clickedTarget.classList.add(ACTIVE);
			clickedTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "end" });
		}
	}
}

//* Show and Hide Dropdown Menu
dropdownMenu.addEventListener("click", toggleDropdownMenu);
function toggleDropdownMenu (event) {
	event.preventDefault();
	const clickedTarget = event.target;
	const LINK = "dropdown-menu__link";
	const LABEL = "dropdown-menu__label";
	const ACTIVE = "dropdown-menu__dropdownable-area--active";
	const isOnTheLabel = (target) => (target.classList.contains(LABEL) || target.parentElement.classList.contains(LABEL));
	if (isOnTheLabel(clickedTarget)) {
		dropdownableArea.classList.toggle(ACTIVE);
	}
	if (clickedTarget.classList.contains(LINK)) {
		console.log(clickedTarget);
		setTimeout(() => {
			const linkClicked = clickedTarget.innerText;
			dropdownMenuActualSelectedLink.innerText = linkClicked.replace(" primero", "");
			dropdownableArea.classList.remove(ACTIVE);
		}, 80);
	}
}