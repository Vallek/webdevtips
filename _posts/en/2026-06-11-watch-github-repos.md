---
layout: post
title: 'How to watch back all your repositories on Github'
date: 2026-06-11 00:00 +0000
notebook: webdev
tags: [git, github]
sources: ['https://github.com/orgs/community/discussions/157470']
---
The owners of Github, in their infinite wisdom, decided not only to disable automatic watching repositories by default, but also to remove this feature entirely.

As a result you will not be notified about all the changes eve in YOUR OWN repos. Genius.

## How to get watching all your repos back

There is a way to automate this process, at least for your own repositories. To do this, you will need: 

1. Unix utils that can be [installed with Git](https://git-scm.com/install /) (there will be a checkbox in the installer). This is for Windows. Linux may already have them I'm not sure. Specifically you will need the `xargs' utility.
2. Git Bash. Again, it comes with git.
3. [Github CLI](https://cli.github.com/)

In the terminal, run:
```
gh repo list YOUR_USERNAME --limit 1000 --json nameWithOwner -q '.[].nameWithOwner' | xargs -I {} gh api -X PUT repos/{}/subscription -f subscribed=true
```
Change YOUR_USERNAME to your nickname or organization.

Please note that the original answer has two lines. I merged it into one for less likely issues. 

If you did everything right, after executing the command, terminal should output json with each repository one at a time. Wait for it to finish.