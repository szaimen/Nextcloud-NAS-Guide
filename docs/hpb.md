---
id: hpb
title: How to install the High-Performance backend for Nextcloud Talk?
sidebar_label: High-Performance backend for Nextcloud Talk
---

In order to be able to make bigger videocalls in Nextcloud Talk and to reduce the load on paticipating clients, you should install the High-Performance backend for Nextcloud Talk.

#### Preparation
1. Create a subdomain like `talk.yourdomain.com` and edit the DNS settings for this subdomain to point to your Nextcloud Domain. ([instructions](#how-to-create-a-subdomain-and-point-with-cname-to-your-nextcloud-domain))
1. Port-forward port 3478 TCP and 3478 UDP to your server ([instructions](#how-to-enable-port-forwarding))

#### Installation
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `Talk`
1. Choose to install `Nextcloud Talk`
1. Use the standard port 3478 (don't choose to change the port)
1. Wait until coturn is installed
1. **Don't** use `UPNP` to open the required port since you've already done this manually
1.  Wait until spreed (old name for Nextcloud Talk) is installed
1. Choose to install the `Talk Signaling Server`
1. Type in the subdomain that you've created and that points to your Nextcloud domain (e.g. `talk.yourdomain.com`)
1. **Don't** use `UPNP` to open the required ports (since you've already done this for your Nextcloud)
1. Wait until everything is installed and it reports that everything is working as intended.

Now you should be able to make videocalls in Nextcloud Talk with a lot of people and the load on paticipating clients should be reduced!