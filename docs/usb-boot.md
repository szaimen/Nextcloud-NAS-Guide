---
id: usb-boot
title: How to disable USB-boot?
sidebar_label: Disable USB-boot
---

In order to improve security, you should disable booting from USB devices.

1. Shutdown the server by pressing the `Power button`
1. **Power on** your server and **open the BIOS/UEFI** by pressing `[F2]`
1. **Type in your Supervisor password** to open the BIOS/UEFI (the password that you've set for your BIOS/UEFI)
1. **Open the Advanced Menu** by clicking on the Advanced button in the top right corner
1. **Disable all boot options** by clicking on the `Boot` tab. Now click on the `Boot Configuration` tab below. In the `Boot Devices` section, **disable everything** (also USB devices).
1. Now **confirm your settings** by pressing `[F10]` and `[ENTER]`
1. Your server should reboot and boot automatically.

:::info
Now, you can disconnect the mouse, the keyboard and the display from your server since they are not needed anymore.
:::