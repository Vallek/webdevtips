---
layout: post
title: 'Firefox ignores monitor color profile'
date: 2023-05-29 14:10 +0300
notebook: pc
tags: [firefox]
---
Color management does not work in Firefox, that is, it ignores the color profile of the srgb monitor and the colors are distorted.

Make sure that the about:config is set to:
```
gfx.color_management.enablev4 - true	
gfx.color_management.force_srgb - true	
gfx.color_management.mode - 1	
gfx.color_management.native_srgb - true
```

[Image for testing](http://www.lagom.nl/lcd-test/gradient.php#gradient-h.png). The gradient should be smooth (compare with Chrome, maybe it's in your monitor, software, etc.).