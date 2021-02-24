---
id: whiteboard
title: How to install Whiteboard for Nextcloud?
sidebar_label: Whiteboard
---

The Whiteboard app for Nextcloud makes it possible to collaboratively work on a whiteboard. It integrates Spacedeck whiteboard server and lets Nextcloud users create .whiteboard files which can then be opened in the Files app and in Talk. Those files can be shared to other users or via public links. Everyone having access with write permissions to such a file can edit it collaboratively.

### Preparations
Update to Nextcloud 21 if not already done.<br/>
:::note
It is not recommended to update to Nextcloud 21 until at least Nextcloud 21.0.1 is out. You can check the latest releases here: ([click here](https://github.com/nextcloud/server/releases))
:::
If at least Nextcloud 21.0.1 is out and you've checked that all your apps have updates available for the new major Nextcloud version, you can update by running over CLI:
```shell
sudo bash /var/scripts/update.sh
```
:::caution
Never forget to create a backup before updating, though! ([instructions](./manual-backup))
:::

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Additional Apps` -> `Whiteboard`
1. Choose to install/reinstall Whiteboard for Nextcloud
1. Wait until it reports that it was successfully installed

Now you should be able to edit whiteboards collaboratively inside your Nextcloud.
