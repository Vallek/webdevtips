---
layout: post
title: 'Detect click outside of element'
date: 2023-06-10 12:43 +0300
notebook: frontend
tags: [javascript]
---
Drop down menu example

If you have this html:
```
<div class="popup-menu">
	<button class="popup-menu__button"></button>
	<ul class="popup-menu__list hide-popup">
		...
	</ul>
</div>
```
JS:
```
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

// Run function when user clicks anywhere
document.addEventListener('click', hidePopup);

function hidePopup(el) {
	// Check if there is a menu and a button inside what was clicked on
	let targetInside = popupWrapper.contains(el.target);
	// If not, then hide the menu
	if (!targetInside) {
		popupMenu.classList.add('hide-popup');
	}	
}
```