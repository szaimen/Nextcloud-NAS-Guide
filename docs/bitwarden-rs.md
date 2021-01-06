---
id: bitwarden-rs
title: How to install Bitwarden RS?
sidebar_label: Bitwarden RS
---

Bitwarden RS is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Bitwarden RS. Installing Bitwarden RS enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform.

### Preparation
1. Create a subdomain like `bw.yourdomain.com` and edit the DNS settings for this subdomain to point to your Nextcloud Domain. ([instructions](./subdomain-cname))

### Installation
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `Bitwarden` -> `Bitwarden-RS`
1. Choose to install `Bitwarden RS`
1. Accept the risks and confirm that if you are sure to install `Bitwarden RS`
1. Type in the **subdomain** that you've created and that points to your Nextcloud domain like `bw.yourdomain.com` and confirm it
1. **Don't** use `UPNP` to open the required ports (since you've already done this for your Nextcloud)
1. Wait until everything is installed
1. **Note down** the password for the admin panel that gets shown to you
1. Confirm that you have the admin password now.

Bitwarden RS should be successfully installed by now.

### What to do now?
- You should now visit `https://bw.yourdomain.com/admin` to set up the **SMTP settings** for Bitwarden RS (so that Bitwarden can send mails, too.)
- When you've successfully configured the SMTP settings, you should visit `https://bw.yourdomain.com/admin/users/overview` to invite a new user via mail-address. And you will be able to create an account using the link that was send to you.
- After you are done creating all needed accounts, you should disable the admin panel (to make it impossible for an attacker to log into the admin panel):
    - Run `sudo bash /var/scripts/menu.sh` over CLI
    - Choose `Additional Apps` -> `Bitwarden` -> `Bitwarden-RS Admin-panel`
    - Choose `Yes (Disable the admin-panel)`
    - Wait until it reports that the admin panel was disabled
- After creating the Bitwarden accounts, you should activate two-factor authentication by visiting `https://bw.yourdomain.com/#/settings/two-factor` with each account.

Now, Bitwarden RS is finally ready and secured as good as possible!