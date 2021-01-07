---
id: pi-hole
title: How to install Pi-hole?
sidebar_label: Pi-hole
---

The Pi-hole is a DNS sinkhole that blocks ads, tracker and other unwanted content without having to install any client side software.

### Preparation
1. Create a Backup by running 
    ```shell
    sudo bash /var/scripts/daily-borg-backup.sh
    ``` 
    (better to be prepared, since we use the scripts provided by the Pi-hole project and something could go wrong. You never now!)

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Pi-hole`
1. Choose to install Pi-hole
1. **Select** that you have created a Backup and wait a bit
1. Click through the next popups until you have to choose the `Upstream DNS provider`. **Choose anyone** that you prefer.
1. Confirm the `Blacklists`
1. Confirm the IP-`Protocols` (IPv4 and IPv6 are automatically selected if available; if only IPv4 is available, this popup might not be shown to you)
1. Choose if you want to `log queries`
1. Select the `privacy Mode for FTL`
1. Now wait until everything is installed and it reports that Pi-hole was set up correctly and **note down** the admin password!
1. Click and read through the following popups
1. Confirm that you want Pi-hole to be a `recursive DNS server` (improves privacy)
1. Wait until `unbound` is installed and it reports that it was successful

Pi-hole should be successfully installed by now.

### What to do now?
- First you should visit `https://internal-IPv4-address:8094/admin` e.g. `https://192.168.178.144:8094/admin` and login with your admin password.
- You can now either configure your router to use the Pi-hole as DNS-server which will block DNS requests for all devices in your network ([instructions](https://github.com/RPiList/specials/tree/master/RouterKonfiguration)) or you can configure your devices manually to use the Pi-hole as DNS server in your home network. (E.g. on Android by using Blokada)