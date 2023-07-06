---
layout: post
title: 'Запуск css плагинов postcss'
date: 2023-03-15 00:00 +0000
notebook: frontend
tags: [css, postcss]
---
Запуск css плагинов postcss

Автопрефиксер css
```
postcss --use autoprefixer -o css/style-prefixed.css css/style.css --no-map
```

Минификация css

```
postcss --use postcss-minify -o css/style-prefixed-min.css css\style-prefixed.css --no-map 
```