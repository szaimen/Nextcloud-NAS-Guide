---
id: access-veracrypt
title: How to access the encrypted external data SSD/HDD on any PC?
sidebar_label: Veracrypt drives - PC access
---

Next, you should open the encrypted external data SSD/HDD on a different PC to be able to copy files or create the sensible folder structure.

1. **Power off** your server by pressing the `power button`
1. **Disconnect** the external data SSD/HDD
1. **Don`t** connect the drive to your PC, yet
1. **Download** Veracrypt from [here](https://www.veracrypt.fr/en/Downloads.html) and **install** it on your PC (if needed, **restart** your PC)
1. Now, **connect** the drive to your PC (choose to **not** reformat the drive if you get a popup, that it must get reformatted)
    :::info BTRFS on Windows (this section can be skipped on Linux)
    Since the Veracrypt drive is internally BTRFS formatted and you've probably not yet installed the Open Source BTRFS Windows driver, you probably need to install it first before you are able to access the drive via Veracrypt:
    1. Open this link: [click here](https://github.com/maharmstone/btrfs/releases)
    1. Download the latest `btrfs-x.x.x.zip` release file like e.g. `btrfs-1.7.8.1.zip`
    1. Extract the zip archive
    1. In the folder, right-click on the `btrfs.inf` file and select `install` (you might need to confirm that you want to execute the file and choose to trust the author) and confirm to `reboot` if you get asked to do so.
    1. After the restart, the driver might still not work if `Secure Boot` is enabled which is the case on most devices nowadays.
    1. In order to solve this, open **regedit**, navigate to `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\CI\Policy`, create a new `DWORD` value, name it `UpgradedSystem`, set it to `1` and reboot another time ([source](https://github.com/maharmstone/btrfs#secureboot))
    1. After the reboot, the driver should work correctly.
    :::
1. Open `Veracrypt`, select the drive, type in the **password** and wait until it is mounted to your system<br/>
(Here is a guide how to do that in detail: [click here](https://web.archive.org/web/20210624051048/https://tdicomputing.dartmouth.edu/veracrypt-mounting-encrypted-volumes-containers/#windows))

Now you should be able to access the encrypted drive.