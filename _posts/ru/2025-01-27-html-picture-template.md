---
layout: post
title: 'Заготовка picture для адаптивных изображений'
date: 2025-01-27 00:00 +0000
notebook: frontend
tags: [html, css, responsive]
sources: [https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images]
---
Это заготовка html элемента `picture` для адаптивных изображений. Внутри элемента `picture` вложенны два source для десктопа и планшета и `img` для мобильного по умолчанию (если у вас mobile first). В каждом размере подключено по два изображения для экранов обычной и двойной плотности (ретина).

Брейкпоинты в `media` указаны для примера. У вас они могут быть какие угодно, но в целом должны соответствовать реальным размерам экранов устройств разного типа. Их можно узнать из статистики, которую собирают сервисы вроде [statcounter](https://gs.statcounter.com/screen-resolution-stats#yearly-2024-2025-bar). Можете погуглить побольше разных. А еще лучше посомтреть на статистику своих пользователей. А еще лучше и на то и на другое)

Размеры (ширина и высота) тоже указаны для примера. Главное в принципе их указывать. Это важно для оптимизации загрузки страницы (чтобы избежать сдвиг контента) и на случай если css не подгрузился.

```
<picture>
  <source width="1280" height="720" type="image/png" media="(min-width: 1280px)" srcset="images/image-desktop@1x.png 1x, images/image-desktop@2x.png 2x" >
  <source width="768" height="1024" type="image/png" media="(min-width: 768px)" srcset="images/image-tablet@1x.png 1x, images/image-tablet@2x.png 2x" >
  <img src="images/image-mobile@1x.png" srcset="images/image-mobile@2x.png 2x" width="360" height="800" alt="">
</picture>
```

В качестве бонуса css медиа-запрос для фона на ритину (сейчас device-pixel-ratio везде работает, но на всякий случай оставлю legacy вариант)

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