---
id: reduce-power-consumption
title: How to reduce the power consumption of your server?
sidebar_label: Reduce power consumption
---
Since your server is running 24/7, power consumption plays a big role for self-hosting because reducing it to a limited amount will also bring down the electricity costs to a minimum.

:::tip
As a rule of thumb: if your server has an IDLE power consumption of `10W`, this produces if it runs 24/7 at a price of `0.25€ per kWh`, costs of `20€` per year. So you can simply double the amount of continusly power consumption to get the costs that are going to be caused.
:::

Here are a few advices regarding reducing the power consumption of your server:
:::info
In order to be able to measure your power consumption, you need to first buy a cheap ammeter like e.g. [this one](https://geizhals.eu/brennenstuhl-primera-line-pm231e-energiekostenmessgeraet-1506600-a945626.html) if you don't have one.
:::
- As initially said, Desktop hardware isn't recommended to be your server because laptop hardware is much more power efficient. So if you - against the recommendation - run the Nextcloud-NAS on a desktop PC, you will be able to reduce the power consumption by switching to laptop hardware like e.g. the recommended Intel NUC by a lot!
- All to your server connected HDDs should get spin down after a few minutes. You can debug this by checking if your HDDs still vibrate after a few minutes in which they don't get accessed. If they don't spin down, you may switch the enclosure of the HDD with a model that does this automatically or you might be able to configure the spin down time with the `hdparm` tool. Here is a guide how you can do this yourself: [click here](https://askubuntu.com/a/39764) (recommended is a spin down time of 5min)
- Make sure that you store your most important data on a SSD and not on a HDD (as recommended by this guide) because it will often get accessed and hence most of the time will be active hence you will want this drive to draw as less Watt as possible. But HDDs are completely well suited as Backup targets and storing unimportant data like e.g. digitalized movies and series.
- If you have bought the recommended NUC, it will feature a Thunderbolt port. As I've found out through testing, just connecting any drive or accessory to this port will raise your IDLE power consumption by around `5W`. Hence it is not recommended to use this port at all (or only use it in certain situation, e.g. for the Off-shore backup drive). If you absolutely need a USB-C port for a device that needs to be connected all the time, I would recommend to buy a USB-A male to USB-C female adapter, instead.
- Don't forget to disconnect any USB device that doesn't need to be connected all the time like e.g. an external Blu-Ray-burner/DVD-burner or e.g. the Off-shore Backup HDD (which should also be stored at a safe place outside your home and only connected once the next Off-shore Backup must be made)