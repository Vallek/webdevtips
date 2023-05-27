'use strict';
const tagsContainer = document.querySelector('.tags-cloud__tags');
const firstTag = tagsContainer.querySelector('a[class^="set-"]');
const tags = tagsContainer.querySelectorAll('a[class^="set-"]');

// Random color for first tag
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// firstTag.style.setProperty("--hue", getRandomInt(360));

// Step change hue for the rest of tags
for (let i = 0; i < tags.length; i++) {
	let prevEl = tags[i].previousElementSibling;
	if (prevEl !== null) {
			let prevValue = getComputedStyle(prevEl).getPropertyValue('--hue');
			tags[i].style.setProperty('--hue', Number(prevValue) + 3);
	}
}