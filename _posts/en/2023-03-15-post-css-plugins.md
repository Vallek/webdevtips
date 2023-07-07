---
layout: post
title: 'Launching postcss plugins'
date: 2023-03-15 00:00 +0000
notebook: frontend
tags: [css, postcss]
---
CSS Autoprefixer:
```
postcss --use autoprefixer -o css/style-prefixed.css css/style.css --no-map
```

CSS minification:

```
postcss --use postcss-minify -o css/style-prefixed-min.css css\style-prefixed.css --no-map 
```