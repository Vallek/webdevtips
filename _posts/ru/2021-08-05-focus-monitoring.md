---
layout: post
title: 'Мониторинг элементов в фокусе'
date: 2021-08-05 00:00 +0000
notebook: frontend
tags: [devtools, focus, chrome, firefox]
sources: []
---
## Chrome
Devtools > Console > Create Live Expression
```
document.activeElement
```
Кликните вне интерфейса Live Expression чтобы сохранить

Наведите курсор на результат, чтобы выделить сфокусированный элемент внутри вьюпорта.
Щелкните правой кнопкой мыши результат и выберите Reveal in Elements panel, чтобы отобразить элемент в дереве DOM на панели элементов.
Щелкните правой кнопкой мыши результат и выберите Store as global variable, чтобы создать временную переменную для узла, которую вы можете использовать в консоли.

## Firefox:
```
var lastElement = document.activeElement;
setInterval(function() {
  if (lastElement != document.activeElement) {
    lastElement = document.activeElement;
    console.log(document.activeElement);
  }
}, 100);
```