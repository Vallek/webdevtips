---
layout: post
title: 'Заблокировать элемент в adblock по содержимому'
date: 2022-08-09 00:00 +0000
notebook: pc
tags: [adblock]
sources: []
---
Синтаксис
```
url#?#selector:-abp-has(selector:-abp-contains(content))
```
Примеры:

Скрыть результат из выдачи гугл
```
google.com#?#div.MjjYud:-abp-has(cite:-abp-contains(fandom.com))
```

Скрыть рекомендуции на ютьюбе
```
youtube.com#?#ytd-compact-video-renderer:-abp-has(span:-abp-contains(New))
```