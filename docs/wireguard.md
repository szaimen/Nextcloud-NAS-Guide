---
id: wireguard
title: How to install WireGuard?
sidebar_label: WireGuard
---

WireGuard is a modern VPN protocol that is much faster and simpler than e.g. OpenVPN. A WireGuard server on your own server lets you access your home network from everywhere and also lets you use the Pi-hole as DNS-server when connected via VPN, so that you get ads- and tracker-blocking also when you are not at home.

The script installs [wg-easy](https://github.com/wg-easy/wg-easy) in a Docker container, which provides a web interface where you can create and manage the profiles for all your devices with a few clicks.

:::caution
This opens a VPN entry point into your servers network. It is only intended to be used on a server in a **trusted home network**. Don't run this on a public VPS or any other server whose ip-address is directly reachable from the internet.
:::

:::note Coming from PiVPN?
Former versions of this script used `PiVPN` to run WireGuard directly on the host. PiVPN occupies port `51820 UDP`, which means that the new container would not be able to start while it is still installed. The script detects this and tells you to uninstall PiVPN first by running:
```shell
sudo pivpn uninstall
sudo rm -r /etc/wireguard /etc/pivpn
```
Please note that this removes all your current PiVPN profiles. You will have to create them again in the new web interface afterwards, which only takes a few clicks per device.
:::

### Preparation
1. Install Pi-hole (else, you will not be able to use Pi-hole as DNS-server when connected over VPN) ([instructions](./pi-hole))
1. Port-forward port 51820 UDP to your server ([instructions](./port-forwarding))
    :::caution
    Only port `51820 UDP` may be forwarded! The web interface on port `51822 TCP` must **not** be forwarded, since it is only meant to be reachable inside your local network.
    :::

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `WireGuard`
1. Choose to install `WireGuard`
1. Read the warning about opening a VPN entry point and **confirm** that this server is running in a trusted home network
1. Read the notification about the ports that need to be opened
1. **Don't** use `UPNP` to open port 51820 UDP (since you've already done this manually)
1. Choose `Yes` when it tells you that it is not possible to check automatically if the port is open
1. Wait until everything is installed
1. **Note down** the `admin` password that gets shown to you! It is only applied during the initial setup of the container and cannot be shown to you again later on
1. Read through the final notification about how to add your devices

WireGuard should be successfully installed by now.

### What to do now?
- Open the web interface inside your local network on `https://internal-IPv4-address:51822` e.g. `https://192.168.178.144:51822` and log in with the username `admin` and the password that was shown to you
:::note
The certificate is self-signed since the web interface is only reachable in your local network, which means that your browser will show a warning that you need to accept.
:::
- Create a **new client for each of your devices** (you need one per device, don't reuse profiles on different devices!)
- On a smartphone, scan the QR code of the client with the **WireGuard app** that you can download in the `Play Store` on Android and the `App Store` on iOS
- On a computer, download the configuration file of the client and import it into the **WireGuard Desktop app**

Afterwards you should be able to connect to your home network from anywhere.

:::info
Your clients connect to the domain of your Nextcloud on port 51820 UDP, which should point to your home ip-address via DDNS. You can change this host in the web interface under the settings if you want to connect via a different address.
:::

:::info
If you use Pi-hole as DNS server for the VPN connection, it is possible that your smartphones Nextcloud app won't be able to connect to your Nextcloud when it is connected via WireGuard to your home network. To fix this, you should create a `Local DNS Record` in your Pi-hole that points `yourdomain.com` to the internal IPv4-address of your server. Afterwards it should work.
:::

### Updates
The WireGuard container gets updated automatically together with your server during the regular updates. The image is pinned to a major version, which means that only updates within that major version get applied automatically. This is on purpose, since a new major version can require manual migration steps.

### How to reinstall or uninstall WireGuard
You can reinstall or uninstall WireGuard by running the script again and choosing the corresponding option.

Your configuration and all your clients are stored in the `wg_easy` docker volume and are **kept on purpose** in both cases. This means:
- After a **reinstallation**, all your current clients will still work and the admin password stays the same as before, since the initial password is only applied on a fresh installation.
- After an **uninstallation**, the volume is still there, so you can install WireGuard again later on without losing your clients.

If you want to start from scratch instead, e.g. because you don't know your admin password anymore, run the following commands before installing WireGuard again:
```shell
sudo docker rm -f wg-easy
sudo docker volume rm wg_easy
```
:::caution
This deletes all your clients. You will have to create them again afterwards.
:::

Please don't forget to close port 51820 UDP in your router again after uninstalling WireGuard if you don't need it anymore.

:::tip Notebooks
You can of course also use WireGuard on your Notebook to get access to your home network via VPN. Simply create a new client for it in the web interface and download its configuration file directly on the Notebook that you want to use it on.

Please note that the configuration files are very dangerous if an attacker gets them. So make sure to delete the downloaded file after importing it into the WireGuard Desktop app and don't forget the trash bin!
:::
