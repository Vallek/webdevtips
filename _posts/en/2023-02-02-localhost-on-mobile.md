---
layout: post
title: 'Open localhost on smartphone'
date: 2023-02-02 00:00 +0000
notebook: webdev
tags: [local server, mobile, qa]
sources: ['https://stackoverflow.com/questions/4779963/how-can-i-access-my-localhost-from-my-android-device/4779992#4779992']
---
Works if you on your wifi.

1. Execute ipconfig in terminal

2. Copy IPv4-address value

3. Add your local server port to it. For example :5500/ 

Works for live server in vs code. But not for jekyll server. For that you need to add добавить `host: 0.0.0.0` in `_config.yml`

You don't need to change url in browser