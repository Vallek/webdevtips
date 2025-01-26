---
layout: post
title: 'Как удалить локальные гит ветки, которых нет в удаленном репозитории'
date: 2025-01-26 00:00 +0000
notebook: webdev
tags: [git]
sources: [https://stackoverflow.com/questions/13064613/how-to-prune-local-tracking-branches-that-do-not-exist-on-remote-anymore]
---
Если у вас остается куча лишних веток, которые вам было лень удалять и вот теперь вы решили их почистить, то вам может помочь эта заметка)

Как оказалось простого решения у этой проблеммы нет. Существует команда [prune](https://www.atlassian.com/git/tutorials/git-prune), но она удаляет только ссылки на удаленные ветки.

В обсуждении на стаковерфлоу можно найти множество вариантов, но все они выглядят, как вызов Ктхулху. 

К счастью есть готовое решение в виде npm пакета [git-removed-branches](https://www.npmjs.com/package/git-removed-branches) (тот случай, когда действительно есть смысл использовать готовый пакет).