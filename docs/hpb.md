---
id: hpb
title: How to install the High-Performance backend for Nextcloud Talk and Talk Recording?
sidebar_label: High-Performance backend & Talk Recording
---

In order to be able to make bigger videocalls in Nextcloud Talk and to reduce the load on paticipating clients, you should install the High-Performance backend for Nextcloud Talk.

Additionally, you will be offered to install `Talk Recording` at the end of the installation. It lets you record your calls and meetings directly from within Nextcloud Talk so that participants who couldn't attend can watch them afterwards. The recordings are saved into the Nextcloud of the user who started the recording.

### Preparation
1. Create a subdomain like `talk.yourdomain.com` and edit the DNS settings for this subdomain to point to your Nextcloud Domain. ([instructions](./subdomain-cname))
1. Port-forward port 3478 TCP and 3478 UDP to your server ([instructions](./port-forwarding))
1. If you want to install `Talk Recording` as well, your server needs to have at least **4 GB RAM** and **4 CPU cores** and you need to run at least **Nextcloud 26**. ([instructions](./major-update))

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Additional Apps` -> `Talk`
1. Choose to install `Nextcloud Talk`
1. Use the standard port 3478 (don't choose to change the port)
1. Wait until coturn is installed
1. **Don't** use `UPNP` to open the required port since you've already done this manually
1.  Wait until spreed (old name for Nextcloud Talk) is installed
1. Choose to install the `Talk Signaling Server`
1. Type in the subdomain that you've created and that points to your Nextcloud domain (e.g. `talk.yourdomain.com`)
1. **Don't** use `UPNP` to open the required ports (since you've already done this for your Nextcloud)
1. Wait until it reports that the Talk Signaling installation succeeded
1. Choose whether you want to install `Talk Recording` to be able to record your calls
1. Wait until everything is installed and it reports that everything is working as intended.

Now you should be able to make videocalls in Nextcloud Talk with a lot of people and the load on paticipating clients should be reduced!

### What to do now?
If you've installed `Talk Recording`, you can start a recording of a call by clicking on the `three dots` in the top right corner of a call and choosing `Start recording`. After you stopped the recording, the video file gets uploaded into the Nextcloud of the user that started the recording and can be shared to the other participants from there.

:::note notes
- `Talk Recording` runs in a Docker container that only listens on `127.0.0.1:1234` and is therefore not reachable from outside your server
- Recording a call is pretty resource intensive since the call needs to be rendered in a browser on your server. So don't record too many calls at the same time
- If you uninstall Nextcloud Talk, the `Talk Recording` container gets removed automatically as well
:::
