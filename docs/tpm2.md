---
id: tpm2
title: How to set up automatic TPM2 unlocking and secure your GRUB (bootloader)?
sidebar_label: TPM2 unlocking & Secure GRUB
---

In order to automatically unlock the encrypted root partition, you need to set up TPM2 unlocking during boot. Additionally, you will secure your GRUB (bootloader) with a password.

:::note
The abbreviation `CLI` will be used from now on in this guide (as synonym for controlling your server over SSH) and stands for `Command Line Interface`.
:::

1. Connect from a PC in the same network to your server over SSH (if not already done)
1. Copy and paste the following command over `CLI`:
    ```shell
    wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/tpm2-unlock.sh \
    && sudo bash tpm2-unlock.sh
    ```
    (**Hint**: On Windows 10, pasting works by pressing the right mouse-key)
1. Enter your **password** again
1. Choose to install TPM2 Unlock
1. Wait until it has configured some small things
1. Type in your **LUKS password** for your root partition
1. Wait a while until it shows the next popup
1. Now enter a **new password** for GRUB (bootloader) and store it at a safe place.<br/>
(The password should be random, at least 8 characters long and no special characters needed)
1. Wait until it shows that the setup was successfull and press `[ENTER]` to reboot your server

Now it should unlock the root partition during boot automatically (so that you don't have to enter the LUKS passphrase). If not, something has failed.

:::caution Please note! 
**It is not recommended to proceed with this guide, if it doesn't unlock the root partition automatically at this point!**<br/>
(This is the case, if it asks you after the reboot for the Ubuntu login credentials and not for the LUKS password.)
:::