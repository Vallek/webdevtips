---
layout: post
title: 'Заблокировать элемент в adblock по содержимому'
date: 2022-08-09 00:00 +0000
notebook: pc
tags: [adblock]
sources: []
---
Синтаксис

content - содержимое по которому вы хотите заблокировать элемент
```
url#?#selector:-abp-has(selector:-abp-contains(content))
```
Примеры:

Скрыть результат из выдачи гугл, содержащий адрес "fandom.com"
```
google.com#?#div.MjjYud:-abp-has(cite:-abp-contains(fandom.com))
```

Скрыть рекомендации на ютьюбе со словом New
```
youtube.com#?#ytd-compact-video-renderer:-abp-has(span:-abp-contains(New))
```