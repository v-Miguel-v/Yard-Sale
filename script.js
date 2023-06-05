"use strict";

const navbar = document.querySelector(".nav-bar");

//* Toggle Effect for Nav Links
navbar.addEventListener("click", toggleActiveEffectForNavLinks);
function toggleActiveEffectForNavLinks (event) {
	const LINK = "nav-bar__link";
	const ACTIVE = "nav-bar__link--active";
	const clickedTarget = event.target;
	const activeElement = navbar.querySelector(`.${ACTIVE}`);
	if (clickedTarget.classList.contains(LINK)) {
		if (!clickedTarget.classList.contains(ACTIVE)) {
			activeElement.classList.remove(ACTIVE);
			clickedTarget.classList.add(ACTIVE);
			clickedTarget.scrollIntoView();
		}
	}
}