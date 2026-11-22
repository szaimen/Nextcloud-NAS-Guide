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
sudo systemctl disable veracrypt-automount
```
(Please don't add `--now` here: stopping the service could interfere with the drive that is still mounted. Disabling it is enough, since it only runs during boot.)
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

Afterwards remove the block of the drive from the snapshot script:
```shell
sudo nano /var/scripts/create-hourly-btrfs-snapshots.sh
```

Every drive has one block in this file that starts with a comment line containing its mountpath and ends with `done`, like this:
```shell
# /mnt/data
btrfs subvolume snapshot -r "/mnt/data/" "/mnt/data/.snapshots/@$CURRENT_DATE"
while [ "$(find "/mnt/data/.snapshots/" -maxdepth 1 -mindepth 1 -type d -name '@*_*' | wc -l)" -gt "$MAX_SNAPSHOTS" ]
do
    DELETE="$(find "/mnt/data/.snapshots/" -maxdepth 1 -mindepth 1 -type d -name '@*_*' | sort | head -1)"
    btrfs subvolume delete "$DELETE"
done
```
Please delete the **whole block** of your drive - from the line `# /mnt/...` down to and including `done`. Please **don't** delete the lines at the top of the file (`#!/bin/bash`, the `chown`/`chmod` lines and the variables).

And then from the scrub script:
```shell
sudo nano /var/scripts/scrub-btrfs-weekly.sh
```
Here the block of a drive also starts with the line `# /mnt/...` and ends with `fi` (it contains two `notify_admin_gui` calls and an `if ! btrfs scrub start ... then ... else ... fi`). Please delete the **whole block** - from `# /mnt/...` down to and including `fi`.

:::caution
If you only delete the lines that contain the mountpath, the remaining `while`/`do`/`done` respectively `if`/`else`/`fi` lines break the script, and the snapshots and scrubs of your **other** drives would fail as well.
:::

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

:::note
If the first command fails because the volume is still in use (e.g. by Nextcloud, Samba or the PLEX/Jellyfin container), you can simply skip it and only reboot. The reboot unmounts the drive cleanly, and thanks to the steps above it doesn't get mounted again.
:::

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
sudo grep 'UUID-OF-YOUR-DRIVE' /etc/fstab
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

Afterwards remove the block of the drive from the snapshot script:
```shell
sudo nano /var/scripts/create-daily-btrfs-snapshots.sh
```

Every drive has one block in this file that starts with a comment line containing its mountpath and ends with `done`, like this:
```shell
# /mnt/Movies_TV-shows
btrfs subvolume snapshot -r "/mnt/Movies_TV-shows/" "/mnt/Movies_TV-shows/.snapshots/@$CURRENT_DATE"
while [ "$(find "/mnt/Movies_TV-shows/.snapshots/" -maxdepth 1 -mindepth 1 -type d -name '@*_*' | wc -l)" -gt "$MAX_SNAPSHOTS" ]
do
    DELETE="$(find "/mnt/Movies_TV-shows/.snapshots/" -maxdepth 1 -mindepth 1 -type d -name '@*_*' | sort | head -1)"
    btrfs subvolume delete "$DELETE"
done
```
Please delete the **whole block** of your drive - from the line `# /mnt/...` down to and including `done`. Please **don't** delete the lines at the top of the file (`#!/bin/bash`, the `chown`/`chmod` lines and the variables).

And then from the scrub script:
```shell
sudo nano /var/scripts/scrub-btrfs-monthly.sh
```
Here the block of a drive also starts with the line `# /mnt/...` and ends with `fi` (it contains two `notify_admin_gui` calls and an `if ! btrfs scrub start ... then ... else ... fi`). Please delete the **whole block** - from `# /mnt/...` down to and including `fi`.

:::caution
If you only delete the lines that contain the mountpath, the remaining `while`/`do`/`done` respectively `if`/`else`/`fi` lines break the script, and the snapshots and scrubs of your **other** drives would fail as well.
:::

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

    In the off-shore backup script, `BACKUP_MOUNTPOINT` is the off-shore drive and `BACKUP_SOURCE_MOUNTPOINT` is your daily backup drive, from which the off-shore backup copies. So if you disconnect your **daily** backup drive, the off-shore backup will fail as well.
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

The copy can take many hours, and the backup must not run in the meantime: it would write to the old drive while it gets copied and unmount it when it is done. So please first **disable the backup cronjobs** temporarily:
```shell
sudo crontab -u root -e
```
Put a `#` in front of the lines that contain `daily-borg-backup.sh` and `off-shore-rsync-backup.sh`. You enable them again in step 6.

Both backup drives are not mounted automatically, so you have to mount them manually first:

```shell
sudo mount /mnt/OLD-MOUNTPATH
sudo mount /mnt/new-backup
```

Now copy everything over with `rsync`.

**For a BTRFS backup drive:**
```shell
sudo rsync -aAXHv --info=progress2 --exclude '/.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-backup/
```

**For a NTFS backup drive:**
```shell
sudo rsync -rtv --info=progress2 /mnt/OLD-MOUNTPATH/ /mnt/new-backup/
```
(NTFS doesn't support Linux permissions, ownership and ACLs, so `rsync` would only run into errors when it tries to copy them. The ownership of a NTFS backup drive comes from its mount options anyway.)

:::caution
Please don't forget the **trailing slashes** at the end of both paths! Without them `rsync` would create a subdirectory inside the target instead of copying the content itself, and your backup would not be found afterwards.
:::
:::caution
Please **always** keep the `--exclude '/.snapshots/'` in the command! If your backup drive has a `.snapshots` directory with BTRFS snapshots, `rsync` cannot copy them as snapshots - it would copy **every single one of them as a full copy** of your data, so the new drive would need many times the space and the copy would most likely fail because the drive runs full. The new drive creates its own snapshots from now on.
:::
:::info
This can take **many hours** depending on the size of your backup. It is a good idea to run this inside a `screen` or `tmux` session so that the copy doesn't get interrupted if your SSH connection drops:
```shell
sudo apt-get install screen -y
screen -S copy
```
(You can detach with `[CTRL] + [A]` followed by `[D]` and come back later with `sudo screen -r copy`.)
:::

Afterwards please compare the two drives to make sure that everything was copied.

**For a BTRFS backup drive:**
```shell
sudo du -sh --exclude '.snapshots' /mnt/OLD-MOUNTPATH /mnt/new-backup
sudo rsync -aAXH --dry-run -i --exclude '/.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-backup/
```

**For a NTFS backup drive:**
```shell
sudo du -sh /mnt/OLD-MOUNTPATH /mnt/new-backup
sudo rsync -rt --dry-run -i /mnt/OLD-MOUNTPATH/ /mnt/new-backup/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred.

:::note
For a BTRFS backup drive the `--exclude` is needed in both commands as well, otherwise the sizes wouldn't match and the dry run would report all the snapshots as missing.
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

If the backup runs through successfully, please **enable the backup cronjobs again** that you have disabled in step 4, by removing the `#` in front of them:
```shell
sudo crontab -u root -e
```

Now the replacement is done. You can now safely erase the old drive and use it for something else.

:::info
If the backup fails, please have a look at the log with `sudo cat /var/log/nextcloud/borgbackup.log`. In most cases the mountpath of the new drive doesn't match the old one. You can check which mountpath your backup script expects with:
```shell
sudo grep "BACKUP_MOUNTPOINT\|BACKUP_TARGET_DIRECTORY" /var/scripts/daily-borg-backup.sh
```
:::
:::note
Please **don't** run the `Daily Backup Wizard` again - it is not needed if you have reused the old mountpath. The wizard cannot take over an existing backup repository: it refuses a backup directory that already contains data and would create a **new, empty** repository in a different directory instead, so your backup history would not be continued.
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

If the new drive gets the same mountpath, all of that keeps working and you don't have to touch any of it. That is why the new drive simply **takes over the `fstab` line of the old drive** at the end - you only exchange the `UUID` in it.

:::caution
Don't erase the old drive until you have verified that everything works with the new drive!
:::
:::caution
Please use the **same filesystem** for the new drive as the old one has (BTRFS for a BTRFS drive, NTFS for a NTFS drive). The new drive takes over the `fstab` line of the old one, and that line contains the filesystem and its mount options.
:::
:::info
The nicest way to do this is with **both drives connected at the same time**, so please make sure that you have a free port.
:::

### 1. Note down the details of the old drive

Please note down the **mountpath** of the drive that you want to replace, its `UUID` and its filesystem:

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
Answering `Yes` here is on purpose: it makes the script stop right after it has written the `fstab` entry. If you answered `No` instead, the drive would get **PLEX/Jellyfin volumes** for the temporary mountpath - and a BTRFS drive would additionally get entries in the permission script and in the snapshot and scrub scripts. All of those would point to `/mnt/new-drive` and would need to get cleaned up again. The drive gets its proper settings in step 4, when it takes over the `fstab` line of the old drive.
:::
:::note
A drive that is registered as backup drive is set to `noauto` in `/etc/fstab` and gets unmounted right away, so you have to mount it manually before you can copy anything to it:
```shell
sudo mount /mnt/new-drive
```
:::
:::caution
Registering the drive as backup drive also **locks down its permissions**: a BTRFS drive gets set to `root:root` with the permissions `600`, a NTFS drive gets mounted with `uid=root,gid=root,umask=177`. That is why every command in the next steps has to be run with `sudo` - only `root` can write to the drive in this state.

Don't worry about those permissions: for a BTRFS drive, `rsync` copies the ownership and permissions of your files from the old drive in the next step. For a NTFS drive the ownership comes from the mount options, and the drive gets the options of the old drive in step 4.
:::

### 3. Copy all data over with rsync

Now copy everything from the old drive to the new one.

**For a BTRFS drive:**
```shell
sudo rsync -aAXHv --info=progress2 --exclude '/.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

**For a NTFS drive:**
```shell
sudo rsync -rtv --info=progress2 /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

:::note
NTFS doesn't support Linux permissions, ownership and ACLs, so `rsync` would only run into errors when it tries to copy them. That is why the NTFS command only copies the files and their timestamps (`-rt`). The ownership comes from the mount options anyway.
:::
:::caution
Please don't forget the **trailing slashes** at the end of both paths! Without them `rsync` would create a subdirectory inside the target instead of copying the content itself.
:::
:::caution
For a BTRFS drive, please **always** keep the `--exclude '/.snapshots/'` in the command! The `.snapshots` directory contains the BTRFS snapshots of your drive. They are read-only copies of your data that only take up little space on the drive itself, but `rsync` cannot copy them as snapshots - it would copy **every single one of them as a full copy** of your data. So a drive with 10 snapshots would need more than 10 times the space and the copy would most likely fail because the new drive runs full.
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

Afterwards please verify that everything was copied.

**For a BTRFS drive:**
```shell
sudo du -sh --exclude '.snapshots' /mnt/OLD-MOUNTPATH /mnt/new-drive
sudo rsync -aAXH --dry-run -i --exclude '/.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

**For a NTFS drive:**
```shell
sudo du -sh /mnt/OLD-MOUNTPATH /mnt/new-drive
sudo rsync -rt --dry-run -i /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred.

:::note
For a BTRFS drive the `--exclude` is needed in both commands as well, otherwise the sizes wouldn't match and the dry run would report all the snapshots as missing.
:::

### 4. Let the new drive take over the fstab line of the old drive

**For a BTRFS drive**, please first create the snapshot directory on the new drive, since the snapshot script of the old mountpath expects it:
```shell
sudo mkdir -p /mnt/new-drive/.snapshots
```

Now unmount both drives:
```shell
sudo umount /mnt/new-drive
sudo umount /mnt/OLD-MOUNTPATH
```

:::note
If unmounting the old drive fails with `target is busy`, it is most likely still used by PLEX/Jellyfin or by a `screen` session. In that case you can skip the `umount` of the old drive - the `poweroff` below unmounts it cleanly as well.
:::

Find the `UUID` of the **new** drive (it is the one with the label and size of your new drive):
```shell
lsblk -o NAME,LABEL,SIZE,FSTYPE,UUID
```

Then open `/etc/fstab`:
```shell
sudo nano /etc/fstab
```

1. **Delete** the line that contains `/mnt/new-drive`.
1. In the line that contains the **mountpath of your old drive**, replace the `UUID` of the old drive with the `UUID` of the **new** drive. Please leave the rest of the line untouched.
1. Save with `[CTRL] + [O]`, `[ENTER]` and close nano with `[CTRL] + [X]`.

Now please **check the result** before you continue:
```shell
sudo grep 'OLD-MOUNTPATH' /etc/fstab
sudo grep 'new-drive' /etc/fstab
```

The first command should show exactly **one** line, with the `UUID` of the **new** drive and **without** `noauto` (for a BTRFS drive it contains `defaults,nofail`, for a NTFS drive `uid=plex,gid=plex,umask=007,nofail`). The second command shouldn't show anything.

If that looks right, shut your server down:
```shell
sudo poweroff
```

Then physically **disconnect the old drive** and power your server back on. The new drive now gets mounted to the old mountpath during boot - before PLEX/Jellyfin start, so they find your data right away.

:::note
Please **don't** run `BTRFS Mount`/`NTFS Mount` again for this. Its entries for the old mountpath (permission script, snapshot and scrub scripts, PLEX/Jellyfin volumes) are all still in place and stay correct, since the mountpath didn't change. For a BTRFS drive, the permission script additionally corrects the ownership of the drive on every boot.
:::

### 5. Check that everything works

1. Check that the new drive is mounted to the old mountpath: `lsblk -o NAME,LABEL,SIZE,MOUNTPOINT`
1. Have a look at your data in the mountpath: `ls -l /mnt/OLD-MOUNTPATH`
1. If it was a Movies/TV-Shows drive, have a look at your **PLEX/Jellyfin** libraries. Your movies and shows should show up like before.
1. Please also reinstall **Disk Monitoring**, so that the new drive gets monitored ([instructions](./smart)).

:::note
If PLEX/Jellyfin doesn't show your media although the data is on the drive, please restart the container (`sudo docker restart plex` respectively `sudo docker restart jellyfin`) and trigger a rescan of the library in the PLEX/Jellyfin web interface.
:::

## How to replace the encrypted data SSD/HDD with a new one? {#replace-veracrypt}

This section is about the **encrypted external data SSD/HDD** that you have set up with `BTRFS Veracrypt` or `NTFS Veracrypt` ([here](./format-encrypt-mount)), usually mounted to `/mnt/data`.

The idea is the same as for the other drives - **copy the data over to the new drive and then give the new drive the mountpath of the old one** - but the last steps have to be done by hand.

Reusing the old mountpath is especially important for this drive, because your server refers to it by its mountpath in a lot of places:
* the **SMB-shares** in `/etc/samba/smb.conf` ([here](./create-shares))
* the **local storages** and the **user root folders** in Nextcloud (they store the absolute path)
* the **PLEX/Jellyfin** libraries and container volumes, if you have used this drive with them
* the snapshot, scrub and permission scripts in `/var/scripts/`

If the new drive gets the same mountpath, all of that keeps working and you don't need to recreate your shares or re-add your users' folders. That is why the new drive simply **takes over the automount entry of the old drive** at the end - you only exchange the `PARTUUID` (and the password, if you use a new one) in it.

:::caution
The `BTRFS Veracrypt` and `NTFS Veracrypt` scripts always **format and encrypt** the drive first - there is no option to only mount an already encrypted drive. So please **don't** run them again after you have copied your data over, otherwise your data is gone!
:::
:::caution
Don't erase the old drive until you have verified that everything works with the new drive!
:::
:::info
The nicest way to do this is with **both drives connected at the same time**, so please make sure that you have a free port.

If your server has no free port left, you can also copy the data over on your PC instead ([instructions](./access-veracrypt) how to open the drives there). In that case please do the steps in this order:
1. Steps 1 and 2 as described below
1. From step 3 only the maintenance mode and the stopping of Samba at the beginning - **not** the `rsync` copy
1. Steps 4 and 5 - but in step 5, power your server back on only **after** the copy
1. After the poweroff in step 5, connect both drives to your PC, open them with `Veracrypt` and copy all files from the old drive to the new one (without the `.snapshots` folder)
1. Connect **only the new drive** to your server, power it on and continue with step 6

The ownership of the files that you copy on your PC doesn't matter: for a `BTRFS Veracrypt` drive the permission script corrects it during the boot, for a `NTFS Veracrypt` drive it comes from the mount options.
:::

### 1. Note down the details of the old drive

Please note down the **mountpath** of the drive that you want to replace (usually `/mnt/data`) and its `PARTUUID`:

```shell
lsblk -o NAME,LABEL,SIZE,FSTYPE,PARTUUID,MOUNTPOINT
```

### 2. Format, encrypt and mount the new drive

Connect the new drive to your server and set it up with `BTRFS Veracrypt` respectively `NTFS Veracrypt` from the Not-supported Menu ([instructions](./format-encrypt-mount)), but use a **temporary mountpath** like `/mnt/new-drive`. Please use the **same one** of the two scripts that you have used for the old drive.

:::caution
During formatting, please make sure that you select the **new** drive and not the old one! You can tell them apart by their size. **All data on the formatted drive will be lost.**
:::
:::tip
Please use the **same password** as for the old drive, then you have one less thing to change later on. Of course you can also use a new one - in that case please store it at a safe place.
:::

**For a `BTRFS Veracrypt` drive**, the script has now also created entries for `/mnt/new-drive` in the permission, snapshot and scrub scripts. Please remove them **right away**, otherwise snapshots of the new drive get created while you copy your data over:

1. Open the snapshot script and delete the **whole block** of `/mnt/new-drive` - from the line `# /mnt/new-drive` down to and including the line `done`:
    ```shell
    sudo nano /var/scripts/create-hourly-btrfs-snapshots.sh
    ```
    The block looks like this:
    ```shell
    # /mnt/new-drive
    btrfs subvolume snapshot -r "/mnt/new-drive/" "/mnt/new-drive/.snapshots/@$CURRENT_DATE"
    while [ "$(find "/mnt/new-drive/.snapshots/" -maxdepth 1 -mindepth 1 -type d -name '@*_*' | wc -l)" -gt "$MAX_SNAPSHOTS" ]
    do
        DELETE="$(find "/mnt/new-drive/.snapshots/" -maxdepth 1 -mindepth 1 -type d -name '@*_*' | sort | head -1)"
        btrfs subvolume delete "$DELETE"
    done
    ```
1. Open the scrub script and delete the **whole block** of `/mnt/new-drive` - from the line `# /mnt/new-drive` down to and including the line `fi`:
    ```shell
    sudo nano /var/scripts/scrub-btrfs-weekly.sh
    ```
1. Open the permission script and delete the **three lines** of the `find` command that contains `/mnt/new-drive`:
    ```shell
    sudo nano /var/scripts/adjust-startup-permissions.sh
    ```
1. If a snapshot of the new drive got created in the meantime, delete it again:
    ```shell
    sudo ls /mnt/new-drive/.snapshots
    ```
    If this shows any snapshot (named like `@20260101_120000`), delete them with:
    ```shell
    sudo bash -c 'btrfs subvolume delete /mnt/new-drive/.snapshots/@*'
    ```
    (The `bash -c` is needed so that the `*` gets expanded with root permissions.)
    Please **keep** the (now empty) `.snapshots` directory itself - the snapshot script of your old mountpath needs it on the new drive.

:::note
Please **don't** touch the blocks of your **old** mountpath in those three files! The new drive gets exactly that mountpath, so they stay correct. For a `NTFS Veracrypt` drive there is nothing to remove here, since such a drive has no permission, snapshot and scrub entries.
:::

### 3. Copy all data over with rsync

Your users must not change any files on the old drive during the copy, otherwise those changes would be missing on the new drive. So please first put Nextcloud into maintenance mode and stop Samba:
```shell
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --on
sudo systemctl stop smbd
```

:::note
Both get turned back on automatically during the boot in step 5: the automount script disables the maintenance mode on every boot (as long as the drive gets mounted successfully), and Samba gets started again. If you have used this drive with PLEX/Jellyfin, that doesn't matter here, since they only read from it.
:::

**For a `BTRFS Veracrypt` drive:**
```shell
sudo rsync -aAXHv --info=progress2 --exclude '/.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

**For a `NTFS Veracrypt` drive:**
```shell
sudo rsync -rtv --info=progress2 /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

:::note
NTFS doesn't support Linux permissions, ownership and ACLs, so `rsync` would only run into errors when it tries to copy them. That is why the NTFS command only copies the files and their timestamps (`-rt`). The ownership comes from the mount options (`uid=www-data,gid=www-data,umask=007`) anyway.
:::
:::caution
Please don't forget the **trailing slashes** at the end of both paths! Without them `rsync` would create a subdirectory inside the target instead of copying the content itself.
:::
:::caution
For a BTRFS drive, please **always** keep the `--exclude '/.snapshots/'` in the command! The `.snapshots` directory contains the BTRFS snapshots of your drive. They are read-only copies of your data that only take up little space on the drive itself, but `rsync` cannot copy them as snapshots - it would copy **every single one of them as a full copy** of your data. So a drive with 10 snapshots would need more than 10 times the space and the copy would most likely fail because the new drive runs full.
:::
:::info
This can take **many hours** depending on how much data you have. It is a good idea to run this inside a `screen` session so that the copy doesn't get interrupted if your SSH connection drops:
```shell
sudo apt-get install screen -y
screen -S copy
```
(You can detach with `[CTRL] + [A]` followed by `[D]` and come back later with `sudo screen -r copy`.)
:::
:::note
Since `rsync -a` copies the ownership and permissions as well, the files on a `BTRFS Veracrypt` drive keep `www-data:www-data` with `770`. So there is no need to run `chown`/`chmod` over the new drive afterwards - and the permission script of your server corrects them on every boot anyway.
:::

Afterwards please verify that everything was copied.

**For a `BTRFS Veracrypt` drive:**
```shell
sudo du -sh --exclude '.snapshots' /mnt/OLD-MOUNTPATH /mnt/new-drive
sudo rsync -aAXH --dry-run -i --exclude '/.snapshots/' /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

**For a `NTFS Veracrypt` drive:**
```shell
sudo du -sh /mnt/OLD-MOUNTPATH /mnt/new-drive
sudo rsync -rt --dry-run -i /mnt/OLD-MOUNTPATH/ /mnt/new-drive/
```

The second command is a dry run (that is what `--dry-run` does) and doesn't change anything. It should not report any file that still needs to be transferred.

### 4. Let the new drive take over the automount entry of the old drive

First please save a copy of the whole automount script, so that you can go back if something goes wrong:

```shell
sudo cp /var/scripts/veracrypt-automount.sh /root/veracrypt-automount.sh.bak
```

:::caution
This file contains the **passwords of your Veracrypt drives in cleartext**. That is why the copy belongs in `/root/`, which only the root user can read - please **don't** copy those lines into a text editor on your PC or into a chat. The original script is protected the same way (`chmod 700`, owned by root). In step 6 you will delete the copy again.
:::

Find the `PARTUUID` of the **new** drive (it is the one that is mounted to `/mnt/new-drive`):
```shell
lsblk -o NAME,LABEL,SIZE,PARTUUID,MOUNTPOINT
```

Now open the automount script:
```shell
sudo nano /var/scripts/veracrypt-automount.sh
```

There are now **two** blocks in this file that matter. Each one starts with `if !` and ends with `fi`, and you can tell them apart by the mountpath at the end of the second line (respectively the third line for a `NTFS Veracrypt` drive):

1. **Delete** the whole block of the **new** drive (the one with `/mnt/new-drive`), from `if !` down to and including `fi`.
1. In the block of the **old** drive (the one with your old mountpath), replace the `PARTUUID` of the old drive with the `PARTUUID` of the **new** drive. If you have used a new password for the new drive, please also replace the password between the `'` in the first line. Please leave the rest of the block untouched.
1. Save with `[CTRL] + [O]`, `[ENTER]` and close nano with `[CTRL] + [X]`.

Afterwards the block of your drive should look like this (for a `BTRFS Veracrypt` drive):
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

:::note
For a **NTFS Veracrypt** drive, the first two lines look like this instead (and the mail text is slightly different):
```shell
if ! echo 'PASSWORD-OF-YOUR-NEW-DRIVE' | veracrypt -t -k "" --pim=0 --protect-hidden=no \
--fs-options=windows_names,uid=www-data,gid=www-data,umask=007 \
"/dev/disk/by-partuuid/PARTUUID-OF-YOUR-NEW-DRIVE" /mnt/OLD-MOUNTPATH
```
Please keep these mount options! With `--fs-options=defaults` a NTFS drive would be owned by `root` and Nextcloud couldn't access it anymore. Since you only exchange the `PARTUUID` in the existing block, they stay as they are.
:::
:::caution
Please **don't** delete the lines above the first block (the `#!/bin/bash`, the `chown`/`chmod` lines and the line that resets the maintenance mode). Those are needed and are not part of any drive's block.
:::

Then adjust the drive-connection monitoring:
```shell
sudo crontab -u root -e
```
There are two `@reboot /var/scripts/is-drive-connected.sh '...'` lines for the old and the new drive:

1. **Delete** the line that contains the `PARTUUID` of the **new** drive.
1. In the line that contains the `PARTUUID` of the **old** drive, replace it with the `PARTUUID` of the **new** drive.

Afterwards there should be exactly one line for your drive:
```
@reboot /var/scripts/is-drive-connected.sh 'PARTUUID-OF-YOUR-NEW-DRIVE' >/dev/null
```

### 5. Unmount both drives and disconnect the old one

First unmount both drives:

```shell
sudo veracrypt -t -d /mnt/new-drive
sudo veracrypt -t -d /mnt/OLD-MOUNTPATH
```

Please check whether both commands succeeded:
```shell
sudo veracrypt -t -l
```
This should report that no volume is mounted. If one of them is still listed, some program is most likely still using it - e.g. a `screen` session in which your copy is still running, a shell whose current directory is on the drive, or the **PLEX/Jellyfin** container if you have used this drive with them. You can close the `screen` session or the shell and try again. If the old drive is still in use by Nextcloud, Samba or PLEX/Jellyfin, that is fine as well: the `poweroff` below stops those services and unmounts the drive cleanly.

Then shut your server down:

```shell
sudo poweroff
```

Now physically **disconnect the old drive** and power your server back on. During the boot, the automount script now mounts the **new** drive to the old mountpath - before Nextcloud, Samba and PLEX/Jellyfin start, so they find your data right away.

### 6. Check the mount

Check that the new drive is mounted to the old mountpath and that Nextcloud is **not** in maintenance mode:
```shell
sudo veracrypt -t -l
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode
```

:::note
If Nextcloud is in maintenance mode after the boot, the automount of the new drive failed. Most likely there is a typo in the block that you have changed in step 4. Please check the block again (`sudo nano /var/scripts/veracrypt-automount.sh`) and compare it with your copy (`sudo cat /root/veracrypt-automount.sh.bak`). After fixing it, reboot your server and disable the maintenance mode if it is still enabled:
```shell
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --off
```
:::

**Only when the drive got mounted successfully**, please delete the copy of the automount script, since it contains your passwords in cleartext:

```shell
sudo rm /root/veracrypt-automount.sh.bak
```

### 7. Check that everything works

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

First of all, your users must not change any files on the old drive anymore, otherwise those changes would be missing on the new drive. So please put Nextcloud into maintenance mode and stop Samba (if you have used the drive with them):
```shell
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --on
sudo systemctl stop smbd
```
Samba gets started again automatically during the next boot. The maintenance mode you disable again in step 6.

**If you do it on a Windows PC:** please follow step 3 below to remove the old drive from your server first, then connect both drives to your Windows PC, unlock them and copy all data from the old drive to the new one. Afterwards continue with step 4.

**If you do it on your server**, please copy the data to a temporary location first. Please make sure that the target has enough free space (you can check with `df -h`):

```shell
sudo mkdir -p /mnt/bitlocker-temp
sudo rsync -rtv --info=progress2 /mnt/OLD-MOUNTPATH/ /mnt/bitlocker-temp/
```

:::caution
Please don't forget the **trailing slashes** at the end of both paths!
:::
:::note
A Bitlocker drive is NTFS formatted, and NTFS doesn't support Linux permissions, ownership and ACLs. That is why the command only copies the files and their timestamps (`-rt`) - the ownership of the drive comes from its mount options (`uid=www-data,gid=www-data,umask=007`) anyway.
:::
:::caution
`/mnt/bitlocker-temp` is a directory on your **system drive**, so it has to have enough free space for all your data. If your system drive is too small, please use a directory on one of your other drives instead, e.g. on your Movies/TV-Shows drive: `/mnt/Movies_TV-shows/bitlocker-temp`.

Please **avoid** your encrypted data SSD/HDD (`/mnt/data`) for this: it gets snapshotted automatically, so the space of the temporary copy wouldn't be freed until those snapshots have rotated out (which takes days), and the folder would show up for your users in Nextcloud.

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

Power your server back on and first check that Nextcloud is still in maintenance mode:
```shell
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode
```
If it reports that the maintenance mode is disabled, please enable it again until the end of this procedure, since the mountpath of the drive is empty right now:
```shell
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --on
```
(If you have an encrypted data SSD/HDD, its automount script disables the maintenance mode on every boot - that is why it can be disabled now.)

Then connect the **new** Bitlocker drive and mount it with `Bitlocker Mount` from the Not-supported Menu. Please type in the **mountpath of the old drive** when you are asked for the mountpath.

:::caution
The mountpath has to be **exactly** the one that the old drive had, otherwise your Nextcloud storages, your SMB-shares and your PLEX/Jellyfin libraries will not find your data anymore.
:::
:::info
The `Bitlocker Mount` script does **not** format anything - a Bitlocker drive gets encrypted on Windows, not by the script. So it is safe to run it again for the new drive.
:::

### 5. Copy the data back (only if you did it on your server)

If you have copied the data to a temporary location in step 2, please copy it to the new drive now:

```shell
sudo rsync -rtv --info=progress2 /mnt/bitlocker-temp/ /mnt/OLD-MOUNTPATH/
```

Afterwards please verify that everything was copied and then remove the temporary copy:

```shell
sudo du -sh /mnt/bitlocker-temp /mnt/OLD-MOUNTPATH
sudo rsync -rt --dry-run -i /mnt/bitlocker-temp/ /mnt/OLD-MOUNTPATH/
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
1. Disable the maintenance mode again that you have enabled in step 2:
    ```shell
    sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --off
    ```
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
