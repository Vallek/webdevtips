---
layout: post
title: 'Репозиторий внутри репозитория в vs code'
date: 2023-02-07 00:00 +0000
notebook: webdev
tags: [vs code, git, jekyll]
---
Чтобы source control поддерживал репу внутри репы нужен опр. порядок папок в workspace (если у вас открыто много папок в файловом менеджере vs code). 

Корневой репо должен идти ПОСЛЕ то есть НИЖE внутреннего.

Например, если это сборка джекила, то

```
_site
jekyll-dev
```
В некоторых случаях у меня требовалось поднять _site на самый верх.