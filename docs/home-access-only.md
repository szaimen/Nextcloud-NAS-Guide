---
id: home-access-only
title: How to only allow access to your server from inside your home network?
sidebar_label: Home access only
---
In order to make your server as secure as possible, you might consider blocking all access from outside your home network. To be able to connect to your server yourself from outside your home network afterwards, you'll need to establish a VPN connection to your home network first before you can access your server. We've implemented the whole process in a way that automatic certificate renewal via `Let's Encrypt` will still work after blocking the access to your server which is usually a limitation of this process but not by following this guide. Additionally, `scan.nexcloud.com` will still be able to scan your Nextcloud regarding security problems as well as `observatory.mozilla.org`.

## Preparations
1. Install Pi-hole ([instructions](./pi-hole))
    :::info
    To make this solution work, you will need to make the Pi-hole to the DNS server of your home network as instructed [here](./pi-hole#what-to-do-now)
    :::
1. Install PiVPN ([instructions](./pivpn))
    :::info
    - While installing PiVPN, it is crutial that you've opted for setting Pi-hole as DNS-server for PiVPN! (step 9)
    - All devices that shall get access to your server from outside your home network need a VPN profile. It is advices how to create and import one [here and below](./pivpn#what-to-do-now)
    :::

## Execution
1. Open the Apache conf file via CLI by running:
    ```shell
    sudo nano /etc/apache2/apache2.conf
    ```
1. Scroll to the bottom of the file by using the `[ARROW]` keys and look for a line that looks like this:
    ```
      Allow from env=AllowCountryOrContinent
    ```
1. Comment the line so that it looks like this afterwards:
    ```
      #Allow from env=AllowCountryOrContinent
    ```
1. Safe the file by pressing `[CTRL] + [o]` and `[ENTER]` and close it by pressing `[CTRL] + [x]`
1. Restart Apache to accept the new config by running:
    ```shell
    sudo systemctl restart apache2
    ```

This is basically it. Now all access from outside your home network will be blocked!
:::info
All ports that you've opened in your router until now that point to your server need to stay open. Otherwise certificate renewal via `Let's Encrypt` will not work anymore and it could produce unexpected other issues. 
:::
:::caution
Don't reinstall Geoblocking after applying this change because it will reset the configuration that you've just made.
:::

## What to do now?
If you've set up any service that needs its own domain, like e.g. OnlyOffice, High-Performance backend for Nextcloud Talk, Pico CMS or Bitwarden RS, you need to add all of those as `Local DNS Records` to your Pi-hole configuration. Otherwise you will not be able to use those services.
A custom entry may look like this: `Domain: talk.yourdomain.com, IP Address: 192.168.178.144`. You will need to add one entry for every domain and enter as IP-address the internal IP-address of your server for all of them.

### OnlyOffice
If you've installed OnlyOffice Documentserver for your Nextcloud, you might still not be able to open Office files in your Nextcloud after applying above mentioned changes. This is because the docker service where the Documentserver is running on, is usually not using the local DNS server. To make this work you'll need to:
1. Open the docker daemon config file by running:
    ```shell
    sudo nano /etc/docker/daemon.json
    ```
    It should look something like this:
    ```json
    {
      "storage-driver": "overlay2"
    }
    ```
1. Edit the file so that it uses your local DNS server (you'll need to use the internal IP-address of your own server here instead of `192.168.178.144` and please don't forget to add the comma at the end of the `storage-driver` line). It should look something like this after applying the change:
    ```json
    {
      "storage-driver": "overlay2",
      "dns": ["192.168.178.144"]
    }
    ```
1. Safe the file by pressing `[CTRL] + [o]` and `[ENTER]` and close it by pressing `[CTRL] + [x]`
1. Restart the docker daemon by running:
    ```shell
    sudo systemctl restart docker
    ```

Now, finally everything should work as expected!