---
id: bios-uefi
title: How to configure the BIOS/UEFI?
sidebar_label: BIOS/UEFI
---

You will need to configure your BIOS/UEFI in order to harden security and to make things work. 

:::info
The following guide is especially written for Intel Visual Bios which is present on Intel NUC devices. If you use a different device as your server it is possible, that some things are different for you. Since BIOS/UEFI can be visually very different, this guide is only plain text.
:::
1. **Connect** the power-cable, HDMI-display, USB-mouse and -keyboard to your server
1. **Power on** your server and **open the BIOS/UEFI** by pressing `[F2]`
1. **Load the BIOS/UEFI defaults** by pressing `[F9]` and `[ENTER]` to confirm
1. **Now open the Advanced Menu** by clicking on the Advanced button in the top right corner
1. **Set the Fan Control Mode to quiet** by clicking on the `Cooling` tab. In the `CPU Fan Header` section, select `Fan Control Mode` and choose **Quiet** (this will make the server operate as quiet as possible)
1. **Set a Supervisor password** by clicking on the `Security` tab. In the `Passwords` section, click on `Set Supervisor Password` and type in a **password**. Store it at a safe place! (The password should be random, at least 8 characters long and no special characters needed)
1. Configure your server to **boot automatically after a power failure** by clicking on the `Power` tab. In the `Secondary Power Settings` section, click on `After Power Failure` and choose **Power On**
1. **Enable UEFI Boot** and **disable Legacy Boot** by clicking on the `Boot` tab. The `Boot Priority` tab is now automatically selected. In the `UEFI Boot Priority` section, **enable UEFI Boot** and **disable Legacy Boot**
1. Only allow to **boot from USB-sticks** by clicking on the `Boot Configuration` tab. In the `UEFI Boot` section, disable everything and **only enable Boot Network Devices Last**. In the `Boot Devices` section, disable everything and **only enable USB**
1. **Configure Secure Boot** by clicking on the `Secure Boot` tab. In the `Secure Boot Config` section, disable everything and **only enable Secure Boot** (`Install Intel Platform Key` might not deactivatable)
1. Now **confirm your settings** by pressing `[F10]` and `[ENTER]`
1. Your server might start now automatically, **press the power button** to shut it down again.

The BIOS/UEFI should now be correctly configured.