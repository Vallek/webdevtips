---
layout: post
title: 'Как открыть XAMPP Wordpress localhost на мобильном'
date: 2025-04-29 00:00 +0000
notebook: webdev
tags: [local server, xampp, mobile, qa, windows]
sources: ['https://stackoverflow.com/a/48990347/9749171', 'https://stackoverflow.com/a/7650646/9749171', 'https://stackoverflow.com/a/78978044/9749171']
---
Я уже писал о том, как [открыть localhost на мобильном](https://vallek.github.io/webdevtips/ru/localhost-on-mobile). Тот рецепт подходит, когда речь о простом [локальном сервере](https://vallek.github.io/webdevtips/ru/local-servers) с фронтендом. Но если у вас wordpress, запущенный на XAMPP, то просто так вы его на мобильном не откроете) Придется разрешить к нему доступ в фаерволе и поменять порты.

ВНИМАНИЕ: любое ослабление правил безопасности всегда теоретически понижает безопасность! Вы делаете это на свой страх и риск.

Порядок действий:

1. Остановить сервер в XAMPP (Stop Apache)
2. Поменять везде порт `80` на порт `8080`. А именно:

	2.1. В настройках (Config > Service and Port settings)

	2.2. В файле `httpd.conf` (Apache Config) - заменить `Listen 80` и добавить `Listen IPv4-адрес:8080` (свой адрес смотрите в cmd > ipconfig)

	2.3 В файле httpd-xampp.cong (Apache Config) - найдите строку `<Directory "C:/xampp/phpMyAdmin">` и замените `Require local` на `Require all granted`
3. Панель управления Windows > Брэндмауэр защитника Windows > Дополнительные параметры > Правила для входящих подключений > найти правило для Apache HTTP Server (В протоколе должно быть TCP, там еще будет UPD). В свойствах будет `блокировать`, выберете `разрешить`. Там же можно повысить безопасность доп. средствами (например разрешить только ip вашего мобильного, у меня он почему-то считается удаленным).
4. В `wp-config.php` добавить
	```
	define('WP_HOME','http://IPv4-адрес:8080/website');
	define('WP_SITEURL','http://IPv4-адрес:8080/website');
	```
5. Включить сервер в XAMPP
6. На мобильном открыть `http://IPv4-адрес:8080/website` (не забудьте, что нужно подключение по вайфаю!)

Учтите, что все пути на сайте с `localhost` в url не будут работать. Включая подгрузку ресурсов. Можно заменить все localhost на url:port через расширение [Better Search and Replace](https://wordpress.org/plugins/better-search-replace/). Или можете протестировать сайт без замены просто вводя ссылки вручную, но опять же могут не подгружаться картинки и т.п.