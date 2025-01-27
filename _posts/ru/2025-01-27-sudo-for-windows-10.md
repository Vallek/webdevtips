---
layout: post
title: 'sudo для Windows 10'
date: 2025-01-27 00:00 +0000
notebook: webdev
tags: [windows terminal, cmd, powershell, windows]
---
На линукс системах можно запускать отдельные команды с повышенными правами добавляя перед ними `sudo`. Windows работает по другому и требует запустить все окно приложения от имени админа. Либо так, либо никак. Что лучше для безопасности, но менее удобно)

В Windows 11 наконец-то [завезли](https://devblogs.microsoft.com/commandline/introducing-sudo-for-windows/) sudo, но не на десятку (по крайней мере официально, кто-то уже сдела форк, но я бы не стал рисковать).

К счастью есть готовый аналог в виде программы [gsudo](https://gerardog.github.io/gsudo/). После ее установки, вы можете так же как и на линуксах добавлять к командам `gsudo` или `sudo` и выполнять их с паравами администратора. Еще [пишут](https://github.com/gerardog/gsudo/discussions/331#discussioncomment-11367503), что у gsudo есть фичи, которых нет у ms-sudo.

Стоит добавить, что это может ослабить [безопасность](https://github.com/gerardog/gsudo/security) системы и вы, как всегда, делаете это на свой страх и риск.

gsudo можно в том числе использовать с Windows Terminal, не открывая новое окно (которое из режима quake еще и криво открывается).