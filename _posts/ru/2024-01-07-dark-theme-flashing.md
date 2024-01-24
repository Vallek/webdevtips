---
layout: post
title: 'Темная тема мигает белым при загрузке страницы'
date: 2024-01-07 00:00 +0000
notebook: frontend
tags: [css, dark theme, javascript, accessibility]
---
**upd:** я сделал [видео гайд по созданию темной темы](https://youtu.be/VWxIhcdQcjc) и исправлению проблем, которые могут возникнуть

При использовании темной темы по [этому рецепту]({{site.baseurl}}/ru/dark-theme-detect) пользователь может видеть "вспышку" белого цвета. Это нестилизованная страница с белым фоном по умолчанию, которую видно, до загрузки CSS и JS. 

Это возможно исправить, если перенести часть JS определяющую сохраненную и предпочитаемую тему в **самое начало** тело страницы, то есть внутрь `<body>` в html. 

```
<body>
<script>
	const thisPage = document.querySelector('.page');

	// Check if user set dark theme before
	if (localStorage.getItem('this-site-theme') == 'dark') {
		thisPage.classList.add('dark');
	}
	// Check if user prefers dark theme
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		thisPage.classList.add('dark');
	}
</script>
```

В отдельном JS файле останется все остальное:

```
'use strict';

const page = document.querySelector('.page');
const lightThemeLink = document.querySelector('.themes__link_light');
const darkThemeLink = document.querySelector('.themes__link_dark');

// Check theme preference switch real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme == 'dark') {
		page.classList.add('dark');
	}
	if (newColorScheme == 'light') {
		page.classList.remove('dark');
	} 
});

// Turn dark theme on
darkThemeLink.addEventListener('click', setDark);
function setDark(el) {
	el.preventDefault();
	page.classList.add('dark');
	localStorage.setItem('this-site-theme', 'dark');
}

// Turn light theme on
lightThemeLink.addEventListener('click', setLight);
function setLight(el) {
	el.preventDefault();
	page.classList.remove('dark');
		localStorage.setItem('this-site-theme', 'light');
}
```

Обратите внимание, что и там и там используется узел `body`, но с разными именами переменных. Не самый изящный способ, но позволяющий не думать о связанности кода. В данном случае влияние на скорость нулевое, но экстраполировать на 500 узлов, конечно, не стоит)