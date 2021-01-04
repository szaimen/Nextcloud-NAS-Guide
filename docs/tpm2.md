---
id: tpm2
title: How to set up automatic TPM2 unlocking?
sidebar_label: TPM2 unlocking
---

In order to automatically unlock the encrypted root partition, you need to setup TPM2 unlocking during boot.

The abbreviation `CLI` will be used from now on in this guide (as synonym for controlling your server over SSH) and stands for `Command Line Interface`.

1. Connect from a PC in the same network to your server over SSH (if not already done)
1. Copy and paste the following command over `CLI`:<br/>
`wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/tpm2-unlock.sh && sudo bash tpm2-unlock.sh`<br/>
(**Hint**: On Windows 10, pasting works by pressing the right mouse-key)
1. Enter your **password** again
1. Choose to install TPM2 Unlock
1. Wait until it has configured some small things
1. Type in your **LUKS password** for your root partition
1. Wait until it shows that the setup was successfull and press `[ENTER]` to reboot your server

Now it should unlock the root partition during boot automatically (so that you don't have to enter the LUKS passphrase). If not, something has failed.

**Please note: it is not recommended to proceed with this guide, if it doesn't unlock the root partition automatically at this point!**