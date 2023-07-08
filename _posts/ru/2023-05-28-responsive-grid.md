---
layout: post
title: 'Адаптивные гриды одной строкой'
date: 2023-05-28 11:12 +0300
notebook: frontend
tags: [css, responsive, grid]
sources: ['https://www.freecodecamp.org/news/how-to-make-your-html-responsive-by-adding-a-single-line-of-css-2a62de81e431/']
---
Подходит для рядов элементов а-ля галлерея, когда не нужен точный дизайн на адаптиве. Пример: карточки на моем [портфолио](https://vallek.github.io/Portfolio/index.html)

Версия с min()
```
grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
```
Проверьте необходимую поддержку браузеров!

Оригинальная версия 
```
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```
Обратите внимание, что используется auto-fill, а не auto-fit. Это важно, когда у вас мало грид элементов, чтобы они не вытягивались.