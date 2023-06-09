---
layout: post
title: 'Переключение версий node.js/npm'
date: 2023-04-17 00:00 +0000
notebook: 'webdev'
tags: [nodejs, npm, nvm]
---
Иногда старые проекты на node.js не запускаются на новых версиях ноды или npm. Если при сборке вы видите кучу ошибок об устаревших версиях и конфликтах, не спешите сдаваться. Возможно поможет использование старой ноды или npm. 

Для установки разных версий на одну ОС существует несколько разных программ. Я использую **nvm**. Версию для винды можно [скачать тут](https://github.com/coreybutler/nvm-windows).

С помощью nvm можно установить не только разные версии ноды, но и разные npm. Их можно привязать к версиях ноды. То есть например ноду берете предыдущий патч, а npm устанавливаете, который вам нужно.

Узнать, куда nvm устанавливает версии ноды `nvm root`. Осторожно! Эта же команда с путем меняет путь установки.

Установить конкретную версия npm на активную версию ноды

`npm install npm@X.X.X`

Например `npm install npm@6.14.18`

Переключить версию ноды (версия npm привязана к версии ноды)

`nvm use XX`

Например `nvm use 16`

Про все остальные команды читайте по ссылке в readme репозитория выше.


