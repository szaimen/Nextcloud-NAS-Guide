---
id: considerations
title: Are there any considerations you should know of?
sidebar_label: Considerations
---

Please read carefully through this list of considerations you should know of!

- This guide is only meant for home servers, for nothing else.
- It is provided as is and without warranty of any kind. (Read the [License](https://github.com/szaimen/Nextcloud-NAS-Guide/blob/main/LICENSE))
- You should **neither** use Nextclouds `Groupfolder` app **nor** use `normal Nextcloud storage` since those have issues with external changes that are made via SMB, and other shortcomings. Also all files that are created via those two storage providers will be located on your root disk which is limitated in its size and you won't be able to use SMB with this location. The only Nextcloud storage app that should get used is the `External Storage app` since you can use it to mount your files from external drives into your Nextcloud which is the recommended way to mount files in Nextcloud. And don't despair! This guide covers how to do this. Please note that some Nextcloud apps have limitations when used together with the `external storage app`, though.
- You shoud **not** use any encryption that is offered by Nextcloud e.g. `Server side encryption` or `End to end encryption` if you want to access you data over SMB or other services since the files that are encrypted like this will only be readable through Nextcloud which also introduces problems regarding backups and such. Also it is not necessary since you will use disk encryption for your data. On the other hand: if you only want to encrypt very less files (e.g. only your most important) which don't need to be readable over SMB or other services, `End to end encryption` is the encryption to choose. Using `E2E` will make sure that not even the server admin can decrypt the files so be warned! You can find a good explanation of this feature [here](https://github.com/nextcloud/desktop/blob/cd598a00f7b40c2fa71a0625df106aa775a28e46/doc/architecture.rst#end-to-end-encryption).
- Most of this guide is based on scripts that are provided by the [**Nextcloud-VM**](https://github.com/nextcloud/vm) and will need to be executed in order to make everything work. This could theoretically set your server under risk but we made sure that all of them are secure.
- The internal root partition, the external data SSD/HDD and the backups will be **encrypted** for security. This could theoretically prevent you from accessing those if you loose the key/passphrase. So please always store the passwords/passphrases at a safe place!
- The three external drives will be **NTFS** formatted, which has the advantage that they can be read by almost any x86 OS. But it doesn't provide features like snapshots or integrity checking. 
- Also please note that while formatting, those drives will not be completely erased because that could take hours depending on the drive size. So if you already had data on one of those drives, please make sure to wipe them manually if you want that security. (otherwise an attacker could theoretically be able to restore some of your private data if it was stored unencrypted on one of those drives before.)
- You will use an Open Source program called `Veracrypt` for encrypting and formatting the external data SSD/HDD which has the advantage that this tool is compatible with almost any OS but the program needs to get installed before you can decrypt the drive and access the data. Also, the program on your server needs to get installed from a 3rd party repository in order to be always up-to-date but this could theoretically set your server under risk.
- You will set up **TPM2 unlocking** which will automatically unlock your encrypted root partition during boot. This is a big convenience factor but would allow an attacker theoretically to break the encryption of this partition (only with much effort), if he/she steals the whole server. Encrypting the root partition makes sense nonetheless, since an attacker cannot simply take out the internal drive, connect it to another PC and read out all the data in cleartext.
- You will create an off-shore backup drive that needs to get connected to your server every **90 days** (this is configurable) in order to make a new backup. After creating one off-shore backup, the drive should get disconnected from your server and stored at a safe place outside your home. So you will need a place where to store it during this time and connect it manually every 90 days (or as configured).
- You need a capable internet router to make this solution work! Cheap provider routers won't work in most cases. Recommended are Fritz!Box's by AVM
- This solution is meant to run 24/7. Manually shutting the server down/rebooting or disconnecting, etc. can cause problems.

:::caution

**If not all points above are acceptable for you, you will need to look for a different solution. Otherwise please continue!**

:::
