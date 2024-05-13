---
id: restore-backup
title: How to restore a Backup on a different server or upgrade Ubuntu?
sidebar_label: Restore Backup/Upgrade Ubuntu
---

Theoretically it could happen that your system drive fails or that you need to update the Ubuntu version.
In those cases you need to reinstall Ubuntu and thus restore a backup on a different server (it looks like it is a different server for the scripts).

Here is what you need to do in those cases:
## Preparations (if your server doesn't work because of a failed system drive)
1. Buy a new with your server compatible internal SSD (recommended specifications describe [here](./hardware-recommendations#general-hardware-recommendations))
1. Put the new drive into your server

## Preparations (if you want to upgrade Ubuntu)
0. If Pi-hole is set up as your local DNS-server, disable it in your router as you will not be able to use the internet at all when your server is powered off.
1. Update to the latest major Nextcloud release by following the instructions here: [click here](./major-update)
:::caution
Please read carefully through all info there, especially the `Things to check before updating` section before updating. (E.g. it is not recommended to update to any new major Nextcloud release before the first point release: all info there is valid here, too.)
:::
:::warning
At least Nextcloud 24 is required to proceed below, so make sure that you upgrade at least to this version!
:::
1. Create a backup of your server ([instructions](./manual-backup))
1. Only if the backup (from step 2) was created successfully (otherwise skip this 3rd step!), get your `Off-Shore Backup HDD`, connect it to your server and create a new off-shore backup by running:
    ```shell
    sudo sed -i 's|^DAYS_SINCE_LAST_BACKUP.*|DAYS_SINCE_LAST_BACKUP=1000|' /var/scripts/off-shore-rsync-backup.sh \
    && sudo bash /var/scripts/off-shore-rsync-backup.sh
    ```
    :::caution
    You should really only create a new off-shore backup if the backup from step 2 was created successfully!
    :::
1. Use your **last chance** and find out if you still have the passphrase of your backup stored at a safe place by comparing it with the output of:
    ```shell
    sudo grep "ENCRYPTION_KEY" /var/scripts/daily-borg-backup.sh
    ```
    :::caution
    If you don't have it stored, just **note it down** another time. **This is crucial!**<br/>
    (because this is the last chance to retrieve the password from your server)
    :::

## Execution
1. **Shut down** your server by pressing the power button
1. **Disconnect** all external drives from your server
1. **Execute** the complete Basic setup section ([this section](./basic-setup))<br/>
    :::note
    Don't go any further and stop at the beginning of the next section!<br/>
    (This is the last step that shall get executed: [click here](./usb-boot))
    :::
1. If you are done with the basic setup section, run the manual update once ([instructions](./update-manually))
1. Please **don't** connect the backup HDD to your server, yet or **disconnect** the backup HDD from your server!
1. Now run the restore-backup script by executing:
    ```shell
    wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/restore-backup.sh \
    && sudo bash restore-backup.sh
    ```
1. Enter your password
1. **Confirm** that you want to restore your server from backup
1. Press `OK` to start searching for new backup drives
1. Now **connect** one of your backup drives (most likely the daily backup HDD) to your server (you have 1 minute)
1. Choose the **BTRFS/NTFS partition** that shall get mounted
1. **Select** one found valid backup repository
1. Enter the **passphrase** that was used to encrypt the backup
1. **Select** the `backup archive` that shall get restored (most likely the newest one if your system was in a working state when the backup was created)
1. **Choose** if you want to check if the backup extracting works (this is up to you)<br/>
(If you choose yes and it takes too long, you can cancel it by pressing `[CTRL] + [C]`. Then start from step 5 again and simply skip it.)
1. **Confirm** that you want to restore the backup
1. Now wait until you see the next popup! (This can take a while.)
1. It should now report that the restore was completed and you should connect all drives now. So please **connect all external drives** now that were connected to your old server!
1. Press `[ENTER]` so that they get mounted
1. Now you should see a popup were it is recommended to open your nextcloud web interface to confirm that the restore was successful. Do so by opening the suggested link. E.g. `https://192.168.178.144`. After you've confirmed that Nextcloud works, press `[ENTER]`
1. Now it will report to you that you need to reinstall a lot of apps/addons in case they were installed on your old server. This is what you will do next. Press `[ENTER]` to exit the script.

## Reinstall Apps and Addons
If the Nextcloud web interface works as expected, you will need to reinstall all apps/addons that were installed on your old server.

### Necessary are those
1. Reinstall Geoblocking ([instructions](./geoblock))
1. Reinstall Disk Monitoring ([instructions](./smart))
1. Reinstall Fail2Ban ([instructions](./fail2ban))
1. Reinstall ClamAV ([instructions](./clamav))
1. Reinstall SMTP Mail ([instructions](./smtp-mail))
1. Reinstall DDclient ([instructions](./configure-ddclient))
1. Reconfigure Port Forwarding ([instructions](./port-forwarding))
1. Reactivate TLS for your Nextcloud Domain ([instructions](./activate-tls))

#### Now your Nextcloud should work again completely!

### Optional are those
(You only need to reinstall them **if they were installed before**)
- Reenable the Firewall on your server ([instructions](./firewall))
- Reharden the SSH configuration ([instructions](./harden-ssh))
- Reinstall OnlyOffice for Nextcloud ([instructions](./onlyoffice))
- Reinstall High-Performance backend for Nextcloud Talk ([instructions](./hpb))
- Reinstall Push Notifications for Nextcloud ([instructions](./notify_push))
- Reinstall Whiteboard for Nextcloud ([instructions](./whiteboard))
- Reinstall Pico CMS for Nextcloud ([instructions](./pico))
- Reinstall Extract for Nextcloud ([instructions](./extract))
- Reinstall Previewgenerator ([instructions](./previewgenerator))
- Reinstall PDF annotations ([instructions](./pdfannotate))
- Reinstall Vaultwarden (formerly known as Bitwarden RS) ([instructions](./vaultwarden))
:::caution
Attention! Please use the **same domain** that you've used before for Bitwarden RS or Vaultwarden (if you've had Bitwarden RS or Vaultwarden installed on your old server!)
:::
- Reinstall Pi-hole ([instructions](./pi-hole))
- Reinstall PiVPN ([instructions](./pivpn))
- Redo the change of the update time ([instructions](./change-update-time))
- Redo the change to only allow access to your server from inside your home network ([instructions](./home-access-only))
- Reinstall Plex Media Server ([instructions](./pms))
:::note
When reinstalling Plex, all drives that Plex shall have access to need to be mounted to the server! (Otherwise there could appear some problems.) You can make sure that this is the case by connecting all drives to your server and rebooting your sever before reinstalling Plex!
:::
- Reinstall Remotedesktop ([instructions](./remotedesktop))
- Reinstall other apps that you might have had installed before ([overview](./more-apps)) 

:::info daily backup
Please note that the next scheduled daily backup will take a long time because the local borgbackup cache has to be rebuilt. So don't be surprised if this is the case since it is completely normal!
:::
