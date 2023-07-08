---
layout: post
title: 'Плавные CSS анимации'
date: 2023-05-25 00:00 +0000
notebook: 'frontend'
tags: [css, animation]
---
Плавные функции для анимаций из разных источников

```
.smooth {
  animation-timing-function: cubic-bezier(.62,.16,.13,1.01);
}
```

```
.inertia {
  animation-timing-function: cubic-bezier(.5,-0.53,.14,1.23);
}
```

Из webkit docs
```
transform .25s cubic-bezier(.1,.7,.1,1),box-shadow .25s
```