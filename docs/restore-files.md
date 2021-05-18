---
id: restore-files
title: How to restore files from backup?
sidebar_label: Restore files
---

It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow [How to restore the system from a backup](./restore-system)

### Preparations
1. Install Remotedesktop ([instructions](./remotedesktop))

### Execution
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Backup Viewer`
1. Confirm that you want to view the content of your backups
1. Choose `Remotedesktop` if you get asked which way do you prefer of showing your backups.
1. If both backup drives are connected, **select the backup drive** that you want to view backups from (most likely the daily backup drive)
1. Now you should see the advice **how to use Remotedesktop** to access your backup files. Simply leave this window open for now! (**don't** press `[ENTER]` to continue here, yet! If you should do this by mistake, you need to restart at step 1 again.)
1. Connect to your server via RDP ([instructions](./rdp-connect))
1. When you are connected, open a `terminal` in the Remotedesktop session 
1. :::note File Manager
    This is useful if you just want to inspect some files from backup or restore some files from the backup. If you need to restore complete folders, folder sync makes more sense. See below.
    1. **Copy and paste** or type into the terminal: 
        ```shell
        xhost +si:localuser:root && sudo nautilus /tmp/borg
        ```
    1. Now, after entering your password, you should see the file manager with all available backup archives 
    1. You are now free to navigate through them, **open files and restore** them from the backup to the original directory (You can open a second file manager window by pressing `[CTRL] + [n]` which makes it easier to copy files/folders between different locations)
    1. After you are done, **close** the file manager and the terminal in the RDP-session and exit the Remotedesktop session
    :::
    or
    :::note Folder Sync
    This is useful if you want to restore complete folders from a backup.
    1. **Copy and paste** or type into the terminal: 
        ```shell
        xhost +si:localuser:root && sudo grsync
        ```
    1. Now, after entering your password, you should see Grsync which is a graphical User Interface for rsync - a Linux sync tool.
    1. First, select your source directory by typing `/tmp/borg/` into the first input box and clicking on `Open` (next to the 1st input field). You will now see all available archives and should select a specific folder inside an archive. An example would look like this: `/tmp/borg/YYYYMMdd_hhmmss-NcVM-mnt-data-directory/mnt/data/subfolder`. Make sure that after choosing the folder, you enter a slash `/` at the end of the source directory, so that you sync the content of this folder and not the folder itself. This example would need look like this: `/tmp/borg/YYYYMMdd_hhmmss-NcVM-mnt-data-directory/mnt/data/subfolder/`.
    1. Now, select your destination directory by typing `/mnt/data/` (or any other path) into the second input box and clicking on `Open` (next to the 2nd input field). Then you can select a subfolder that you want to sync. One example is: `/mnt/data/subfolder`.
    1. Now adjust the rsync settings to fit your sync usecase. For restoring the complete source directory into the destination directory, the following options are recommended to be enabled (all other options should be disabled):
        - ☑ Preserve Time
        - ☑ Preserve owner
        - ☑ Delete on destination
        - ☑ Verbose
        - ☑ Preserve permissions
        - ☑ Preserve group
        - ☑ Do not leave filesystem
        - ☑ Show transfer progress
    1. Now, click on the ℹ button (with the **information icon**) to start the `dry-run`. This will check which files/folders are going to be modified/deleted/created but not start the sync process, yet. A popup should open that shows files/folders that are going to be modified/deleted/created.
    1. If you are okay with the result, you can click on the button on the right, right next to the ℹ button (the button with **two gearwheels**) to start the sync process.
    1. After you are done, **close** Grsync and the terminal in the RDP-session and exit the Remotedesktop session
    :::
1. The last step is to exit the Backup Viewer script by pressing `[ENTER]`
:::caution
It is crucial that you exit the Backup Viewer script correctly. Otherwise there might be problems on the next regular backup!
:::
1. It should now report, that the backup and drive was successfully unmounted.
