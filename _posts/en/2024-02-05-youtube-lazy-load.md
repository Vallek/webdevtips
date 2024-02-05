---
layout: post
title: 'Embeded Youtube Lazy Loading on lick'
date: 2024-02-05 00:00 +0000
notebook: frontend
tags: [youtube, lazy load, iframe, html]
sources: ['https://css-tricks.com/lazy-load-embedded-youtube-videos/']
---
There are a lot of different youtube video lazy loading methods. Most of them are using js libraries or at least some js code.

But you can make it with just html trick) 

It looks life this

```html
<iframe class="video__last-video" width="350" height="250" src="https://www.youtube.com/embed/Ne_ls6OzRF0" title="Latest video on channel" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen srcdoc="<title>Latest video on channel</title><style>*{padding:0;margin:0;overflow:hidden;}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}a:focus-visible span{outline: 3px dashed rgb(255, 19, 255);outline-offset: -5px;}</style><a href='https://www.youtube.com/embed/Ne_ls6OzRF0?autoplay=1'><img src='https://i.ytimg.com/vi/Ne_ls6OzRF0/sddefault.jpg' alt=''><span>▶</span></a>"></iframe>
```

We are using `srcdoc` attribute, that lets you insert html content instead of src original contents. And if you put link there with original url it will load the video on click (or two).

You can also style lazy ui with `<style>` tag. Play button is just a simple unicode symbol.

And that's the diy lazy load) This method will not do it for you if you need regularly change the video or put it in many pages. But it's good enough for one video on a static page if you don't want additional JS.

I used it on my site but I had to abandon lazy load for now cause I started to work on videos more actively and needed to [always show the latest one]({{site.baseurl}}/en/youtube-last-video).

[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) is more advanced method using custom elements from a Chrome dev. You can't use playlist with it either.

I googled couple options for playlists but they are not working like I want or at all. If I will find or come up with a way I will update this post. Or you can tell about it in comments)