---
id: restrict-admin-to-ip
title: How to restrict the admin login to your home network?
sidebar_label: Restrict Admin Login
---

Nextcloud 30 introduced a setting called `allowed_admin_ranges` that allows you to define from which IP-addresses admin actions are permitted. If you enable this, the admin settings are hidden and **every** admin action is denied with a `403 Forbidden` for all connections coming from outside those ranges - even for the admin user itself, and even if someone knows the correct password.

This is a nice additional layer of security: your Nextcloud stays reachable from everywhere as usual, but the administration of your server is only possible while you are at home.

:::caution
This only works if Nextcloud actually sees a **local** IP-address when you connect to it from inside your home network. That is only the case if you have **split-brain DNS** set up, e.g. with Pi-hole or your router, so that your Nextcloud domain resolves to the local IP-address of your server while you are at home.

Without it, your traffic from inside your network is routed over your public IP-address (this is called `NAT hairpinning`) and Nextcloud sees a public IP-address instead of a local one. You would lock yourself out of all admin settings. The script asks you about this before it changes anything.
:::

### Preparations
1. You need **Nextcloud 30 or later**, since the needed setting was introduced there. If you are on an older version, update first by following these instructions: [click here](./major-update)
1. You need split-brain DNS in your home network. The easiest way to get it is to install Pi-hole and make it the DNS server of your home network ([instructions](./pi-hole)) and then add your Nextcloud domain as `Local DNS Record` pointing to the local IP-address of your server.
    :::info
    If you have already followed the `Home access only` instructions ([click here](./home-access-only)), you have all of this set up already.
    :::

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `Restrict Admin Login`
1. Choose to install/reinstall the restriction
1. Read the popup about split-brain DNS carefully and confirm that you have it set up
    :::note
    If you answer `no` here, nothing gets changed and the script offers to install Pi-hole for you right away.
    :::
1. Confirm the summary of the IP-ranges that will be allowed
1. Wait until it reports that the admin actions are now restricted

Now you should only be able to use the admin settings of your Nextcloud while you are connected to your home network.

### Which IP-ranges are allowed?
The script allows all private IP-ranges, which are the ranges that are not reachable from the internet. Allowing all of them makes it much less likely that you lock yourself out, no matter which range your router uses:

| Range | Description |
| --- | --- |
| `127.0.0.0/8` | Localhost - the server itself |
| `10.0.0.0/8` | Private IPv4-range |
| `172.16.0.0/12` | Private IPv4-range - e.g. used by Docker |
| `192.168.0.0/16` | Private IPv4-range - most common in home networks |
| `::1/128` | Localhost IPv6 |
| `fc00::/7` | Private IPv6-range (Unique Local Addresses) |
| `fe80::/10` | Link-local IPv6-range |

### Remove the restriction
If you don't want to restrict the admin login anymore, you can remove it again:
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `Restrict Admin Login`
1. Choose to **remove** the restriction
1. Wait until it reports that it was successfully removed

:::note notes
- If you have locked yourself out of the admin settings, you can always remove the restriction from the terminal of your server as root user:
    ```shell
    sudo -i
    nextcloud_occ config:system:delete allowed_admin_ranges
    exit
    ```
- If you connect to your home network over VPN with WireGuard ([instructions](./wireguard)), you also get a local IP-address and can therefore use the admin settings while you are on the road
- This restriction only affects **admin** actions. All your users, including yourself, can still use your Nextcloud normally from everywhere.
- You can check the current setting as root user with:
    ```shell
    sudo -i
    nextcloud_occ config:system:get allowed_admin_ranges
    exit
    ```
- The upstream pull request that introduced this setting in Nextcloud can be found here: [click here](https://github.com/nextcloud/server/pull/46473)
:::
