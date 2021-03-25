---
title: Change update time
author: szaimen
author_title: Creator of Nextcloud-NAS-Guide
author_url: https://github.com/szaimen
author_image_url: https://avatars.githubusercontent.com/u/42591237?s=460&v=4
tags: [news, optional]
description: Change update time
image: /news/undraw_season_change_f99v.svg
hide_table_of_contents: false
---

If you've followed this guide, you will have configured automatic updates. Those get executed every saturday at 18:00 and will cause a reboot of your server afterwards. This is especially problematic if you've configured Pi-hole as your local DNS server for your home network since any DNS request will not work for as long as the server reboots and the Pi-hole isn't reachable. Also, if you've installed Pi-hole it will try to update itself every saturday at 19:30 which causes the same effect if an update is available.

To fix this, you can change the time when the updates get executed. Here is how to do this ([instructions](/docs/change-update-time))

![Time](/news/undraw_season_change_f99v.svg)

<!--The following comment will skip the article in the News overview.-->
<!--truncate-->