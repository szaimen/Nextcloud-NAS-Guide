---
id: update-manually
title: How to update your server manually?
sidebar_label: Update manually
---

Before you are able to create the backup scripts, you will need to run the update script one time.

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Update Nextcloud minor` Attention! **Don't** choose `Nextcloud Update major`!
1. Wait until the update has run
1. Run `sudo shutdown -c` over CLI to cancel the shutdown, since it is not necessary now