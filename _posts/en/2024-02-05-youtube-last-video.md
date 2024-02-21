---
layout: post
title: 'Embed youtube channel latest video without API'
date: 2024-02-05 00:00 +0000
notebook: frontend
tags: [html, iframe, youtube]
---
**21.02.2024 UPD**: this method is not working for me any more in Chrome 121-122. Maybe cause cookie policy changes. As an option you can create playlist with all videos manually. Of course you'll have to add new video to it every time. 

To embed latest youtube channel video without api:

1. Learn your channel id. Open youtube (not studio, just website) > click your avatar in the corner > Settings > Advanced settings. Find your channel id. This is also last part of your channel url if you not using unique name.
2. First letter will be `U`, and the seconds something else. You have to change that second letter to `U` as well. So it would start with `UU`. For example if it was `UCzS4sE_0ltfSz6qx_FUCTdA`, cahnge it to `UUzS4sE_0ltfSz6qx_FUCTdA`.
3. Put `https://www.youtube.com/embed?listType=playlist&list=RESULT_ID` into iframe src
4. The whole thing:

```html
<iframe loading="lazy" class="video__last-video" width="350" height="250" title="Latest video" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed?listType=playlist&list=UUzS4sE_0ltfSz6qx_FUCTdA"></iframe>
```
It will embed a playlist with all published channel videos. But it will always show the last one. I use this on my [site](https://vallek.github.io/). 

Cons: you can't use [lazy load on click methods]({{site.baseurl}}/en/youtube-lazy-load). Which is ok if you have one video. You should use [native lazy load](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading) to at least only load iframe when it's in viewport.