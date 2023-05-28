---
layout: post
title: 'Убрать файл из коммита'
date: 2023-02-17 00:00 +0000
notebook: webdev
tags: [git]
---
```
git reset --soft HEAD~1
```

после этого изменения можно будет снова отправить в stage и закоммитить только нужный файл