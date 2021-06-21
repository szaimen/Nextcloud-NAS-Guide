---
id: recycle-bin-cleanup
title: How to enable automatic recycle bin cleanup?
sidebar_label: Automatic recycle bin cleanup
---

This will set up a retention policy for files that were deleted over SMB and get moved to their hidden recycle folder. To automatically clean up those directories and preventing them from getting to big, you should enable this option. It will automatically delete files in the recycle bins that were deleted more than two days ago.

1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `SMB-server` -> `Automatically empty recycle bins`
1. **Confirm** that you want enable automatic recycle bin cleanup
1. Wait until you see the confirmation that it was configured successfully
1. Now you will get asked if you want to set the retention policy for trashbin files and version files in Nextcloud to 4 days. Recommended is to answer with `Yes` but this decision is up to you.
1. Afterwards, exit the script by selecting `Exit`
