---
id: digitize
title: How to digitize Blu-rays, DVDs and CDs?
sidebar_label: Digitize Blu-rays, DVDs & CDs
---

## Digitize Blu-rays and DVDs
If you want to digitize Blu-rays and DVDs, you should follow those instructions. If you only want to digitize CDs, there is an extra section below.

### Preparations
The Preparations are only needed if not already done:
1. Buy an internal Blu-ray-burner [like those](https://geizhals.eu/?cat=dvdram&xf=1038_LG~5011_1~9514_Blu-Ray-Brenner&sort=p&hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu&v=e) and a Sata to USB adapter [like this one](https://geizhals.eu/424211512)
1. Buy an additional HDD that will only be used for Movies/TV-Shows. Recommended are big, cheap external drives [like those](https://geizhals.eu/?cat=hdx&xf=339_3.5%22~8330_USB-B+3~943_1&asuch=&bpmin=&bpmax=&v=e&dist=&sort=r&bl1_id=30) (**Please make sure** yourself that the drive enclosure allows the included HDD to spin down after a few minutes. Otherwise will your power draw rise by a lot since the HDD is always powered on.)
1. Mount the HDD to your server ([instructions](./mount-hdd))
1. Install Remotedesktop ([instructions](./remotedesktop))

### Execution
1. Insert a Blu-ray/DVD into the Blu-ray-burner and connect it with the adapter to your server
1. Connect to your server via RDP ([instructions](./rdp-connect))
1. Open `MakeMKV`
1. The program should automatically detect the Blu-ray/DVD that you've inserted
1. **Analyze** the drive
1. **Select all tracks** that you want to digitize
1. As **output directory**, make sure that you select a directory on your just mounted additional HDD. It should be somewhere in a subdirectory of `/mnt` (Please make sure not to select your with Veracrypt encrypted external data SSD/HDD since your free space on this drive will become full very fast and you don't want to backup movies and tv-shows.)
1. **Start** the digitalizing if everything is correct
1. **Rename** the digitized file(s) based on PLEX's naming scheme for [movies](https://support.plex.tv/articles/naming-and-organizing-your-movie-media-files/) or [tv-shows](https://support.plex.tv/articles/naming-and-organizing-your-tv-show-files/)

Now, your Blu-ray/DVD should be digitized.

:::caution
If on the DVD/Blu-ray have been family videos or photos or something else that is personally important to you, you should definitiely save this to your with Veracrypt encrypted external data SSD/HDD so that it is stored encrypted and gets backed up. 
:::

:::note
Also **don't sell and don't give away** the Blu-rays/DVDs after digitalizing, because you could need them again in the future, e.g. if the HDD that stores the Movies/TV-Shows fails before you are able to copy all files to a new HDD and you need to redigitize all Blu-rays/DVDs because you don't want to pay for data-recovery. But you could of course store them in a `moving box` in your basement.
:::

## Digitize CDs

### Preparations
The Preparations are only needed if not already done:
1. Buy an external DVD-burner [like those](https://geizhals.eu/?cat=dvdramext&xf=569_8%7E9514_DVD-Brenner) (If you haven't already bought the Blu-ray-burner following the instructions above)
1. Install Remotedesktop ([instructions](./remotedesktop))

### Execution
1. Insert a CD into the DVD-burner/Blu-ray-burner and connect it to your server
1. Connect to your server via RDP ([instructions](./rdp-connect))
1. Open `Sound Juicer`
1. The program should automatically detect the CD that you've inserted
1. As **output format** you should select `FLAC` which is the best format for digitalizing CDs losless
1. As **output directory** select any directory on your with Veracrypt encrypted external data SSD/HDD which is most likely mounted here: `/mnt/data` so that the digitized data gets backed up correctly
1. Now **start** the digitalizing if everything is correct

Now, your CD should be digitized.