---
layout: post
title: 'Responsive fonts'
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

The size is adjusted as flexibly as possible, between the minimum, the preferable taking the viewport into account and the maximum.