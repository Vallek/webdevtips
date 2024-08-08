---
layout: post
title: 'Чем отличаются inherit, initial, unset и revert?'
date: 2024-08-08 00:00 +0000
notebook: frontend
tags: [css]
---
inherit - значение свойства наследуется от родителя

initial - откатывает к значению **по спецификациям** (w3c)

unset - если может наследоваться, то будет. А если нет, то откатится к значению по спецификациям.

revert - откатывает к значению **в браузерных стилях** по умолчанию (user agent stylesheet)

![](../img/inherit.jpg)

Подробности [в моем видео](https://youtu.be/Ne_ls6OzRF0?feature=shared) на тему.