---
layout: post
title: 'Как убрать localhost из jekyll-feed'
date: 2023-07-10 10:33 +0300
notebook: webdev
tags: [jekyll]
---
`jekyll serve` может заменять url вашего сайта в фиде на `localhost`. Это можно исправить командой `jekyll build`, каждный раз отдельно выполняя сборку для продакшена. Но это не реальное решение проблемы.

Вместо этого можно вручную отредактировать расширение jekyll-feed и добавить туда ваш адрес. 

Найдите папку с Ruby: `where ruby`

Путь к гемам: `Ruby\lib\ruby\gems\version\gems\`

Откройте файл `jekyll-feed-0.17.0\lib\jekyll-feed\feed.xml`

Это шаблон для rss фида. Вам нужно найти все места с `{% raw %}{{ page.url | absolute_url }}{% endraw %}` и `{% raw %}{{ post.url | absolute_url }}{% endraw %}` и заменить их на `https://username.github.io/example{% raw %}{{ page.url }}{% endraw %}` и `https://username.github.io/example{% raw %}{{ post.url }}{% endraw %}`.

Не перепутайте посты со страницами.