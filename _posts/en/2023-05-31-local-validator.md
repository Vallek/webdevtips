---
layout: post
title: 'Local w3c html/css validator'
date: 2023-05-31 12:11 +0300
notebook: frontend
tags: [validation, html, css]
sources: []
---
You can run [Nu Validator](https://validator.w3.org/nu/) locally.

1. Скачайте [latest](https://github.com/validator/validator/releases/tag/latest) release. File `vnu.windows.zip` for windows

2. Запустите команду в терминале `путь_к_папке/vnu-runtime-image/bin/java nu.validator.servlet.Main 8888`

3. Сайт будет доступен по адресу http://localhost:8888/

Другие варианты запуска можно [посмотреть в доках](https://validator.github.io/validator/), например как npm пакет 