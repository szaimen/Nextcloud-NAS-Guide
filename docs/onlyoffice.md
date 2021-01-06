---
id: onlyoffice
title: How to install OnlyOffice Documentserver?
sidebar_label: OnlyOffice
---

OnlyOffice Documentserver is a Nextcloud integration that features real-time CO-editing of Office files in your Nextcloud in the Browser. Although Collabora Online is also an option, OnlyOffice is recommended because it features a UI similar to Microsoft Office and has better compatibility with Microsoft Office files. It also doesn't need as much ressources as Collabora Online.

### Preparation
1. Create a subdomain like `office.yourdomain.com` and edit the DNS settings for this subdomain to point to your Nextcloud Domain. ([instructions](./subdomain-cname))

### Installation
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `Documentserver` -> `OnlyOffice (Docker)`
1. Choose to install `OnlyOffice (Docker)`
1. Type in the **subdomain** that you've created and that points to your Nextcloud domain like `office.yourdomain.com` and confirm it
1. **Don't** use `UPNP` to open the required ports (since you've already done this for your Nextcloud)
1. Wait until everything is installed and it reports a successful installation

Now, you should be able to create, open and edit Office files in Nextcloud in the Browser using OnlyOffice!

:::info
You should open `https://yourdomain.com/settings/admin/onlyoffice` with your Nextcloud admin account to adjust some OnlyOffice settings. E.g. it is recommended to enable the option to `Keep intermediate versions when editing` but also you can choose to make OnlyOffice the default for many file extensions and more.
:::