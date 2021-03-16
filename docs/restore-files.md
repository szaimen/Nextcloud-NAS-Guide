---
id: restore-files
title: How to restore files from backup?
sidebar_label: Restore files
---

It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow [How to restore the system from a backup](./restore-system)

### Preparations
1. Install Midnight Commander ([instructions](./mc))
1. Install Remotedesktop ([instructions](./remotedesktop))

### Execution
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Backup Viewer`
1. Confirm that you want to view the content of your backups
1. If both backup drives are connected, **select the backup drive** that you want to view backups from (most likely the daily backup drive)
1. Read through the rules that are necessary to know about and **confirm** them
1. Now, you should see Midnight Commander and all available backup archives. **Just leave Midnight Commander as it is!**
1. Connect to your server via RDP ([instructions](./rdp-connect))
1. When you are connected, open a `terminal` in the Remotedesktop session 
1. **Copy and paste** or type into the terminal: 
    ```shell
    xhost +si:localuser:root
    sudo nautilus /tmp/borg
    ```
1. Now, you should see the file explorer with all available backup archives
1. You are now free to navigate through them, **open files and restore** them from the backup to the original directory
1. After you are done, **close** the file explorer and the terminal in the RDP-session and exit the Remotedesktop session
1. The last step is to **close Midnight Commander** by pressing `[F10]`
:::caution
It is crucial that you close Midnight Commander by pressing `[F10]`!<br/>
(E.g. don't exit the SSH session by pressing the X button or use any other way to terminate it!)
:::
1. It should now report, that the backup and drive was successfully unmounted.
