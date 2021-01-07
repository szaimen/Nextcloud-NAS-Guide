---
id: smart
title: How to set up Disk Monitoring?
sidebar_label: Disk Monitoring
---

Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up disk monitoring. 

:::info Please note!
This is no alternative to a backup solution!
:::
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `Disk Monitoring`
1. Choose to install/reinstall **S.M.A.R.T Monitoring**
1. Choose **Directly** to get informed instantly if a disk error was found