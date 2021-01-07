---
id: pms
title: How to install PLEX Media Server?
sidebar_label: PLEX Media Server
---

Plex Media Server is a media server application that runs on your own server and perfectly rounds off the feature set that Nextcloud provides. You can stream and open your own videos, movies, series, music and photos on any device that support Plex apps which are almost all platforms.

### Preparation
1. Port-forward port 32400 TCP to your server ([instructions](./port-forwarding))

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `PLEX Media Server`
1. Choose to install PLEX Media server
1. Wait until everything is installed and it reports that Plex was successfully installed
1. **Confirm** that you want to access `PLEX` from outside your home
1. **Don't** use `UPNP` to open the required port since you've already done this manually
1. It should now check the required Port and show the last popup how to set up PLEX

### What to do now?
- Open `http://internal-server-ip-address:32400/web` e.g. `http://192.168.178.144:32400/web` to set up PLEX

:::note notes
- All your media should be accessible from within Plex in subdirectories of `/mnt`
- All your media is mounted read only so that PLEX is not able to write to or change anything on your drives
- It is recommended to get [PLEX Pass](https://www.plex.tv/plex-pass) for your PLEX account because you can use hardware transcoding and any PLEX App on any platform for free; if you have PLEX Pass, you need to manually [enable hardware transcoding](https://support.plex.tv/articles/115002178853-using-hardware-accelerated-streaming/) in the settings.)
- There is a lot to cover but basically you only have to create one PLEX account that has a PLEX Pass to use all features and create [Plex Home](https://support.plex.tv/articles/203815766-what-is-plex-home/) users to control the access to your media. You can create music/photos/videos libraries for each user and asssign them their own or create libraries for all PLEX Home users. E.g. movies/series libraries will most likely be accessible by all PLEX Home users.
- You should only invite users to your PLEX Home that you really trust, since the only thing hindering those from becoming an admin over your PLEX server is a short 4-digit PIN.
- You can digitize your Blu-rays, DVDs & CDs directly on your server ([instructions](./digitize))
- You should **not** store your digitized Blu-rays and DVDs on your with Veracrypt encrypted external data SSD/HDD but instead use an extra HDD to store those data! (Since it is overkill to backup this data; in exchange will this extra HDD not get encrypted which makes data recovery a lot easier)<br/>
You can find instructions how to do that here: [click here](./mount-hdd). 
- Every other data than digitized Blu-rays and DVDs should be stored on the with Veracrypt encrypted external data SSD/HDD so that this data gets backed up.
- The whole extra HDD will not be visible and usable in Nextcloud/SMB
:::