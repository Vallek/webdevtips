---
layout: post
title: 'Доступные способы визуально скрыть элемент'
date: 2023-03-13 00:00 +0000
notebook: frontend
tags: [css, accessibility]
---
Рекомендация w3c:
```
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

Расширенный набор свойств и селектор
```
.visually-hidden:not(:focus):not(:active) {
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}
```

visibility: hidden - убирает с дерева доступности