---
id: firewall
title: How to enable the firewall on your server?
sidebar_label: Firewall
---
Although you only open specific ports in your router's firewall and port-forward them to your server (if you've followed this guide), it is recommended to enable the firewall on your server since this only allows all necessary ports to be accessed from your home network. This makes especially sense, if you have some IOT (Internet of things) devices inside your home network and don't use some kind of guest Wi-Fi for them or rather let all your friends/strangers use your home network Wi-Fi. 
:::info
You can find a good article about guest Wi-Fi's here: [click here](https://www.kaspersky.com/blog/guest-wifi/23843/)
:::
Here is how to enable the firewall on your server:
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Firewall`
1. Choose to install/reinstall Firewall
1. Wait until it reports that Firewall was configured successfully