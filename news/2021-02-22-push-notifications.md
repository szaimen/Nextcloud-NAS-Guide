---
title: Push Notifications for Nextcloud
author: szaimen
author_title: Creator of Nextcloud-NAS-Guide
author_url: https://github.com/szaimen
author_image_url: https://avatars.githubusercontent.com/u/42591237?s=460&v=4
tags: [news, performance]
description: High Performance Backend for Nextcloud files
image: /news/undraw_server_push_vtms.svg
hide_table_of_contents: false
---

In the new Nextcloud 21 release was today a new `High Performance Backend for Nextcloud files` introduced. It attempts to solve the issue where Nextcloud clients have to periodically check the server if any files have been changed, new activities were created, or a notification was created/processed/dismissed, which increases the load on the server. By providing a way for the server to send update notifications to the clients, the need for the clients to make these checks can be greatly reduced, which reduces the load on the server and delivers notifications to the clients in some cases faster.

You can find the instructions how to install it on your Nextcloud-NAS here: ([click here](/docs/notify_push))

![Push Notifications](/news/undraw_server_push_vtms.svg)

<!--The following comment will skip the article in the News overview.-->
<!--truncate-->
