---
id: format-backup-hdds
title: How to format the external backup HDD's?
sidebar_label: Format
---

You will now reformat them to NTFS. You can skip this step, if they are already NTFS formatted!

**Warning: this will delete any data on this drive!**
1. **Power on** your server by pressing the `power button` (if not already done)
1. Please **don't** connect the backup HDDs to your server, yet!<br/>
(The already with Veracrypt encrypted and mounted external data SSD/HDD must stay connected; disconnecting and connecting one backup HDD that you want to format is just so that the system is able to understand which drive you want to format.)
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `NTFS Format`
1. Select to `Format a drive`
1. Press `OK` to start searching for new drives
1. Now **connect** one of your backup HDD's to your server (you have 1 minute)
1. You should get the message that the drive was found
1. Select the drive that you want to format to NTFS
1. Type in the **label** that this partition shall get. It should be a recognizable label like `Daily Backup` for the daily backup drive and `Off-shore Backup` for the off-shore backup drive 
1. Confirm that you are sure to format the drive to NTFS by selecting `Yes`
1. Now the drive should be successfully formatted

**Now repeat the same procedure for the second backup drive. Start at point 5.**
(The with Veracrypt encrypted data SSD/HDD must stay connected to the server!)

If you are done, just choose `Exit` to exit this script.