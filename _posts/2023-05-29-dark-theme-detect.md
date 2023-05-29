---
layout: post
title: 'Как детектить выбор темной/светлой темы посетителя'
date: 2023-05-29 13:50 +0300
notebook: frontend
tags: [css, dark theme, javascript, accessibility]
sources: [https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript/57795495#57795495]
---
На входе
```
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
}
```

В реальном времени
```
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});
```

Я использую этот метод в своей [подборке ссылок](https://vallek.github.io/web-links/index.html). На момент написания это выглядит так:
В CSS я просто добавил класс dark, который динамически миксуется к классу page, переписывая цвета специфичностью (два класса). Не по БЭМу, но как часто советуют сначала делал, чтобы работало) Потом может перепишу под БЭМ.
```
.dark.page {background-color:#002B36;} 
.dark header {color:#c3d5d9;} 
и так далее
``` 
JS:
```
const page = document.querySelector('.page');
// Theme switch buttons
const lightThemeLink = document.querySelector('.themes__link_light');
const darkThemeLink = document.querySelector('.themes__link_dark');

// Check if user set dark theme before
if (localStorage.getItem('themeIs') == 'Dark') {
	page.classList.add('dark');
}

// Check if user prefers dark theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	page.classList.add('dark');
}

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
	localStorage.setItem('themeIs', 'Dark');
}

// Turn light theme on
lightThemeLink.addEventListener('click', setLight);
function setLight(el) {
	el.preventDefault();
	page.classList.remove('dark');
		localStorage.setItem('themeIs', 'Light');
}
```

Это, кажется, покрывает все кейсы.

В CSS есть медиа-запрос prefers-color-scheme, но у него гораздо *у*же поддержка и на без JS все равно не обойтись (интерактивное переключение), так что не вижу смысла его использовать.