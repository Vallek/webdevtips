---
layout: post
title: 'Где скачать читалки для тестирования доступности (screen readers)'
date: 2023-06-09 21:40 +0300
notebook: webdev
tags: [accessibility]
sources: [https://stackoverflow.com/a/43368748/9749171]
---
Лучший ответ - протестировать в реальных программах чтения с экрана, в идеале с привлечением реальных пользователей, поскольку они знают, как пользоваться этими инструментами. 

## Программы для чтения с экрана

На каждой платформе есть программа для чтения с экрана, большинство из них встроены. Windows отличается наибольшим разнообразием.

### Windows

* [Используйте Narrator](https://support.microsoft.com/en-us/help/17173/windows-10-hear-text-read-aloud ) Используйте его с Edge.
* [Скачать NVDA](https://www.nvaccess.org/download/) программа для чтения с экрана. Используйте его с Firefox
* [Скачать JAWS](https://support.freedomscientific.com/Downloads/JAWS ) и используйте его с интервалом в 40 минут бесплатно. Используйте его с IE11.

### macOS

* [Используйте VoiceOver](https://support.apple.com/ru-ru/guide/voiceover/welcome/) (он встроен). Используйте его с Safari. [старая ссылка из источника, вы можете изменить версии в url](https://help.apple.com/voiceover/info/guide/10.12/)

### iOS

* [Используйте VoiceOver](https://www.apple.com/accessibility/vision/) (он встроен). Используйте его с Safari.

### Андроид

* [Используйте TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en). Используйте его с Firefox.

### Убунту

* [Используйте Orca](https://help.gnome.org/users/orca/stable/).

### ChromeOS

* [Используйте ChromeVox](https://support.google.com/chromebook/answer/7031755) (но используйте ChromeVox только в этом сценарии, а не в качестве плагина для Chrome в Windows или macOS).

## Ресурсы

Ресурсы, чтобы начать самостоятельное тестирование. Сочетания клавиш необходимы для эффективного использования программы чтения с экрана, помимо простого нажатия клавиши Tab снова и снова.

* [Основные команды программы чтения с экрана для обеспечения специальных возможностей testing](https://www.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

* [Программы для чтения с экрана и веб–браузеры - какое сочетание лучше всего подходит для тестирования?](https://www.digitala11y.com/screen-readers-browsers-which-is-the-best-combination-for-accessibility-testing/)

## Услуги

* [Assistivlabs](https://assistlabs.com/assistive-tech/screen-readers ) - Это похоже на Browserstack для программ чтения с экрана и других ATS

Ссылки из источника были обновлены