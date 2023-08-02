'use strict';
// Находим нужные узлы
const popupButton = document.querySelectorAll('.site-nav__button');
const popupWrap = document.querySelectorAll('.site-nav__dropdown');

// Выполняем функцию когда юзер кликает по кнопке
popupButton.forEach((el) => {
	el.addEventListener('click', handleMenu);
});

// Функция, которая показывает и скрывает попап
function handleMenu(el) {
	let a = el.target.nextElementSibling.classList;
	if (a.contains('visually-hidden')) {
		a.remove('visually-hidden');
		a.add('visually-show');
	}
	else if (!a.contains('visually-hidden')) {
		a.add('visually-hidden');
		a.remove('visually-show');
	}
}

// Выполняем функцию когда юзер кликает в любом месте
document.addEventListener('click', hidePopup);

// Проверяем, есть ли внутри того по чему кликнули попап меню и кнопка
function hidePopup(el) {

	popupWrap.forEach((it) => {
		let targetInside = it.contains(el.target);
		let popupList = it.querySelector('.site-nav__list');
		if (!targetInside) {
			popupList.classList.add('visually-hidden');
			popupList.classList.remove('visually-show');
		}	
		else {
			return;
		}
	});
}