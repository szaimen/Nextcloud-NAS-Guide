---
id: readonly-root
title: How to make the root directory in Nextcloud read only for all users?
sidebar_label: Read only root directory in Nextcloud
---

In order to prevent user from creating any files outside their user folders, which are located on the external data SSD/HDD and now mounted to Nextcloud, you should make the Nextcloud root directory read only for all users.

Here is how to do this:
1. From the **SMB-server Main Menu** select `Open the SMB-share Menu`
1. Choose `Create a SMB-share`
1. Type in an empty or not existing directory that you will share, like `/mnt/data/your data folder/root` (based on the example above) and choose to create that directory
1. Type in `temporary` as **Share name**
1. Now **select at least one SMB-user** that will get **access** to the share for now
1. Now select that the share shall be **read only**
1. After restarting Samba, the SMB-share should be successfully created!
1. Select that you **want to mount** the same directory to Nextcloud
1. **You should now change the name of your directory for the usage in Nextcloud. You should change it to `/`** (one forward-slash)
1. Now everything should get set up automatically
1. **Don't** enable Inotify (and don't exit the script afterwards!)

#### You should now remove the SMB-share again since it is not needed any longer:
1. Choose to `Delete SMB-shares` from the same still open `SMB-share Menu`
1. Select the just created share with name `temporary`
1. Press `[Enter]` to delete it
1. exit the SMB-server script by selecting `Return` -> `Exit`

Now, the root directory should be read only for all users!