---
id: pi-hole
title: How to install Pi-hole?
sidebar_label: Pi-hole
---

The Pi-hole is a DNS sinkhole that blocks ads, tracker and other unwanted content for all devices in your home network without having to install any client side software.

The script installs Pi-hole in a Docker container, which means that it doesn't touch your host system apart from freeing up port 53 for it.


:::note Coming from an older installation?
Former versions of this script installed Pi-hole directly on the host. This old installation occupies port 53 and runs its web interface via `lighttpd`, which means that the new container would not be able to start while it is still present. The script detects this and tells you to uninstall the old Pi-hole first by running:
```shell
sudo pihole uninstall
sudo rm -rf /etc/.pihole /etc/pihole /etc/lighttpd
sudo rm -f /usr/local/bin/pihole /usr/bin/pihole-FTL
```
Please note that this removes all your current Pi-hole settings and blocklists. You will have to configure them again afterwards.
:::

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Pi-hole`
1. Choose to install `Pi-hole`
1. Read the warning and **confirm** that this server is running in a trusted home network
1. Choose `Yes` if you want your Pi-hole to be a **recursive DNS server**. This additionally installs `unbound` and configures Pi-hole to use it as its upstream DNS server, which means that your Pi-hole resolves all DNS queries itself instead of forwarding them to a public DNS provider like Google or Cloudflare. This is recommended since it improves your privacy
1. Wait until everything is installed
1. **Note down** the password that gets shown to you!
1. Read through the following notifications about how to configure your devices and how to use Pi-hole on the command line

Pi-hole should be successfully installed by now.

### What to do now?
- First you should visit `https://internal-IPv4-address:8094/admin` e.g. `https://192.168.178.144:8094/admin` and login with your password.
    :::note
    The certificate is self-signed since the admin interface is only reachable in your local network, which means that your browser will show a warning that you need to accept.
    :::
- You can now either configure your router to use the Pi-hole as DNS-server which will block DNS requests for all devices in your network ([instructions](https://github.com/RPiList/specials/tree/master/RouterKonfiguration)) or you can configure your devices manually to use the Pi-hole as DNS server in your home network.
- Additionally, you can configure the docker daemon on your server to use the Pi-hole as well by editing `/etc/docker/daemon.json` and adding `"dns" : [ "192.168.178.144", "9.9.9.9" ]` (use the internal IPv4-address of your own server here). This makes containers like OnlyOffice resolve your local DNS records, too ([more details](./home-access-only#onlyoffice)).
:::note
If you choose to make Pi-hole the DNS server of your home network, you should most likely change the update time when updates get executed ([instructions](./change-update-time))
:::

### Updates
The Pi-hole container gets updated automatically together with your server during the regular updates, so there is nothing that you need to do here.

### How to use Pi-hole on the command line
You can run any Pi-hole command inside the container like this:
```shell
sudo docker exec -it pihole pihole -h
```

:::info
The admin password is set via an environment variable of the container, which makes it read-only for the web interface and the command line. If you want to change it, you can run the script again and choose `Reinstall`, which will generate and show you a new password while keeping all your settings.
:::

:::info
The DHCP functionality of Pi-hole is not available since the container doesn't run in the host network.
:::

### How to reinstall or uninstall Pi-hole
You can reinstall or uninstall Pi-hole by running the script again and choosing the corresponding option.

Your settings, blocklists and statistics are stored in `/opt/pihole` and are **kept on purpose** in both cases, which means that they will still be there after a reinstallation or after installing Pi-hole again later on.

If you want to start from scratch instead, run the following command before installing Pi-hole again:
```shell
sudo rm -r /opt/pihole
```

:::caution
After uninstalling Pi-hole, please don't forget to reset the DNS server on your router and/or your clients to restore their internet connectivity, if you had configured them to use this server as their DNS server.
:::
