---
layout: post
title: 'Disable thumbnails for alt+tab in Windows 10'
date: 2023-05-28 00:00 +0000
notebook: pc
tags: [regedit, windows]
---
1. win+r > regedit
2. HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer
3. Create `AltTabSettings`, `DWORD 32` type
4. Set value `1`