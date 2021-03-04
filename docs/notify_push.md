---
id: notify_push
title: How to set up Push Notifications for Nextcloud?
sidebar_label: Push Notifications for Nextcloud
---

Push Noticiations for Nextcloud attempts to solve the issue where Nextcloud clients have to periodically check the server if any files have been changed, new activities were created, or a notification was created/processed/dismissed, which increases the load on the server. By providing a way for the server to send update notifications to the clients, the need for the clients to make these checks can be greatly reduced, which reduces the load on the server and delivers notifications to the clients in some cases faster.

Here is how to install it.

### Preparations
1. If you are on Nextcloud 20, update to Nextcloud 21 if not already done by following these instructions: [click here](./major-update)

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Additional Apps` -> `Notify Push` 
1. Choose to install `Notify Push`
1. Wait until everything is installed and configured and it reports that it was successfully installed

Now you will be able to use Push Notifications inside your Nextcloud!