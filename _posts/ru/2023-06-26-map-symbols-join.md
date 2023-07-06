---
layout: post
title: 'Если map() с template literal выдает лишние символы'
date: 2023-06-26 18:31 +0300
notebook: frontend
tags: [javascript]
sources: [https://stackoverflow.com/a/45812277/9749171]
---
Если вы используете метод `map()` и в результате выполнения функции с template литералом внутри у вас остаются лишние символы из массива (запятые, скобки), то достаточно применить после `map()` метод `join()`.

Вот так:
```
let variable = array.map(el => {
		// code with template literal
		return result;
	}).join('');
```