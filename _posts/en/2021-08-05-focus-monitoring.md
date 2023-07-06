---
layout: post
title: 'Мониторинг элементов в фокусе'
date: 2021-08-05 00:00 +0000
notebook: frontend
tags: [devtools, focus, chrome, firefox]
sources: []
---
## Chrome
Console > Create Live Expression
```
document.activeElement
```
Click outside of the Live Expression UI to save

Hover over the result to highlight the focused element in the viewport.
Right-click the result and select Reveal in Elements panel to show the element in the DOM Tree on the Elements panel.
Right-click the result and select Store as global variable to create a variable reference to the node that you can use in the Console.

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