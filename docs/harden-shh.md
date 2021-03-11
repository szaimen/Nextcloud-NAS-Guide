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

:::tip
If you want to make SSH as secure as possible, you can also use SSH-keys to access your server. Here is a good guide how to configure this: [click here](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04)
:::