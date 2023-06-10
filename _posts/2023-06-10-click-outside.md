---
layout: post
title: 'Detect click outside of element'
date: 2023-06-10 12:43 +0300
notebook: frontend
tags: [javascript]
sources: []
---
На примере выпадающего меню

При условии, что верстка выглядит так:
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

// Выполняем функцию когда юзер кликает в любом месте
document.addEventListener('click', hidePopup);

function hidePopup(el) {
	// Проверяем, есть ли внутри того по чему кликнули попап меню и кнопка
	let targetInside = popupWrapper.contains(el.target);
	// Если нет, то прячем меню
	if (!targetInside) {
		popupMenu.classList.add('hide-popup');
	}	
}
```