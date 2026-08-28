---
title: Disconnect or replace a drive
author: szaimen
author_title: Creator of Nextcloud-NAS-Guide
author_url: https://github.com/szaimen
author_image_url: https://avatars.githubusercontent.com/u/42591237?s=460&v=4
tags: [news, faq]
description: A new FAQ guide that shows how to disconnect or replace a drive that was mounted to your server before.
image: /news/undraw_secure_server_s9u8.svg
hide_table_of_contents: false
---

Drives come and go. A drive gets too small, a backup drive gets replaced by a bigger one, or the Movies/TV-Shows drive simply isn't needed on the server anymore. But once a drive was mounted during the setup, that mount is persistent - and your server keeps looking for it after every reboot.

Just unplugging the drive is therefore not enough. In the worst case, Nextcloud lands in maintenance mode on the next boot and stays there, because the automount of the drive failed. Snapshot and scrub cronjobs start to report errors, and backups fail with a mail every day.

The new FAQ guide walks you through it, split up by drive type: the encrypted external data SSD/HDD, an unencrypted BTRFS drive like the Movies/TV-Shows drive, unencrypted NTFS drives, Bitlocker encrypted drives and the backup drives. Each section tells you exactly which entries you need to remove from the automount script, the crontab and the fstab so that your server boots cleanly again without the drive.

And there is a second scenario that the guide covers: **replacing** a drive with a new one. Your old drive got too small? Then you don't want to start from scratch. The guide shows you how to prepare the new drive, copy everything over with `rsync` and then hand the mountpath of the old drive over to the new one.

That last part is the trick. Your server refers to your drives by their mountpath all over the place - in your SMB-shares, in the local storages and user root folders in Nextcloud, in your PLEX/Jellyfin libraries and in the backup scripts. Give the new drive the mountpath of the old one, and all of that simply keeps working without you having to touch a single one of those configurations. There is one section for the backup drives and one for all other drives.

You can check it out [here](/docs/unmount-drive)

Thanks a lot to [LeoHobi](https://github.com/LeoHobi) for suggesting this guide!

![Secure server](/news/undraw_secure_server_s9u8.svg)

<!--The following comment will skip the article in the News overview.-->
<!--truncate-->
