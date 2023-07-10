---
layout: post
title: 'Локальный валидатор html/css от w3c'
date: 2023-05-31 12:11 +0300
notebook: frontend
tags: [validation, html, css]
---
Не все знают, что [новый w3c валидатор](https://validator.w3.org/nu/) можно запускать локально.

1. Скачайте [последний](https://github.com/validator/validator/releases/tag/latest) релиз. Файл `vnu.windows.zip` для Windows

2. Запустите команду в терминале `путь_к_папке/vnu-runtime-image/bin/java nu.validator.servlet.Main 8888`

3. Сайт будет доступен по адресу http://localhost:8888/

Другие варианты запуска можно [посмотреть в доках](https://validator.github.io/validator/), например как npm пакет 