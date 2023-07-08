---
layout: post
title: 'How to press down footer'
date: 2021-02-24 00:00 +0000
notebook: frontend
tags: [css, flexbox]
sources: ['https://ishadeed.com/article/viewport-units/#2-second-solution-flexbox-and-viewport-units-recommended']
---
Modern way via flexbox:
```
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    /* This will make the main element take the remaining space dynamically */
    flex-grow: 1;
}
```