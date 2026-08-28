---
id: unmount-drive
title: How to disconnect or replace a drive that was mounted before?
sidebar_label: Disconnect or replace a drive
---

:::warning
This article was created with the help of **AI** and is not fully tested yet, so it might contain errors. The steps touch your `fstab`, your mounts and your backups, so please read them carefully before you run them and make sure that you have a **working backup** first.

If you find a mistake or something doesn't work like described, it would be great if you could report it in the [issues section](https://github.com/szaimen/Nextcloud-NAS-Guide/issues) of this guide, so that it can get fixed.
:::

If you have mounted a drive to your server (an [external data SSD/HDD](./format-encrypt-mount), a [backup HDD](./mount-backup-hdds), a [Movies/TV-Shows HDD](./mount-hdd) or a NTFS/Bitlocker drive) and don't want to keep it connected to your server anymore, it is **not** enough to simply unplug it.

The mount was made persistent during the setup, so your server will keep looking for the drive after each reboot. Depending on the drive type, this leads to Nextcloud getting put into **maintenance mode** on every boot, to failing snapshot/scrub cronjobs or to failing backups.

There are two different things that you might want to do:

* **Replace** a drive with a new one, e.g. because the old one got too small. Please have a look at the replacement section that fits your drive: [a backup drive](#replace-backup-hdd), [an unencrypted drive](#replace-drive), [the encrypted data SSD/HDD](#replace-veracrypt) or [a Bitlocker drive](#replace-bitlocker). In all cases you copy your data over to the new drive and then give the new drive the **mountpath of the old one**, so that your whole configuration keeps working.
* **Disconnect** a drive for good, because you don't need it on your server anymore. Then please follow the section below that fits your drive type.

:::caution
Please **copy all data** that you still need from the drive to another location **before** you start! After the following steps the drive is not mounted to your server anymore.
:::

## An encrypted external data SSD/HDD (Veracrypt) {#veracrypt-drive}

This is a drive that you have configured with `BTRFS Veracrypt` ([here](./format-encrypt-mount)), usually mounted to `/mnt/data`. It also applies if you have used `NTFS Veracrypt` instead - the only difference is that a NTFS Veracrypt drive doesn't have the snapshot and scrub entries that are mentioned in step 3.

:::info
Please work through the following steps **in one go** and don't reboot in between. The drive stays mounted and usable until the reboot at the end, but from step 1 on it wouldn't get mounted again after a reboot.
:::

### 1. Remove the drive from the automount script

Open the automount script:
```shell
sudo nano /var/scripts/veracrypt-automount.sh
```

For every Veracrypt drive there is one block in this file that looks like the following (the password, the PARTUUID and the mountpath are the ones of your drive):
```shell
if ! echo 'YOUR-PASSWORD' | veracrypt -t -k "" --pim=0 --protect-hidden=no --fs-options=defaults \
"/dev/disk/by-partuuid/1234abcd-01" /mnt/data
then
    sed -i "/'maintenance'/s/false/true/" "/var/www/nextcloud/config/config.php"
    source /var/scripts/fetch_lib.sh
    nextcloud_occ_no_check maintenance:mode --on
    send_mail "/mnt/data could not get mounted!" "Please connect the drive and reboot your server! \
The maintenance mode was activated to prevent any issue with Nextcloud. \
You can disable it after the drive is successfully mounted again!"
fi
```

**Delete the whole block** that belongs to the drive that you want to disconnect - from the line that starts with `if !` down to and including the closing `fi`. Alternatively you can comment out each of those lines by putting a `#` in front of them.

:::note
If the drive is a `NTFS Veracrypt` drive, the block looks slightly different: the first line ends with `--protect-hidden=no \` and is followed by an additional line with `--fs-options=windows_names,uid=www-data,gid=www-data,umask=007 \`. So the block is one line longer, but you still remove everything from `if !` down to the closing `fi`.
:::

Save the file with `[CTRL] + [O]`, `[ENTER]` and close nano with `[CTRL] + [X]`.

:::caution
Only remove the block that belongs to the drive that you want to disconnect! If you have more than one Veracrypt drive, you can tell the blocks apart by the **mountpath** at the end of the second line. Please **don't** delete the lines above the first block (the `#!/bin/bash`, the `chown`/`chmod` lines and the line that resets the maintenance mode) since they are still needed for the remaining drives.
:::
:::info
If the drive that you want to disconnect is your **only** Veracrypt drive, you can instead simply disable the whole service:
```shell
sudo systemctl disable --now veracrypt-automount
```
:::

### 2. Remove the drive-connection monitoring

For every Veracrypt drive a cronjob was created that puts Nextcloud into maintenance mode as soon as the drive gets disconnected. You can list the cronjobs of the root user like this:
```shell
sudo crontab -u root -l
```

You will find one line per Veracrypt drive that looks like this:
```
@reboot /var/scripts/is-drive-connected.sh 'PARTUUID-OF-YOUR-DRIVE' >/dev/null
```

Edit the crontab:
```shell
sudo crontab -u root -e
```
and **delete** the line that contains the `PARTUUID` of the drive that you want to disconnect (or comment it out with a `#` in front of it). Afterwards save and close the editor.

:::tip
You can list the `PARTUUID` of all connected drives with `lsblk -o NAME,LABEL,SIZE,PARTUUID`. If a cronjob line contains a `PARTUUID` that doesn't show up there anymore, it belongs to a drive that is already disconnected.
:::

### 3. Remove the remaining entries of the drive

The mountpath of the drive is also used by the permission script and by the snapshot/scrub scripts. Please remove those entries as well, otherwise you will get errors and mail notifications after each reboot.

:::info
This step only applies to a `BTRFS Veracrypt` drive. A `NTFS Veracrypt` drive has no permission, snapshot and scrub script, so if you disconnect such a drive, you can **skip this step** and continue with step 4 below.
:::

Open the permission script:
```shell
sudo nano /var/scripts/adjust-startup-permissions.sh
```

For every drive there is one `find` command in this file that is spread over **three lines**, like this:
```shell
find "/mnt/data/" -not -path "/mnt/data/.snapshots/*" \( ! -perm 770 -o ! -group www-data \
-o ! -user www-data \) -exec chmod 770 {} \; \
-exec chown www-data:www-data {} \;
```

Please delete **all three lines** of the drive that you want to disconnect. If you want to comment them out instead, you have to put a `#` in front of **each** of the three lines.

:::caution
The three lines belong together (they are connected by the `\` at the end of the first two lines). If you only remove or comment out the first line, the two remaining lines will produce an error on every reboot.
:::

Afterwards remove the mountpath of the drive from the snapshot script:
```shell
sudo nano /var/scripts/create-hourly-btrfs-snapshots.sh
```

And then from the scrub script:
```shell
sudo nano /var/scripts/scrub-btrfs-weekly.sh
```
If the drive that you disconnect was the **only** drive that is mentioned in those two scripts, you can instead delete their cronjobs with `sudo crontab -u root -e` (the lines that contain `create-hourly-btrfs-snapshots.sh` and `scrub-btrfs-weekly.sh`).

### 4. Remove the drive from Nextcloud, Samba and PLEX/Jellyfin

This drive is most likely used in a few more places, since it is the drive that holds your data. Please check the following and remove everything that points to the mountpath of this drive:

* **SMB-shares**: if you have created SMB-shares on this drive, please remove them with the SMB-server script ([here](./create-shares))
* **Nextcloud**: if the drive was mounted as local storage in Nextcloud, please remove those storages (`Administration settings` -> `External storage`). If a folder of this drive was the **root folder** of one of your users, that user will have no files anymore afterwards - please keep that in mind.
* **PLEX/Jellyfin**: if you have used this drive with [PLEX](./pms) or [Jellyfin](./jellyfin), please remove the libraries that pointed to this drive in their web interface

:::caution
Please don't skip this step! Otherwise your users will see folders in Nextcloud that they cannot open, and Nextcloud will report errors because the storages are not reachable anymore.
:::

### 5. Unmount the drive and reboot

```shell
sudo veracrypt -t -d /mnt/data
sudo reboot
```
(Please adjust `/mnt/data` to the mountpath of your drive.)

After the reboot, Nextcloud should be up and running normally and **not** in maintenance mode. Now you can physically disconnect the drive.

:::note
If Nextcloud is still in maintenance mode after the reboot, one entry of the drive was most likely missed. You can disable the maintenance mode like this and check the steps above again:
```shell
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --off
```
(Please use this command here and **not** `nextcloud_occ`, since the `nextcloud_occ` helper enables the maintenance mode again after it has run a command.)
:::

## A Movies/TV-Shows drive or another unencrypted BTRFS drive {#btrfs-drive}

This is a drive that you have mounted with `BTRFS Mount` and where you answered `No` when you were asked if it is a backup drive ([here](./mount-hdd)).

:::info
Please work through the following steps **in one go** and don't reboot in between. The drive stays mounted and usable until the reboot at the end, but from step 1 on it wouldn't get mounted again after a reboot.
:::

### 1. Remove the fstab entry

Find the `UUID` of the drive:
```shell
lsblk -o NAME,LABEL,SIZE,UUID,MOUNTPOINT
```

Then remove its entry from `/etc/fstab`. The safest way is to open the file and delete the one line that contains the `UUID` of your drive:
```shell
sudo nano /etc/fstab
```

:::caution
Please double check that you delete the correct line! If you remove the wrong one, your server might not boot properly anymore. The lines of your **system** (the ones with `/`, `/boot` and `swap`) have to stay!
:::
:::tip
If you prefer to do it with one command, please first check **which** line would get deleted:
```shell
grep 'UUID-OF-YOUR-DRIVE' /etc/fstab
```
Only if this shows exactly the one line of your drive, you can delete it:
```shell
sudo sed -i '/UUID-OF-YOUR-DRIVE/d' /etc/fstab
```
Please always use the **complete** `UUID`. A shortened one could match other lines as well and would delete those too.
:::

### 2. Remove the remaining entries of the drive

Open the permission script:
```shell
sudo nano /var/scripts/adjust-startup-permissions.sh
```

For every drive there is one `find` command in this file. For a Movies/TV-Shows drive it is spread over **two lines** and looks like this:
```shell
find "/mnt/Movies_TV-shows/" -not -path "/mnt/Movies_TV-shows/.snapshots/*" \( ! -perm 770 -o ! -group plex \
-o ! -user plex \) -exec chmod 770 {} \; -exec chown plex:plex {} \;
```

Please delete **both lines** of the drive that you want to disconnect. If you want to comment them out instead, you have to put a `#` in front of **each** of the two lines.

:::caution
The two lines belong together (they are connected by the `\` at the end of the first line). If you only remove or comment out the first line, the remaining line will produce an error on every reboot.
:::

Afterwards remove the mountpath of the drive from the snapshot script:
```shell
sudo nano /var/scripts/create-daily-btrfs-snapshots.sh
```

And then from the scrub script:
```shell
sudo nano /var/scripts/scrub-btrfs-monthly.sh
```
If the drive that you disconnect was the **only** drive that is mentioned in those two scripts, you can instead delete their cronjobs with `sudo crontab -u root -e` (the lines that contain `create-daily-btrfs-snapshots.sh` and `scrub-btrfs-monthly.sh`).

### 3. Remove the drive from PLEX/Jellyfin

If you have used this drive with [PLEX](./pms) or [Jellyfin](./jellyfin), the drive is still configured as a volume of the container. Please remove the libraries that pointed to this drive in the PLEX/Jellyfin web interface. The unused volume itself doesn't do any harm, but if you want to get rid of it, you can reinstall PLEX/Jellyfin from the Not-supported Menu.

### 4. Unmount the drive and reboot

```shell
sudo umount /mnt/Movies_TV-shows
sudo reboot
```
(Please adjust `/mnt/Movies_TV-shows` to the mountpath of your drive.)

After the reboot you can physically disconnect the drive.

## An unencrypted NTFS drive {#ntfs-drive}

This is a drive that you have mounted with `NTFS Mount` and where you answered `No` when you were asked if it is a backup drive.

NTFS drives are a lot simpler to remove than BTRFS drives because no snapshot script, no scrub script and no permission script gets created for them. Only the `fstab` entry exists.

1. Find the `UUID` of the drive:
    ```shell
    lsblk -o NAME,LABEL,SIZE,FSTYPE,UUID,MOUNTPOINT
    ```
1. Remove its entry from `/etc/fstab`. Please open the file and delete the one line that contains the `UUID` of your drive:
    ```shell
    sudo nano /etc/fstab
    ```
    :::caution
    Please double check that you delete the correct line! If you remove the wrong one, your server might not boot properly anymore - the lines of your **system** (the ones with `/`, `/boot` and `swap`) have to stay. The line of a NTFS drive contains `ntfs-3g` and `windows_names`.
    :::
1. If you have used this drive with [PLEX](./pms) or [Jellyfin](./jellyfin), please remove the libraries that pointed to this drive in the PLEX/Jellyfin web interface. The unused volume of the container doesn't do any harm, but if you want to get rid of it, you can reinstall PLEX/Jellyfin from the Not-supported Menu.
1. Unmount the drive and reboot:
    ```shell
    sudo umount /mnt/YOUR-MOUNTPATH
    sudo reboot
    ```
1. After the reboot you can physically disconnect the drive.

:::info
If the NTFS drive is **encrypted with Veracrypt**, this section doesn't apply. Please follow the [Veracrypt section](#veracrypt-drive) above instead, since such a drive is not mounted via `fstab` but via the automount script.
:::

## A Bitlocker encrypted drive {#bitlocker-drive}

This is a drive that you have mounted with `Bitlocker Mount`. Such a drive gets mounted in **two steps**, so it has **two** entries in `/etc/fstab`:

1. The Bitlocker container gets decrypted by `dislocker` to `/media/bitlocker/1`
1. The decrypted `dislocker-file` in there gets mounted to your actual mountpath

Both entries need to be removed.

1. Have a look at the current entries:
    ```shell
    sudo grep -n "dislocker" /etc/fstab
    ```
    You should see two lines that look like this (the mountpath is the one of your drive):
    ```
    PARTUUID=1234abcd-01 /media/bitlocker/1 fuse.dislocker user-password=YOUR-PASSWORD,nofail 0 0
    /media/bitlocker/1/dislocker-file /mnt/YOUR-MOUNTPATH ntfs-3g windows_names,uid=www-data,gid=www-data,umask=007,nofail 0 0
    ```
1. Unmount both mounts. Please start with your mountpath, since it is mounted **on top of** the dislocker mount:
    ```shell
    sudo umount /mnt/YOUR-MOUNTPATH
    sudo umount /media/bitlocker/1
    ```
1. Remove **both** lines from `/etc/fstab`. The safest way is to open the file and delete the two lines by hand:
    ```shell
    sudo nano /etc/fstab
    ```
    :::tip
    If the only lines that contain `dislocker` are the two that you have seen in the first step, you can also remove them in one go:
    ```shell
    sudo sed -i '/dislocker/d' /etc/fstab
    ```
    Please only use this if you have checked the output of the first step! The command deletes **every** line that contains `dislocker`, so if you have added lines that mention that path yourself, they would be deleted as well.
    :::
1. If you have used this drive with [PLEX](./pms) or [Jellyfin](./jellyfin), please remove the libraries that pointed to this drive in the PLEX/Jellyfin web interface.
1. If you don't want to use any Bitlocker drive on your server anymore, you can also remove the tool that was installed for it, so that you keep a clean system:
    ```shell
    sudo apt-get purge dislocker -y
    sudo apt-get autoremove -y
    ```
1. Reboot your server:
    ```shell
    sudo reboot
    ```
1. After the reboot you can physically disconnect the drive.

:::caution
A Bitlocker drive is mounted for `www-data` with the permissions `770`, which means that it can be used in Nextcloud and as SMB-share. So please also check the following before you disconnect it, otherwise your users will see folders that they cannot open:
* if you have added the drive as **external storage** in Nextcloud, please remove it there (`Administration settings` -> `External storage`)
* if you have created **SMB-shares** on this drive, please remove them with the SMB-server script ([here](./create-shares))
:::

## A backup drive

This is a drive that you have mounted with `BTRFS Mount` or `NTFS Mount` and where you answered `Yes` when you were asked if it is a backup drive ([here](./mount-backup-hdds)).

Backup drives are configured with `noauto` in `/etc/fstab`, which means that they don't get mounted automatically during boot but only by the backup script itself. So a disconnected backup drive doesn't put Nextcloud into maintenance mode. But the [daily backup](./daily-backup) and/or the [off-shore backup](./offshore-backup) will fail if the drive that they use isn't available anymore.

:::caution
Please make sure that you always have at least **one working backup**! So please don't disconnect a backup drive without having a replacement in place. ([instructions](./backup))
:::

If you want to **replace** the drive with a new one, e.g. because the old one got too small, please follow the [next section](#replace-backup-hdd) instead - it keeps your existing backup history and your backup configuration.

If you simply want to get rid of the drive, do the following:

1. Please first find out which backup used this drive:
    ```shell
    sudo grep "BACKUP_MOUNTPOINT" /var/scripts/daily-borg-backup.sh /var/scripts/off-shore-rsync-backup.sh
    ```
    (Depending on what you have set up, one of the two files might not exist.)
1. If one of the two backups used the drive that you want to disconnect, please **disable its cronjob**, so that it doesn't run into an error every day:
    ```shell
    sudo crontab -u root -e
    ```
    Put a `#` in front of the line that contains `daily-borg-backup.sh` respectively `off-shore-rsync-backup.sh`.
    :::caution
    Please only disable the backup that really used this drive! If your daily backup uses a different drive, it should of course keep running.
    :::
1. Find the `UUID` of the drive:
    ```shell
    lsblk -o NAME,LABEL,SIZE,FSTYPE,UUID
    ```
1. Remove its entry from `/etc/fstab`. Please open the file and delete the one line that contains the `UUID` of your drive:
    ```shell
    sudo nano /etc/fstab
    ```
    :::caution
    Please double check that you delete the correct line! The lines of your **system** (the ones with `/`, `/boot` and `swap`) have to stay.
    :::
    :::note
    The line of a backup drive always contains `noauto`. For a BTRFS backup drive it contains `btrfs` and `defaults,noauto`, for a NTFS backup drive it contains `ntfs-3g`, `uid=root`, `gid=root`, `umask=177` and `noauto`.
    :::
1. Now you can physically disconnect the drive.

## How to replace a backup drive with a new one? {#replace-backup-hdd}

If your backup drive got too small or you simply want to use a newer drive, the cleanest way is to **copy the old backup over to the new drive and then give the new drive the mountpath of the old one**. That way your backup history stays intact and you don't need to run the backup wizards again, because the daily backup script and the off-shore backup script store the mountpath of your backup drive and would otherwise not find their backup repository anymore.

:::caution
Please keep the old drive untouched until you have verified that the new drive works! Don't format or erase the old drive as long as it is your only backup.
:::

### 1. Note down the mountpath of the old drive

```shell
sudo grep noauto /etc/fstab
```

Please note down the **mountpath** (the second column) and the `UUID` of the drive that you want to replace. You will need the mountpath in step 5.

### 2. Format the new drive

Connect the new drive to your server and format it. Please use the **same filesystem** that your old backup drive has:
* For a BTRFS backup drive: format it to BTRFS ([instructions](./format-backup-hdds))
* For a NTFS backup drive: format it with `NTFS Format` from the Not-supported Menu

:::caution
During formatting, please make sure that you select the **new** drive and not your old backup drive! You can tell them apart by their size and their label. **All data on the formatted drive will be lost.**
:::

### 3. Mount the new drive temporarily

Now mount the new drive with `BTRFS Mount` respectively `NTFS Mount` from the Not-supported Menu ([instructions](./mount-backup-hdds)), but use a **temporary mountpath** like `/mnt/new-backup` and answer `Yes` when you are asked if this is a backup drive.

:::info
Please answer `Yes` here, even though this is only the temporary mount. A drive that gets registered as backup drive gets an entry in `/etc/fstab` and nothing else - no entries in the permission script, in the snapshot and scrub scripts or in PLEX/Jellyfin. If you answered `No` instead, it would get all of those, and they would all need to get cleaned up again in step 5.
:::
:::note
A backup drive is set to `noauto` in `/etc/fstab` and gets unmounted right away, which means that it doesn't get mounted automatically. That is why you have to mount it manually in the next step.

Registering it as backup drive also **locks down its permissions**, so that only `root` can access it: a BTRFS drive gets set to `root:root` with the permissions `600`, a NTFS drive gets mounted with `uid=root,gid=root,umask=177`. That is exactly what a backup drive should look like, so please leave it that way - the daily backup runs as `root` as well. It is also the reason why all commands in the next step have to be run with `sudo`.
:::

### 4. Copy all data from the old drive to the new drive

Both backup drives are not mounted automatically, so you have to mount them manually first:

```shell
sudo mount /mnt/OLD-MOUNTPATH
sudo mount /mnt/new-backup
```

Now copy everything over with `rsync`:

```shell
sudo rsync -aAXHv --info=progress2 --exclude '.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-backup/
```

:::caution
Please don't forget the **trailing slashes** at the end of both paths! Without them `rsync` would create a subdirectory inside the target instead of copying the content itself, and your backup would not be found afterwards.
:::
:::caution
Please **always** keep the `--exclude '.snapshots/'` in the command! If your backup drive has a `.snapshots` directory with BTRFS snapshots, `rsync` cannot copy them as snapshots - it would copy **every single one of them as a full copy** of your data, so the new drive would need many times the space and the copy would most likely fail because the drive runs full. The new drive creates its own snapshots from now on.
:::
:::info
This can take **many hours** depending on the size of your backup. It is a good idea to run this inside a `screen` or `tmux` session so that the copy doesn't get interrupted if your SSH connection drops:
```shell
sudo apt-get install screen -y
screen -S copy
```
(You can detach with `[CTRL] + [A]` followed by `[D]` and come back later with `sudo screen -r copy`.)
:::

Afterwards please compare the two drives to make sure that everything was copied:

```shell
sudo du -sh --exclude '.snapshots' /mnt/OLD-MOUNTPATH /mnt/new-backup
sudo rsync -aAXH --dry-run -i --exclude '.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-backup/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred.

:::note
The `--exclude` is needed in both commands as well, otherwise the sizes wouldn't match and the dry run would report all the snapshots as missing.
:::

### 5. Give the new drive the mountpath of the old drive

Now unmount both drives:

```shell
sudo umount /mnt/new-backup
sudo umount /mnt/OLD-MOUNTPATH
```

A backup drive has no entries besides the one in `/etc/fstab`, so the mountpath is simply changed there:

```shell
sudo nano /etc/fstab
```

1. **Delete** the line that contains the mountpath of your **old** drive.
1. In the line of the **new** drive, change `/mnt/new-backup` to the **mountpath of the old drive**. Please leave the rest of the line untouched.
1. Save with `[CTRL] + [O]`, `[ENTER]` and close nano with `[CTRL] + [X]`.

Now please **check the result** before you continue, since the next step is not easily reversible:

```shell
sudo grep noauto /etc/fstab
```

There should be exactly **one** line left for your backup drive, it should contain the `UUID` of the **new** drive and the mountpath of the **old** drive. The line of the old drive should be gone and `/mnt/new-backup` shouldn't show up anymore.

If that looks right, shut your server down:

```shell
sudo poweroff
```

Then physically **disconnect the old drive** and power your server back on.

:::caution
The mountpath has to be **exactly** the one that the old drive had, otherwise the daily backup and the off-shore backup will not find their backup repository anymore.
:::
:::note
Please **don't** run `BTRFS Mount`/`NTFS Mount` again for this. The script would run a `chown` and `chmod` over the **whole drive**, which can take a very long time on a drive that is now full of backup data - and it would need the mountpath to be free in `/etc/fstab` first anyway. Editing the one line is quicker and does exactly the same thing.
:::

### 6. Test the backup

Now run your daily backup manually to make sure that everything works ([instructions](./manual-backup)).

If the backup runs through successfully, the replacement is done. You can now safely erase the old drive and use it for something else.

:::info
If the backup fails, please have a look at the log with `sudo cat /var/log/nextcloud/borgbackup.log`. In most cases the mountpath of the new drive doesn't match the old one. You can check which mountpath your backup script expects with:
```shell
sudo grep "BACKUP_MOUNTPOINT\|BACKUP_TARGET_DIRECTORY" /var/scripts/daily-borg-backup.sh
```
:::
:::note
Running the `Daily Backup Wizard` again is **not** needed if you have reused the old mountpath. But it also doesn't hurt: if you choose the new drive and the same backup directory, it will detect the existing backup repository.
:::

:::tip
The same procedure works for your **off-shore backup drive**. Just use the mountpath of your old off-shore drive in step 5. You can check which mountpaths your off-shore backup uses with:
```shell
sudo grep "BACKUP_MOUNTPOINT\|BACKUP_SOURCE_MOUNTPOINT" /var/scripts/off-shore-rsync-backup.sh
```
`BACKUP_MOUNTPOINT` is the **off-shore drive** itself, which is the one that you replace here. `BACKUP_SOURCE_MOUNTPOINT` is your **daily backup drive**, from which the off-shore backup copies - please leave that one alone.
:::

## How to replace an unencrypted drive with a new one? {#replace-drive}

This section is about **unencrypted** drives, e.g. a Movies/TV-Shows drive or another BTRFS or NTFS drive that you have mounted with `BTRFS Mount` or `NTFS Mount`.

:::caution
If you want to replace your **encrypted external data SSD/HDD**, please follow the [Veracrypt section](#replace-veracrypt) below instead! The procedure is different there, because the Veracrypt scripts always format the drive and would delete your data.
:::

The idea is the same as for a backup drive: **copy the data over to the new drive and then give the new drive the mountpath of the old one.**

Reusing the old mountpath is the important part. Your server refers to your drives by their mountpath in several places, e.g.:
* the **PLEX/Jellyfin** libraries and container volumes
* the snapshot, scrub and permission scripts in `/var/scripts/`

If the new drive gets the same mountpath, all of that keeps working and you don't have to touch any of it.

:::caution
Don't erase the old drive until you have verified that everything works with the new drive!
:::
:::info
The nicest way to do this is with **both drives connected at the same time**, so please make sure that you have a free port.
:::

### 1. Note down the details of the old drive

Please note down the **mountpath** of the drive that you want to replace and its filesystem:

```shell
lsblk -o NAME,LABEL,SIZE,FSTYPE,UUID,MOUNTPOINT
```

### 2. Prepare the new drive

:::caution
During formatting, please make sure that you select the **new** drive and not the old one! You can tell them apart by their size and their label. **All data on the formatted drive will be lost.**
:::

Connect the new drive to your server and prepare it the same way that you have prepared the old one, but use a **temporary mountpath** like `/mnt/new-drive`:

* For a **BTRFS drive** (e.g. Movies/TV-Shows): format it to BTRFS ([instructions](./format-backup-hdds)) and mount it with `BTRFS Mount` ([instructions](./mount-hdd))
* For a **NTFS drive**: format it with `NTFS Format` and mount it with `NTFS Mount`

In both cases, please answer `Yes` when you get asked if this is a backup drive, even though it isn't one.

:::info
Answering `Yes` here is on purpose: it makes the script stop right after it has written the `fstab` entry. If you answered `No` instead, the drive would get **PLEX/Jellyfin volumes** for the temporary mountpath - and a BTRFS drive would additionally get entries in the permission script and in the snapshot and scrub scripts. All of those would point to `/mnt/new-drive` and would need to get cleaned up again in step 4. The drive gets all of its proper settings in step 5, when it is mounted to the mountpath of the old drive.
:::
:::note
A drive that is registered as backup drive is set to `noauto` in `/etc/fstab` and gets unmounted right away, so you have to mount it manually before you can copy anything to it:
```shell
sudo mount /mnt/new-drive
```
:::
:::caution
Registering the drive as backup drive also **locks down its permissions**: a BTRFS drive gets set to `root:root` with the permissions `600`, a NTFS drive gets mounted with `uid=root,gid=root,umask=177`. That is why every command in the next step has to be run with `sudo` - only `root` can write to the drive in this state.

For a **BTRFS** drive, please open it up again right after mounting it, so that the copy behaves like a normal directory:
```shell
sudo chmod 755 /mnt/new-drive
```
(For a NTFS drive this isn't possible, since the permissions come from the mount options. Running the copy with `sudo` is enough there.)

Don't worry about those permissions - in step 5 the drive gets its proper ownership anyway: the mount script sets the whole drive to `plex:plex` with the permissions `770`.
:::

### 3. Copy all data over with rsync

Now copy everything from the old drive to the new one:

```shell
sudo rsync -aAXHv --info=progress2 --exclude '.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

:::caution
Please don't forget the **trailing slashes** at the end of both paths! Without them `rsync` would create a subdirectory inside the target instead of copying the content itself.
:::
:::caution
Please **always** keep the `--exclude '.snapshots/'` in the command! The `.snapshots` directory contains the BTRFS snapshots of your drive. They are read-only copies of your data that only take up little space on the drive itself, but `rsync` cannot copy them as snapshots - it would copy **every single one of them as a full copy** of your data. So a drive with 10 snapshots would need more than 10 times the space and the copy would most likely fail because the new drive runs full.
:::
:::note
You don't lose anything by excluding them: the new drive creates its own snapshots from now on, and the snapshots of the old drive were only copies of the data that you are copying over anyway.
:::
:::info
This can take **many hours** depending on how much data you have. It is a good idea to run this inside a `screen` session so that the copy doesn't get interrupted if your SSH connection drops:
```shell
sudo apt-get install screen -y
screen -S copy
```
(You can detach with `[CTRL] + [A]` followed by `[D]` and come back later with `sudo screen -r copy`.)
:::
:::caution
If you copy from a BTRFS drive to a **NTFS** drive or the other way round, the permissions and ownership cannot be transferred one to one. In that case please use the exact same filesystem for the new drive as the old one had. Mixing them is not recommended.
:::

Afterwards please verify that everything was copied:

```shell
sudo du -sh --exclude '.snapshots' /mnt/OLD-MOUNTPATH /mnt/new-drive
sudo rsync -aAXH --dry-run -i --exclude '.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred.

:::note
The `--exclude` is needed in both commands as well, otherwise the sizes wouldn't match and the dry run would report all the snapshots as missing.
:::

### 4. Remove the old drive from your server

Both drives now have to be removed from your server's configuration - the old one because it is going away, and the new one because it currently sits on the **temporary** mountpath and needs to be mounted to the old mountpath instead.

Please do it in this order and **don't reboot in between**:

1. Remove the **old** drive from the configuration by following the section above that fits its drive type ([BTRFS](#btrfs-drive) or [NTFS](#ntfs-drive)). Please do **everything except the last step** of that section - so no `umount` and no reboot yet, since both drives get unmounted together below.
    :::caution
    Both drives are of the same type at this point, so please make sure that you really use the `UUID` of the **old** drive there! You can tell them apart by their mountpath:
    ```shell
    lsblk -o NAME,LABEL,SIZE,UUID,MOUNTPOINT
    ```
    The old drive is the one that is mounted to your old mountpath, the new one is mounted to `/mnt/new-drive`.
    :::
1. Remove the **new** drive from the configuration, so that its temporary mountpath `/mnt/new-drive` is free again. Please open the file and delete the line that contains `/mnt/new-drive`:
    ```shell
    sudo nano /etc/fstab
    ```
    :::note
    That is all for the new drive, since you have registered it as backup drive in step 2 - it has no other entries anywhere.
    :::
1. Now please **check the result**, since the next step is not easily reversible:
    ```shell
    sudo cat /etc/fstab
    ```
    Neither your old mountpath nor `/mnt/new-drive` should show up in there anymore. The step above removes the line of the new drive, the linked section removes the line of the old drive - please check that **both** are really gone. If one of them is still there, the mount in step 5 would fail because the mountpath is still taken.
1. Unmount both drives and shut your server down:
    ```shell
    sudo umount /mnt/new-drive
    sudo umount /mnt/OLD-MOUNTPATH
    sudo poweroff
    ```
1. Now physically **disconnect the old drive**, so that you cannot mix up the two drives in the next step, and power your server back on.

### 5. Mount the new drive to the old mountpath

Mount the new drive again with the same script that you have used in step 2 (`BTRFS Mount` respectively `NTFS Mount`), but this time:
* type in the **mountpath of the old drive** instead of the temporary one
* answer `No` when you are asked if this is a backup drive (this time it is the real mount, so the drive should get its regular settings)

:::caution
The mountpath has to be **exactly** the one that the old drive had, otherwise your PLEX/Jellyfin libraries will not find your data anymore.
:::
:::info
Answering `No` now is what creates the permission script entry, the snapshot and scrub entries and the PLEX/Jellyfin volumes again - this time for the correct mountpath.
:::

### 6. Check that everything works

1. Have a look at your data in the new mountpath: `ls -l /mnt/OLD-MOUNTPATH`
1. If it was a Movies/TV-Shows drive, have a look at your **PLEX/Jellyfin** libraries. Your movies and shows should show up like before.
1. Please also reinstall **Disk Monitoring**, so that the new drive gets monitored ([instructions](./smart)).

:::note
If PLEX/Jellyfin doesn't show your media although the data is on the drive, please trigger a rescan of the library in the PLEX/Jellyfin web interface.
:::

## How to replace the encrypted data SSD/HDD with a new one? {#replace-veracrypt}

This section is about the **encrypted external data SSD/HDD** that you have set up with `BTRFS Veracrypt` or `NTFS Veracrypt` ([here](./format-encrypt-mount)), usually mounted to `/mnt/data`.

The idea is the same as for the other drives - **copy the data over to the new drive and then give the new drive the mountpath of the old one** - but the last steps have to be done by hand.

Reusing the old mountpath is especially important for this drive, because your server refers to it by its mountpath in a lot of places:
* the **SMB-shares** in `/etc/samba/smb.conf` ([here](./create-shares))
* the **local storages** and the **user root folders** in Nextcloud (they store the absolute path)
* the **PLEX/Jellyfin** libraries and container volumes, if you have used this drive with them
* the snapshot, scrub and permission scripts in `/var/scripts/`

If the new drive gets the same mountpath, all of that keeps working and you don't need to recreate your shares or re-add your users' folders.

:::caution
The `BTRFS Veracrypt` and `NTFS Veracrypt` scripts always **format and encrypt** the drive first - there is no option to only mount an already encrypted drive. So please **don't** run them again after you have copied your data over, otherwise your data is gone!
:::
:::caution
Don't erase the old drive until you have verified that everything works with the new drive!
:::
:::info
The nicest way to do this is with **both drives connected at the same time**, so please make sure that you have a free port. If your server has no free port left, you can also copy the data over on your PC instead: you can open both drives with `Veracrypt` on your PC ([instructions](./access-veracrypt)) and copy the files there. In that case you can skip step 3 below.
:::

### 1. Note down the details of the old drive

Please note down the **mountpath** of the drive that you want to replace (usually `/mnt/data`):

```shell
lsblk -o NAME,LABEL,SIZE,FSTYPE,PARTUUID,MOUNTPOINT
```

### 2. Format, encrypt and mount the new drive

Connect the new drive to your server and set it up with `BTRFS Veracrypt` respectively `NTFS Veracrypt` from the Not-supported Menu ([instructions](./format-encrypt-mount)), but use a **temporary mountpath** like `/mnt/new-drive`.

:::caution
During formatting, please make sure that you select the **new** drive and not the old one! You can tell them apart by their size. **All data on the formatted drive will be lost.**
:::
:::tip
Please use the **same password** as for the old drive, then you have one less thing to change later on. Of course you can also use a new one - in that case please store it at a safe place.
:::

### 3. Copy all data over with rsync

```shell
sudo rsync -aAXHv --info=progress2 --exclude '.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

:::caution
Please don't forget the **trailing slashes** at the end of both paths! Without them `rsync` would create a subdirectory inside the target instead of copying the content itself.
:::
:::caution
Please **always** keep the `--exclude '.snapshots/'` in the command! The `.snapshots` directory contains the BTRFS snapshots of your drive. They are read-only copies of your data that only take up little space on the drive itself, but `rsync` cannot copy them as snapshots - it would copy **every single one of them as a full copy** of your data. So a drive with 10 snapshots would need more than 10 times the space and the copy would most likely fail because the new drive runs full.
:::
:::info
This can take **many hours** depending on how much data you have. It is a good idea to run this inside a `screen` session so that the copy doesn't get interrupted if your SSH connection drops:
```shell
sudo apt-get install screen -y
screen -S copy
```
(You can detach with `[CTRL] + [A]` followed by `[D]` and come back later with `sudo screen -r copy`.)
:::

Afterwards please verify that everything was copied:

```shell
sudo du -sh --exclude '.snapshots' /mnt/OLD-MOUNTPATH /mnt/new-drive
sudo rsync -aAXH --dry-run -i --exclude '.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred.

### 4. Remove both drives from the automount configuration

Now both drives have to be removed from the automount configuration - the old one because it is going away, and the new one because it currently sits on the temporary mountpath.

Since you will need the block of the **old** drive as template in step 7, please first save a copy of the whole automount script:

```shell
sudo cp /var/scripts/veracrypt-automount.sh /root/veracrypt-automount.sh.bak
```

:::caution
This file contains the **passwords of your Veracrypt drives in cleartext**. That is why the copy belongs in `/root/`, which only the root user can read - please **don't** copy those lines into a text editor on your PC or into a chat. The original script is protected the same way (`chmod 700`, owned by root). In step 7 you will delete the copy again.
:::

Now open the automount script:
```shell
sudo nano /var/scripts/veracrypt-automount.sh
```

There are now **two** blocks in this file that you have to delete. Each one starts with `if !` and ends with `fi`, and you can tell them apart by the mountpath at the end of the second line:

1. The block of the **old** drive (with your old mountpath)
1. The block of the **new** drive (with `/mnt/new-drive`)

:::caution
Please **don't** delete the lines above the first block (the `#!/bin/bash`, the `chown`/`chmod` lines and the line that resets the maintenance mode). Those are needed and are not part of any drive's block.
:::

Then remove the drive-connection monitoring of both drives:
```shell
sudo crontab -u root -e
```
Delete the two `@reboot /var/scripts/is-drive-connected.sh '...'` lines of the old and the new drive.

:::tip
Please **leave the permission, snapshot and scrub entries alone** - the ones in `/var/scripts/adjust-startup-permissions.sh`, `/var/scripts/create-hourly-btrfs-snapshots.sh` and `/var/scripts/scrub-btrfs-weekly.sh` that contain your **old** mountpath. Since the new drive gets exactly that mountpath, those entries stay correct and there is nothing to do.

Only the entries that contain `/mnt/new-drive` need to get removed from those three files, if the script has created any.
:::

### 5. Unmount both drives and disconnect the old one

First unmount both drives:

```shell
sudo veracrypt -t -d /mnt/new-drive
sudo veracrypt -t -d /mnt/OLD-MOUNTPATH
```

:::caution
Please check that both commands really succeeded before you continue:
```shell
sudo veracrypt -t -l
```
This should report that no volume is mounted. If one of them is still listed, some program is most likely still using it - e.g. a `screen` session in which your copy is still running, or a shell whose current directory is on the drive. Please close it and try again. Powering off with a volume still mounted can damage the filesystem.
:::

Then shut your server down:

```shell
sudo poweroff
```

Now physically **disconnect the old drive**, so that you cannot mix up the two drives in the next steps, and power your server back on.

### 6. Mount the new drive to the old mountpath

```shell
sudo mkdir -p /mnt/OLD-MOUNTPATH
sudo veracrypt -t -k "" --pim=0 --protect-hidden=no --fs-options=defaults \
"/dev/disk/by-partuuid/PARTUUID-OF-YOUR-NEW-DRIVE" /mnt/OLD-MOUNTPATH
```

You will get asked for the password of the new drive.

:::note
For a **NTFS Veracrypt** drive, please use these mount options instead:
```shell
sudo veracrypt -t -k "" --pim=0 --protect-hidden=no \
--fs-options=windows_names,uid=www-data,gid=www-data,umask=007 \
"/dev/disk/by-partuuid/PARTUUID-OF-YOUR-NEW-DRIVE" /mnt/OLD-MOUNTPATH
```
:::
:::tip
You can find the `PARTUUID` of your new drive with `lsblk -o NAME,LABEL,SIZE,PARTUUID`.
:::

### 7. Add the new drive to the automount script

Open the automount script:
```shell
sudo nano /var/scripts/veracrypt-automount.sh
```

The block of the **old** drive should already be gone (you removed it in step 4). Now add a block for the new drive at the end of the file - it is the same block that the script would have created, with the **password and the PARTUUID of the new drive** and the **mountpath of the old drive**:

```shell
if ! echo 'PASSWORD-OF-YOUR-NEW-DRIVE' | veracrypt -t -k "" --pim=0 --protect-hidden=no --fs-options=defaults \
"/dev/disk/by-partuuid/PARTUUID-OF-YOUR-NEW-DRIVE" /mnt/OLD-MOUNTPATH
then
    sed -i "/'maintenance'/s/false/true/" "/var/www/nextcloud/config/config.php"
    source /var/scripts/fetch_lib.sh
    nextcloud_occ_no_check maintenance:mode --on
    send_mail "/mnt/OLD-MOUNTPATH could not get mounted!" "Please connect the drive and reboot your server! \
The maintenance mode was activated to prevent any issue with Nextcloud. \
You can disable it after the drive is successfully mounted again!"
fi
```

:::tip
The easiest and least error-prone way is to use the block of the **old** drive as template and only exchange the password and the `PARTUUID` in it. The mountpath stays the same, since you reuse it. If you have used the same password for the new drive, you only need to change the `PARTUUID`. You can look at the old block in the copy that you have made in step 4:
```shell
sudo cat /root/veracrypt-automount.sh.bak
```
:::

:::caution
Please **keep** the copy for now - you delete it at the end of step 9, after the reboot has worked. If something goes wrong, it is the easiest way to get the old block back.
:::

### 8. Add the drive-connection monitoring again

```shell
sudo crontab -u root -e
```
Add a line for the new drive:
```
@reboot /var/scripts/is-drive-connected.sh 'PARTUUID-OF-YOUR-NEW-DRIVE' >/dev/null
```

### 9. Prepare the drive and reboot

**For a `BTRFS Veracrypt` drive**, please fix the permissions on the new drive first and create the snapshot directory afterwards:
```shell
sudo chown -R www-data:www-data /mnt/OLD-MOUNTPATH
sudo chmod -R 770 /mnt/OLD-MOUNTPATH
sudo mkdir -p /mnt/OLD-MOUNTPATH/.snapshots
```

:::info
**For a `NTFS Veracrypt` drive** please skip those three commands and go straight to the reboot below. Such a drive has no snapshots, and its ownership comes from the mount options in the automount block (`uid=www-data,gid=www-data,umask=007`), not from `chown`.
:::

:::caution
Please keep this order and don't run the two recursive commands afterwards again! BTRFS snapshots are **read-only**, so as soon as there are snapshots in `.snapshots`, a `chown -R`/`chmod -R` over the whole drive would run into errors. That is also why the permission script of your server skips that directory. Since you have excluded `.snapshots` from the copy in step 3, the new drive has none yet at this point.
:::

Then reboot your server:
```shell
sudo reboot
```

After the reboot, the new drive should get mounted automatically to the old mountpath and Nextcloud should **not** be in maintenance mode.

:::note
If Nextcloud is in maintenance mode after the reboot, the automount of the new drive failed. Most likely there is a typo in the block that you have added in step 7. You can disable the maintenance mode with `sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --off` and check the block again. The old block is still in your copy: `sudo cat /root/veracrypt-automount.sh.bak`
:::

**Only when the reboot has worked** and the drive is mounted again, please delete the copy of the automount script, since it contains your passwords in cleartext:

```shell
sudo rm /root/veracrypt-automount.sh.bak
```

### 10. Check that everything works

1. Have a look at your **files in Nextcloud** - your folders should show up like before.
1. Have a look at your **SMB-shares** from a PC ([instructions](./smb-connect)).
1. If you have used this drive with **PLEX/Jellyfin**, have a look at your libraries there.
1. Please also reinstall **Disk Monitoring**, so that the new drive gets monitored ([instructions](./smart)).

:::info
If your files don't show up in Nextcloud although the data is on the drive, the file cache most likely still needs to be updated. You can trigger a rescan like this:
```shell
sudo -i
nextcloud_occ files:scan --all
exit
```
:::
:::note
If you didn't reuse the old mountpath after all, your local storages in Nextcloud point to the wrong path now. You can look at them and correct the path of one of them like this:
```shell
sudo -i
nextcloud_occ files_external:list
nextcloud_occ files_external:config <mount-id> datadir /mnt/NEW-MOUNTPATH
exit
```
(Please replace `<mount-id>` with the ID that is shown in the list.) The paths in your SMB-shares would need to get corrected as well, in `/etc/samba/smb.conf`.
:::

## How to replace a Bitlocker encrypted drive with a new one? {#replace-bitlocker}

This section is about a drive that you have mounted with `Bitlocker Mount`.

:::caution
The `Bitlocker Mount` script currently supports only **one** Bitlocker encrypted drive at a time, since it always uses `/media/bitlocker/1`. That means that you **cannot have the old and the new Bitlocker drive mounted at the same time** on your server, so the data has to take a detour.
:::

Because of that, there are two ways to do this. Please pick the one that fits your situation:

* **On a Windows PC** (recommended): connect both drives to a Windows PC, unlock them with Bitlocker there and copy the data over. This is by far the easiest way, since Windows can handle both drives at once.
* **On your server**: copy the data from the old drive to a temporary location on your server first, then swap the drives and copy it back. For this you need enough free space somewhere on your server for **all** the data of the drive.

Reusing the old mountpath is important here as well, because your server refers to the drive by its mountpath in Nextcloud, in your SMB-shares and in PLEX/Jellyfin.

:::caution
Don't erase the old drive until you have verified that everything works with the new drive!
:::

### 1. Note down the details of the old drive

```shell
sudo grep dislocker /etc/fstab
```

Please note down the **mountpath** (the second column of the second line) - you will reuse it for the new drive.

### 2. Copy the data over

**If you do it on a Windows PC:** please follow step 3 below to remove the old drive from your server first, then connect both drives to your Windows PC, unlock them and copy all data from the old drive to the new one. Afterwards continue with step 4.

**If you do it on your server**, please copy the data to a temporary location first. Please make sure that the target has enough free space (you can check with `df -h`):

```shell
sudo mkdir -p /mnt/bitlocker-temp
sudo rsync -aAXHv --info=progress2 /mnt/OLD-MOUNTPATH/ /mnt/bitlocker-temp/
```

:::caution
Please don't forget the **trailing slashes** at the end of both paths!
:::
:::caution
`/mnt/bitlocker-temp` is a directory on your **system drive**, so it has to have enough free space for all your data. If your system drive is too small, please use a directory on one of your other drives instead, e.g. `/mnt/data/bitlocker-temp`.

If you use a different directory, please use **that** directory in all the following commands as well - in step 5 you copy the data back from it and delete it again.
:::
:::info
This can take **many hours**. It is a good idea to run this inside a `screen` session so that the copy doesn't get interrupted if your SSH connection drops:
```shell
sudo apt-get install screen -y
screen -S copy
```
(You can detach with `[CTRL] + [A]` followed by `[D]` and come back later with `sudo screen -r copy`.)
:::

### 3. Remove the old drive from your server

Please follow the [Bitlocker section](#bitlocker-drive) above to remove the old drive from your server, but **don't** purge `dislocker` - you still need it for the new drive.

In short:
```shell
sudo umount /mnt/OLD-MOUNTPATH
sudo umount /media/bitlocker/1
sudo nano /etc/fstab
```
and delete the two lines that contain `dislocker` there.

Then shut your server down and physically disconnect the old drive:
```shell
sudo poweroff
```

### 4. Mount the new drive to the old mountpath

Power your server back on, connect the **new** Bitlocker drive and mount it with `Bitlocker Mount` from the Not-supported Menu. Please type in the **mountpath of the old drive** when you are asked for the mountpath.

:::caution
The mountpath has to be **exactly** the one that the old drive had, otherwise your Nextcloud storages, your SMB-shares and your PLEX/Jellyfin libraries will not find your data anymore.
:::
:::info
The `Bitlocker Mount` script does **not** format anything - a Bitlocker drive gets encrypted on Windows, not by the script. So it is safe to run it again for the new drive.
:::

### 5. Copy the data back (only if you did it on your server)

If you have copied the data to a temporary location in step 2, please copy it to the new drive now:

```shell
sudo rsync -aAXHv --info=progress2 /mnt/bitlocker-temp/ /mnt/OLD-MOUNTPATH/
```

Afterwards please verify that everything was copied and then remove the temporary copy:

```shell
sudo du -sh /mnt/bitlocker-temp /mnt/OLD-MOUNTPATH
sudo rsync -aAXH --dry-run -i /mnt/bitlocker-temp/ /mnt/OLD-MOUNTPATH/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred. Only if everything looks good:

```shell
sudo rm -r /mnt/bitlocker-temp
```

:::caution
Please only delete the temporary copy after you have verified that all data is on the new drive!
:::

### 6. Check that everything works

1. Have a look at your data in the new mountpath: `ls -l /mnt/OLD-MOUNTPATH`
1. If the drive was mounted as external storage in Nextcloud, have a look at your **files in Nextcloud**.
1. If you have created SMB-shares on this drive, have a look at them from a PC ([instructions](./smb-connect)).
1. If you have used this drive with **PLEX/Jellyfin**, have a look at your libraries there.
1. Please also reinstall **Disk Monitoring**, so that the new drive gets monitored ([instructions](./smart)).

:::info
If your files don't show up in Nextcloud although the data is on the drive, the file cache most likely still needs to be updated. You can trigger a rescan like this:
```shell
sudo -i
nextcloud_occ files:scan --all
exit
```
:::
