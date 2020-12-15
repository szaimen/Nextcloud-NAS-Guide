# Nextcloud-NAS-Guide
Instructions how to set up a home server

This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it `Nextcloud NAS` because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the [Nextcloud-VM](https://github.com/nextcloud/vm) which you will use to set up your server.

Here is a not complete list of things that this guide covers: hardware recommendations, UEFI/Bios configuration, Ubuntu Installation, Nextcloud installation, full disk encryption, TPM2 unlocking, Let's encrypt for getting valid certificates, Automatic Updates, geoblocking to allow access to your server only from specific countries/continents, server mail notifications, disk monitoring and notifications, Fail2Ban to block too much failed login attempts, previewgenerator to speed up preview loading in Nextcloud, ClamAV for scanning and detecting your files for malware, a complete backup solution, and a way to manage a full fletched SMB-server. 

In the future, this guide will cover optional addons like: a media server, a way to easily manage your media collection directly on your server, Pi-hole as network wide ad-blocker, PiVPN as VPN-server, Bitwarden as open-source password server, different office integrations for Nextcloud, High-performance-backend for Nextcloud Talk, Fulltextsearch for Nextcloud and more.

**If you are interested in this solution, please start reading [here](#how-to-use-this-guide)**

---

# Index
- [How to use this guide?](#how-to-use-this-guide)
- [Before you start](#before-you-start)
    - [Considerations](#are-there-any-considerations-you-should-know-of)
    - [Minimal Hardware requirements](#what-are-the-minimal-hardware-requirements)
    - [Hardware recommendations](#do-you-have-any-hardware-recommendations)
    - [Preparations](#are-there-any-preparations-necessary)
    - [How long will the initial setup take?](#how-long-will-the-initial-setup-take)
- [Basic setup](#basic-setup)
    - [BIOS/UEFI](#how-to-configure-the-biosuefi)
    - [Ubuntu](#how-to-set-up-ubuntu)
    - [SSH](#how-to-connect-to-your-server-over-ssh)
    - [TPM2 unlocking](#how-to-set-up-automatic-tpm2-unlocking)
    - [Nextcloud installation](#how-to-install-nextcloud)
    - [Nextcloud startup script](#how-to-startup-nextcloud)
- [Security and Automation](#security-and-automation)
    - [Disable USB-boot](#how-to-disable-usb-boot)
    - [Geoblocking](#how-to-enable-geoblocking)
    - [Disk Monitoring](#how-to-set-up-disk-monitoring)
    - [Fail2Ban](#how-to-set-up-fail2ban)
    - [Not-supported Menu](#how-to-download-the-not-supported-menu)
    - [ClamAV (Antivirus)](#how-to-install-clamav)
    - [Automatic updates](#how-to-enable-automatic-updates)
- [Backup](#backup)
    - [SMTP Mail](#how-to-set-up-smtp-mail-to-enable-your-server-to-send-mails)
    - [External data SSD/HDD](#how-to-configure-the-external-data-ssdhdd)
        - [Format, encrypt & mount](#how-to-format-encrypt-and-mount-the-external-data-ssdhdd)
        - [PC access](#how-to-access-the-encrypted-external-data-ssdhdd-on-any-pc)
        - [Sensible folder structure](#how-to-create-a-sensible-folder-structure-on-the-external-data-ssdhdd)
    - [External backup HDD's](#how-to-configure-the-external-backup-hdds)
        - [Format](#how-to-format-the-external-backup-hdds)
        - [Mount](#how-to-mount-the-external-backup-hdds)
    - [Update manually](#how-to-update-your-server-manually)
    - [Daily Backup](#how-to-set-up-a-daily-backup)
    - [Off-Shore Backup](#how-to-set-up-an-offshore-backup)
- [SMB-server](#smb-server)
    - [Run the SMB-server script](#how-to-run-the-smb-server-script)
    - [Create SMB-users and Nextcloud users](#how-to-create-smb-users-and-nextcloud-users-in-one-go)
    - [Create SMB-shares and mount it to Nextcloud](#how-to-create-smb-shares-and-mount-it-to-nextcloud-in-one-go)
    - [Read only root directory in Nextcloud](#how-to-make-the-root-directory-in-nextcloud-read-only-for-all-users)
    - [Previewgenerator](#how-to-install-the-previewgenerator)
- [Customize Nextcloud](#customize-nextcloud)
    - [CookieLifetime](#how-to-configure-the-cookielifetime)
    - [Share-folder](#how-to-define-a-share-folder-for-nextcloud-shares)
    - [Workspaces](#how-to-disable-workspaces)
    - [User Flows](#how-to-disable-user-flows)
- [Activate Let's Encrypt](#activate-lets-encrypt)
    - [DDNS](#what-is-ddns)
    - [DDNS-providers](#which-ddns-providers-are-currently-supported)
    - [Activate DDNS](#how-to-activate-ddns-for-your-domain)
    - [DDclient](#how-to-configure-ddclient)
    - [Port Forwarding](#how-to-enable-port-forwarding)
    - [Activate TLS](#how-to-activate-tls)
- [Optional](#optional)
    - [Midnight Commander](#how-to-install-midnight-commander)
    - [Remotedesktop](#how-to-install-remotedesktop)
    - [Restore files](#how-to-restore-files-from-backup)
---

# How to use this guide?
The idea concerning this guide is that you can read and work through the whole guide starting here until the whole initial setup is done (it ends [here](#congratulations-everything-of-the-initial-setup-is-now-done)). In the end you will have a working Nextcloud NAS. 

**Please note**: It is not recommended to skip anything until the whole initial setup is done, because the sections partly build on each other. So simply read and work through everything starting here! You will also need to click on all `Click here to expand`!

---

# Before you start
This section covers:
1. Considerations you should know of
1. Minimal hardware requirements
1. Hardware recommendations
1. Preparations
1. How long the initial setup will take

## Are there any considerations you should know of?
Please read carefully through this list of considerations you should know of!
<details><summary>Click here to expand</summary>

- This guide is only meant for home servers, for nothing else.
- It is provided as is and without warranty of any kind. (Read the [License](https://github.com/szaimen/Nextcloud-NAS-Guide/blob/main/LICENSE))
- You should **neither** use Nextclouds `Groupfolder` app **nor** use `normal Nextcloud storage` since those have issues with external changes that are made via SMB, and other shortcomings. Also all files that are created via those two storage providers will be located on your root disk which is limitated in its size and you won't be able to use SMB with this location. The only Nextcloud storage app that should get used is the `External Storage app` since you can use it to mount your files from external drives into your Nextcloud which is the recommended way to mount files in Nextcloud. And don't despair! This guide covers how to do this. Please note that some Nextcloud apps have limitations when used together with the `external storage app`, though.
- You shoud **not** use any encryption that is offered by Nextcloud e.g. `Server side encryption` or `End to end encryption` if you want to access you data over SMB or other services since the files that are encrypted like this will only be readable through Nextcloud which also introduces problems regarding backups and such. Also it is not necessary since you will use disk encryption for your data. On the other hand: if you only want to encrypt very less files (e.g. only your most important) which don't need to be readable over SMB or other services, `End to end encryption` is the encryption to choose. Using `E2E` will make sure that not even the server admin can decrypt the files so be warned!
- Most of this guide is based on scripts that are provided by the [**Nextcloud-VM**](https://github.com/nextcloud/vm) and will need to be executed in order to make everything work. This could theoretically set your server under risk but we made sure that all of them are secure.
- The internal root partition, the external data SSD/HDD and the backups will be **encrypted** for security. This could theoretically prevent you from accessing those if you loose the key/passphrase. So please always store the passwords/passphrases at a safe place!
- The three external drives will be **NTFS** formatted, which has the advantage that they can be read by almost any x86 OS. But it doesn't provide features like snapshots or integrity checking. 
- Also please note that while formatting, those drives will not be completely erased because that could take hours depending on the drive size. So if you already had data on one of those drives, please make sure to wipe them manually if you want that security. (otherwise an attacker could theoretically be able to restore some of your private data if it was stored unencrypted on one of those drives before.)
- You will use an Open Source program called `Veracrypt` for encrypting and formatting the external data SSD/HDD which has the advantage that this tool is compatible with almost any OS but the program needs to get installed before you can decrypt the drive and access the data. Also, the program on your server needs to get installed from a 3rd party repository in order to be always up-to-date but this could theoretically set your server under risk.
- You will set up **TPM2 unlocking** which will automatically unlock your encrypted root partition during boot. This is a big convenience factor but would allow an attacker theoretically to break the encryption of this partition, if he/she steals the whole server. Encrypting the root partition makes sense nonetheless, since an attacker cannot simply take out the internal drive, connect it to another PC and read out all the data in cleartext.
- You will create an off-shore backup drive that needs to get connected to your server every **90 days** (this is configurable) in order to make a new backup. After creating one off-shore backup, the drive should get disconnected from your server and stored at a safe place outside your home. So you will need a place where to store it during this time and connect it manually every 90 days (or as configured).

**If not all points above are acceptable for you, you will need to look for a different solution. Otherwise please continue!**
</details>

## What are the minimal Hardware requirements?
You will need the following things:
<details><summary>Click here to expand</summary>

- A x86 PC that will function as your server with:
- At least 2 Cores
- At least 4GB RAM
- One internal SSD with at least 128GB
- Power Supply for your server (if not built-in)
- TPM2 support
- One (or more) external SSD (or HDD) that will store your personal data with at least 250GB (depending on how much data you are planning to store on your server. Rule of thumb: this drive should be at least twice as big as your current private data)
- Two additional external HDD's that will function as backup drives with at least the same size like the external data SSD/HDD, each
- One USB-stick with at least 8GB for installing Ubuntu
- For the initial setup you will also need a HDMI-display (e.g. monitor/tv/beamer), USB-mouse and -keyboard. If you don't have one: you don't need to buy those. Borrowing or renting those should be enough. (You really only need them for the initial setup.)
</details>

## Do you have any Hardware recommendations?
Since your server shall run 24/7, it makes sense to use laptop CPU's and hardware because those are still much more power efficient than any custom-built PC. Perfect because of the size and power for this usecase are Intel NUC's. 
<details><summary>Click here to expand</summary>

Recommended are any recent Intel NUC's with 4 or more cores. Click on [this link](https://geizhals.eu/?cat=barepc&v=e&hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu&sort=p&bl1_id=30&xf=15825_4%7E2257_Intel%7E3345_2018#gh_filterbox) to show recommended devices. Of course you are free to buy used devices, but again: Intel NUC's are prefered.

After you have chosen your device, you will need to get compatible RAM and Storage for your NUC which depends on the model that you've chosen. So please choose wisely.

#### Recommended is:
- One Intel NUC from 2018 or later with 4 Cores or more
- One SO-DIMM RAM latch with 8GB because 8GB should be enough for now and you will be able to upgrade the RAM with a second latch later on 
- One internal SSD with 250 GB which should be plenty of storage for this usecase
- One (or more) external SSD (or HDD) for storing the private data with at least 1TB (depending on how much data you are planning to store on your server. Rule of thumb: this drive should be at least twice as big as your current private data)
- Two external HDD's for backups with at least the same size like the external data SSD/HDD, each

#### Currently (10. Nov. 2020) the recommended configuration which should fit for most people is:
- [Intel NUC Kit NUC8i5BEH](https://geizhals.eu/intel-nuc-kit-nuc8i5beh-bean-canyon-boxnuc8i5beh-a1843166.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) = ca. 250€
- [Kingston A2000 NVMe PCIe SSD 250GB, M.2](https://geizhals.eu/kingston-a2000-nvme-pcie-ssd-250gb-sa2000m8-250g-a2112844.html) = ca. 33€
- [G.Skill RipJaws SO-DIMM 8GB, DDR4-2400, CL16](https://geizhals.eu/g-skill-ripjaws-so-dimm-8gb-f4-2400c16s-8grs-a1353098.html) = ca. 30€
- [ADATA SE800 black 1TB](https://geizhals.eu/adata-se800-schwarz-1tb-ase800-1tu32g2-cbk-a2102946.html) = ca. 130€
- [Silicon Power Armor A85 1TB](https://geizhals.eu/silicon-power-armor-a85-1tb-sp010tbphda85s3s-a1358555.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) x2 = ca. 55€ x2 = ca. 110€
</details>

## Are there any preparations necessary?
Yes, please make sure that you have all necessary Hardware requirements and please connect all necessary parts before continuing. And please don't forget the USB-stick, -mouse, -keyboard and HDMI-display!
<details><summary>Click here to expand</summary>

**For Intel NUC's, you need to put one SSD and one RAM latch into the device before continuing**

How to do this in detail depends on the PC that you've chosen to function as your server
</details>

## How long will the initial setup take?
The whole initial setup should take around **2.5h**, excluding things that are not influenceable by this guide. E.g. how much files you need to copy, how slow the Ubuntu download is, how long the previegeneration takes, how long it takes to get a domain, etc.

Just as a reminder: It is not recommended to skip anything until the whole initial setup is done, because the sections partly build on each other. So simply read and work through everything starting here! You will also need to click on all `Click here to expand`! Just so that you know: the initial setup ends [here](#congratulations-everything-of-the-initial-setup-is-now-done)

---

# Basic setup
You will now configure your basic system.

This section should take around **1h**, excluding the Ubuntu download time. It covers:
1. BIOS/UEFI configuration
1. Ubuntu installation
1. Connect over SSH
1. Set up TPM2 unlocking
1. Install Nextcloud and run the startup script

## How to configure the BIOS/UEFI?
You will need to configure your BIOS/UEFI in order to harden security and to make things work. 
<details><summary>Click here to expand</summary>

The following guide is especially written for Intel Visual Bios which is present on Intel NUC devices. If you use a different device as your server it is possible, that some things are different for you. Since BIOS/UEFI can be visually very different, this guide is only plain text.
1. **Connect** the power-cable, HDMI-display, USB-mouse and -keyboard to your server
1. **Power on** your server and **open the BIOS/UEFI** by pressing `[F2]`
1. **Load the BIOS/UEFI defaults** by pressing `[F9]` and `[ENTER]` to confirm
1. **Now open the Advanced Menu** by clicking on the Advanced button in the top right corner
1. **Set the Fan Control Mode to quiet** by clicking on the `Cooling` tab. In the `CPU Fan Header` section, select `Fan Control Mode` and choose **Quiet**
1. **Set a Supervisor password** by clicking on the `Security` tab. In the `Passwords` section, click on `Set Supervisor Password` and type in a **password**. Store it at a safe place!
1. Configure your server to **boot automatically after a power failure** by clicking on the `Power` tab. In the `Secondary Power Settings` section, click on `After Power Failure` and choose **Power On**
1. **Enable UEFI Boot** and **disable Legacy Boot** by clicking on the `Boot` tab. The `Boot Priority` tab is now automatically selected. In the `UEFI Boot Priority` section, **enable UEFI Boot** and **disable Legacy Boot**
1. Only allow to **boot from USB-sticks** by clicking on the `Boot Configuration` tab. In the `UEFI Boot` section, disable everything and **only enable Boot Network Devices Last**. In the `Boot Devices` section, disable everything and **only enable USB**
1. **Configure Secure Boot** by clicking on the `Secure Boot` tab. In the `Secure Boot Config` section, disable everything and **only enable Secure Boot** (`Install Intel Platform Key` might not deactivatable)
1. Now **confirm your settings** by pressing `[F10]` and `[ENTER]`
1. Your server might start now automatically, **press the power button** to shut it down again.

The BIOS/UEFI should now be correctly configured.
</details>

## How to set up Ubuntu?
You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured.
<details><summary>Click here to expand</summary>

1. **Download** the latest Ubuntu Server 20.04.1 LTS image by clicking [here](http://www.releases.ubuntu.com/20.04/ubuntu-20.04.1-live-server-amd64.iso) (this might take 30min because of slow download servers)
1. Use the already downloaded image to create a bootable USB-stick by following [this guide](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows) (the guide is for Windows, but guides for macOS and Ubuntu are referenced there)
1. Connect a **LAN-cable** to your server
1. Connect the **USB-stick** to your server and **power the server on**. The server should then automatically boot from the USB-stick
1. **Since it is necessary that you configure certain things correctly, we have prepared a slideshow which makes it easier for you to configure Ubuntu correctly. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/ubuntu) to start the slideshow. Otherwise, just continue with the steps below**
1. Select the correct **language** for the installer
1. Choose to **Continue without updating** the installer
1. Select the correct **Keyboard layout**. This is has great importance!
1. Just use the defaults in **network connections**
1. Don't configure any **Proxy address**
1. Use the default **Mirror address**
1. During **Storage configuration**, activate the option to **Encrypt the LVM group with LUKS**, enter a difficult **Passphrase**, confirm it and store it at a safe place. Please note: The installer doesn't check if the passwords are equal so please make sure yourself!
1. Confirm your **Storage configuration**
1. Setup your **Profile**: recommended as **name** and **username** is `ncadmin`. Recommended as **Your server's name** is `nextcloud`. Also type in a **password**. This can be simple because you will change it later on, again, but remember it! Please note: The installer doesn't check if the passwords are equal so please make sure yourself!
1. Choose to **Install OpenSSH server**
1. Do **not** install any of **Featured Server Snaps**
1. Now wait until Ubuntu is installed and you see the button to **Reboot**. Press it to reboot.
1. You should now remove the Ubuntu USB-stick if not already done and press `[ENTER]` to continue.
1. During the boot process, type in your **LUKS passphares** and press `[Enter]` to confirm
1. Wait until you see **Reached target Cloud-init target.** and press `[ENTER]` to return to the login screen
1. Now type in your **username** (e.g. `ncadmin`) and **pasword**
1. If everything is correct, you will now see an overview of Ubuntu also containing the IPv4-address of your server.

**You will need the ip-address in the next step!**
</details>

## How to connect to your server over SSH?
In order to connect to your server from a PC in the same network, you should use SSH. You are then able to use copy and paste and more.
<details><summary>Click here to expand</summary>

1. Find out the IPv4-address of your server (if not already done): Either login to your server to show it or it will be presented on the login screen after installing Nextcloud
1. Open a command prompt on Windows 10 or terminal on Linux
1. Type in `ssh username@ip-address`<br>
One example is: `ssh ncadmin@192.168.178.144`<br>
(If it times out although your server is running, the IPv4-address might be wrong. Then please look at step 1 how to find out the IPv4-address)
1. If you connect the first time to your server, you will be asked to confirm the server fingerprint which you should do by typing in `yes` and pressing `[ENTER]`. If your server fingerprint changed, you will be guided to reset it if you want to connect again.
1. Now type in your CLI Ubuntu user **password**
</details>

## How to set up automatic TPM2 unlocking?
In order to automaticly unlock the encrypted root partition, you need to setup TPM2 unlocking during boot.
<details><summary>Click here to expand</summary>

1. Connect from a PC in the same network to your server over SSH (if not already done)
1. Copy and paste the following command over CLI: <br>
`wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/tpm2-unlock.sh && sudo bash tpm2-unlock.sh`<br>
1. Enter your **password** again
1. Choose to install TPM2 Unlock
1. Wait until it has configured some small things
1. Type in your **LUKS password** for your root partition
1. Wait until it shows that the setup was successfull and press `[ENTER]` to reboot your server

Now it should unlock the root partition during boot automatically. If not, something has failed.

**Please note: it is not recommended to proceed with this guide, if it doesn't unlock the root partition automatically at this point!**
</details>

## How to install Nextcloud?
In order to set up Nextcloud, you should use the scripts from the Nextcloud-VM, since it is the most user-friendly way to setup Nextcloud as far as we know and has many features built-in.
<details><summary>Click here to expand</summary>

1. Connect from a PC in the same network to your server over SSH
1. Copy and paste the following command over CLI: <br>
`sudo lvcreate --size 5G --snapshot --name "NcVM-installation" /dev/ubuntu-vg/ubuntu-lv && sudo lvcreate --size 30G --name "NcVM-reserved" ubuntu-vg && wget https://raw.githubusercontent.com/nextcloud/vm/master/nextcloud_install_production.sh && sudo bash nextcloud_install_production.sh --not-latest`
1. Enter your **password** again
1. **We have prepared a slideshow for you that you can use. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-installation) to start the slideshow. Otherwise, just continue with the steps below**
1.  Choose that you **don't** want to use `http://archive.ubuntu.com` as **repository** for your server since the best one was already set during the Ubuntu installation
1. Select that you **want** to make all **free space** available to your **root partition**
1. Choose **1 Disk (Only use one disk /mnt/ncdata - NO ZFS!** since 2 Disks is currently not supported by the backup scripts since it complicates things by a lot and doesn't support disk encryption. Additionally you would need one dedicated disk only for that directory.
1. Wait until everything is installed
1. Choose **Local (DNS on gateway)**, because then you can choose the DNS server in your router in one place for all your devices
1. Wait until everything is installed
1. Deselect any apps that you don't want to install. (It is recommended to **deselect IssueTemplate, Mail & Group-Folders**)
1. Click `OK` to **reboot** your server

Now the initial Nextcloud setup should be done.
</details>

## How to startup Nextcloud?
This is the second part of the Nextcloud installation that is prepared by the recently executed Nextcloud-VM script. 
<details><summary>Click here to expand</summary>

You will need to run this to the end to be done with the Nextcloud setup.
1. Connect from a PC in the same network to your server over SSH
1. **We have prepared a slideshow for you that you can use. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-startup) to start the slideshow. Otherwise, just continue with the steps below**
1. After login, you will be automatically redirected and asked a second time for your password. Enter your **password** and the script will start
1. The first Menu you will see, will let you configure certain **Startup Configurations**. It should automatically choose options for you that are not yet configured, so just press `[ENTER]` to automatically start those chosen configurations. Most likely only **Timezone (Change the timezone from Etc/UTC** will be pre-selected
1. Change the Timezone to match your location (choose the **Geographic area** and the **Time zone**)
1. Now read carefully through all information that will be presented to you
1. The next Menu will be the **Server Configuration Menu**. Here just **deselect all options**, since you will configure all recommended options later
1. The next Menu will be the **Nextcloud Configuration Menu**. Since no option is necessary for now, here just press `[Enter]` to continue the setup and skip the Menu.
1. The last Menu will be the **Additional Apps Menu**. Here also **deselect all options**, since you will configure all recommended options later
1. Now **change the password** of your CLI Ubuntu user ncadmin. It should be a difficult password and store it at a safe place.
1. Next **change the username and password** of the **Nextcloud admin user** and store it at a safe place, too.
1. Wait until everything is configured
1. Read through all information that will be presented to you and finally press `[ENTER]` to reboot your server

Now the Nextcloud configuration should be done. Next, you will configure recommended options.

**Please note: Since the server fingerprint was changed during this script, you will need to reset the server fingerprint the next time you connect to your server via SSH.**
</details>

---

# Security and Automation
You should do the following steps to automate your server and make your server more secure.

This section should take around **15min**. It covers:
1. Disable USB-boot
1. Enable geoblocking
1. Set up disk monitoring
1. Set up Fail2Ban
1. Install ClamAV Antivirus
1. Enable Automatic Updates

## How to disable USB-boot?
In order to improve security, you should disable booting from USB devices.
<details><summary>Click here to expand</summary>

1. Shutdown the server by pressing the `Power button`
1. **Power on** your server and **open the BIOS/UEFI** by pressing `[F2]`
1. **Type in your Supervisor password** to open the BIOS/UEFI
1. **Open the Advanced Menu** by clicking on the Advanced button in the top right corner
1. **Disable all boot options** by clicking on the `Boot` tab. Now click on the `Boot Configuration` tab below. In the `Boot Devices` section, **disable everything** (also USB devices).
1. Now **confirm your settings** by pressing `[F10]` and `[ENTER]`
1. Your server should reboot and boot automatically.

#### Now, you can disconnect the mouse, the keyboard and the display from your server since they are not needed anymore.
</details>

## How to enable geoblocking?
In order to improve security, you can allow access to your webserver only from specific countries or continents.
<details><summary>Click here to expand</summary>

1. **Power On** your server (if not already done)
1. Connect from a PC in the same network to your server over SSH (if not already done)
1. Run `sudo rm /var/scripts/activate-tls.sh` over CLI to delete the activate-tls script (you will run it at the end via a Menu, so the local script isn't needed)
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `GeoBlock`
1. Choose to install/reinstall Geoblock
1. Select whatever countries/continents you would like to allow the access to your server. All other will be blocked, based on the ip-address. (At least your own country should get selected to make this work.)
</details>

## How to set up disk monitoring?
Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up disk monitoring. 
<details><summary>Click here to expand</summary>

Please note: this is no alternative to a backup solution!
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Disk Monitoring`
1. Choose to install/reinstall **S.M.A.R.T Monitoring**
1. Choose **Directly** to get informed instantly if a disk error was found
</details>

## How to set up Fail2Ban?
In order to block too much failed login attempts for Nextcloud and SSH, you should configure Fail2Ban for your server.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `Fail2Ban` -> `Install-Fail2Ban`
1. Choose to install/reinstall Fail2Ban
</details>

## How to download the Not-supported Menu?
The Not-supported Menu of the Nextcloud-VM features some exciting new scripts which provide a complete Backup solution, a script to manage a SMB-server and much more.
<details><summary>Click here to expand</summary>

#### Copy and paste into your CLI:
`sudo wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/not-supported.sh -P /var/scripts`

Although it says in the Menu that the offered scripts in this Menu are not ready yet, they are successfully tested!
</details>

## How to install ClamAV?
In order to protect your files from malware, you should set up ClamAV which will will detect malware and scan your files weekly for malware. You will get notified if something was found.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `ClamAV`
1. Choose to install/reinstall ClamAV
1. Wait until it is installed and the service was started
1. Choose to set up a **weekly full scan** of all your files
1. Choose what shall get done with found files. **Only log** is recommended.

You've successfully made your server a bit more secure!
</details>

## How to enable automatic updates?
In order to automate as much things as possible, you should enable automatic updates.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Automatic updates`
1. Choose to enable automatic updates
1. Choose to reboot your server after every update as recommended

**The update will be executed on saturdays at 18:00h.**

Please note: the update script will only update to minor Nextcloud versions. If a new major Nextcloud version gets released, you will need to update your server manually by running the update script.
</details>

---

# Backup
The following steps will need to get done so that you have a working backup solution.

This section should take around **30min** if you just create a few user folders, excluding copying files. It covers:
1. Configure SMTP-Mail
1. Configure the external data SSD/HDD and the external backup HDD's
1. Update your server one time manually
1. Create the daily and off-shore backups

## How to set up SMTP Mail to enable your server to send mails?
In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails.
<details><summary>Click here to expand</summary>

**Before you can start, please get a mail account that your server will use to send mails.**

For german users is recommended: [mail.de](https://signup.mail.de/de/)

**Please inspect your mail providers documents how to connect over SMTP before continuing!**
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `SMTP Mail`
1. Choose to install/reinstall SMTP Mail
1. Enter the **SMTP URL** (e.g. `smtp.mail.de`)
1. Choose the **encryption protocol** (e.g. `SSL`)
1. Choose that you want to use the **default port** (the default port should be correct most of the time)
1. Most mail servers need credentials, so answer that your mail server **needs credentials**
1. Enter your **SMTP username** (the **mail account** that will be used to send mails e.g. `server@mail.de`)
1. Enter the **password** for your mail account
1. Enter the **recipient** mail-address that will receive all mails that are sent by the server (e.g. your main mail-address)
1. Confirm your settings

If all settings were entered correctly, you should receive a testmail which proves that it was setup correctly.
</details>

## How to configure the external data SSD/HDD?
The following steps are needed to configure the external data SSD/HDD.
<details><summary>Click here to expand</summary>

1. **Format, encrypt and mount** the drive with `Veracrypt`
1. **Open** the drive on a PC
1. **Copy** your private files to the drive if you have any and create a sensible folder structure
</details>

### How to format, encrypt and mount the external data SSD/HDD?
In order to prepare the external data SSD/HDD for your server, you should first format and encrypt it using `Veracrypt`.
<details><summary>Click here to expand</summary>

**Warning: this will delete any data on this drive!**
1. Please **don't** connect the drive to your server, yet!
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Veracrypt`
1. Select that you want to **install** veracrypt
1. Select that you want to continue
1. Wait until it is installed
1. After pressing `OK`, **connect** the drive to your server
1. It should get found after a few seconds
1. Select the drive that you want to format and encrypt
1. Enter a **password** and store it at a safe place.
1. Confirm the password
1. Confirm that you are sure to format and encrypt the drive by selecting `Yes`
1. Now the drive should be successfully formatted and encrypted
1. Choose to **mount** the drive to your server
1. Type in the **mountpath** that you want to use, recommended is `/mnt/data`
1. Wait until everything is configured

**Now, the drive should be ready.**

**BTW**: You could run this script a second time now to format, encrypt and mount a second drive, if you want to use more than one external data SSD/HDD.
</details>

### How to access the encrypted external data SSD/HDD on any PC?
Next, you should open the encrypted drive on a different PC to be able to copy files or create the sensible folder structure.
<details><summary>Click here to expand</summary>

1. **Power off** your server by pressing the `power button`
1. **Disconnect** the external data SSD/HDD
1. **Don`t** connect the drive to your PC, yet
1. **Download** Veracrypt from [here](https://www.veracrypt.fr/en/Downloads.html) and **install** it on your PC (if needed, **restart** your PC)
1. Now, **connect** the drive to your PC (choose to **not** reformat the drive if you get a popup, that it must get reformatted)
1. Open `Veracrypt`, select the drive, type in the **password** and wait until it is mounted to your system

Now you should be able to access the encrypted drive.
</details>

### How to create a sensible folder structure on the external data SSD/HDD?
Recommended is to create the folder structure on the external data SSD/HDD like this.

<details><summary>Click here to expand</summary>

Create a folder on the drive that contains all your files. Inside this folder, there will be the user folders and other folders that shall get shared between users in the future. Each user-folder should contain an `Archive`, `Sync` and `Backup folder` and you should strictly separate between them. The `Sync` folder should contain files and folders that are used or changed often and thus will get synchronized. `Archive` contains all files and folders that are not needed or changed often. `Backup` will contain folders in which e.g. photos from your smartphone will get automatically uploaded or e.g. you can sync your desktop from your laptop to a folder in the Backup folder.

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
            - a file that gets shared between those same users
        - Some other data exchange folder
        - user5 folder
            - Backup
            - Sync
            - Archive
    - Some other folder

(The exact foldernames and order can be different)<br>

**BTW**: you can also spread your files over more than one external data SSD/HDD using the same system. Of course each `User folder` and `data exchange folder` will need to be completely on one disk but you could manually add some different user folders or data exchange folders on a second drive. (this might also be useful if you run out of space on your external data SSD/HDD someday in the future)

**Now copy all private files to the external data SSD/HDD or at least create the folder structure.**

If you are done, **eject** the drive from your PC, **connect** the external data SSD/HDD to your server again and **power the server on** by pressing the `power button`
</details>

## How to configure the external backup HDD's?
As you might already know, are those two additional external HDD's meant to be backup drives. One will be used as daily Backup drive which will be connected all the time and one as Off-shore backup drive, which should get stored somewhere else in a safe place outside your home.
<details><summary>Click here to expand</summary>

You will need to do the following steps:
1. **Format** them to NTFS
1. **Mount** them to your server
</details>

### How to format the external backup HDD's?
You will now reformat them to NTFS. You can skip this step, if they are already NTFS formatted!
<details><summary>Click here to expand</summary>

**Warning: this will delete any data on this drive!**
1. **Power on** your server by pressing the `power button` (if not already done)
1. Please **don't** connect the drives to your server, yet!
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `NTFS Format`
1. Select to `Format a drive`
1. Press `OK` to start searching for new drives
1. Now **connect** one of your backup HDD's to your server (you have 1 minute)
1. You should get the message that the drive was found
1. Select the drive that you want to format to NTFS
1. Type in the **label** that this partition shall get. It should be a recognizable label like `Daily Backup` for the daily backup drive and `Off-shore Backup` for the off-shore backup drive 
1. Confirm that you are sure to format the drive to NTFS by selecting `Yes`
1. Now the drive should be successfully formatted

**Now proceed the same procedure for the second backup drive. Start at point 5.**
</details>

### How to mount the external backup HDD's?
Now that the drives are prepared, you will mount the drives to your sever:
<details><summary>Click here to expand</summary>

1. Please **don't** connect the drives to your server, yet or **disconnect** the drives from your server!
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `NTFS Mount`
1. Select to `Mount a drive`
1. Press `OK` to start searching for new NTFS drives
1. Now **connect** one of your backup drives to your server (you have 1 minute)
1. You should get the message that the drive was found
1. Wait until the drive has spin up
1. Choose the **NTFS partition** that shall get mounted
1. Type in the mountpath that you would like to use. The easiest way is to just type in the **recommended mountpath**.
1. You should get the message that the mount was successful.
1. When asked if this is a backup drive, select `Yes`!
1. You should see the message now, that the backup drive is ready.
1. **Now repeat this same procedure with the second drive! Start at point 4!**
1. If you are done, just choose `Exit` to exit this script.
</details>

## How to update your server manually?
Before you are able to create the backup scripts, you will need to run the update script one time.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Update Nextcloud minor` Attention! **Don't** choose `Nextcloud Update major`!
1. Wait until the update has run
1. Run `sudo shutdown -c` over CLI to cancel the shutdown, since it is not necessary now
</details>

## How to set up a daily backup?
Now that everything is prepared, you should set up a daily backup for your server.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Daily Backup Wizard`
1. Confirm that you want to **create** a daily backup script
1. Confirm that you will leave the backup drive connected
1. Select your external data SSD/HDD to be **included** in backups
1. Choose that you want to backup the **whole** external data SSD/HDD
1. Select the **daily backup drive** as backup target
1. Choose to use the recommended backup directory
1. Enter a difficult **encryption key** for your backup and store it at a safe place
1. Choose to run the backup at the recommended time at `4.00 am`
1. Now everything will get set up
1. You should now receive the daily backup config file via mail. Please **save/archive** it
1. Finally, you will see the message that the backup script was successfully created

It is located here: `/var/scripts/daily-borg-backup.sh` and will get executed at your chosen backup time, most likely `4.00 am`. You will get **notified** by mail if something fails and also if the backup was successful. The script which will create the daily backup is based on a program called `borgbackup` which is used to make daily incremental, compressed and deduplicated backup archives from your root partition and external data SSD/HDD.
</details>

## How to set up an offshore backup?
Now that also the daily backup is prepared, you should set up an off-shore backup for your server.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Off-Shore Backup Wizard`
1. Confirm that you want to **create** an off-shore backup script
1. Confirm that you will leave the backup drive connected
1. Select the **off-shore backup drive** as backup target
1. Choose to use the recommended backup directory
1. Choose to run the backup every `90 days`, as recommended
1. Now everything will get set up
1. Finally, you will see the message that the backup script was successfully created

It is located here: `/var/scripts/off-shore-rsync-backup.sh` and will get executed every `90 days`. For now it will be executed every day at `20.00pm` until the first off-shore backup was successfully created. Please leave the drive **connected** for now. You will get notified by mail if something fails. If the backup was successful, you will be **notified** that you can disconnect the drive. The script which will create the off-shore backup is based on a program called `rsync` which will sync the whole backup repository that was made by the daily backup script from your daily backup drive to your offshore backup drive.
</details>

---

## SMB-server
Although a SMB-server might not be needed in any installation, it is recommended to configure it nonetheless, since you will be able to `create Nextcloud users` and configure the `Nextcloud external storage` app easily using the SMB-server script.

This section should take around **20min** if you just create a few users and shares, excluding the previewgeneration. It covers:
1. Run the smb-server script
1. Create SMB-users and Nextcloud users
1. Create SMB-shares and mount the locations to Nextcloud
1. Make the root directory read only for all Nextcloud users
1. Install previewgenerator

### How to run the SMB-server script?
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `SMB-server`
1. Choose to install SMB-server
1. You will now see the **Main Menu** of the SMB-server script
</details>

### How to create SMB-users and Nextcloud users in one go?
The big advantage using this method is, that the Nextcloud and SMB-user will have the same credentials for now. Unfortunately if it gets changed in Nextcloud, it will differ from the old SMB-user password, since they are not synchronized.
<details><summary>Click here to expand</summary>

**First you should make a list which users you will need and create all of them using the following method:**
1. From the `SMB-server Main Menu` select `Open the SMB-user Menu`
1. Choose `Add a SMB-user`
1. Enter the **name** of the user that you want to create. Recommended is to just use the forename of that person.
1. Type in a difficult **password** for that user and store it at a safe place
1. The user should be successful created now
1. Choose to **create** a Nextcloud user with the **same credentials**
1. A Nextcloud user should be successfully created now

**Now repeat that procedure until all users from your list are created**
</details>

### How to create SMB-shares and mount it to Nextcloud in one go?
The big advantage is, that you can create a SMB-share and mount the same location to Nextcloud in one go.
<details><summary>Click here to expand</summary>

If you have followed this guide, you should have set up a **sensible folder structure** on the external data SSD/HDD by now. Based on this structure, you should **share** the `user folders` with the corresponding user that you just created. The `data exchange` folders should get shared with the users that shall have access to those folders. 

If you have mounted the external data SSD/HDD in `/mnt/data` as recommended, is here one example:
Your data folder should be now found in `/mnt/data/your data folder`. One of your user folders and data exchange folders might be `/mnt/data/your data folder/user1 folder` and `/mnt/data/your data folder/Data exchange folder` now. You should then **share** the `/mnt/data/your data folder/user1 folder` with `user1` and the `mnt/data/your data folder/Data exchange folder` with all users that shall get access to this folder. As you now see, best case is, if the user folders on your external data SSD/HDD match exactly the user count of newly created users.

**BTW**: you can at this point still shutdown your server, disconnect the external data SSD/HDD, connect it to your PC, open it with `Veracrypt` and change the folder structure there. Afterwards you can connect the drive to your server again and power it back on.

**Based on the example above, you should now create a list how do you want to share your data with your users.**

Here is how to work off this list technically:
1. Go back to the **SMB-server Main Menu** and select `Open the SMB-share Menu`
1. Choose `Create a SMB-share`
1. You will see now a list of valid directories you can type in
1. Type in one **directory** that you want to share. Based on the example above, it could be e.g. `/mnt/data/your data folder/user1 folder` or `mnt/data/your data folder/Data exchange folder`
1. Type in the **Share name** that you want to use. It should most likely have the same name like the folder that you want to share. Please note, that spaces are not supported. For e.g. `user1 folder` you would thus need to use `user1_folder` or `user1-folder` as name
1. Now **select the SMB-users** that shall get **access** to the share. If it is a `user folder`, you should only share it with the corresponding user. If it is a `Data exchange folder`, you should share it with all users that shall get access to the folder.
1. Now select if the share shall be **writeable**, which you should most likely answer with `Yes`
1. After restartin Samba, the SMB-share should be successfully created!
1. Select that you **want to mount** the same directory to Nextcloud
1. You can now change the mount name of your directory for the usage in Nextcloud. Recommended is to just use the already chosen name.
1. Now choose if the mount shall be **writeable** in Nextcloud, which you should most likely answer with `Yes`, too
1. Choose if you want to enable **sharing** for this mount, which you should most likely answer `Yes`, too
1. Now select any Nextcloud users and/or groups you would like to **share the mount with**. Here you should do the same like you did in **point 6**.
1. Now everything should get set up automatically.
1. Enabling Inotify is **not** recommended and normally not necessary

**Now repeat that method for the whole list that you've made, starting at point 2.**

Please note that you can always change the settings for your mounts in Nextcloud by opening `https://yourdomain-or-ipaddress/settings/admin/externalstorages` with your Nextcloud admin account afterwards.

**Your users should also be able to access their files and folders using SMB over the local network (as shown during point 8).**
</details>

### How to make the root directory in Nextcloud read only for all users?
In order to prevent user from creating any files outside their user folders, which are located on the external data SSD/HDD and now mounted to Nextcloud, you should make the Nextcloud root directory read only for all users.
<details><summary>Click here to expand</summary>

Here is how to do this:
1. From the **SMB-server Main Menu** select `Open the SMB-share Menu`
1. Choose `Create a SMB-share`
1. Type in an empty or not existing directory that you will share, like `mnt/data/your data folder/root` (based on the example above) and choose to create that directory
1. Type in `temporary` as **Share name**
1. Now **select at least one SMB-user** that will get **access** to the share for now
1. Now select that the share shall be **read only**
1. After restartin Samba, the SMB-share should be successfully created!
1. Select that you **want to mount** the same directory to Nextcloud
1. You can now change the mount name of your directory for the usage in Nextcloud. You should change the name to `/` (one forward-slash)
1. Now choose that the mount shall be **read only** in Nextcloud
1. Choose that you want to disable **sharing** for this mount
1. Now deselect all Nextcloud users and groups in order to **share the mount with everyone**.
1. Confirm that you want to **share the mount with everyone** (select `Yes`)
1. Now everything should get set up automatically.
1. **Don't** enable Inotify
1. You should now remove the SMB-share again since it is not needed any longer:
1. Choose to `Delete SMB-shares` from the same still open `SMB-share Menu`
1. Select the just created share with name `temporary`
1. Press `[Enter]` to delete it
1. exit the SMB-server script by selecting `Return` -> `Exit`

Now, the root directory should be read only for all users!
</details>

## How to install the Previewgenerator?
In order to speed up preview loading and the general feel of Nextcloud while opening folders with many pictures, you should set up the previewgenerator, which will pre-generate previews to make preview-loading faster.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `PreviewGenerator`
1. Choose to install/reinstall the Preview Generator
1. Choose to **not** install imagick
1. Deselect any format you don't want to have previews for (Recommended is to **deselect MarkDown & TXT**)
1. Wait until everything is set up
1. Choose to **not** use a specific Nextcloud user for preview generation
1. Wait until everything is scanned. This can take a long time, please be patient! (If it just takes too long and doesn't finish, you can cancel by pressing `ctrl + c`. You could then run this script after the initial setup is done.)
</details>

---

## Customize Nextcloud
The following things are not really necessary for a basic setup but I think that those should be the default on any installation. Hence they are included in the Basic Setup section. You are free to skip this section.

This section should take around **5min**. It covers:
1. Configure the CookieLifetime
1. Enable the Share-folder
1. Disable Workspaces
1. Disable User flows

### How to configure the CookieLifetime?
By changing this value, you can configure after how much time any user will forcefully get logged out from a browser session. 
<details><summary>Click here to expand</summary>

Since you most likely don't want to log into Nextcloud on your devices again every half an hour, it is recommended to change it to a higher value.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Nextcloud Configuration` -> `CookieLifetime`
1. Select `2419200s 4 Weeks` (4 weeks are recommended and should be enough)

Now your users should no longer get logged out in browsers after half an hour.
</details>

### How to define a Share-folder for Nextcloud shares?
If you internally share documents, they will be always added to the users root directory in Nextcloud. Since this can quickly become confusing for your users if they share many files internally, it is recommended to set a `Share-folder`. 
<details><summary>Click here to expand</summary>

All shared files will in this case not be visible in the users root directory but in a folder called `Shared`.

If you have followed this guide and made the root directory in Nextcloud **read only** for all users, you will need to do something first, though: Please create a folder in the root folder by running a command like:<br>
`sudo mkdir "/mnt/data/your data folder/root/Shared"` over CLI<br>
Please remember to adjust this command depending on the path you've chosen to be the root folder.

Now you can configure this option:
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Nextcloud Configuration` -> `Share-folder`
1. Choose that you want to enable this option

All Nextcloud internal shares will from now on visible in the `Shared` folder.
</details>

### How to disable workspaces?
Nextcloud 18 introduced the so-called `workspaces`. This shows a readme file on top of any folder in Nextcloud which will be disturbing for most users, so you should disable them if you have no usecase for them.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Nextcloud Configuration` -> `Disable workspaces`
1. Choose to disable `rich workspaces`

Rich workspaces are now disabled.
</details>

### How to disable user flows?
User flows are a feature which was introduces with Nextcloud 18. They can lead to performance issues if one user chooses to create many of them so they should get disabled, especially if you have no usecase for them.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Nextcloud Configuration` -> `Disable user flows`
1. Choose to disable `user flows`

User flows are now disabled, admin flows still usable.
</details>

---

## Activate Let's Encrypt
In order to access Nextcloud over https with a valid certificate, you will need to do the following things.

This section should take around **15min**, excluding the time it could take getting a new domain. It covers:
1. Get a Domain from a supported DDNS-provider and activate DDNS for your Domain
1. Configure DDclient
1. Enable Port Forwarding
1. Activate TLS

### What is DDNS?
DDNS stands for Dynamic DNS and will be used in order to be able to run a webserver on your home network. On most home networks you have no static public IP address due to privacy reasons and will need to set up DDNS.

### Which DDNS-providers are currently supported?
Currently (10. Nov. 2020) supported are:
<details><summary>Click here to expand</summary>

- [Cloudflare](https://cloudflare.com)
- [deSEC](https://desec.io)
- [Duck DNS](https://duckdns.org)
- [Strato](https://strato.de) (recommended for german users)

Click on one of them to get your domain!
</details>

### How to activate DDNS for your Domain
For some DDNS-providers like Strato, you will need to activate DDNS for your Domain first before you can use it.
<details><summary>Click here to expand</summary>

#### Here are some provider specific guides how to do this:
- [Strato](https://www.strato.de/faq/domains/so-einfach-richten-sie-dyndns-fuer-ihre-domains-ein/#1) (only point 1 of this guide is needed)
</details>

### How to configure DDclient?
After you've got your domain from a supported provider and activated DDNS for your domain, you should now configure DDclient.
<details><summary>Click here to expand</summary>

DDclient is an easy way to update your domain regularly with your new public ip-address and is the recommended way to set up Dynamic DNS for your server. Please inspect the documents of your DDNS-provider what exactly you need to enter here.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `DDclient Configuration`
1. Choose to install/reinstall DDclient
1. Select your **DDNS-provider** (e.g. `Strato`), enter the **Host/Domain** (e.g. `yourdomain.com`), the **Login/Domain** (e.g. `yourdomain.com`) and the **Password or API-key** (e.g. `your-ddns-password`)
1. Confirm your settings 
1. Make sure that the initial test looks good
</details>

### How to enable Port Forwarding?
You will need to port forward some specific ports to your server in order to make it possible to run a public webserver on it.
<details><summary>Click here to expand</summary>

How to do port forwarding in detail, completely depends on your router. Thus, you should inspect your router's manual for that.
#### Here are some guides for different router models:
- [FRITZ!Box 7590](https://en.avm.de/service/fritzbox/fritzbox-7590/knowledge-base/publication/show/893_Setting-up-static-port-sharing/) (only point 2 of this guide is needed)
#### You will need to port forward at least the following two ports to your server:
- Port 80 TCP
- Port 443 TCP
#### Alternatively you could activate automatic port forwarding for your server and use UPnP later to open those ports:
- [FRITZ!Box 7590](https://en.avm.de/service/fritzbox/fritzbox-7590/knowledge-base/publication/show/894_Setting-up-automatic-port-sharing/) (only point 1 of this guide is needed)
</details>

### How to activate TLS?
You will now activate TLS finally, if all points above are successfully set up.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Activate TLS`
1. Choose to install TLS
1. Confirm that you have set up all necessary requirements
1. Enter your **Domain** (e.g. `yourdomain.com`)
1. Use UPnP or not depending on if you have enabled automatic port forwarding in your router for your server. If you opened Port 80 and 443 manually, you can skip UPnP
1. Wait until everything is set up and enter your mail-address during this step (Your mail-address is needed for contacting you, if a certificate expires)

**Now you should be able to access your Nextcloud on any device by opening `yourdomain.com`!**

#### Advices what to do now: 
- You should first visit `yourdomain.com/settings/user` with your admin user and type in your admin mail-address.<br>
- Next, you should visit `yourdomain.com/settings/admin` and use the same mail-account for the Mail-server settings that you used [here](#how-to-set-up-smtp-mail-to-enable-your-server-to-send-mails) (This is needed so that Nextcloud can send mails e.g. for sending reset password mails and such.)<br>
- Afterwards, it is recommended to activate 2-factor autentification for all Nextcloud accounts to further secure them. Here is a guide how to do that: [klick here](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/two_factor-auth.html)
</details>

### Congratulations, everything of the initial setup is now done!

---
---
---

# Optional

## How to install Midnight Commander?
Midnight Commander is a CLI file explorer.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `Midnight Commander`
1. Choose to install/reinstall Midnight Commander
1. Choose to install the dark theme for Midnight Commander (recommended)
</details>

---

## How to install Remotedesktop?
Remotedesktop allows you to connect to a graphical UI hosted on your server.<br>
It allows to use graphical tools directly on your server like viewing files from the backup and also restoring them by copy and paste.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Remotedesktop`
1. Choose to install Remotedesktop
1. Choose to install the `Gnome Desktop`
1. Wait until everything is installed
1. Now, you should see a menu with available recommended programs. Just press `[ENTER]` to **install all** of them.
1. **Confirm** for every program that you want to install it
1. At last, you should get asked if you want to **reboot** your server and press `[ENTER]` to do so.
</details>

---

## How to restore files from backup?
It can happen, that you need to restore some files from a backup. This is the easiest way to do this.
<details><summary>Click here to expand</summary>

#### Preparations
1. Install Midnight Commander (instructions are above)
1. Install Remotedesktop (instructions are above)

#### Execution
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Backup Viewer`
1. Confirm that you want to view the content of your backups
1. If both backup drives are connected, **select the backup drive** that you want to view backups from (most likely the daily backup drive)
1. Read through the rules that are necessary to know about and **confirm** them
1. Now, you should see Midnight Commander and all available backup archives. **Just leave Midnight Commander as it is!**
1. Open a **Remotedesktop program** on your client PC in the same network as your server and connect to your server using the IP-address of your server and type the credentials of your ncadmin account into the login-mask
1. When you are connected, open a `terminal` in the Remotedesktop session 
1. **Copy and paste** or type into the terminal: `xhost +si:localuser:root && sudo nautilus /tmp/borg`
1. Now, you should see the file explorer with all available backup archives
1. You are now free to navigate through them, **open files and restore** them from the backup to the original directory
1. After you are done, **close** the file explorer
1. The last step is to **close Midnight Commander** by pressing `[F10]`
1. It should now report, that the backup and drive was successfully unmounted.
</details>

---