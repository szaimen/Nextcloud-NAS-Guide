---
id: create-new-users
title: How to create new users after the initial setup?
sidebar_label: Create new users after initial setup
---

After the initial setup is done, there might be the the demand to create new users that were initially not considered. Since it isn't very clear currently how to do that, we've decided to create this FAQ guide.

1. First, read about the sensible folder structure ([click here](./sensible-folder-structure)). You will need to create a new user folder for this user which you should do by following those guidelines. It also covers that you should copy their private files to this user folder. (Obviously, you don't need to copy all other files from other users to this drive again). If you want to copy their files onto this drive on another PC, here is how to do it ([click here](./access-veracrypt))
1. Now run the SMB-server script which you will use to create the user and more ([instructions](./run-smb-server))
1. Create the user with the SMB-server script by following those instructions: [click here](./create-users) (Obviously, you don't need to recreate all other users)
1. Create a SMB-share for this user and mount it to Nextcloud by following those instructions: [click here](./create-shares) (Obviously, you don't need to recreate all other shares/mounts that already exists.)

Now the new user should be ready to go!

:::note
If the new user shall have access to some already existing `Data exchange folders`, you need to modify the specific SMB-shares with the SMB-server script:

1. Open the SMB-server script ([instructions](./run-smb-server))
2. Open the SMB-share menu
3. Edit a SMB-share
4. Select a specific SMB-share
5. Change valid SMB-users
6. Select all users that shall have access to the specific SMB-share 
7. Confirm your modified settings 
8. Done!

You also need to modify the mounts in Nextcloud in this case by opening `https://yourdomain-or-ipaddress/settings/admin/externalstorages` and editing the applicable users for the specific mounts there.
:::
