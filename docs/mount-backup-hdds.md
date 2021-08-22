---
id: mount-backup-hdds
title: How to mount the external backup HDD's?
sidebar_label: Mount
---

Now that the drives are prepared, you will mount the drives to your sever:

1. Please **don't** connect the backup HDDs to your server, yet or **disconnect** the backup HDDs from your server!
(The already with Veracrypt encrypted and mounted external data SSD/HDD must stay connected; disconnecting and connecting one backup HDD that you want to mount is just so that the system is able to understand which drive you want to mount.)
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `BTRFS Mount`
1. Select to `Mount a drive`
1. Press `OK` to start searching for new BTRFS drives
1. Now **connect** one of your backup drives to your server (you have 1 minute)
1. You should get the message that the drive was found
1. Wait until the drive has spin up
1. Choose the **BTRFS partition** that shall get mounted
1. Type in the mountpath that you would like to use. The easiest way is to just type in the **recommended mountpath**. (The recommended mountpath is proposed to you in the popup)
1. You should get the message that the mount was successful.
1. When asked if this is a backup drive, select `Yes`!
1. You should see the message now, that the backup drive is ready.

**Now repeat this same procedure with the second drive! Start at point 4!**<br/>
:::caution
The already mounted backup HDD and the with Veracrypt encrypted data SSD/HDD must stay connected to the server!)
:::

:::note
If you are done, just choose `Exit` to exit this script.
:::
:::info
After you've exited the script, you should reinstall Disk Monitoring to make sure that all drives support Smart Monitoring and are healthy. ([instructions](./smart))
:::