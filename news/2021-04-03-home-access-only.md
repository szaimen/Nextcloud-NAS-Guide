---
title: Home access only
author: szaimen
author_title: Creator of Nextcloud-NAS-Guide
author_url: https://github.com/szaimen
author_image_url: https://avatars.githubusercontent.com/u/42591237?s=460&v=4
tags: [news, optional]
description: How to only allow access to your server from inside your home network?
image: /news/undraw_vault_9cmw.svg
hide_table_of_contents: false
---

In order to make your server as secure as possible, you might consider blocking all access from outside your home network. To be able to connect to your server yourself from outside your home network afterwards, you'll need to establish a VPN connection to your home network first before you can access your server. We've implemented the whole process in a way that automatic certificate renewal via `Let's Encrypt` will still work after blocking the access to your server which is usually a limitation of this process but not by following this guide. Additionally, `scan.nexcloud.com` will still be able to scan your Nextcloud regarding security problems as well as `observatory.mozilla.org`. 

You can find the instructions how to only allow access to your server from inside your home network here: [click here](/docs/home-access-only)

![Vault](/news/undraw_vault_9cmw.svg)

<!--The following comment will skip the article in the News overview.-->
<!--truncate-->