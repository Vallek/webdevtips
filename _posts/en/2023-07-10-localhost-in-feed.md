---
layout: post
title: 'How to remove localhost from jekyll-feed'
date: 2023-07-10 10:33 +0300
notebook: webdev
tags: [jekyll]
---
`jekyll serve` might put `localhost` in feed urls. One way to fix it is just use `jekyll build` for production after local server test. But that's not really a fix.

But you can manually edit jekyll-feed gem and put your url there.

Find Ruby: `where ruby`

Gems are at: `Ruby\lib\ruby\gems\version\gems\`

Open `jekyll-feed-0.17.0\lib\jekyll-feed\feed.xml`

This is a template for your feed xml file. You have to find instances of `{{ page.url | absolute_url }}` and `{{ post.url | absolute_url }}` and replace them with `https://username.github.io/example{{ page.url }}` and `https://username.github.io/example{{ post.url }}`.

Make sure that you didn't mix up posts and pages.