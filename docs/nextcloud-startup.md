---
id: nextcloud-startup
title: How to run the Nextcloud startup script?
sidebar_label: Nextcloud startup
---

This is the second part of the Nextcloud installation that is prepared by the recently executed Nextcloud-VM script. 


You will need to run this to the end to be done with the Nextcloud setup.
1. Connect from a PC in the same network to your server over SSH
1. **We have prepared a slideshow for you that you can use. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-startup) to start the slideshow. Otherwise, just continue with the steps below**
1. After login, you will be automatically redirected and asked a second time for your password. Enter your **password** and the script will start
1. The first Menu you will see, will let you configure certain **Startup Configurations**. It should automatically choose options for you that are not yet configured, so just press `[ENTER]` to automatically start those chosen configurations. Most likely only **Timezone (Change the timezone from Etc/UTC** will be pre-selected
1. Change the Timezone to match your location (choose the **Geographic area** and the **Time zone**)
1. Now read carefully through all information that will be presented to you (those are just a few popups until you see the next Menu)
1. The next Menu will be the **Server Configuration Menu**. Here just **deselect all options**, since you will configure all recommended options later
1. The next Menu will be the **Nextcloud Configuration Menu**. Since no option is necessary for now, here just press `[Enter]` to continue the setup and skip the Menu.
1. The last Menu will be the **Additional Apps Menu**. Here also **deselect all options**, since you will configure all recommended options later
1. Now **change the password** of your CLI Ubuntu user ncadmin. It should be a difficult password and store it at a safe place.<br/>
(Difficult password means at least 16 characters long, containing small and tall letters, digits and special characters)
1. Next **change the username and password** of the **Nextcloud admin user** and store it at a safe place, too. This password should be difficult, too.
1. Wait until everything is configured
1. Read through all information that will be presented to you and finally press `[ENTER]` to reboot your server

Now the Nextcloud configuration should be done. Next, you will configure recommended options.

**Please note: Since the server fingerprint was changed during this script, you will need to reset the server fingerprint the next time you connect to your server via SSH.**
To do that, just type in your Console/Terminal on your client PC: `ssh-keygen -R ip-address` so e.g. `ssh-keygen -R 192.168.178.144`