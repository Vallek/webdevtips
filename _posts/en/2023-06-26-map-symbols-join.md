---
layout: post
title: 'If map() with template literal generate extra characters'
date: 2023-06-26 18:31 +0300
notebook: frontend
tags: [javascript]
sources: [https://stackoverflow.com/a/45812277/9749171]
---
If you use the `map()` method and as a result of executing a function with a template literal you have extra characters from the array (commas, brackets), then apply `join()` method after `map()`.

Like this:
```
let variable = array.map(el => {
		// code with template literal
		return result;
	}).join('');
```