---
layout: post
title: 'Подсветка тегов разными цветами в коде в gutter в VS Code'
date: 2023-05-29 14:18 +0300
notebook: webdev
tags: [vs code]
sources: []
---
Кто тоже использует расширение Highlight Matching Tag в VS Code и хочет сделать подчеркивание и отметки справа разными цветами ловите настройки:
```
"highlight-matching-tag.styles": {
        "opening": {
            "name": {
                "custom": {
                    "dark": {
                        "overviewRulerColor": "yellow"
                    },
                },
                "underline": "#839496",
            }
        }
    },
```
это для темной темы. Для светлой ставьте "light"