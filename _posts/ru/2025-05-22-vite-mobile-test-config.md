---
layout: post
title: 'Как тестировать сборку Vite локально на мобильном (и задеплоить на гитхаб)'
date: 2025-05-22 00:00 +0000
notebook: webdev
tags: [vite, local server, mobile, qa, github]
sources: []
---
Продолжение серии заметок о том, как открывать локальный сервер на мобильных для тестирования (для [простого фронтенда](https://vallek.github.io/webdevtips/ru/localhost-on-mobile), для [XAMPP](https://vallek.github.io/webdevtips/ru/xampp-wp-mobile)). На этот раз речь о встроенном сервере в сборщике [Vite](https://vite.dev/).

Создайте файл `vite.config.js` в корне проекта с содержимым:
```
export default {
  base: '/github-repo-name/',
  server: {
    host: 'ваш-локальный-ip'
  }	
}
```

`host` - здесь укажите ваш локальный IP (введите ipconfig в терминале, скопируйте значение `IPv4-адрес`).

`base` нужен для сборки на Гитхабе. Укажите там название репозитория и используйте [action из доков](https://vite.dev/guide/static-deploy#github-pages).

Я привожу пример конфига с `base`, еще и потому что в офиц. документации нормального примера синтаксиса конфига с опциями я не увидел) Обратите внимание, что опции вида `server.host` записываются в конфиге, как свойство объекта, который сам является объектом.