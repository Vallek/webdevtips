---
layout: post
title: 'Найти элемент выходящий за вьюпорт'
date: 2021-04-15 00:00 +0000
notebook: frontend
tags: [javascript, css, qa]
---
Как найти элемент, выходящий за вьюпорт/родителя

Выполните в консоле браузера:

```
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
```