---
id: manual-backup
title: How to create a backup manually?
sidebar_label: Create Backup manually
---

Sometimes you will need to create a backup manually. Here is how to do it.

1. run over CLI:
    ```shell
    export SKIP_DAILY_BACKUP_CHECK=1 \
    && sudo bash /var/scripts/daily-borg-backup.sh
    ```
1. Wait until it reports that the backup is successfull.<br/>
    (You can cancel the backup any time by pressing `[CTRL] + [C]`)
