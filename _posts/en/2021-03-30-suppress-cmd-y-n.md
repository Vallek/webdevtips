---
layout: post
title: 'How to suppress "Terminate batch job (Y/N)" confirmation?'
date: 2021-03-30 00:00 +0000
notebook: webdev
tags: [terminal, cmd, clink]
---
Install Clink [old orininal](http://mridgers.github.io/clink/) or [newer fork](https://chrisant996.github.io/clink/) and change the "terminate_autoanswer" setting. The settings file [should be here](https://github.com/mridgers/clink/blob/master/docs/clink.md#file-locations): `C:\Users\<username>\AppData\Local\clink\settings`.
```
# name: Auto-answer terminate prompt 
# type: enum 
# Automatically answers cmd.exe's 'Terminate batch job (Y/N)?' prompts. 
0 = # disabled, 
1 = answer 'Y', 
2 = answer 'N'. 
terminate_autoanswer = 1 
```
or run `clink set terminate_autoanswer 1`
You can also see current value if you run this command without last argument. And you can even see the location of config file if you run just `clink set`

It works for me but not 100%. You can press ctrl+c couple times to terminate.