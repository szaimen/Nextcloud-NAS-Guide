---
id: previewgenerator
title: How to install the Previewgenerator?
sidebar_label: Previewgenerator
---

In order to speed up preview loading and the general feel of Nextcloud while opening folders with many pictures, you should set up the previewgenerator, which will pre-generate previews to make preview-loading faster.

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `PreviewGenerator`
1. Choose to install/reinstall the Preview Generator
1. Choose to **not** install imagick
1. Deselect any format you don't want to have previews for (Recommended is to **deselect MarkDown & TXT**)
1. Wait until everything is set up
1. Choose to **not** use a specific Nextcloud user for preview generation
1. Wait until everything is scanned. This can take a long time, please be patient! (If it just takes too long and doesn't finish, you can cancel by pressing `ctrl + c`. You could then run this script after the initial setup is done.)