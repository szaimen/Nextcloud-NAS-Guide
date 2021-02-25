---
id: create-shares
title: How to create SMB-shares and mount it to Nextcloud in one go?
sidebar_label: Create SMB-shares and mount it to Nextcloud
---

The big advantage is, that you can create a SMB-share and mount the same location to Nextcloud in one go.

If you have followed this guide, you should have set up a **sensible folder structure** on the external data SSD/HDD by now. Based on this structure, you should **share** the `user folders` with the corresponding user that you just created. The `data exchange` folders should get shared with the users that shall have access to those folders. 

If you have mounted the external data SSD/HDD in `/mnt/data` as recommended, is here one example:
Your data folder should be now found in `/mnt/data/your data folder`. One of your user folders and data exchange folders might be `/mnt/data/your data folder/user1 folder` and `/mnt/data/your data folder/Data exchange folder` now. You should then **share** the `/mnt/data/your data folder/user1 folder` with `user1` and the `/mnt/data/your data folder/Data exchange folder` with all users that shall get access to this folder. As you now see, best case is, if the user folders on your external data SSD/HDD match exactly the user count of newly created users.

:::tip
**BTW**: you can at this point still shutdown your server, disconnect the external data SSD/HDD, connect it to your PC, open it with `Veracrypt` and change the folder structure there. Afterwards you can connect the drive to your server again and power it back on.
:::

**Based on the example above, you should now create a list how do you want to share your data with your users.**

Here is how to work off this list technically:
1. Go back to the **SMB-server Main Menu** and select `Open the SMB-share Menu`
1. Choose `Create a SMB-share`
1. You will see now a list of valid directories you can type in
1. Type in one **directory** that you want to share. Based on the example above, it could be e.g. `/mnt/data/your data folder/user1 folder` or `/mnt/data/your data folder/Data exchange folder`
1. Type in the **Share name** that you want to use. It should most likely have the same name like the folder that you want to share. Please note, that spaces are not supported. For e.g. `user1 folder` you would thus need to use `user1_folder` or `user1-folder` as name
1. Now **select the SMB-users** that shall get **access** to the share. If it is a `user folder`, you should only share it with the corresponding user. If it is a `Data exchange folder`, you should share it with all users that shall get access to the folder.
1. Now select if the share shall be **writeable**, which you should most likely answer with `Yes`
1. After restarting Samba, the SMB-share should be successfully created!
1. Select that you **want to mount** the same directory to Nextcloud as local storage (you are making the path that you've chosen in the beginning accessible in Nextcloud this way)
1. :::note user-folders
In the case of a `user folder`, you will now be asked if you want to make the selected directory the **root folder in Nextcloud** for the selected user, which you should in most cases **confirm** by pressing `[ENTER]`.<br/><br/>
(This will only be shown to you in the case of a `user folder`, not for `Data exchange folders` and also not if you've made the directory **read only**. Only select `[NO]` here if you've already made another directory the root folder for the selected user before.)
:::
1. Now everything should get set up automatically
1. Enabling Inotify is **not** recommended and normally not necessary

**Now repeat that method for the whole list that you've made, starting at point 2.**
(If you are done, please don't close the script! You will need it again in the next step!)

:::note
Please note that you can always change the settings for your mounts in Nextcloud by opening `https://yourdomain-or-ipaddress/settings/admin/externalstorages` with your Nextcloud admin account afterwards.
:::

:::tip
Your users should now be able to access their files and folders using SMB over the local network.<br/>
Here are instructions how to do this in detail: [click here](./smb-connect)
:::
