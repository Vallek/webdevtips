---
layout: post
title: 'Screen Readers: where to download'
date: 2023-06-09 21:40 +0300
notebook: frontend
tags: [accessibility]
sources: [https://stackoverflow.com/a/43368748/9749171]
---
The best answer is to test in real screen readers, ideally by getting real users as they know how to use these tools. Consider contacting your local blind association and see if they offer testing services.
Screen Readers

Each platform has a screen reader, most are built in. Windows has the most variety.
For Windows

* [Use Narrator](https://support.microsoft.com/en-us/help/17173/windows-10-hear-text-read-aloud) (it is built in, though not very good right now it is getting much better). Use it with Edge.
* [Download the free NVDA](https://www.nvaccess.org/download/) screen reader (but please donate to support it). Use it with Firefox
* [Download JAWS](https://support.freedomscientific.com/Downloads/JAWS) and use it in 40 minute increments for free. Use it with IE11.

For macOS

* [Use VoiceOver](https://support.apple.com/ru-ru/guide/voiceover/welcome/) (it is built in). Use it with Safari. [old link from source, you can change versions in url](https://help.apple.com/voiceover/info/guide/10.12/)

For iOS

* [Use VoiceOver](https://www.apple.com/accessibility/vision/) (it is built in). Use it with Safari.

For Android

* [Use TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en). Use it with Firefox.

For Ubuntu

* [Use Orca](https://help.gnome.org/users/orca/stable/).

For ChromeOS

* [Use ChromeVox](https://support.google.com/chromebook/answer/7031755) (but only use ChromeVox in this scenario, not as a plug-in for Chrome on Windows or macOS).

## Resources

These are handy to get started with testing on your own. Keyboard shortcuts are necessary to use a screen reader well, beyond just hitting the Tab key over and over and over.

* [Basic screen reader commands for accessibility testing](https://www.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

* [Screen readers and web browsers – what’s the best pairing for testing?](https://www.digitala11y.com/screen-readers-browsers-which-is-the-best-combination-for-accessibility-testing/)

## Services

* [Assistivlabs](https://assistivlabs.com/assistive-tech/screen-readers) - This is like Browserstack for screen readers and other ATs

Links are updated