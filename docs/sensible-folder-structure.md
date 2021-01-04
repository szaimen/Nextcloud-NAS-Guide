---
id: sensible-folder-structure
title: How to create a sensible folder structure on the external data SSD/HDD?
sidebar_label: Sensible folder structure
---

Recommended is to create the folder structure on the external data SSD/HDD like this.

Create a folder on the drive that contains all your files. Inside this folder, there will be the user folders and other folders that shall get shared between users in the future. Every user-folder should contain an `Archive`, `Sync` and `Backup folder` and you should strictly separate between them. The `Sync` folder should contain files and folders that are used or changed often and thus will get synchronized via the Nextcloud Desktop client. `Archive` contains all files and folders that are not needed or changed often. `Backup` will contain folders in which e.g. photos from your smartphone will get automatically uploaded or e.g. you can sync your desktop from your laptop to a folder in the Backup folder. (Just so that you know: the backup folder is meant to be a backup folder for data from client devices but isn't the server backup.)

**Here is an example how it could look like:**
- external-SSD
    - your data folder
        - User1 folder
            - Backup
            - Sync
            - Archive
        - User2 folder
            - Backup
            - Sync
            - Archive
        - Data exchange folder
            - Folder that gets shared between users
            - Some other folder that gets shared between the same users
        - Some other data exchange folder
            - And some folder inside
        - user5 folder
            - Backup
            - Sync
            - Archive
    - Some other folder

(The exact foldernames and order can be different)

**BTW**: you can also spread your files over more than one external data SSD/HDD using the same system. Of course every `User folder` and `data exchange folder` will need to be completely on one disk but you could manually add some different user folders or data exchange folders on a second drive. (this might also be useful if you run out of space on your external data SSD/HDD someday in the future)

**Now copy all private files to the external data SSD/HDD or at least create the folder structure.**

If you are done, **eject** the drive from your PC, **connect** the external data SSD/HDD to your server again and **power the server on** by pressing the `power button`