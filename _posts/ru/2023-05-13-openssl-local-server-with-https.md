---
layout: post
title: 'Локальный сервер OpenSSL с HTTPS'
date: 2023-05-13 00:00 +0000
notebook: 'webdev'
tags: [local server, https, openssl]
---
Как запустить локальный сервер на https. Нужно, например, для тестирования js модулей.

Для начала устанавливаете openssl [отсюда](https://wiki.openssl.org/index.php/Binaries). На винде там неофиц. версии, но вроде пишут, что норм. По крайней мере для теста.

Открываете терминал. Переходите в папку проекта и выполняете 

`openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`

Это создаст два файла сертификатов, необходимых для работы https

Оно спросит ввести несколько параметров типа имени, страны. Вроде бы можно вводить любые кроме Common Name. Тут нужен 127.0.0.1 для локального сервера.

Дальше ставим сервер. У меня сразу получилось с [http-server](https://www.npmjs.com/package/http-server). Для live server нужно писать конфиг с путями к файлам.

`npm install --global http-server`

И запускаем 

`http-server -S -C cert.pem`

-S - это https
-C - это путь к файлам. У меня работало только когда в папке проекта.