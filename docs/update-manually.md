---
id: update-manually
title: How to update your Nextcloud manually to a minor version?
sidebar_label: Update manually Nextcloud minor
---

Before you are able to create the backup scripts, you will need to run the update script one time.
Here we cover how to update your Nextcloud to a minor version manually.
Updating your server to a Major Nextcloud version will be covered by this guide: [click here](./major-update)

1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Update Nextcloud minor` Attention! **Don't** choose `Nextcloud Update major`!
1. Choose `No` if you are asked if you want to fetch the latest `update.sh` script.
1. Wait until the update has run
1. Run `sudo shutdown -c` over CLI to cancel the shutdown, since it is not necessary now