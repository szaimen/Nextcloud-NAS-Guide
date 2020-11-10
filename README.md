# Nextcloud-NAS-Guide
Instructions how to setup a Nextcloud NAS
TODO: Add what this is, advantages vs nextcloudpi, ideas, 

### Are there any known limitations?
Yes:
- You should neither use Nextclouds `Groupfolder` app nor use `normal Nextcloud storage` since those have issues with external changes that are made via SMB, and other shortcomings. Also all files that are created via those two apps will be located on your root disk which is limitated in its size and you won't be able to use SMB with this location. The only Nextcloud storage app that should get used is the `External Storage app` since you can use it to mount your files from external drives into your Nextcloud which is the recommended way to mount files in Nextcloud. 
- You will need a different PC running Windows 7/10 Professional or higher for encrypting and formatting the external drives. (The `Home` edition is not enough)

**If those limitations are nothing you are willing to accept, this guide is unfortunately nothing for you.**

# Index
TODO

# Basic setup

## What are the minimal Hardware requirements?
You will need the following things:
- A X86 PC that will function as your server with:
- At least 2 Cores
- At least 4GB RAM
- One internal SSD with at least 128GB
- Power Supply for your server (if not built-in)
- TPM2 support
- One external SSD (or HDD) that will store your personal data with at least 250GB
- Two additional external HDD's that will function as backup drives with at least the same size of the external personal data SSD each

**Please note: In order to complete this guide, you will need a different PC running Windows 7/10 Professional or higher for encrypting and formatting the external drives. (The `Home` edition is not enough) If you don't have one, this guide is unfortunately nothing for you.**

## Do you have any Hardware recommendations?
Yes! Since your server shall run 24/7, it makes sense to use laptop CPU's and hardware because those are still much more power efficient than any custom-built PC. Perfect because of the size and power for this usecase are Intel NUC's. Recommended are any recent Intel NUC's with 4 or more cores. Click on [this link](https://geizhals.eu/?cat=barepc&v=e&hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu&sort=p&bl1_id=30&xf=15825_4%7E2257_Intel%7E3345_2018#gh_filterbox) to show recommended devices. Of yourse you are free to buy used devices, but again: Intel NUC's are prefered.

After you have chosen your device, you will need to get compatible RAM and Storage for your NUC which depends on the model that you've chosen. So please choose wisely.

#### Recommended is:
- One Intel NUC from 2018 or later with 4 Cores or more
- One SO-DIMM RAM latch with 8GB because 8GB should be enough for now and you will be able to upgrade the RAM with a second latch later on 
- One internal SSD with 250 GB which should be plenty of storage for this usecase
- One external SSD for storing the private data with at least 1TB
- Two external HDD's for backups with at least the same size like the external SSD each

#### Currently (10. Nov. 2020) the recommended configuration which should fit most people is:
- [Intel NUC Kit NUC8i5BEK](https://geizhals.eu/intel-nuc-kit-nuc8i5beh-bean-canyon-boxnuc8i5beh-a1843166.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) = ca. 250€
- [Kingston A2000 NVMe PCIe SSD 250GB, M.2](https://geizhals.eu/kingston-a2000-nvme-pcie-ssd-250gb-sa2000m8-250g-a2112844.html) = ca. 33€
- [G.Skill RipJaws SO-DIMM 8GB, DDR4-2400, CL16](https://geizhals.eu/g-skill-ripjaws-so-dimm-8gb-f4-2400c16s-8grs-a1353098.html) = ca. 30€
- [ADATA SE800 black 1TB](https://geizhals.eu/adata-se800-schwarz-1tb-ase800-1tu32g2-cbk-a2102946.html) = ca. 130€
- [Silicon Power Armor A85 1TB](https://geizhals.eu/silicon-power-armor-a85-1tb-sp010tbphda85s3s-a1358555.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) x2 = ca. 55€ x2 = ca. 110€


## Are there any preparations necessary before I can start?
Yes, please make sure that you have all necessary Hardware requirements and please connect all necessary parts before continuing.

**For Intel NUC's, you need to put one SSD and one RAM latch into the device before continuing**

How to do this in detail depends on the PC that you've chosen to function as your server

## How to configure the BIOS/UEFI?
You will need to configure your BIOS/UEFI in order to harden security and to make things work. The following guide is especially written for Intel Visual Bios which is present on Intel NUC devices. If you use a different device as your server it is possible, that some things are different for you. Since BIOS/UEFI can be visually very different, this guide is only plain text.
1. Connect a the power-cable, monitor, mouse and keyboard to your server
1. Power on your server and open the BIOS/UEFI by pressing `[F2]`
1. Load the `BIOS/UEFI defaults` by pressing `[F9]` and `[ENTER]` to confirm
1. The server should now reboot and you should open the BIOS/UEFI by pressing `[F2]` again
1. Open the Advanced Menu by clicking on the `Advanced` button in the top right corner
1. Set the Fan Control Mode to quiet by clicking on the `Cooling` tab In the `CPU Fan Header` section, select `Fan Control Mode` and choose `Quiet`
1. Set a Supervisor password by clicking on the `Security` tab In the `Passwords` section, click on `Set Supervisor Password` and type in a `password`. Store it at a safe place!
1. Configure your server to boot automatically after a power failure by clicking on the `Power` tab In the `Secondary Power Settings` section, click on `After Power Failure` and choose `Power On`
1. Enable UEFI Boot and disable Legacy Boot by clicking on the `Boot` tab. The `Boot Priority` tab is now automatically selected. In the `UEFI Boot Priority` section, `enable UEFI Boot` and `disable Legacy Boot`
1. Only allow to boot from USB-sticks by clicking on the `Boot Configuration` tab. In the`UEFI Boot` section, disable everything and only `enable Boot Network Devices Last`. In the `Boot Devices` section, disable everything and only `enable USB`
1. Configure Secure Boot by clicking on the `Secure Boot` tab. In the `Secure Boot Config` section, disable everything and only `enable Secure Boot`
1. Now confirm your settings by pressing `[F10]` and `[ENTER]`

The BIOS/UEFI should now be correctly configured.

## How to set up Ubuntu?
You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured.
1. Download the latest Ubuntu Server 20.04.1 LTS image by clicking [here](http://www.releases.ubuntu.com/20.04/ubuntu-20.04.1-live-server-amd64.iso)
1. Use the already downloaded image to create a bootable USB-stick by following [this guide](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows)
1. Connect a LAN-cable to your server
1. Connect the USB-stick to your server and power it on. The server should then automatically boot from the USB-stick
1. **Since it is necessary that you configure certain things correctly, we have prepared a slideshow which makes it easier for you to configure Ubuntu correctly. Please click [here](TODO) to start the slideshow. Otherwise, just continue with the steps below**
1. Select the correct `language` for the installer
1. Choose to `Continue without updating` the installer
1. Select the correct `Keyboard layout`. This is has great importance!
1. Just use the defaults in `network connections`
1. Don't configure any `Proxy address`
1. Use the default `Mirror address`
1. During `Storage configuration`, activate the option to `Encrypt the LVM group with LUKS`, enter a difficult `Passphrase`, confirm it and store it at a safe place. Please note: The installer doesn't check if the passwords are equal so please make sure yourself!
1. Confirm your `Storage configuration`
1. Setup your `Profile`: recommended as `name` and `username` is `ncadmin`. Recommended as `Your server's name` is `nextcloud`. Also type in a password. This can be simple because you will change it later on, again, but remember it! Please note: The installer doesn't check if the passwords are equal so please make sure yourself!
1. Choose to `Install OpenSSH server`
1. Do `not` install any of `Featured Server Snaps`
1. Now wait until Ubuntu is installed and you see the button to `Reboot`. Press it to reboot.
1. You should now remove the Ubuntu USB-stick if not already done and press `[ENTER]` to continue.
1. During the boot process, type in your `LUKS passphares` and press `[Enter]` to confirm
1. Wait until you see `Reached target Cloud-init target.` and press `[ENTER]` to return to the login screen
1. Now type in your `username` (e.g. `ncadmin`) and `pasword`
1. If everything is correct, you will now see an overview of Ubuntu also containing the ip-address of your server at the right side. 

**You will need the ip-address in the next step!**

Theoratically you could now disconnect the monitor, mouse and keyboard again.

## How to connect to your server over SSH?
In order to connect to your server from a different PC in the same network, you should use SSH. You are then able to use copy and paste and more.
1. Open a command prompt on Windows 10 or terminal on Linux
1. Type in `ssh username@ip-address`<br>
One example is: `ssh ncadmin@192.168.178.144`
1. Now type in your CLI Ubuntu user `password`

Please note: If you connect the first time to your server, you will be asked to confirm the server fingerprint which you should do by typing in `yes` and pressing `[ENTER]`

## What is CLI?
CLI means `Command Line Interface`. It is the Interface with which you control your server.

## How to become root user over CLI?
Type in: `sudo -i` and your `password` to become root

## How to set up automatic TPM2 unlocking?
In order to automaticly unlock the encrypted root partition, you need to setup TPM2 unlocking during boot.
1. Connect from a PC in the same network to your server over SSH
1. Copy and paste the following command over CLI: <br>
`wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/tpm2-unlock.sh && sudo bash tpm2-unlock.sh`<br>
1. Enter your `password` again
1. Choose to install TPM2 Unlock
1. Wait until it has configured some small things
1. Type in your `LUKS password` for your root partition
1. Wait until it shows that the setup was successfull and press `[ENTER]` to reboot your server

Now it should unlock the root partition during boot automatically. If not, something has failed.

**Please note: it is not recommended to proceed with this guide, if it doesn't unlock the root partition automatically at this point!**

## How to install Nextcloud?
In order to set up Nextcloud, you should use the scripts from the Nextcloud-VM, since it is the most user-friendly way to setup Nextcloud as far as we know and has many features built-in.
1. Connect from a PC in the same network to your server over SSH
1. Copy and paste the following command over CLI: <br>
`wget https://raw.githubusercontent.com/nextcloud/vm/master/nextcloud_install_production.sh && sudo bash nextcloud_install_production.sh`<br>
1. Enter your `password` again
1. **Since it is necessary that you answer certain questions correctly, we have prepared a slideshow which makes it easier for you to answer all questions correctly. Please click [here](TODO) to start the slideshow. Otherwise, just continue with the steps below**
1. Choose that you `want` to use `LVM snapshots`, since it is a requirements for a good working backup solution and such.
1.  Choose that you `don't` want to use `http://archive.ubuntu.com` as repository for your server since the best one was already set during the Ubuntu installation
1. Select that you `don't` want to make all `free space` available to your root partition since it is always better to have some free space left that can be used for snapshots and such. You are of course free to shrink the free space later manually if needed
1. Choose `1 Disk (Only use one disk /mnt/ncdata - NO ZFS!` since 2 Disks is currently not supported by the backup scripts since it complicates things by a lot and doesn't support disk encryption. Additionally you would need one dedicated disk only for that directory.
1. Choose `Local (DNS on gateway)`, because then you can choose the DNS server in your router in one place for all your devices
1. Deselect any apps that you don't want to install. (It is recommended to `deselect` `IssueTemplate`, `Mail` & `Group-Folders`)
1. Click `OK` to `reboot` your server

Now the initial Nextcloud setup should be done.

## How to startup Nextcloud?
This is the second part of the Nextcloud installation that is prepared by the recently executed Nextcloud-VM script. You will need to run this to the end to be done with the Nextcloud setup.
1. Connect from a PC in the same network to your server over SSH
1. **We have prepared a slideshow for you that you can use. Please click [here](TODO) to start the slideshow. Otherwise, just continue with the steps below**
1. After login, you will be automatically redirected and asked a second time for your password. Enter your `password` and the script will start
1. The first Menu you will see, will let you configure certain `Startup Configurations`. It should automatically choose options for you that are not yet configured, so just press [ENTER] to automatically start those chosen configurations. Most likely only `Timezone (Change the timezone from Etc/UTC` will be pre-selected
1. Change the Timezone to match your location (choose the `Geographic area` and the `Time zone`)
1. Now read carefully through all information that will be presented to you
1. The next Menu will be the `Server Configuration Menu`. Here just `deselect all options`, since you will configure all recommended options later
1. The next Menu will be the `Nextcloud Configuration Menu`. Since no option is necessary for now, here just press [Enter] to continue the setup and skip the Menu.
1. The last Menu will be the `Additional Apps Menu`. Here also `deselect all options`, since you will configure all recommended options later
1. Now `change the password` of your CLI Ubuntu user ncadmin. It should be a difficult password and store it at a safe place.
1. Next `change the username and password` of the `Nextcloud admin user` and store it at a safe place, too.
1. Wait until everything is configured
1. Read through all information that will be presented to you and finally press [ENTER] to reboot your server

Now the Nextcloud configuration should be done. Next, you will configure recommended options.

**Please note: Since the server fingerprint was changed during this script, you will need to reset the server fingerprint the next time you connect to your server via SSH.**

## How to activate Let's Encrypt for your Domain?
In order to access Nextcloud over https with a valid certificate, you will need to do the following things:
1. Get a Domain from a supported DDNS-provider and activate DDNS for your Domain
1. Configure DDclient
1. Enable Port Forwarding
1. Activate TLS

All those points will be covered if you read further.
### What is DDNS?
DDNS stands for Dynamic DNS and will be used in order to be able to run a webserver on your home network. On most home networks you have no static public IP address due to privacy reasons and will need to set up DDNS.
### Which DDNS-providers are currently supported?
Currently (10. Nov. 2020) supported are:
- [Cloudflare](cloudflare.com)
- [deSEC](desec.io)
- [Duck DNS](duckdns.org)
- [Strato](strato.de) (recommended for german users)

### How to activate DDNS for your Domain
For some DDNS-providers like Strato, you will need to activate DDNS for your Domain first before you can use it.
#### Here are some provider specific guides how to do this:
- [Strato](https://www.strato.de/faq/domains/so-einfach-richten-sie-dyndns-fuer-ihre-domains-ein/)

### How to configure DDclient?
DDclient is an easy way to update your domain regularly with your new public ip-address and is the recommended way to set up Dynamic DNS for your server. Please inspect the documents of your DDNS-provider what exactly you need to enter here.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `DDclient Configuration`
1. Choose to install/reinstall DDclient
1. Select your `DDNS-provider` (e.g. `Strato`), enter the `Host/Domain` (e.g. `yourdomain.com`), the `Login/Domain` (e.g. `yourdomain.com`) and the `Password or API-key` (e.g. `your-ddns-password`)
1. Confirm your settings 
1. Make sure that the initial test looks good

### How to enable Port Forwarding?
You will need to port forward some specific ports to your server in order to make it possible to run a public webserver on it.

How to do port forwarding in detail, completely depends on your router. Thus, you should inspect your router's manual for that.
#### Here are some guides for different router models:
- [FRITZ!Box 7590](https://en.avm.de/service/fritzbox/fritzbox-7590/knowledge-base/publication/show/893_Setting-up-static-port-sharing/)
#### You will need to port forward at least the following two ports to your server:
- Port 80 TCP
- Port 443 TCP
#### Alternatively you could activate automatic port forwarding for your server and use UPnP later to open those ports:
- [FRITZ!Box 7590](https://en.avm.de/service/fritzbox/fritzbox-7590/knowledge-base/publication/show/894_Setting-up-automatic-port-sharing/)

### How to activate TLS?
You will now activate TLS finally, if all points above are successfully set up.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Activate TLS`
1. Choose to install TLS
1. Confirm that you have set up all necessary requirements
1. Enter your `Domain` (e.g. `yourdomain.com`)
1. Use UPnP or not depending on if you have enabled automatic port forwarding in your router for your server. If you opened Port 80 and 443 manually, you can skip UPnP
1. Wait until everything is set up

## How to enable automatic updates?
In order to automate as much things as possible, you should enable automatic updates.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Automatic updates`
1. Choose to enable automatic updates
1. Choose to reboot your server after every update as recommended

**The update will be executed on saturdays at 18:00h.**

Please note: the update script will only update to minor Nextcloud versions. If new major Nextcloud version get released, you will need to update your server manually.

## How to enable geoblocking?
In order to improve security, you can allow access to your webserver only from specific countries or continents.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `GeoBlock`
1. Choose to install/reinstall Geoblock
1. Select whatever countries/continents you would like to allow the access to your server. All other will be blocked, based on the ip-address. (At least your own country should get selected to make this work.)

## How to set up SMTP Mail to enable your server to send mails?
In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails.

**Before you can start, please get a mail account that your server will use to send mails.**

For german users is recommended: [mail.de](https://signup.mail.de/de/)

**Please inspect your mail providers documents how to connect over SMTP before continuing!**
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `SMTP Mail`
1. Choose to install/reinstall SMTP Mail
1. Enter the `SMTP URL` (e.g. `smtp.mail.de`)
1. Choose the `encryption protocol` (e.g. `SSL`)
1. Choose that you want to use the `default port` (the default port should be correct most of the time)
1. Most mail servers need credentials, so answer that your mail server `needs credentials`
1. Enter your `SMTP username` (the `mail account` that will be used to send mails e.g. `server@mail.de`)
1. Enter the `password` for your mail account
1. Enter the recipient mail-address that will receive all mails that are sent by the server (e.g. your main mail-address)
1. Confirm your settings

If all settings were entered correctly, you should receive a testmail which proves that it was setup correctly.

## How to set up disk monitoring?
Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up disk monitoring. Please note: this is no alternative to a backup solution!
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Disk Monitoring`
1. Choose to install/reinstall `S.M.A.R.T Monitoring`
1. Choose `Directly` to get informed instantly if a disk error was found

## How to set up Fail2Ban?
In order to block too much failed login attempts for Nextcloud and SSH, you should configure Fail2Ban for your server.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Fail2Ban` -> `Install-Fail2Ban`
1. Choose to install/reinstall Fail2Ban

## How to install the Previewgenerator?
In order to speed up preview loading and the general feel of Nextcloud while opening folders with many pictures, you should set up the previewgenerator, which will pre-generate previews to make preview-loading faster.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `PreviewGenerator`
1. Choose to install/reinstall the Preview Generator
1. Choose to `not` install imagick
1. Deselect any format you don't want to have previews for (Recommended is to deselect `MarkDown` & `TXT`)
1. Wait until everything is set up
1. Choose to `not` use a specific Nextcloud user for preview generation

## How to download the Not-supported Menu?
The Not-supported Menu of the Nextcloud-VM features some exciting new scripts which provide a complete Backup solution, a script to manage a SMB-server and much more.
#### Copy and paste into your CLI:
`sudo wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/not-supported.sh -P /var/scripts`

## How to install ClamAV?
In order to protect your files from malware, you should set up ClamAV which will will detect malware and scan your files weekly for malware. You will get notified if something was found.
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `ClamAV`
1. Choose to install/reinstall ClamAV
1. Wait until it is installed and the service was started
1. Choose to set up a weekly full scan of all your files
1. Choose what shall get done with found files. `Only log` is recommended.

You've successfully made your server a bit more secure!

## How to configure the external data SSD?
The following things are needed for this:
1. Reformat the drive to NTFS, if not already done
1. Encrypt the drive with Bitlocker
1. Copy your private files to the drive if you have any and create a sensible folder structure
1. Mount the external SSD to your server

### How to format the external data SSD?
In order to prepare the SSD for your server, you should first format it to NTFS by doing the following things:<br>
(If it is already NTFS formatted, you can skip the formatting to NTFS)
1. Connect the drive to your Windows 7/10 Professional (or higher) PC
1. Open the File Explorer
1. Click on `This PC`
1. Right-click on your SSD in this overview and select `Format...`
1. Click on `Restore device defaults`
1. Give it a meaningful `Volume designation` like `Data`
1. Click on `Start` to start the formatting which should only take a few seconds

### How to encrypt the external data SSD?
Now encrypt your external SSD using Bitlocker:
(You can also encrypt the drive if already some data is on it)
1. Connect the drive to your Windows 7/10 Professional (or higher) PC
1. Search in Windows for `Bitlocker` which should bring up a control panel option called `Manage Bitlocker` and open it
1. Resize the newly opened window and make it big
1. Below your `C:` drive, in the `Bitlocker To Go` section, you should see the external SSD. Click on `Activate Bitlocker` for this drive
1. Use a difficult password to encrypt the drive and store it at a safe place.
1. Choose to store the `Recovery Code` for your drive `in a file` and select any valid location.
1. Click on `Continue` to proceed with setting up bitlocker
1. Choose `only encrypt used storage`
1. Choose `New encryption mode`
1. Click on `Start encryption` to start the encryption
1. Now wait until the drive is completely encrypted
1. You should store the `Bitlocker Recovery Code` and drive identifier at a safe place and delete the file again
1. After the drive is completely encrypted, eject the drive, disconnect it and connect it again. Then you should see a popup where you can test if the password works and the drive gets correctly decrypted with this password.

Now you can start to copy your private files onto the drive if you have any. 

### How to create a sensible folder structure on the external data SSD?
Recommended is to create the folder structure on the external SSD like this:

Create a folder on the drive that contains all your files. Inside this folder, there will be the user folders and other folders that shall get shared between users in the future. Each user-folder should contain an `Archive, Sync and Backup folder` and you should strictly separate between them. The `Sync` folder should contain files and folders that are used or changed often and thus will get synchronized. `Archive` contains all files and folders that are not needed or changed often. `Backup` will contain folders in which e.g. photos from your smartphone will get automatically uploaded or e.g. you can sync your desktop from your laptop to a folder in the Backup folder.

Here is an example how it could look like:
- external-SSD
    - your files folder
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

### How to mount the external data SSD?
After all private files are successfully copied to the external SSD or at least the folder structure was created, you should mount the drive to your server.
1. Connect the external SSD to your server
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `Bitlocker Mount`
1. Choose to install Bitlocker Mount
1. Wait until everything is installed
1. The drive should get found immediately
1. After it was found, enter your Bitlocker password for that drive
1. You should get the messsage that it is correct
1. Enter the mountpoint where it shall get mounted. Recommended is `/mnt/data`
1. You should now get the message that the mount was succesful

## How to configure the external backup HDD's?
As you might already know, are those two additional external HDD's meant to be backup drives. One will be used as daily Backup drive and one as Off-shore backup drive, which should get stored somewhere else in a safe place outside your home.
You will need to do the following steps:

### How to format the external backup HDD's?
You will now reformat them to NTFS:
1. Connect the drives to your Windows 7/10 Professional (or higher) PC
1. Open the File Explorer
1. Click on `This PC`
1. Right-click on one HDD in this overview and select `Format...`
1. Click on `Restore device defaults`
1. Give it a meaningful `Volume designation` like `Daily Backup`
1. Click on `Start` to start the formatting which should only take a few seconds
1. Right-click on the second HDD in this overview and select `Format...`
1. Click on `Restore device defaults`
1. Give it a meaningful `Volume designation` like `Off-Shore Backup`
1. Click on `Start` to start the formatting which should only take a few seconds
1. Eject both drives

### How to mount the external backup HDD's?
Now that the drives are prepared, you will mount the drives to your sever:
1. Please `don't` connect the drives to your server, yet!
1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `NTFS Mount`
1. Select to `Mount a drive`
1. Press `OK` to start searching for new NTFS drives
1. Now connect one of your backup drives to your server (you have 1 minute)
1. You should get the message that the drive was found
1. Wait until the drive has spin up
1. Choose the NTFS partition that shall get mounted
1. Type in the mountpath that you would like to use. The easiest way is to just type in the recommended mountpath.
1. You should get the message that the mount was successful.
1. When asked if this is a backup drive, select `Yes`!
1. You should see the message now, that the backup drive is ready.

**Now repeat this same procedure with the second drive! Start at point 4!**

## How to set up a daily backup?
Now that everything is prepared, you should set up a daily backup.
1. 

## Offshore Backup Wizard

# Optional

## SMB-server?