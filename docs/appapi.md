---
id: appapi
title: How to configure AppAPI for Nextcloud?
sidebar_label: AppAPI
---

`AppAPI` is the framework that allows Nextcloud to run **External Apps** (ExApps). Unlike normal Nextcloud apps, which are written in PHP and run inside your Nextcloud installation, External Apps run in their own Docker containers next to Nextcloud. This is how most of the Nextcloud AI features are shipped, e.g. the local Whisper speech-to-text, the local large language model for Nextcloud Assistant, the context chat and the translation apps.

In order to install such an app from the Nextcloud app store, Nextcloud needs a so-called **Deploy Daemon**: the component that is allowed to start, stop and talk to those containers. The `AppAPI` script configures exactly that for you.

:::caution
External Apps - especially the AI apps - are quite demanding. Each app runs in its own container and many of the AI apps need several GB of RAM and a lot of CPU time. On a typical home server without a dedicated GPU, they will run, but slowly. Only install AppAPI if you actually plan to use External Apps.
:::

:::info
`AppAPI` is enabled by default in Nextcloud. If you do **not** select AppAPI during the initial Nextcloud Startup Script, the app gets disabled automatically, so that it does not show up and confuse you. You can always run the script again later to enable and configure it.
:::

### Preparations
1. Your server should have some free disk space for the Docker images of the External Apps. Depending on the apps, these can easily be several GB each.
1. You need **Nextcloud 32 or later** and a publicly reachable domain with valid certificates, because this is what the recommended `HaRP` deployment method requires. If you have not activated Let's Encrypt yet, follow these instructions: [click here](./activate-lets-encrypt)
1. If you are on an older Nextcloud version, update to the latest major version first by following these instructions: [click here](./major-update)

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Nextcloud Configuration` -> `AppAPI`
1. Choose to install/reinstall AppAPI
1. If Docker is not installed on your server yet, confirm that it should get installed now
1. Choose `HaRP` as deployment method
1. Confirm the summary that gets shown
1. When asked if you want to test the Deploy Daemon, choose `yes` (recommended). The test downloads a small test app, starts it, checks the communication with Nextcloud and removes it again afterwards. The first run can take 1-2 minutes because the Docker image needs to be downloaded.
1. Wait until it reports that AppAPI was successfully configured

Now you should be able to install External Apps in your Nextcloud in `Settings` -> `Apps` -> `External Apps`.

### Why HaRP?
The script offers two deployment methods, but only one of them should be used: **`HaRP`**.

`HaRP` (HaProxy Reverse Proxy) is the current method and the one that Nextcloud recommends. An additional container gets started that sits between Nextcloud, your browser and the External Apps.

- Best performance, since the traffic does not have to be routed through Nextcloud itself
- Direct communication between your browser and the External Apps
- Brings its own brute-force protection
- The Apache webserver of your server gets configured to forward the `/exapps/` address to the HaRP container
- Needs **Nextcloud 32 or later** and a public domain with a valid certificate

:::caution
The second option, `Docker Socket`, is deprecated. Please choose `HaRP` instead.
:::

### Remove AppAPI
If you don't want to use External Apps anymore, you can remove everything again:
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Nextcloud Configuration` -> `AppAPI`
1. Choose to **remove** AppAPI
1. Wait until it reports that it was successfully removed

This unregisters all Deploy Daemons, removes all External Apps including their containers and data, removes the HaRP container and its Apache configuration, removes `www-data` from the docker group again and disables the AppAPI app.

:::note notes
- A GPU gets detected automatically. If an NVIDIA GPU with `CUDA` or an AMD GPU with `ROCm` is available, the Deploy Daemon gets configured to use it, otherwise the CPU is used. This makes a huge difference for the AI apps.
- The `nextcloud_occ` command is available as root user. You can list your Deploy Daemons and External Apps like this:
    ```shell
    sudo -i
    nextcloud_occ app_api:daemon:list
    nextcloud_occ app_api:app:list
    exit
    ```
- You can check the HaRP container with `sudo docker logs appapi-harp` and restart it with `sudo docker restart appapi-harp`
- You can run the deploy test again at any time from the 3-dot menu in the AppAPI admin settings
- External Apps are **not** part of the daily backup. After restoring a backup you need to configure AppAPI and reinstall your External Apps again.
- The official Nextcloud documentation about External Apps can be found here: [click here](https://docs.nextcloud.com/server/latest/admin_manual/exapps_management/)
:::
