---
id: change-update-time
title: How to change the update time of your server?
sidebar_label: Change update time
---
If you've followed this guide, you will have configured automatic updates. Those get executed every saturday at 18:00 and will cause a reboot of your server afterwards. This is especially problematic if you've configured Pi-hole as your local DNS server for your home network since any DNS request will not work for as long as the server reboots and the Pi-hole isn't reachable. Also, if you've installed Pi-hole it will try to update itself every saturday at 19:30 which causes the same effect if an update is available.

To fix this, you can change the time when the updates get executed. Here is how to do this.

1. Run over CLI:
    ```shell
    sudo crontab -u root -e
    ```
    :::note
    You might now get asked which editor you would like to use. Choose to use `nano` which is the simplest and recommended option.
    :::
1. Now, you should see all cronjobs that are getting executed. Look for a line that looks like this:
    ```shell
    0 18 * * 6 /var/scripts/update.sh minor >> /var/log/nextcloud/update.log 2>&1
    ```
1. Now, edit the line to fit your needs. `0 18 * * 6` means that the script gets executed every saturday (`6`) at `18` hours and `0` minutes (`18:00`). Recommended is to change it to `0 2 * * 7` which means that it gets executed every sunday (`7`) at `2` hours and `0` minutes (`2:00`) (this time is recommended when the daily backup gets created at 4:00 every day). In the end, the line should look something like this:
    ```shell
    0 2 * * 7 /var/scripts/update.sh minor >> /var/log/nextcloud/update.log 2>&1
    ```
1. :::note Pi-hole
    1. If you have installed the Pi-hole on your server, you might then also look for a line that looks like this:
        ```shell
        30 19 * * 6 /var/scripts/pihole-update.sh >/dev/null
        ```
    1. Now, edit the line to fit your needs. `30 19 * * 6` means that the script gets executed every saturday (`6`) at `19` hours and `30` minutes (`19:30`). Recommended is to change it to `30 3 * * 7` which means that it gets executed every sunday (`7`) at `3` hours and `30` minutes (`3:30`) (this is recommended when the daily backup gets created at 4:00 every day). In the end, the line should look something like this:
        ```shell
        30 3 * * 7 /var/scripts/pihole-update.sh >/dev/null
        ```
    :::
1. After you are done, safe the file by pressing `[CTRL] + [o]` and `[ENTER]` and close it by pressing `[CTRL] + [x]`
1. Now, all automatic updates should get exectued every sunday between 2:00 and 4:00 instead of every saturday between 18:00 and 20:00 which should cause much less interuptions.

:::info
Although you've successfully changed the update time, the updatenotification that you get when a new minor Nextcloud update was found might state that your automatic updates still run at saturdays at 18:00 which isn't the case anymore on your instance. (It is just a false statement but unproblematic)
:::