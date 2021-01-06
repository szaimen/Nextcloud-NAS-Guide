---
id: mount-hdd
title: How to mount an additional HDD for Movies/TV-Shows?
sidebar_label: Mount HDD for Movies/TV-Shows
---

### Preparations
1. Format the HDD to NTFS ([instructions](./format-backup-hdds)) (you can skip the formatting if the drive is already NTFS formatted.)
:::caution
During formatting, use as `drive label` something like `Movies_TV-shows` or something else that fits. Also just do the procedure `one time` and not twice since you only want to format one drive!
:::

### Execution
1. Please **don't** connect the new HDD that you want mount to your server, yet or **disconnect** it from your server!
(Already mounted drives must stay connected; disconnecting and connecting the HDD that you want to mount is just so that the system is able to understand which drive you want to mount.)
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `NTFS Mount`
1. Select to `Mount a drive`
1. Press `OK` to start searching for new NTFS drives
1. Now **connect** the HDD to your server (you have 1 minute)
1. You should get the message that the drive was found
1. Wait until the drive has spin up
1. Choose the **NTFS partition** that shall get mounted
1. Type in the mountpath that you would like to use. Recommended is something like `/mnt/Movies_TV-shows`.
1. You should get the message that the mount was successful.
1. When asked if this is a backup drive, confirm `No` by pressing `[ENTER]`!
1. You should see the message now, that PLEX Media Server was found. Press `[ENTER]` to continue
1. Wait until everything is done and you see the popup that **PLEX was adjusted!**
1. Now back to the Menu, just choose `Exit` to exit this script.

Now, the drive should be accessible by PLEX!

:::caution
This drive is only accessible by PLEX and not in Nextcloud/SMB. It is not encrypted and doesn't get backed up. So please make sure to `not` store any private/personal data on this HDD! It is really only meant to store Movies/TV-Shows!
:::

:::note
At least you should get informed if some S.M.A.R.T issues get reported by disk-monitoring that you've set up earlier ([here](./smart)), so that if you are lucky, you can copy the files in time to a new drive before it fails. But this is no Backup and no real data protection! In my opinion this is okay, though since the data that you should store on this HDD like Movies/TV-Shows is not precious because you can always digitize those again from the DVDs/Blu-rays so **don't sell and don't give away** those! If you are unlucky and the drive fails before you've successfully copied all the data to a new drive, not encrypting the drive makes it much easier to recover some data if you should decide to pay for data-recovery. Better would most likely be in this case just redigitalizing the Movies/TV-Shows from their DVD/Blu-ray.
:::