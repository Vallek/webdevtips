---
layout: post
title: 'picture template for responsive images'
date: 2025-01-27 00:00 +0000
notebook: frontend
tags: [html, css, responsive]
sources: [https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images]
---
This is a `picture` html element template for responsive images. There are two `sources` inside for desktop and tablet, and an `img` for mobile by default (if yoour project is mobile first). There are two images attached for regular and double density (retina) screens.

Breakpoints in `media` are given as an example. You can choose any, but in general they should correspond to the actual screen sizes of different devices types. You can get them from statistics collected by services like [statcounter](http://gs.statcounter.com/screen-resolution-stats#yearly-2024-2025-bar ). You can also Google more different ones. It's even better to look at your own user statistics. Or even better, both)

The dimensions (width and height) are also given as an example. Just as long as you specify them at all. This is important to optimize page loading (to avoid content shift) and in case the css is not loaded.

```
<picture>
  <source width="1280" height="720" type="image/png" media="(min-width: 1280px)" srcset="images/image-desktop@1x.png 1x, images/image-desktop@2x.png 2x" >
  <source width="768" height="1024" type="image/png" media="(min-width: 768px)" srcset="images/image-tablet@1x.png 1x, images/image-tablet@2x.png 2x" >
  <img src="images/image-mobile@1x.png" srcset="images/image-mobile@2x.png 2x" width="360" height="800" alt="">
</picture>
```

As a bonus, here is css media query for the background image (now the device-pixel-ratio works everywhere, but I'll leave the legacy version just in case)

```
.logo_background {
    background-image: url('../img/logo@1x.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80px 40px; /* size of the logo image @ 1x */
}

@media /* only for retina displays */
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min--moz-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2),
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-resolution: 192dpi),
only screen and (min-resolution: 2dppx) {
    .logo_background {
        background-image: url('../img/logo@2x.png');
    }
}
```