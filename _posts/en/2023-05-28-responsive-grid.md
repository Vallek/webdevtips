---
layout: post
title: Responsive grid with one line'
date: 2023-05-28 11:12 +0300
notebook: frontend
tags: [css, responsive, grid]
sources: ['https://www.freecodecamp.org/news/how-to-make-your-html-responsive-by-adding-a-single-line-of-css-2a62de81e431/']
---
It is suitable for rows of elements a la gallery, when you do not need to follow the design very accurately. Example: cards on my [portfolio](https://vallek.github.io/Portfolio/en/index.html)

Version with min()
```
grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
```
Don't forget to check browser support

Original version
```
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```
Note that it uses auto-fill, and not auto-fit. This is important when you have few grid elements so that they do not stretch.