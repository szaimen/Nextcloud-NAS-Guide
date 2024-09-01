---
id: access-backup
title: How to access the backup drives on any PC?
sidebar_label: Backup drives - PC access
---

In this article is described how you are able to access the data that is stored on the backup drives on any PC. This should be the last possibility if, for some reason, the whole server and the external data SSD/HDD are no longer working/accessible and you need to access your files from the backup as soon as possible without the ability to set the server up again, which is described here: [click here](./restore-backup)

## Requirements
- One of the external backup HDDs that hold your backup files
- The passphrase that was initially used to encrypt the backup on the server
- A x86 Laptop (or PC with Monitor, Mouse and keyboard) for which you can choose the booting order (should usually be the case if it is your own private device)
- If the Laptop/PC runs Windows or macOS, you will need also an USB-stick with at least 8 GB, as you will boot Linux from the USB-stick to be able to access the Backup

## Optional requirement
- If you like to restore some files or all files from the backup you will need additionally an external HDD/SSD that is already formatted in your prefered filesystem (e.g. like BTRFS or NTFS or other - please use tools from your OS to do so.)
:::note
The Apple filesystem (APFS) and ZFS are not covered by this guide.
:::

## Preparation
If the Laptop/PC runs Linux, you can stip this section. On Windows an macOS you need to create an USB-stick with Linux and boot from it first:
:::caution Bitlocker
If Bitlocker is enabled on your Windows Laptop/PC, you should disable Bitlocker temporarily as otherwise you could get asked for a recovery key for this drive after the booting for the Linux USB-stick
:::
:::info Microsoft Surface Pro
If you want to use a Microsoft Surface Pro as Laptop/PC here and only have a wireless keyboard and mouse, you need to connect an USB-hub with at least 5 Ports (for Mouse, Keyboard, backup drive, USB-drive, additional drive, etc.) as the touchscreen and wireless acessory will not work out of the box on Ubuntu
:::
1. **Download** the latest Ubuntu Desktop 24.04 LTS image by clicking [here](https://releases.ubuntu.com/noble/ubuntu-24.04.1-desktop-amd64.iso) (this might take 30min because of slow download servers)
1. Use the already downloaded image to create a bootable USB-stick by following [this guide](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows) (the guide is for Windows, but the guide for macOS is referenced there)
1. Connect the **USB-stick** to your Laptop/PC and select to boot from it
    :::tip On Windows
    1. In Windows, simply click on the virtual restart button while holding the `[SHIFT]` key which will bring you into the troubleshooting menu
    1. Click on **Use a device** to boot from a device
    1. Select **USB-device** in order to boot from that
    :::
1. Wait until Ubuntu has booted from the USB-stick and you see the options to `Try Ubuntu` or `Install Ubuntu`. 
1. **Click** on `Try Ubuntu` and wait until it has rebooted.
1. When Ubuntu has booted, connect to a network via Wi-Fi by clicking in the upper right corner of the OS and selecting to connect via Wi-Fi and enter the credentials. (Not needed if already connected via Ethernet cable)
1. Now click on the same field again in the upper right corner and select `Settings`
1. In the left navigation list, select `Region & Language`
1. In the `Input Sources` section click on the `+` button and choose your correct keyboard layout (e.g. `German (Germany)` -> `German` -> click on the `Add` button)
1. Now click on the language field in the upper right corner of the OS in order to change the keyboard Layout to your correct keyboard Layout (e.g. German)

## Execution
:::tip
You are free to open this article in Firefox on Ubuntu which will enable you to copy and paste the commands into the Terminal.
:::
1. Now, open a Terminal (by pressing the `[Windows]` key and type in Terminal) and open the search result
1. In the terminal, type in and press `[ENTER]` and wait until everything is installed:
    ```shell
    sudo apt update \
    && sudo add-apt-repository universe \
    && sudo apt update \
    && sudo apt install borgbackup -y
    ```
1.  Now connect your external Backup HDD to the Laptop/PC. It should show a notification and make a sound that the drive was connected
1. Find out where excactly the drive was mounted (it should be somewhere in /media) by running:
    ```shell
    sudo lsblk | grep /media
    ```
1. It should now display only the newly connected drive and on the right side you will see the excact mountpoint (like e.g. `/media/ubuntu/Daily Backup`)
1. Based on the example above and if you've chosen to use the recommended directory for the Backup (during the Backup wizard), you will be able to use the following command now to mount the backup on the system:
    ```shell
    sudo mkdir -p /tmp/borg \
    && sudo borg mount "/media/ubuntu/Daily Backup/borgbackup/NcVM" /tmp/borg 
    ```
    (Of course if your path is different, you will need to modify the command. If that still doesn't work for you, you will need to find out and change the path to your Backup directory manually.)
1. You will be asked by `Borg` for the `Passphrase` now that you've initially used to encrypt the backup and type it in. (Don't wonder: if you've entered it correctly, you will get no respoose by the terminal)
1. When that worked, you will be able to access your files in the file manager by running:
    ```shell
    xhost +si:localuser:root && sudo nautilus /tmp/borg
    ```
1. Now, you should see the backup archives in the file manager.
    :::tip copy onto other drive
    1. Now, you are free to connect the second drive onto that you want to copy some files/folders.
    1. It should show a notification and sound again that a new drive was connected and should also show up as additional drive in the left navigation list in the file manager 
    1. It is recommended to open this location in a new window by pressing `[CTRL] + [N]` or right-clicking on the entry and selecting `Open in new window`
    1. Now, you are free to easily copy files between the backup archive and the drive.
    :::
1. After you are done, press `[CTRL] + [C]` in the terminal to exit the file manger and unmount the borg archive with:
    ```shell
    sudo umount /tmp/borg
    ```
1. Now, **power off** Ubuntu by selecting the field in the upper right corner again and select `Power Off` to power off Ubuntu again.
