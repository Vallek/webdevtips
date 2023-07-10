---
layout: post
title: 'Как избавиться от вопроса "Terminate batch job (Y/N)" в терминале?'
date: 2021-03-30 00:00 +0000
notebook: webdev
tags: [terminal, cmd, clink]
---
Установите Clink [оригинал](http://mridgers.github.io/clink/) или [форк с поддержкой](https://chrisant996.github.io/clink/) и измените настройку "terminate_autoanswer". Файл с настройками [должен быть здесь](https://github.com/mridgers/clink/blob/master/docs/clink.md#file-locations): `C:\Users\<username>\AppData\Local\clink\settings`.
```
# name: Auto-answer terminate prompt 
# type: enum 
# Automatically answers cmd.exe's 'Terminate batch job (Y/N)?' prompts. 
0 = # disabled, 
1 = answer 'Y', 
2 = answer 'N'. 
terminate_autoanswer = 1 
```
или запустите `clink set terminate_autoanswer 1`
Можно посмотреть текущую настройку, если запустить без последнего аргумента. Также можно узнать, где лежит файл конфига через `clink set`.

Эта настройка не отключает вопрос полностью, но позволяет нажать ctrl+c два раза для выключения. 