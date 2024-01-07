---
layout: post
title: 'White flashing with dark theme on page load'
date: 2024-01-07 00:00 +0000
notebook: frontend
tags: [css, dark theme, javascript, accessibility]
---
Using [this method]({{site.baseurl}}docs/en/dark-theme-detect) to make a dark theme your site users could see a white flashing of default page background before CSS and JS are loaded. It could also happened with other methods.

You can fix it by moving part of JS that detect saved and preferred theme to the very start of the `<body>` element in html. Like this:

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

Leave the rest in separate JS file:

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

Notice that both scripts use `body` node but with different variables. Not the most elegant solution but it keeps scripts independent. Just don't do this with 500 nodes)