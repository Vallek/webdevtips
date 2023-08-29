'use strict';
// Nodes
const popupButton = document.querySelectorAll('.site-nav__button');
const popupWrap = document.querySelectorAll('.site-nav__dropdown');
const links = document.querySelectorAll('.site-nav__link');

// Show/hide menu on buttons focus/unfocus
popupButton.forEach((el) => {
	el.addEventListener('focus', showMenu);
	el.addEventListener('focusout', hideMenu);
	el.addEventListener('mousedown', toggleMenu);
});

// Show/hide menu on links focus/unfocus
links.forEach((el) => {
	el.addEventListener('focus', showMenu);
	el.addEventListener('focusout', hideMenu);
});

// Show menu
function showMenu(el) {
	// Universal list node search from button or links
	let list = el.target.closest('.site-nav__dropdown').querySelector('.site-nav__list').classList;
	list.remove('visually-hidden');
	list.add('visually-show');
}

// Hide menu
function hideMenu(el) {
	// Universal list node search from button or links
	let list = el.target.closest('.site-nav__dropdown').querySelector('.site-nav__list').classList;
	list.remove('visually-show');
	list.add('visually-hidden');
}

// Show/hide menu
function toggleMenu(el) {
	let list = el.target.nextElementSibling.classList;
	if (list.contains('visually-show')) {
		list.remove('visually-show');
		list.add('visually-hidden');
	}
	else {
		list.remove('visually-hidden');
		list.add('visually-show');
	}
}
