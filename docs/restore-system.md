---
id: restore-system
title: How to restore the system from backup?
sidebar_label: Restore system
---

It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow [How to restore files from backup?](./restore-files)

### Execution
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `System Restore`
1. **Confirm** that you want to restore your system to a previous state
1. Answer that you haven't made a backup of your NcVM
1. Choose `Yes` to create the backup now
1. Wait until the backup is created (can take a few minutes)
1. Answer if the backup was created successfully
1. If both backup drives are connected, **select the backup drive** that you want to view backups from (most likely the daily backup drive)
1. Select a **backup archive** that you want to restore to (you will see the date and time when it was made)
1. **Choose** if you want to check if the backup extracting works (this is up to you)<br/>
(If you choose yes and it takes too long, you can cancel it by pressing `[CTRL] + [C]`. Then start from step 1 again and simply skip it.)
1. **Choose** if you want to restore Nextclouds previews (this is up to you)
1. You will be asked next if you really want to restore your system to this state. Now select `Yes` and press `[ENTER]` if you are sure. (This is the last chance to cancel the operation!)
1. Wait until it has restored the system and you see a popup that the restore process was successful.
1. Finally, press `[ENTER]` to **reboot** your server.

Now, your system should be restored to the selected state.
