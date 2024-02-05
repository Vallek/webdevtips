---
layout: post
title: 'Как вставить на страницу последнее видео с youtube канала без API'
date: 2024-02-05 00:00 +0000
notebook: frontend
tags: [html, iframe, youtube]
---
Чтобы вставить на страницу iframe, который всегда будет показывать последнее видео с ютьюб канала без API:

1. Узнайте свой код канала. Для этого можно зайти на ютьюб (не студию, а просто) > нажать на аватарку в углу > Настройки > Расширенные настройки. И там будет Идентификатор канала. Кроме того это часть url адреса, которую можно увидеть, если вы не меняли адрес канала на уникальный или в студии в Настройках канала.
2. Первая буква будет U, а вторая какая-то другая. Нужно **поменять** вторую на U. То есть в начале будет UU. Например было `UCzS4sE_0ltfSz6qx_FUCTdA`, а станет `UUzS4sE_0ltfSz6qx_FUCTdA`.
3. В значении атрибута src укажите `https://www.youtube.com/embed?listType=playlist&list=КОД_КАНАЛА`
4. Получаем что-то вроде

```html
<iframe loading="lazy" class="video__last-video" width="350" height="250" title="Последний видосик на канале" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed?listType=playlist&list=UUzS4sE_0ltfSz6qx_FUCTdA"></iframe>
```

В итоге у вас получится плейлист всех видео с канала, но показан будет именно последний. Я использую этот подход на своем [портфолио](https://vallek.github.io/). 

Из минусов: невозможность использования [lazy load методов по клику]({{site.baseurl}}/ru/youtube-lazy-load). Впрочем, если вам нужно только одно видео на странице, то это не самая большая проблема. Стоит указать [нативный lazy](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading), который не загрузит iframe, пока он не на экране.