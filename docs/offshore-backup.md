---
id: offshore-backup
title: How to set up an offshore backup?
sidebar_label: Off-Shore Backup
---

Now that also the daily backup is prepared, you should set up an off-shore backup for your server.

1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Off-Shore Backup Wizard`
1. Confirm that you want to **create** an off-shore backup script
1. Confirm that you will leave the backup drive connected
1. Select the **off-shore backup drive** as backup target
1. Choose to use the recommended backup directory
1. Choose to run the backup every `90 days`, as recommended
1. Now everything will get set up
1. Finally, you will see the message that the backup script was successfully created

:::note
It is located here: `/var/scripts/off-shore-rsync-backup.sh` and will get executed every `90 days`. For now it will be executed every day at `20:00` until the first off-shore backup was successfully created. Please leave the drive **connected** for now. You will get notified by mail if something fails. If the backup was successful, you will be **notified** that you can disconnect the drive. The script which will create the off-shore backup is based on a program called `rsync` which will sync the whole backup repository that was made by the daily backup script from your daily backup drive to your offshore backup drive.
:::