---
title: Pi-hole is back and PiVPN becomes WireGuard
author: szaimen
author_title: Creator of Nextcloud-NAS-Guide
author_url: https://github.com/szaimen
author_image_url: https://avatars.githubusercontent.com/u/42591237?s=460&v=4
tags: [news, optional]
description: Pi-hole and the VPN server were rewritten to run in Docker containers. PiVPN is replaced by WireGuard with a web interface.
image: /news/undraw_secure_server_s9u8.svg
hide_table_of_contents: false
---

Two of the oldest options of this guide got a complete rewrite: `Pi-hole` works again and the VPN server is now `WireGuard` with a web interface instead of `PiVPN`.

The Pi-hole script had to be deprecated a while ago because too much had changed in the upstream project, and it simply broke. It now runs in a Docker container, which means that it no longer patches a third-party installer, no longer installs `lighttpd` next to your Apache and no longer scatters files all over your host system. Network wide ads- and tracker-blocking for every device in your home network is back - and `unbound` as recursive DNS server is still part of the deal, so your DNS queries stay yours instead of being handed to Google or Cloudflare.

The VPN server got the bigger change. `PiVPN` was always a bit of a detour: it installed WireGuard on the host, and every new device meant another trip to the command line to generate a profile and print a QR code into your terminal. The new `WireGuard` option runs [wg-easy](https://github.com/wg-easy/wg-easy) in a container and gives you a web interface in your local network instead. Adding a device is now a click, the QR code is right there on the screen, and you can see at a glance which of your devices are connected.

Both containers get updated automatically together with your server during the regular updates, so there is nothing left to maintain by hand. The separate Pi-hole update cronjob is gone as well.

If you already have the old Pi-hole or PiVPN installed, the scripts will notice and tell you exactly which commands to run to remove them first. Please be aware that this means starting fresh: your old blocklists and settings and your old VPN profiles don't carry over, so plan a few minutes to set up your devices again in the new web interface.

You can find the instructions here: [Pi-hole](/docs/pi-hole) and [WireGuard](/docs/wireguard)

![Secure server](/news/undraw_secure_server_s9u8.svg)

<!--The following comment will skip the article in the News overview.-->
<!--truncate-->
