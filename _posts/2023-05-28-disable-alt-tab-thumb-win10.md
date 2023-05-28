---
layout: post
title: 'Disable thumbnails for alt+tab in win10'
date: 2023-05-28 00:00 +0000
notebook: pc
tags: [regedit, windows]
sources: []
---
1. win+r > regedit
2. HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer
3. Создать `AltTabSettings`, тип `DWORD 32`
4. Поставить значение `1`