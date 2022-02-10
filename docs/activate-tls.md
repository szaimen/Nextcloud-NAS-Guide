---
id: activate-tls
title: How to activate TLS?
sidebar_label: Activate TLS
---

You will now activate TLS finally, if all points above are successfully set up. TLS is the protocol that encrypts all traffic to and from your Nextcloud.

1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `Activate TLS`
1. Choose to install TLS
1. Confirm that you have set up all necessary requirements
1. Enter your **Domain** (e.g. `yourdomain.com`)
1. Since you've opened Port 80 and 443 manually, you should skip `UPnP` (automatic port forwarding)
1. Wait until everything is set up and enter your mail-address during this step (Your mail-address is needed for contacting you, if a certificate expires)

**Now you should be able to access your Nextcloud on any device by opening `yourdomain.com`!**

:::info Advices what to do now
It is recommended to activate Two-Factor Authentication for all Nextcloud accounts to further secure them.
1. Install a 2FA provider app from the app store by opening to `https://yourdomain.com/settings/apps/security` with the admin account and searching for `two-factor` by pressing `[CTRL] + [F]` on that site and installing a provider that fits your needs. Recommended is the `Two-Factor TOTP Provider` app.
1. Log in with all Nextcloud accounts in a browser (this will run some initial scripts for the account setup)
1. Open `https://yourdomain.com/settings/user/security` with all Nextcloud accounts and activate `Two-Factor Authentication` with your installed 2FA provider. E.g. by activating `TOTP`. And don't forget to generate backup codes for all accounts! (**Pro-tip**: you can safe the backupcodes and the TOTP secret in your password manager if you don't want to install an additional app. Otherwise you should note them down manually at a safe place.)
:::
