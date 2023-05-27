---
layout: post
title: 'Адаптивные шрифты'
date: 2023-05-27 00:00 +0000
notebook: frontend
tags: [css, fonts, responsive]
sources: ['https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/']
---
```
.heading {
  font-size: clamp(2rem, 5vw + 1rem, 5rem);
}
```

Размер регулируется максимально гибко, между минимальным, предпочтительным с учетом вьюпорта и максимальным.