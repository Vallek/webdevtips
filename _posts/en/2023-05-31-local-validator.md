---
layout: post
title: 'Local w3c html/css validator'
date: 2023-05-31 12:11 +0300
notebook: frontend
tags: [validation, html, css]
sources: []
---
You can run [Nu Validator](https://validator.w3.org/nu/) locally.

1. Download [latest](https://github.com/validator/validator/releases/tag/latest) release. File `vnu.windows.zip` for windows

2. Execute `путь_к_папке/vnu-runtime-image/bin/java nu.validator.servlet.Main 8888` in terminal

3. Open site at http://localhost:8888/

Other options are [in docs](https://validator.github.io/validator/), for example you can install it as an npm package 