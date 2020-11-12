# Nextcloud-NAS-Guide
Instructions how to set up a home server

This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it `Nextcloud NAS` because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the [Nextcloud-VM](https://github.com/nextcloud/vm) which you will use to set up your server.

Here is a not complete list of things that this guide covers: hardware recommendations, UEFI/Bios configuration, Ubuntu Installation, Nextcloud installation, full disk encryption, TPM2 unlocking, Let's encrypt for getting valid certificates, Automatic Updates, geoblocking to allow access to your server only from specific countries/continents, server mail notifications, disk monitoring and notifications, Fail2Ban to block too much failed login attempts, previewgenerator to speed up preview loading in Nextcloud, ClamAV for scanning and detecting your files for malware, a complete backup solution, and a way to manage a full fletched SMB-server. 

In the future, this guide will cover optional addons like: a media server, a way to easily manage your media collection directly on your server, Pi-hole as network wide ad-blocker, PiVPN as VPN-server, Bitwarden as open-source password server, different office integrations for Nextcloud, High-performance-backend for Nextcloud Talk, Fulltextsearch for Nextcloud and more.

**If you are interested in this solution, please start reading [here](#basic-setup)**

# Index
- [Basic setup](#basic-setup)
    - [How to use this guide?](#how-to-use-this-guide)
    - [Considerations](#are-there-any-considerations-you-should-know-of)
    - [Minimal Hardware requirements](#what-are-the-minimal-hardware-requirements)
    - [Hardware recommendations](#do-you-have-any-hardware-recommendations)
    - [Preparations](#are-there-any-preparations-necessary-before-you-can-start)
    - [BIOS/UEFI](#how-to-configure-the-biosuefi)
    - [Ubuntu](#how-to-set-up-ubuntu)
    - [SSH](#how-to-connect-to-your-server-over-ssh)
    - [TPM2 unlocking](#how-to-set-up-automatic-tpm2-unlocking)
    - [Nextcloud installation](#how-to-install-nextcloud)
    - [Nextcloud startup script](#how-to-startup-nextcloud)
    - [Geoblocking](#how-to-enable-geoblocking)
    - [Automatic updates](#how-to-enable-automatic-updates)
    - [SMTP Mail](#how-to-set-up-smtp-mail-to-enable-your-server-to-send-mails)
    - [Disk Monitoring](#how-to-set-up-disk-monitoring)
    - [Fail2Ban](#how-to-set-up-fail2ban)
    - [Not-supported Menu](#how-to-download-the-not-supported-menu)
    - [ClamAV (Antivirus)](#how-to-install-clamav)
    - [External data SSD](#how-to-configure-the-external-data-ssd)
        - [Format](#how-to-format-the-external-data-ssd)
        - [Encrypt](#how-to-encrypt-the-external-data-ssd)
        - [Sensible folder structure](#how-to-create-a-sensible-folder-structure-on-the-external-data-ssd)
        - [Mount](#how-to-mount-the-external-data-ssd)
    - [External backup HDD's](#how-to-configure-the-external-backup-hdds)
        - [Format](#how-to-format-the-external-backup-hdds)
        - [Mount](#how-to-mount-the-external-backup-hdds)
    - [Update manually](#how-to-update-your-server-manually)
    - [Daily Backup](#how-to-set-up-a-daily-backup)
    - [Off-Shore Backup](#how-to-set-up-an-offshore-backup)
    - [SMB-server](#how-to-configure-a-smb-server)
        - [Run the SMB-server script](#how-to-run-the-smb-server-script)
        - [Create SMB-users and Nextcloud users](#how-to-create-smb-users-and-nextcloud-users-in-one-go)
        - [Create SMB-shares and mount it to Nextcloud](#how-to-create-smb-shares-and-mount-it-to-nextcloud-in-one-go)
        - [Read only root directory in Nextcloud](#how-to-make-the-root-directory-in-nextcloud-read-only-for-all-users)
    - [Previewgenerator](#how-to-install-the-previewgenerator)
    - [Customize Nextcloud](#how-to-customize-nextcloud)
        - [CookieLifetime](#how-to-configure-the-cookielifetime)
        - [Share-folder](#how-to-define-a-share-folder-for-nextcloud-shares)
        - [Workspaces](#how-to-disable-workspaces)
        - [User Flows](#how-to-disable-user-flows)
    - [Activate Let's Encrypt](#how-to-activate-lets-encrypt-for-your-domain)
        - [DDNS](#what-is-ddns)
        - [DDNS-providers](#which-ddns-providers-are-currently-supported)
        - [Activate DDNS](#how-to-activate-ddns-for-your-domain)
        - [DDclient](#how-to-configure-ddclient)
        - [Port Forwarding](#how-to-enable-port-forwarding)
        - [Activate TLS](#how-to-activate-tls)
- [Optional](#optional)

# Basic setup

## How to use this guide?
The idea concerning this guide is that you can read and work through the whole guide starting here until the whole basic setup is done (it ends [here](#congratulations-everything-of-the-Basic-Setup-is-now-done)). In the end you will have a working Nextcloud NAS. 

**Please note**: It is not recommended to skip sections until the whole basic setup section is done, because they partly build on each other. So simply read and work through everything starting here!

## Are there any considerations you should know of?
Please read carefully through this list of considerations you should know of!
<details><summary>Click here to expand</summary>

- This guide is only meant for home servers, for nothing else.
- It is provided as is and without warranty of any kind. (Read the [License](https://github.com/szaimen/Nextcloud-NAS-Guide/blob/main/LICENSE))
- You should **neither** use Nextclouds `Groupfolder` app **nor** use `normal Nextcloud storage` since those have issues with external changes that are made via SMB, and other shortcomings. Also all files that are created via those two storage providers will be located on your root disk which is limitated in its size and you won't be able to use SMB with this location. The only Nextcloud storage app that should get used is the `External Storage app` since you can use it to mount your files from external drives into your Nextcloud which is the recommended way to mount files in Nextcloud. And don't despair! This guide covers how to do this. Please note that some Nextcloud apps have limitations when used together with the `external storage app`, though.
- You shoud **not** use any encryption that is offered by Nextcloud e.g. `Server side encryption` or `End to end encryption` if you want to access you data over SMB or other services since the files that are encrypted like this will only be readable through Nextcloud which also introduces problems regarding backups and such. Also it is not necessary since you will use disk encryption for your data. On the other hand: if you only want to encrypt very less files (e.g. only your most important) which don't need to be readable over SMB or other services, `End to end encryption` is the encryption to choose. Using `E2E` will make sure that not even the server admin can decrypt the files so be warned!
- Most of this guide is based on scripts that are provided by the [**Nextcloud-VM**](https://github.com/nextcloud/vm) and will need to be executed in order to make everything work. This could theoratically set your server under risk but we made sure that all of them are secure.
- The internal root partition, the external data SSD and the backups will be **encrypted** for security. This could theoratically prevent you from accessing those if you loose the key/passphrase. So please always store the passwords/passphrases at a safe place!
- The three external drives will be **NTFS** formatted, which has the advantage that they can be read by almost any x86 OS. But it doesn't provide features like snapshots or integrity checking.
- You will need a PC running **Windows 7/10 Professional** or higher for encrypting and formatting the external drives. (The `Windows 10/7 Home Edition` is not enough)
- You will set up **TPM2 unlocking** which will automatically unlock your encrypted root partition during boot. This is a big convenience factor but would allow an attacker theoratically to break the encryption of this partition, if he/she steals the whole server. Encrypting the root partition makes sense nonetheless, since an attacker cannot simply take out the internal drive, connect it to another PC and read out all the data in cleartext.
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
- One external SSD (or HDD) that will store your personal data with at least 250GB (depending on how much data you are planning to store on your server)
- Two additional external HDD's that will function as backup drives with at least the same size of the external personal data SSD each
- One USB-stick with at least 8GB for installing Ubuntu
- For the initial setup you will also need a HDMI-display (e.g. monitor/tv/beamer), USB-mouse and -keyboard. If you don't have one: you don't need to buy those. Borrowing or renting those should be enough. (You really only need them for the initial setup.)

**Please note: In order to complete this guide, you will need a PC running Windows 7/10 Professional or higher for encrypting and formatting the external drives. (The `Windows 10/7 Home Edition` is not enough) If you don't have one, this guide is unfortunately nothing for you.**
</details>

## Do you have any Hardware recommendations?
Since your server shall run 24/7, it makes sense to use laptop CPU's and hardware because those are still much more power efficient than any custom-built PC. Perfect because of the size and power for this usecase are Intel NUC's. 
<details><summary>Click here to expand</summary>

Recommended are any recent Intel NUC's with 4 or more cores. Click on [this link](https://geizhals.eu/?cat=barepc&v=e&hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu&sort=p&bl1_id=30&xf=15825_4%7E2257_Intel%7E3345_2018#gh_filterbox) to show recommended devices. Of yourse you are free to buy used devices, but again: Intel NUC's are prefered.

After you have chosen your device, you will need to get compatible RAM and Storage for your NUC which depends on the model that you've chosen. So please choose wisely.

#### Recommended is:
- One Intel NUC from 2018 or later with 4 Cores or more
- One SO-DIMM RAM latch with 8GB because 8GB should be enough for now and you will be able to upgrade the RAM with a second latch later on 
- One internal SSD with 250 GB which should be plenty of storage for this usecase
- One external SSD for storing the private data with at least 1TB (depending on how much data you are planning to store on your server)
- Two external HDD's for backups with at least the same size like the external SSD each

#### Currently (10. Nov. 2020) the recommended configuration which should fit for most people is:
- [Intel NUC Kit NUC8i5BEK](https://geizhals.eu/intel-nuc-kit-nuc8i5beh-bean-canyon-boxnuc8i5beh-a1843166.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) = ca. 250€
- [Kingston A2000 NVMe PCIe SSD 250GB, M.2](https://geizhals.eu/kingston-a2000-nvme-pcie-ssd-250gb-sa2000m8-250g-a2112844.html) = ca. 33€
- [G.Skill RipJaws SO-DIMM 8GB, DDR4-2400, CL16](https://geizhals.eu/g-skill-ripjaws-so-dimm-8gb-f4-2400c16s-8grs-a1353098.html) = ca. 30€
- [ADATA SE800 black 1TB](https://geizhals.eu/adata-se800-schwarz-1tb-ase800-1tu32g2-cbk-a2102946.html) = ca. 130€
- [Silicon Power Armor A85 1TB](https://geizhals.eu/silicon-power-armor-a85-1tb-sp010tbphda85s3s-a1358555.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) x2 = ca. 55€ x2 = ca. 110€
</details>

## Are there any preparations necessary before you can start?
Yes, please make sure that you have all necessary Hardware requirements and please connect all necessary parts before continuing. And please don't forget the USB-stick, -mouse, -keyboard and HDMI-display!
<details><summary>Click here to expand</summary>

**For Intel NUC's, you need to put one SSD and one RAM latch into the device before continuing**

How to do this in detail depends on the PC that you've chosen to function as your server
</details>

## How to configure the BIOS/UEFI?
You will need to configure your BIOS/UEFI in order to harden security and to make things work. 
<details><summary>Click here to expand</summary>

The following guide is especially written for Intel Visual Bios which is present on Intel NUC devices. If you use a different device as your server it is possible, that some things are different for you. Since BIOS/UEFI can be visually very different, this guide is only plain text.
1. **Connect** the power-cable, HDMI-display, USB-mouse and -keyboard to your server
1. **Power on** your server and **open the BIOS/UEFI** by pressing `[F2]`
1. **Load the BIOS/UEFI defaults** by pressing `[F9]` and `[ENTER]` to confirm
1. The server might reboot now and you should **open the BIOS/UEFI** by pressing `[F2]` again. If it doesn't reboot, just continue with the next steps.
1. **Open the Advanced Menu** by clicking on the Advanced button in the top right corner
1. **Set the Fan Control Mode to quiet** by clicking on the `Cooling` tab In the `CPU Fan Header` section, select `Fan Control Mode` and choose **Quiet**
1. **Set a Supervisor password** by clicking on the `Security` tab In the `Passwords` section, click on `Set Supervisor Password` and type in a **password**. Store it at a safe place!
1. Configure your server to **boot automatically after a power failure** by clicking on the `Power` tab In the `Secondary Power Settings` section, click on `After Power Failure` and choose **Power On**
1. **Enable UEFI Boot** and **disable Legacy Boot** by clicking on the `Boot` tab. The `Boot Priority` tab is now automatically selected. In the `UEFI Boot Priority` section, **enable UEFI Boot** and **disable Legacy Boot**
1. Only allow to **boot from USB-sticks** by clicking on the `Boot Configuration` tab. In the `UEFI Boot` section, disable everything and **only enable Boot Network Devices Last**. In the `Boot Devices` section, disable everything and **only enable USB**
1. **Configure Secure Boot** by clicking on the `Secure Boot` tab. In the `Secure Boot Config` section, disable everything and **only enable Secure Boot**
1. Now **confirm your settings** by pressing `[F10]` and `[ENTER]`

The BIOS/UEFI should now be correctly configured.
</details>

## How to set up Ubuntu?
You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured.
<details><summary>Click here to expand</summary>

1. **Download** the latest Ubuntu Server 20.04.1 LTS image by clicking [here](http://www.releases.ubuntu.com/20.04/ubuntu-20.04.1-live-server-amd64.iso)
1. Use the already downloaded image to create a bootable USB-stick by following [this guide](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows)
1. Connect a **LAN-cable** to your server
1. Connect the **USB-stick** to your server and power it on. The server should then automatically boot from the USB-stick
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
1. If everything is correct, you will now see an overview of Ubuntu also containing the ip-address of your server at the right side. 

**You will need the ip-address in the next step!**

Theoratically you could now disconnect the monitor, mouse and keyboard again.
</details>

## How to connect to your server over SSH?
In order to connect to your server from a PC in the same network, you should use SSH. You are then able to use copy and paste and more.
<details><summary>Click here to expand</summary>

1. Open a command prompt on Windows 10 or terminal on Linux
1. Type in `ssh username@ip-address`<br>
One example is: `ssh ncadmin@192.168.178.144`
1. Now type in your CLI Ubuntu user **password**

Please note: If you connect the first time to your server, you will be asked to confirm the server fingerprint which you should do by typing in `yes` and pressing `[ENTER]`
</details>

## How to set up automatic TPM2 unlocking?
In order to automaticly unlock the encrypted root partition, you need to setup TPM2 unlocking during boot.
<details><summary>Click here to expand</summary>

1. Connect from a PC in the same network to your server over SSH
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
`wget https://raw.githubusercontent.com/nextcloud/vm/master/nextcloud_install_production.sh && sudo bash nextcloud_install_production.sh`<br>
1. Enter your **password** again
1. **Since it is necessary that you answer certain questions correctly, we have prepared a slideshow which makes it easier for you to answer all questions correctly. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-installation) to start the slideshow. Otherwise, just continue with the steps below**
1. Choose that you **want** to use **LVM snapshots**, since it is a requirements for a good working backup solution and such.
1.  Choose that you **don't** want to use `http://archive.ubuntu.com` as **repository** for your server since the best one was already set during the Ubuntu installation
1. Select that you **don't** want to make all **free space** available to your **root partition** since it is always better to have some free space left that can be used for snapshots and such. You are of course free to shrink the free space later manually if needed
1. Choose **1 Disk (Only use one disk /mnt/ncdata - NO ZFS!** since 2 Disks is currently not supported by the backup scripts since it complicates things by a lot and doesn't support disk encryption. Additionally you would need one dedicated disk only for that directory.
1. Choose **Local (DNS on gateway)**, because then you can choose the DNS server in your router in one place for all your devices
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

## How to enable geoblocking?
In order to improve security, you can allow access to your webserver only from specific countries or continents.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `GeoBlock`
1. Choose to install/reinstall Geoblock
1. Select whatever countries/continents you would like to allow the access to your server. All other will be blocked, based on the ip-address. (At least your own country should get selected to make this work.)
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

## How to configure the external data SSD?
The following steps are needed to configure the external data SSD.
<details><summary>Click here to expand</summary>

1. **Reformat** the drive to NTFS, if not already done
1. **Encrypt** the drive with Bitlocker
1. **Copy** your private files to the drive if you have any and create a sensible folder structure
1. **Mount** the external SSD to your server
</details>

### How to format the external data SSD?
In order to prepare the SSD for your server, you should first format it to NTFS by doing the following things.
<details><summary>Click here to expand</summary>

(If it is already NTFS formatted, you can skip the formatting to NTFS)
1. **Connect** the drive to your Windows 7/10 Professional (or higher) PC
1. Open the **File Explorer**
1. Click on **This PC**
1. **Right-click** on your SSD in this overview and select **Format...**
1. Click on **Restore device defaults**
1. Give it a meaningful **Volume designation** like `Data`
1. Click on **Start** to start the formatting which should only take a few seconds
</details>

### How to encrypt the external data SSD?
Now encrypt your external SSD using Bitlocker.
<details><summary>Click here to expand</summary>

(You can also encrypt the drive if already some data is on it)
1. **Connect** the drive to your Windows 7/10 Professional (or higher) PC
1. Search in Windows for `Bitlocker` which should bring up a control panel option called **Manage Bitlocker** and open it
1. Resize the newly opened window and make it big
1. Below your `C:` drive, in the **Bitlocker To Go** section, you should see the external SSD. Click on **Activate Bitlocker** for this drive
1. Use a difficult password to encrypt the drive and store it at a safe place.
1. Choose to store the **Recovery Code** for your drive **in a file** and select any valid location.
1. Click on **Continue** to proceed with setting up bitlocker
1. Choose **only encrypt used storage**
1. Choose **New encryption mode**
1. Click on **Start encryption** to start the encryption
1. Now wait until the drive is completely encrypted
1. You should store the **Bitlocker Recovery Code** and drive identifier at a safe place and delete the file again
1. After the drive is completely encrypted, **eject the drive**, disconnect it and connect it again. Then you should see a popup where you can test if the password works and the drive gets correctly decrypted with this password.

**Now you can start to copy your private files onto the drive if you have any.**
</details>

### How to create a sensible folder structure on the external data SSD?
Recommended is to create the folder structure on the external SSD like this.

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

(The exact foldernames and order can be different)
</details>

### How to mount the external data SSD?
After all private files are successfully copied to the external SSD or at least the folder structure was created, you should mount the drive to your server.
<details><summary>Click here to expand</summary>

1. **Connect** the external SSD to your server
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Bitlocker Mount`
1. Choose to install Bitlocker Mount
1. Wait until everything is installed
1. The drive should get found immediately
1. After it was found, enter your **Bitlocker password** for that drive
1. You should get the messsage that it is correct
1. Enter the **mountpoint** where it shall get mounted. Recommended is `/mnt/data`
1. You should now get the message that the mount was succesful
</details>

## How to configure the external backup HDD's?
As you might already know, are those two additional external HDD's meant to be backup drives. One will be used as daily Backup drive which will be connected all the time and one as Off-shore backup drive, which should get stored somewhere else in a safe place outside your home.
<details><summary>Click here to expand</summary>

You will need to do the following steps:
1. **Format** them to NTFS
1. **Mount** them to your server
</details>

### How to format the external backup HDD's?
You will now reformat them to NTFS:
<details><summary>Click here to expand</summary>

1. **Connect** the drives to your Windows 7/10 Professional (or higher) PC
1. Open the File Explorer
1. Click on **This PC**
1. **Right-click** on one HDD in this overview and select **Format...**
1. Click on **Restore device defaults**
1. Give it a meaningful **Volume designation** like `Daily Backup`
1. Click on **Start** to start the formatting which should only take a few seconds
1. **Right-click** on the second HDD in this overview and select **Format...**
1. Click on **Restore device defaults**
1. Give it a meaningful **Volume designation** like `Off-Shore Backup`
1. Click on **Start** to start the formatting which should only take a few seconds
1. **Eject** both drives
</details>

### How to mount the external backup HDD's?
Now that the drives are prepared, you will mount the drives to your sever:
<details><summary>Click here to expand</summary>

1. Please **don't** connect the drives to your server, yet!
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

**Now repeat this same procedure with the second drive! Start at point 4!**
</details>

## How to update your server manually?
Before you are able to create the backup scripts, you will need to run the update script one time.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Update Nextcloud`
</details>

## How to set up a daily backup?
Now that everything is prepared, you should set up a daily backup for your server.
<details><summary>Click here to expand</summary>

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Daily Backup Wizard`
1. Confirm that you want to **create** a daily backup script
1. Confirm that you will leave the backup drive connected
1. Select your external data SSD to be **included** in backups
1. Choose that you want to backup the **whole** external data SSD
1. Select the **daily backup drive** as backup target
1. Choose to use the recommended backup directory
1. Enter a difficult **encryption key** for your backup and store it at a safe place
1. Choose to run the backup at the recommended time at `4.00 am`
1. Now everything will get set up
1. You should now receive the daily backup config file via mail. Please **save/archive** it
1. Finally, you will see the message that the backup script was successfully created

It is located here: `/var/scripts/daily-borg-backup.sh` and will get executed at your chosen backup time, most likely `4.00 am`. You will get **notified** by mail if something fails and also if the backup was successful. The script which will create the daily backup is based on a program called `borgbackup` which is used to make daily incremental, compressed and deduplicated backup archives from your root partition and external data SSD.
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

## How to configure a SMB-server?
Although a SMB-server might not be needed in any installation, it is recommended to configure it nonetheless, since you will be able to `create Nextcloud users` and configure the `Nextcloud external storage` app easily using the SMB-server script.

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

If you have followed this guide, you should have set up a **sensible folder structure** on the external data SSD by now. Based on this structure, you should **share** the `user folders` with the corresponding user that you just created. The `data exchange` folders should get shared with the users that shall have access to those folders. 

If you have mounted the external data SSD in `/mnt/data` as recommended, is here one example:
Your data folder should be now found in `/mnt/data/your data folder`. One of your user folders and data exchange folders might be `/mnt/data/your data folder/user1 folder` and `/mnt/data/your data folder/Data exchange folder` now. You should then **share** the `/mnt/data/your data folder/user1 folder` with `user1` and the `mnt/data/your data folder/Data exchange folder` with all users that shall get access to this folder. As you now see, best case is, if the user folders on your external data SSD match exactly the user count of newly created users.

**BTW**: you can at this point still shutdown your server, disconnect the external data SSD, connect it to your Windows PC and change the folder structure there (of course you will need to enter the Bitlocker password). Afterwards you can connect the drive to your server again and power it back on.

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
</details>

### How to make the root directory in Nextcloud read only for all users?
In order to prevent user from creating any files outside their user folders, which are located on the external data SSD and now mounted to Nextcloud, you can make the Nextcloud root directory read only for all users.
<details><summary>Click here to expand</summary>

Here is how to do this:
1. From the **SMB-server Main Menu** select `Open the SMB-share Menu`
1. Type in an empty or not existing directory that you will share, like `mnt/data/your data folder/root` (based on the example above) and choose to create that directory
1. Type in `root` as **Share name**
1. Now **select at least one SMB-user** that will get **access** to the share for now
1. Now select that the share shall be **read only**
1. After restartin Samba, the SMB-share should be successfully created!
1. Select that you **want to mount** the same directory to Nextcloud
1. You can now change the mount name of your directory for the usage in Nextcloud. You should change the name to `/` (one forward-slash)
1. Now choose that the mount shall be **read only** in Nextcloud
1. Choose that you want to disable **sharing** for this mount
1. Now select all Nextcloud users and groups in order to **share the mount with everyone**.
1. Now everything should get set up automatically.
1. Enabling Inotify is **not** recommended and normally not necessary
1. You should now remove the SMB-share again since it is not needed any longer:
1. Choose to `Delete SMB-shares` from the same still open `SMB-share Menu`
1. Select the just created share with name `root`
1. Press `[Enter]` to delete it

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
1. Wait until everything is scanned. This can take a long time, please be patient!
</details>

## How to customize Nextcloud?
The following things are not really necessary for a basic setup but I think that those should be the default on any installation. Hence they are included in the Basic Setup section. You are free to skip this section.

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
<details><summary>Click here to expand</summary>

If you internally share documents, they will be always added to the users root directory in Nextcloud. Since this can quickly become confusing for your users if they share many files internally, it is recommended to set a `Share-folder`. All shared files will in this case not be visible in the users root directory but in a folder called `Shared`.

If you have followed this guide and made the root directory in Nextcloud **read only** for all users, you will need to do something first, though: Please create a folder in the root folder by running a command like:<br>
`sudo mkdir "mnt/data/your data folder/root/Shared"` over CLI<br>
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

## How to activate Let's Encrypt for your Domain?
In order to access Nextcloud over https with a valid certificate, you will need to do the following things:
<details><summary>Click here to expand</summary>

1. Get a Domain from a supported DDNS-provider and activate DDNS for your Domain
1. Configure DDclient
1. Enable Port Forwarding
1. Activate TLS
</details>

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
- [FRITZ!Box 7590](https://en.avm.de/service/fritzbox/fritzbox-7590/knowledge-base/publication/show/893_Setting-up-static-port-sharing/)
#### You will need to port forward at least the following two ports to your server:
- Port 80 TCP
- Port 443 TCP
#### Alternatively you could activate automatic port forwarding for your server and use UPnP later to open those ports:
- [FRITZ!Box 7590](https://en.avm.de/service/fritzbox/fritzbox-7590/knowledge-base/publication/show/894_Setting-up-automatic-port-sharing/)
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
1. Wait until everything is set up

Now you should be able to access your Nextcloud on any device by opening `yourdomain.com`!
</details>

### Congratulations, everything of the Basic Setup is now done!

---

# Optional
TODO