---
layout: post
title: 'Firefox игнорирует цветовой профиль монитора'
date: 2023-05-29 14:10 +0300
notebook: frontend
tags: [firefox]
sources: []
---
В Firefox не работает color management, то есть он игнорирует цветовой профиль монитора srgb и цвета искажены.

Убедитесь, что в about:config выставлено:
```
gfx.color_management.enablev4 - true	
gfx.color_management.force_srgb - true	
gfx.color_management.mode - 1	
gfx.color_management.native_srgb - true
```

[Картинка для проверки](http://www.lagom.nl/lcd-test/gradient.php#gradient-h.png). Градиент должен быть плавным (сравните с Хромом, может быть дело и в вашем мониторе, софте и т.д).