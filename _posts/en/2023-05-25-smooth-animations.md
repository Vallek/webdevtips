---
layout: post
title: 'Smooth animations'
date: 2023-05-25 00:00 +0000
notebook: 'frontend'
tags: [css, animation]
---
Smooth animation functions from different sources

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

From webkit docs
```
transform .25s cubic-bezier(.1,.7,.1,1),box-shadow .25s
```