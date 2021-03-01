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

### Advices what to do now
- It is recommended to activate 2-factor autentification for all Nextcloud accounts to further secure them. Here is a guide how to do that: [klick here](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/two_factor-auth.html)