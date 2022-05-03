---
id: ubuntu
title: How to set up Ubuntu Server?
sidebar_label: Ubuntu Server
---

You need an OS for you server and we've chosen the latest Ubuntu Server LTS release for you. Here is how it should get installed and configured.

1. **Download** the latest Ubuntu Server 22.04 LTS image by clicking [here](https://releases.ubuntu.com/jammy/ubuntu-22.04-live-server-amd64.iso) (this might take 30min because of slow download servers)
1. Use the already downloaded image to create a bootable USB-stick by following [this guide](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows) (the guide is for Windows, but guides for macOS and Ubuntu are referenced there)
1. Connect a **LAN-cable** to your server
1. Connect the **USB-stick** to your server and **power the server on**. The server should then automatically boot from the USB-stick. If it doesn't, press `[F10]` which should open the Boot menu on Intel NUCs. (And type in the password again).
1. **Since it is necessary that you configure certain things correctly, we have prepared a slideshow which makes it easier for you to configure Ubuntu correctly. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/ubuntu) to start the slideshow. Otherwise, just continue with the steps below**
1. Select the correct **language** for the installer
1. Select the correct **Keyboard layout**. This is has great importance!
1. Just use the defaults in **network connections**
1. Don't configure any **Proxy address**
1. Use the default **Mirror address**
1. During **Storage configuration**, activate the option to **Encrypt the LVM group with LUKS**, enter a difficult **Passphrase**, confirm it and store it at a safe place.<br/>
(Difficult passphrase means at least 16 characters long, containing small and tall letters, digits and special characters)<br/>
(**Please note**: The installer doesn't check if the passwords are equal so please make sure yourself. Alsoy you should only use a password with characters that are the same on a `QWERTY` keyboard layout because of a bug in Ubuntu. Here is a link to one: [click here](https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg))
1. Confirm your **Storage configuration**
1. Set up your **Profile**: recommended as **name** and **username** is `ncadmin`. Recommended as **Your server's name** is `nextcloud`. Also type in a **password**. This can be simple because you will change it later on, again, but remember it! Please note: The installer doesn't check if the passwords are equal so please make sure yourself!
1. Choose to **Install OpenSSH server**
1. Do **not** install any of **Featured Server Snaps**
1. Now wait until Ubuntu is installed and you see the button to **Reboot**. Press it to reboot.
1. You should now remove the Ubuntu USB-stick if not already done and press `[ENTER]` to continue.
1. During the boot process, type in your **LUKS passphrase** and press `[Enter]` to confirm.<br/>
(If it doesn't accept your **LUKS passphrase** and you are sure that you enterd it correctly, most likely you experienced an Ubuntu bug. In this case, try to enter your password as if you had an `QWERTY` keyboard. Here is one example [click here](https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg)<br/>
Additionally, please make sure, that `Capslock` isn't activated.)
1. Now type in your **username** (e.g. `ncadmin`) and **pasword**
1. If everything is correct, you will now see an overview of Ubuntu also containing the IPv4-address of your server.

:::note
**You will need the ip-address in the next step!**
:::