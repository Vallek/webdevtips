---
layout: post
title: 'Use and switch multiple node.js/npm versions'
date: 2023-04-17 00:00 +0000
notebook: 'webdev'
tags: [nodejs, npm, nvm]
---
Sometimes old projects on node.js does not run on new versions of the node or npm. If during the build you see a bunch of errors about outdated versions and conflicts, do not rush to give up. Perhaps using an old node or npm will help.

There are several different programs for installing different versions on the same OS. I use **nvm**. The version for Windows can be [downloaded here](https://github.com/coreybutler/nvm-windows).

With nvm, you can install not only different versions of the node, but also different npm. They can be linked to node versions. That is, for example, you take the previous patch to the node, and install the npm that you need.

Find out where nvm installs versions of the node with `nvm root` node. Caution! The same command with the path changes the installation path.

Install a specific version of npm on the active version of the node

`npm install npm@X.X.X`

For example `npm install npm@6.14.18 `

Switch the node version (the npm version is linked to the node version)

`nvm use XX`

For example `nvm use 16`

Read about all the other commands at the link in the repository readme above.


