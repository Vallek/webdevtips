---
layout: post
title: 'How to detect light/dark theme preference'
date: 2023-05-29 13:50 +0300
notebook: frontend
tags: [css, dark theme, javascript, accessibility]
sources: [https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript/57795495#57795495]
---
On load
```
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
}
```

In real time
```
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});
```

I use this method in my [frontend links page](https://vallek.github.io/web-links/en/index.html). На момент написания это выглядит так:

In CSS, I just added a dark theme class that got dynamically mixed to the page class, rewriting colors with specificity (two classes). Not by BEM, but as often advised, I did it first to make it work) Then maybe I'll rewrite it under BEM.
```
.dark.page {background-color:#002B36;} 
.dark header {color:#c3d5d9;} 
and so on
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

This about to cover all cases

CSS has a `prefers-color-scheme` media query, but it has much less support and you can't do it without JS anyway (interactive switching).

To fix white flashing during page loading use [this method]({{site.baseurl}}/en/dark-theme-flashing).