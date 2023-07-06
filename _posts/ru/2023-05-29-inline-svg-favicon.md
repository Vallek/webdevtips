---
layout: post
title: 'Инлайновая svg фавиконка'
date: 2023-05-29 12:02 +0300
notebook: frontend
tags: [svg, favicon]
sources: []
---
Код включает в себя escape символы, чтобы не ругался валидатор.
```
<link rel="icon" 
href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%20%3E%3Ctext%20y=%22.9em%22%20font-size=%2290%22%20%3E✊%3C/text%20%3E%3C/svg%20%3E">

```
Подробности истории у меня [в блоге](https://vallek.github.io/webval-blog/2022/06/02/fix-svg-favicon-error.html). 