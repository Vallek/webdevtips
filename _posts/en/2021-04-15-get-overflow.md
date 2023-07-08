---
layout: post
title: 'Find the element that overflows viewport'
date: 2021-04-15 00:00 +0000
notebook: frontend
tags: [javascript, css, qa]
sources: []
---
If you see horizontal scroll on your site it means some elements boxes are overflowing (go beyon viewport borders). 

To find it open browser console and execute:
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