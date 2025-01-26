---
layout: post
title: 'How to delete local git branches that do not exist on remote'
date: 2025-01-26 00:00 +0000
notebook: webdev
tags: [git]
sources: [https://stackoverflow.com/questions/13064613/how-to-prune-local-tracking-branches-that-do-not-exist-on-remote-anymore]
---
If you have a bunch of extra branches that you were too lazy to remove and now you've decided to tidy up, then this note may help you)

As it turned out, there is no simple solution to this problem. There is a [prune](https://www.atlassian.com/git/tutorials/git-prune) command, but it only removes links to deleted branches.

There are many options to be found in the discussion on stackoverflow, but they all look like a Cthulhu summoning spell. 

Fortunately, there is a ready-made solution in the form of the npm package [git-removed-branches](https://www.npmjs.com/package/git-removed-branches) (rare case when it actually a good idea to use a ready-made package).