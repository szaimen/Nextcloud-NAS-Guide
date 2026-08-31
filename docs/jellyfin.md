---
id: jellyfin
title: How to install Jellyfin Media Server?
sidebar_label: Jellyfin Media Server
---

Jellyfin is a free and open source media system that lets you stream all your photos, music, videos and movies to any device from your own server. It is a fully free alternative to [PLEX Media Server](./pms) that doesn't require any account, subscription or connection to a cloud service and offers hardware transcoding out of the box. Jellyfin apps are available for almost all platforms.

:::note
Jellyfin and PLEX Media Server can be installed side by side, but you should decide for one of them since both will index your whole media library which costs disk space and CPU time twice.
:::

### Preparation
1. Create a subdomain like `media.yourdomain.com` and edit the DNS settings for this subdomain to point to your Nextcloud Domain. ([instructions](./subdomain-cname))
1. Mount all drives that contain your media below `/mnt` ([instructions](./mount-hdd))

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Jellyfin`
1. Choose to install `Jellyfin`
1. It now reports whether **hardware transcoding** is available on your server. It is not recommended to continue if it is not available.
1. Type in the **subdomain** that you've created and that points to your Nextcloud domain like `media.yourdomain.com` and confirm it
1. **Don't** use `UPNP` to open the required ports (since you've already done this for your Nextcloud)
1. Confirm the notification about `fail2ban` that will be set up for the Jellyfin login
1. Wait until everything is installed and it reports that Jellyfin was successfully installed. Please read the final notification carefully, since it also reminds you of the manual `Known proxies` step that is needed to make `fail2ban` work (see below)

### What to do now?
- Open `https://media.yourdomain.com` and **directly create your admin user**, since Jellyfin is not protected before you did that!
- Afterwards, **make `fail2ban` work** by going to `Dashboard` -> `Networking`, entering `127.0.0.1` into the `Known proxies` field and clicking on `Save`. Then restart Jellyfin by running `sudo docker restart jellyfin` over CLI. This step is required because Jellyfin runs behind a reverse proxy and would otherwise log `127.0.0.1` for every failed login instead of the real ip address of the attacker, which would mean that nobody ever gets banned.
- Afterwards, create your libraries by choosing the corresponding folders below `/mnt`
- If hardware transcoding is available, you should enable it in `Dashboard` -> `Playback` -> `Transcoding` by choosing `Intel QuickSync (QSV)` as hardware acceleration. See the [Jellyfin documentation](https://jellyfin.org/docs/general/administration/hardware-acceleration) for further information.

:::note notes
- All your media should be accessible from within Jellyfin in subdirectories of `/mnt`
- All your media is mounted read only so that Jellyfin is not able to write to or change anything on your drives
- Jellyfin runs in the host network so that DLNA and the automatic server discovery of the Jellyfin clients work. This means that Jellyfin is additionally reachable unencrypted inside your local network on `http://internal-server-ip-address:8096`. It is recommended to always use `https://media.yourdomain.com` instead.
- `fail2ban` gets set up automatically and bans ip addresses that failed to log in 10 times within 30 minutes. You can unban an ip address by running `sudo fail2ban-client set jellyfin unbanip XX.XX.XX.XX`. This requires the `Known proxies` step from above and that the Jellyfin log level stays at its default `Information` since Jellyfin doesn't log failed logins on higher log levels. So please don't raise the log level in `/home/plex/jellyfin/config/logging.json` if you want to keep `fail2ban` working. Once you have at least one failed login attempt, you can test the jail by running `sudo fail2ban-regex /home/plex/jellyfin/config/log/log_*.log /etc/fail2ban/filter.d/jellyfin.local --print-all-matched`. The ip addresses shown there must be real ip addresses and not `127.0.0.1`.
- The Jellyfin user-data is stored in `/home/plex/jellyfin` and is covered by the [daily backup](./daily-backup). It is kept if you uninstall or reinstall Jellyfin so that you don't lose your settings, users and metadata. You can delete it manually by running `sudo rm -r /home/plex/jellyfin`.
- You can digitize your Blu-rays, DVDs & CDs directly on your server ([instructions](./digitize))
- You should **not** store your digitized Blu-rays and DVDs on your with Veracrypt encrypted external data SSD/HDD but instead use an extra HDD to store those data! (Since it is overkill to backup this data; in exchange will this extra HDD not get encrypted which makes data recovery a lot easier)<br/>
You can find instructions how to do that here: [click here](./mount-hdd).
- Every other data than digitized Blu-rays and DVDs should be stored on the with Veracrypt encrypted external data SSD/HDD so that this data gets backed up.
- The whole extra HDD will not be visible and usable in Nextcloud/SMB
:::
