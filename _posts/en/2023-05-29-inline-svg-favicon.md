---
layout: post
title: 'Inline svg favicon'
date: 2023-05-29 12:02 +0300
notebook: frontend
tags: [svg, favicon]
sources: []
---
Code includes escape symbols so validator wouldn't show error
```
<link rel="icon" 
href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%20%3E%3Ctext%20y=%22.9em%22%20font-size=%2290%22%20%3E✊%3C/text%20%3E%3C/svg%20%3E">

```
