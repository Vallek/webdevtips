---
layout: post
title: 'Ошибка PHP GD Library extension'
date: 2023-04-12 00:00 +0000
notebook: backend
tags: [php, local server]
---
Если вы используете локальный сервер на php и получаете ошибку
`GD Library extension not available with this PHP installation` или что-то подобное.

Найдите файл *php.ini* и раскомментируйте строчку `extension=gd`