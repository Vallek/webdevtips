---
layout: post
title: 'Как клонировать гит репозиторий в любую папку'
date: 2023-06-17 16:50 +0300
notebook: webdev
tags: [git]
sources: [https://stackoverflow.com/a/651079/9749171]
---
Из любого места:
```
git clone https://github.com/user/repo-name path/folder-name
```
Имя папки репозитория станет `folder-name` вместо имени репозитория (как это происходит при клонировании по умолчанию).

В активную папку (то есть прямо сюда):
```
git clone https://github.com/user/repo-name .
```

В источнике гит адрес пишут по другому, но у меня работает обычный url.