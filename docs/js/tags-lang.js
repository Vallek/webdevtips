'use strict';
let pageLang = document.querySelector('html').getAttribute('lang');

if (pageLang != '') {
	localStorage.setItem('currLang', pageLang);
}

if (pageLang == '') {
	let ruTags = document.querySelector('.tags_ru');
	let enTags = document.querySelector('.tags_en');
	let currLang = localStorage.getItem('currLang');
	if (currLang == 'ru') {
		enTags.remove();
	} 
	else if (currLang == 'en') {
		ruTags.remove();
	}
}

