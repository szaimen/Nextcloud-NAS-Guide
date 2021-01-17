---
id: manual-backup
title: How to create a backup manually?
sidebar_label: Manual Backup
---

Sometimes you will need to create a backup manually. Here is how to do it.

1. run over CLI:
    ```shell
    sudo bash /var/scripts/daily-borg-backup.sh
    ```
1. Wait until it reports that the backup is successfull.<br/>
    (You can cancel the backup any time by pressing `[CTRL] + [C]`)

:::note
The daily backup script will execute a **backup check** one time every seven successful backups (so most likely once a week). If the backup check gets executed while you just want to create a backup manually, you can cancel the **backup check** by pressing `[CTRL] + [C]`, too.
:::