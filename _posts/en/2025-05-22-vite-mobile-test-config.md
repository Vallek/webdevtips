---
layout: post
title: 'How to open Vite localhost on mobile (and deploy to github)'
date: 2025-05-22 00:00 +0000
notebook: webdev
tags: [vite, local server, mobile, qa, github]
---
This is follow up to the series of notes on how to open local server on mobile (for [simple frontend](https://vallek.github.io/webdevtips/ru/localhost-on-mobile), for [XAMPP](https://vallek.github.io/webdevtips/ru/xampp-wp-mobile)). This time it's about [Vite build tool](https://vite.dev/).

Create `vite.config.js` config file in your vite project folder with following contents:
```
export default {
  base: '/github-repo-name/',
  server: {
    host: 'your-local-ip'
  }	
}
```

`host` - your local IP (type ipconfig in terminal, copy `IPv4-address`).

`base` this one is for Github deploy with action. Put your repo name here and use [action from vite docs](https://vite.dev/guide/static-deploy#github-pages).

I wanted to show config with `base` property, cause I couldn't find actual config syntax example with multiple options in official docs)