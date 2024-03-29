---
id: format-encrypt-mount
title: How to format, encrypt and mount the external data SSD/HDD?
sidebar_label: Format, encrypt & mount
---

In order to prepare the external data SSD/HDD for your server, you should first format and encrypt it using `Veracrypt`.

**Warning: this will delete any data on this drive!**
1. Please **don't** connect the external data SSD/HDD to your server, yet!
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `BTRFS Veracrypt`
1. Select that you want to **install** veracrypt
1. Select that you want to continue
1. Wait until it is installed
1. After pressing `OK`, **connect** the drive to your server
1. It should get found after a few seconds
1. Select the drive that you want to format and encrypt
1. Enter a difficult **password** and store it at a safe place.<br/>
(Difficult password means at least 20 characters long, containing small and tall letters, digits and special characters)
1. Confirm the password
1. Confirm that you are sure to format and encrypt the drive by selecting `Yes`
1. Now the drive should be successfully formatted and encrypted
1. Choose to **mount** the drive to your server
1. Type in the **mountpath** that you want to use, recommended is `/mnt/data`
1. Wait until everything is configured

**Now, the drive should be ready.**

:::tip
**BTW**: You could run this script a second time now to format, encrypt and mount a second drive, if you want to use more than one external data SSD/HDD. (The two backup HDDs will get configured below.)
:::
:::info
After you've exited the script, you should reinstall Disk Monitoring to make sure that all drives support Smart Monitoring and are healthy. ([instructions](./smart))
:::