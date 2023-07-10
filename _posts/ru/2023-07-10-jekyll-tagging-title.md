---
layout: post
title: 'Как задать title страницы тегов при использовании jekyll-tagging'
date: 2023-07-10 09:54 +0300
notebook: webdev
tags: [jekyll, ruby]
---
Если вы используете расширение jekyll-tagging дял Jekyll, то могли заметить, что на страницах с тегами нет заголовка. Это можно исправить, отредактировав само расширение, то есть ruby gem.

Найдите папку с Ruby: `where ruby`

Путь к гемам: `Ruby\lib\ruby\gems\version\gems\`

Откройте файл `jekyll-tagging-1.1.0\lib\jekyll\tagging.rb`

Найдите

```
data = { 'layout' => layout, 'posts' => posts.sort.reverse!, 'tag' => tag }
```

И поменяйте на что-то вроде:

```
data = { 'layout' => layout, 'posts' => posts.sort.reverse!, 'tag' => tag, 'title' => 'Posts about' + ' ' + tag }
```

Таким же образом вы можете добавить или изменить здесь другие параметры страницы. Например, для мультиязычной версии сайта мне нужно было убрать значение lang у страниц с тегами. И я добавил `'lang' => ''`.