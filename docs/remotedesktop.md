---
id: remotedesktop
title: How to install Remotedesktop?
sidebar_label: Remotedesktop
---

Remotedesktop allows you to connect to a graphical UI hosted on your server.<br/>
It allows to use graphical tools directly on your server like viewing files from the backup and also restoring them by copy and paste and more.

1. Run over CLI:
    ```shell
    sudo bash /var/scripts/not-supported.sh
    ```
1. Choose `Remotedesktop`
1. Choose to install Remotedesktop
1. Choose to install the `Gnome Desktop`
1. Wait until everything is installed
1. Now, you should see a menu with available recommended programs. Just press `[ENTER]` to **install all** of them.
1. Wait until everything is installed (you need to confirm that you want to install `MakeMKV` and `OnlyOffice` manually)
1. At last, you should get asked if you want to **reboot** your server and press `[ENTER]` to do so.

:::tip
Here is how to connect you your server via RDP: [instructions](./rdp-connect)
:::

:::note audio output
Currently is audio output via RDP not supported!<br/>
Because of that VLC will constantly show errors when you open a movie in a Remotedesktop session. You can disable those error messages by opening the VLC preferences (press `[CTRL] + [P]` in VLC), click on the Audio tab and **disable** the option `Enable Audio`. After restarting VLC, the issue should be gone.
:::
:::info pdf files
You can use OnlyOffice in the Remotedesktop session to view PDF files. So just select OnlyOffice to open PDF files if it should mistakenly report that no program is installed to open PDF files!
:::
