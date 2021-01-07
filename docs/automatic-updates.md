---
id: automatic-updates
title: How to enable automatic updates?
sidebar_label: Automatic updates
---

In order to automate as much things as possible, you should enable automatic updates.

1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `Automatic updates`
1. Choose to enable automatic updates
1. Choose to reboot your server after every update as recommended<br/>
(the reboot will happen right after every time the script runs, also if no Nextcloud update was installed because it not only updates Nextcloud but everything like Ubuntu packets, etc.)

**The update will be executed on saturdays at 18:00h.**

:::info Please note!
The update script will only update to minor Nextcloud versions. If a new major Nextcloud version gets released, you will need to update your server manually by running the update script.
:::