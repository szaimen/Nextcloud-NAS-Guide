---
id: harden-ssh
title: How to harden the SSH configuration?
sidebar_label: Harden SSH
---
Although you don't port-forward SSH to the public internet (if you've followed this guide), which is BTW also really not recommended, you should nonetheless harden your SSH configuration to make SSH access for an attacker (e.g. from inside your home network) as hard as possible. 

Here is how to do this:
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Harden SSH`
1. Choose to install/reinstall Harden SSH
1. It should report now that SSH was successfully hardened
1. :::note optional 2FA SSH authentication
    If you have a smartphone with an OTP app like Google Authenticator or password manager like Keepass or Bitwarden, you can now choose to enable two-factor authentication for SSH connections. It is optional since you might will be no longer able to connect via SSH to your server if something goes wrong here.
    1. Choose `Yes` now to **enable Two-factor authentication for SSH connections**
    1. Scan the shown QR code with the OTP app and note down the emergency codes
    1. Confirm that you've saved them
    
    Now, the next time you connect to your server via SSH, you will get asked for the OTP code which makes SSH much more secure.
    :::
    :::caution
    You will loose access to your server via SSH if you don't scan the QR code or note down the emergency codes. <br/>
    You can simply disable the 2FA authentication for SSH by running this script again.
    :::

---

:::tip
If you want to make SSH as secure as possible, you can also use SSH-keys to access your server. Here is a good guide how to configure this: [click here](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04)
:::