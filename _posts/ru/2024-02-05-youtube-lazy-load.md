---
layout: post
title: 'Embeded Youtube Lazy Loading по клику'
date: 2024-02-05 00:00 +0000
notebook: frontend
tags: [youtube, lazy load, iframe, html]
sources: ['https://css-tricks.com/lazy-load-embedded-youtube-videos/']
---
Существует множество способов ленивой загрузки ютьюб видео по клику. В основном все они используют сторонние JS-библиотеки, либо, как минимум, какой-то JS код.

Но существует способ создать загрузку айфрейма по клику только силами html) 

Выглядит это так:

```html
<iframe class="video__last-video" width="350" height="250" src="https://www.youtube.com/embed/Ne_ls6OzRF0" title="Последний видосик на канале" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen srcdoc="<title>Последний видосик на канале</title><style>*{padding:0;margin:0;overflow:hidden;}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}a:focus-visible span{outline: 3px dashed rgb(255, 19, 255);outline-offset: -5px;}</style><a href='https://www.youtube.com/embed/Ne_ls6OzRF0?autoplay=1'><img src='https://i.ytimg.com/vi/Ne_ls6OzRF0/sddefault.jpg' alt=''><span>▶</span></a>"></iframe>
```

Суть в использовании атрибута `srcdoc`, который позволяет прописать HTML содержимое, переписывая то, что в `src`. При этом если туда поместить ссылку с изначальным адресом, то по клику в iframe загрузиться нужное видео.

Вы также можете стилизовать lazy load заглушку с помощью элемента style. Кнопка play задается простым символом стрелки в html коде.

Такой вот сделай сам lazy load. Этот способ вряд ли подойдет там, где нужно регулярно менять отображаемое видео или если их нужно вставлять часто в разных местах. Но для постоянного видео на статичной странице вполне может подойти, если вы не хотите подключать лишний JS.

Я использовал его на своем портфолио, но отказался от lazy load, когда начал чаще вести канал, как раз из-за необходимости постоянно [менять видео на последнее]({{site.baseurl}}/ru/youtube-last-video).

[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) - более продвинутый способ с использованием custom elements от одного из разработчиков Хрома. Также не позволяет использовать плейлист.

Я нашел несколько вариантов для плейлиста в сети, но они либо не рабочие, либо не то, что мне нужно. Если найду способ сделать lazy load для последнего видео, обновлю эту заметку. Или можете написать в комментах, если знаете сами)