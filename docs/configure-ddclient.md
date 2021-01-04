---
id: configure-ddclient
title: How to configure DDclient?
sidebar_label: Configure DDclient
---

After you've got your domain from a supported provider and activated DDNS for your domain, you should now configure DDclient.

DDclient is an easy way to update your domain regularly with your new public ip-address and is the recommended way to set up Dynamic DNS for your server. Please inspect the documents of your DDNS-provider what exactly you need to enter here.
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `DDclient Configuration`
1. Choose to install/reinstall DDclient
1. Select your **DDNS-provider** (e.g. `Strato`), enter the **Host/Domain** (e.g. `yourdomain.com`), the **Login/Domain** (e.g. `yourdomain.com`) and the **Password or API-key** (e.g. `your-ddns-password`)
1. Confirm your settings 
1. It should now report that the initial DNS update was successful.