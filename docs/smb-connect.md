---
id: smb-connect
title: How to connect to your SMB-server?
sidebar_label: Connect via SMB
---

If you've followed this guide and have set up a SMB-users and -shares, you will be able to connect to your server using SMB. Here is how to do this in detail.

:::note
It is important that you've created at least one SMB-user and at least one SMB-share. Otherwise you won't be able to connect to your server via SMB!
:::

### On Windows:
1. Open **Windows Explorer** (e.g. by pressing `[WIN] + [E]`)
2. Select the **address bar** (e.g. by pressing `[ALT] + [E]`)
3. Type in `\\nextcloud` and press `[ENTER]`<br/>
(if that doesn't work, type in the internal IPv4-address of your server, instead. E.g. `\\192.168.178.144`. Another option is to use the domain of your Nextcloud. E.g. yourdomain.com (works only when you installed pi-hole and set a local dns record that points to the internal ip-address of your server.))
4. Now a **credentials popup** should open and you should **type in** the credentials of a specific SMB-user that you've created [here](./create-users)
5. If the authentication is successful, you should see now the SMB-shares that specific SMB-user has access to and you should be able to access your files over SMB.