---
id: rdp-connect
title: How to connect via Remotedesktop to your server?
sidebar_label: Connect via Remotedesktop
---

After you've [installed Remotedesktop](./remotedesktop), you should be able to connect to your server via RDP.<br/>
Here is how to do this in detail.

:::tip
After you've configured the Remotedesktop Client the first time, you most likely only need to open the Remotedesktop Client and choose to connect to your server (since everything else is already configured).
:::

### On Windows:
1. Open the **Remotedesktop Client** on your PC in the same network as your server <br/>
(search for `msct` and it will find the correct program.)
2. Type in the IPv4-address of your server (e.g. `192.168.178.144`) <br/>
(Don't press `[ENTER]` or click on `connect`, yet!)
4. Click on `options` to expand and see all available options
5. **Enable** the option:  `Allow me to save credentials`
6. Type in `ncadmin` as `User name` 
7. Now click on `connect`. 
8. It should open a **credential popup** now, where you should **enter your password**<br/>
(It should be the password of your Ubuntu user `ncadmin`).
9. Now press `[ENTER]` or click on `OK` to save your credentials
10. You will see now a popup with a **certificate warning**: Tick the option that it doesn't show the warning to you in the future. And select `Yes` that you want to connect to this PC.
11. Now you should finally see the internal RDP session of your server!

:::note
When enabling the option to store the password of your Ubuntu user ncadmin on your Client PC, you should make sure that your Client PC has an encrypted system drive (e.g. by enabling Bitlocker) and that the user account on your Client PC has a strong password!
:::