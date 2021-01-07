---
id: share-folder
title: How to define a Share-folder for Nextcloud shares?
sidebar_label: Share-folder
---

If you internally share documents, they will be always added to the users root directory in Nextcloud. Since this can quickly become confusing for your users if they share many files internally, it is recommended to set a `Share-folder`. 

:::note
All shared files will in this case not be visible in the users root directory but in a folder called `Shared`.
:::

:::caution
If you have followed this guide and made the root directory in Nextcloud **read only** for all users, you will need to do something first, though: Please **create a folder** in the root folder by running a command over CLI like:
```shell
sudo mkdir "/mnt/data/your data folder/root/Shared"
```
Please remember to **adjust this command** depending on the path you've chosen to be the root folder.
:::

**Now you can configure this option:**
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Nextcloud Configuration` -> `Share-folder`
1. Choose that you want to enable this option

All Nextcloud internal shares will from now on visible in the `Shared` folder.
