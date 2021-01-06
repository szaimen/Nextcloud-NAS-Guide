---
id: restore-files
title: How to restore files from backup?
sidebar_label: Restore files
---

It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow [How to restore the system from a backup](./restore-system)

#### Preparations
1. Install Midnight Commander ([instructions](./mc))
1. Install Remotedesktop ([instructions](./remotedesktop))

#### Execution
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Backup Viewer`
1. Confirm that you want to view the content of your backups
1. If both backup drives are connected, **select the backup drive** that you want to view backups from (most likely the daily backup drive)
1. Read through the rules that are necessary to know about and **confirm** them
1. Now, you should see Midnight Commander and all available backup archives. **Just leave Midnight Commander as it is!**
1. Open a **RDP client** on your client PC in the same network as your server and connect to your server using the IP-address of your server and type the credentials of your ncadmin account into the login-mask
1. When you are connected, open a `terminal` in the Remotedesktop session 
1. **Copy and paste** or type into the terminal: `xhost +si:localuser:root && sudo nautilus /tmp/borg`
1. Now, you should see the file explorer with all available backup archives
1. You are now free to navigate through them, **open files and restore** them from the backup to the original directory
1. After you are done, **close** the file explorer
1. The last step is to **close Midnight Commander** by pressing `[F10]`
1. It should now report, that the backup and drive was successfully unmounted.