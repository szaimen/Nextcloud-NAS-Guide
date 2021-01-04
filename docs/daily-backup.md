---
id: daily-backup
title: How to set up a daily backup?
sidebar_label: Daily Backup
---

Now that everything is prepared, you should set up a daily backup for your server.

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Daily Backup Wizard`
1. Confirm that you want to **create** a daily backup script
1. Confirm that you will leave the backup drive connected
1. Select your external data SSD/HDD to be **included** in backups
1. Choose that you want to backup the **whole** external data SSD/HDD
1. Select the **daily backup drive** as backup target
1. Choose to use the recommended backup directory
1. Enter a difficult **encryption key** for your backup and store it at a safe place
(Difficult encryption key means at least 20 characters long, containing small and tall letters, digits and special characters)
1. Choose to run the backup at the recommended time at `4.00 am`
1. Now everything will get set up
1. You should now receive the daily backup config file via mail. Please **save/archive** it
1. Finally, you will see the message that the backup script was successfully created

It is located here: `/var/scripts/daily-borg-backup.sh` and will get executed at your chosen backup time, most likely `4.00 am`. You will get **notified** by mail if something fails and also if the backup was successful. The script which will create the daily backup is based on a program called `borgbackup` which is used to make daily incremental, compressed and deduplicated backup archives from your root partition and external data SSD/HDD.