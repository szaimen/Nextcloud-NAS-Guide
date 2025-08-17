---
id: configure-ddclient
title: How to configure DDclient?
sidebar_label: Configure DDclient
---
:::warning
Unfortunately, the script currently does not work. See https://github.com/nextcloud/vm/issues/2754. Until the script is fixed, it is recommended to set up ddclient in your router. See https://www.strato.de/faq/hosting/so-einfach-richten-sie-dyndns-fuer-ihre-domains-ein/#wie-richte-ich-dyndns-in-meiner-avm-fritzbox-ein for example.
:::

After you've got your domain from a supported provider and activated DDNS for your domain, you should now configure DDclient. DDclient is an easy way to update your domain regularly with your new public ip-address and is the recommended way to set up Dynamic DNS for your server. 
:::info Caution!
Please inspect the documents of your DDNS-provider what exactly you need to enter here. For Strato, the example below should work.
:::
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `DDclient Configuration`
1. Choose to install/reinstall DDclient
1. Select your **DDNS-provider** (e.g. `Strato`), enter the **Host/Domain** (e.g. `yourdomain.com`), the **Login/Domain** (e.g. `yourdomain.com`) and the **Password or API-key** (e.g. `your-ddns-password`)
1. Confirm your settings 
1. It should now report that the initial DNS update was successful.