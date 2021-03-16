---
id: smart
title: How to set up Disk Monitoring?
sidebar_label: Disk Monitoring
---

Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up Disk Monitoring. 

:::info Please note!
This is no alternative to a backup solution!
:::
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `Disk Monitoring`
1. Choose to install/reinstall **S.M.A.R.T Monitoring**
1. Choose **Directly** to get informed instantly if a disk error was found (and wait until it reports that S.M.A.R.T Monitoring was successfully configured)

:::note
If one or more of your drives doesn't support Smart Monitoring or is unhealthy, you will see a popup that this is the case. After the script is exited, you should then inspect the scripts output. If the drive that was reported is unhealthy, you should definitely switch the drive because it cannot be trusted. If Smart Monitoring isn't supported on the reported drive, it is up to you to decide if you switch the drive with a supported one or use it, nevertheless. Though, be warned that the system won't be able to warn you about disk health problems of the affected drive in the future! Because of that it is recommended to switch reported drives in any case!
:::