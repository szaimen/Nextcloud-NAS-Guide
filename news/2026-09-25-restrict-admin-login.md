---
title: Restrict the admin login to your home network
author: szaimen
author_title: Creator of Nextcloud-NAS-Guide
author_url: https://github.com/szaimen
author_image_url: https://avatars.githubusercontent.com/u/42591237?s=460&v=4
tags: [news, security]
description: A new option that only allows admin actions from inside your home network.
image: /news/undraw_secure_server_s9u8.svg
hide_table_of_contents: false
---

`Restrict Admin Login` is a new option in the Server Configuration menu that only allows admin actions from inside your home network.

Your admin account is the most valuable target on your server. It can install apps, change every setting and reach every file. Nextcloud 30 added a setting for exactly that concern, and the new script configures it for you: from now on, the admin settings are only available while you are at home. Everywhere else they are simply gone, and every admin action is refused with a `403 Forbidden` - even for the admin user itself, and even if someone got hold of the password.

The rest of your Nextcloud is not affected at all. You and all your users keep syncing files, sharing links and joining calls from wherever you are. Only the administration of the server stays behind your front door. And if you use WireGuard to dial into your home network, you get a local address as well, so you can still administer your server while you are on the road.

One requirement is important enough to repeat: your Nextcloud domain has to resolve to the *local* address of your server while you are at home - split-brain DNS, as it gets set up with Pi-hole. Without it, Nextcloud sees a public address even when you sit next to the machine and you would lock yourself out. The script asks you about this before it touches anything, and offers to install Pi-hole for you if you need it. And should it ever go wrong anyway, one command in the terminal of your server removes the restriction again.

You can find the instructions how to restrict the admin login on your server here: [click here](/docs/restrict-admin-to-ip)

![Secure server](/news/undraw_secure_server_s9u8.svg)

<!--The following comment will skip the article in the News overview.-->
<!--truncate-->
