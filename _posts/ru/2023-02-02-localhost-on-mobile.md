---
layout: post
title: 'Открыть localhost на мобильном'
date: 2023-02-02 00:00 +0000
notebook: webdev
tags: [local server, mobile, qa]
sources: ['https://stackoverflow.com/questions/4779963/how-can-i-access-my-localhost-from-my-android-device/4779992#4779992']
---
Когда нужно протестировать сайт работающий на локальном сервере на смартфоне.

Работает, при условии, что вы на своем вайфае. Краткое содержание:

1. В терминале ipconfig

2. Берете IPv4-адрес

3. Добавляете к нему соотв порт. Например, у вас локальный сервер на :5500/ 

Это работает для live server на vs code. Но не работает на jekyll server. Чтобы заработало нужно в _config.yml добавить host: 0.0.0.0

Учтите, что в этом случае команда jekyll serve будет писать localhost в feed и возможно другие места. Поэтому для сборки на продакшен используйте jekyll build.

Сам адрес в браузере при этом менять не нужно.