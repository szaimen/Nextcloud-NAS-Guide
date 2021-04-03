---
id: pivpn
title: How to install PiVPN?
sidebar_label: PiVPN
---

PiVPN is an easy way to create a VPN server that lets you access your home network from away and also lets you use the Pi-hole when connected via VPN as DNS-server so that you get ads- and tracker-blocking also when you are not at home.

### Preparation
1. Install Pi-hole (else, you will not be able to use Pi-hole as DNS-server when connected over VPN) ([instructions](./pi-hole))
1. Port-forward port 51820 UDP to your server ([instructions](./port-forwarding))
1. Create a Backup ([instructions](./manual-backup))
(better to be prepared, since we use the scripts provided by the PiVPN project and something could go wrong. You never now!)

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `PiVPN`
1. Choose to install PiVPN
1. **Selected** that you have created a Backup
1. **Don't** use `UPNP` to open the required port since you've already done this manually
1. Wait until a few things are installed
1. Select the **interface** for PiVPN (should be called `eno1` or something like that)
1. Wait until a few more things are installed (and create an UEFI password, if you are asked to do so)
1. **Confirm** that you want to use Pi-hole as DNS-server for PiVPN
1. Wait until it reports that PiVPN was set up correctly and read through the information
1. **Confirm** that you want to reboot now

:::note
It can happen that your server won't startup automatically at this point, if you had to create an UEFI password during the installation. If this happens, do the following steps:
1. On the server startup, you should see the `MOK-management-console`
1. Select `Enroll MOK`
1. Select `Yes` when asked `Enroll the Key(s)?`
1. Enter the UEFI password, that you've created
1. reboot

Now your server should automatically boot again.
:::

### What to do now?
- As suggested, to add a new VPN-profile, you should run the following over CLI and follow the instructions:
    ```shell
    sudo pivpn -a
    ```
- After you've added all needed profiles (you need one per device, don't reuse profiles on different devices!), you can show them by running the following over CLI and follow the instructions:
    ```shell
    sudo pivpn -qr
    ```
    You should finally see a **QR code**, that you can scan with the **Wireguard mobile app** that you can download in the `Play Store` on Android and `App Store` on iOS
- After scanning the QR-code, the VPN-profile should be added to the Wireguard app and you should be able to connect to your home network from anywhere.

:::info
If you've chosen to use Pi-hole as DNS server for the VPN connection during the setup, it is possible that your smartphones Nextcloud app won't be able to connect to your Nextcloud when it is connected via Wireguard to your home network. To fix this, you should create a `Local DNS Record´ in your Pi-hole that points `yourdomain.com` to the IP-address `10.6.0.1`. Afterwards it should work.
:::
:::tip Notebooks
You can also use those profiles on your Notebook to get access to your home network via VPN.<br/>
The simplest way to do this is the following:
1. Create a new VPN profile for your Notebook and show its QR code (as instructed above)
1. Scan the QR code of this profile with your smartphones Wireguard app
1. Export all Tunnels from your smartphones Wireguard app settings
1. Copy the zip file to a location where your Notebook has access to<br/>
(Best is to use SMB for this. It should be a directory that doesn't get synchronized via the Nextcloud Desktop client and that is not shared with another user.) 
1. Import the correct tunnel into the Wireguard Desktop app from there. 
1. It is recommended to delete the zip file from your phone and any place where you have copied it now since the profile files are very dangerous if an attacker gets them. So make sure the profiles only exist in the Wireguard apps afterwards. (And don't forget the trash bins!)
:::
