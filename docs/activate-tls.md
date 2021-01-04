---
id: activate-tls
title: How to activate TLS?
sidebar_label: Activate TLS
---

You will now activate TLS finally, if all points above are successfully set up. TLS is the protocol that encrypts all traffic to and from your Nextcloud.

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `Activate TLS`
1. Choose to install TLS
1. Confirm that you have set up all necessary requirements
1. Enter your **Domain** (e.g. `yourdomain.com`)
1. Since you've opened Port 80 and 443 manually, you should skip `UPnP` (automatic port forwarding)
1. Wait until everything is set up and enter your mail-address during this step (Your mail-address is needed for contacting you, if a certificate expires)

**Now you should be able to access your Nextcloud on any device by opening `yourdomain.com`!**

#### Advices what to do now: 
- You should first visit `yourdomain.com/settings/user` with your admin user and fill in the mail-address that shall receive all admin mails into the `Email` input field.
- Next, you should visit `yourdomain.com/settings/admin` and enable Nextcloud to send mails by filling in the mail-account settings that you've used [here](#how-to-set-up-smtp-mail-to-enable-your-server-to-send-mails)
(Here is the official documentation on this: [click here](https://docs.nextcloud.com/server/20/admin_manual/configuration_server/email_configuration.html))
- Afterwards, it is recommended to activate 2-factor autentification for all Nextcloud accounts to further secure them. Here is a guide how to do that: [klick here](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/two_factor-auth.html)