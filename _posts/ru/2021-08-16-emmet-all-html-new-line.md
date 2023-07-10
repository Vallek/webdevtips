---
layout: post
title: 'Emmet все html элементы на своей строке'
date: 2021-08-16 00:00 +0000
notebook: frontend
tags: [emmet, html, vs code]
---
Для встроенного в VS Code emmet. Чтобы все элементы создавались на новой строке, а не одной. Включая например ссылки внутри пунктов меню. 

В settings.json добавьте
```
"emmet.syntaxProfiles": {
	"html": {
		"inline_break": 1
	}
},
```