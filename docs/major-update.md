---
id: major-update
title: How to update your Nextcloud manually to a major version?
sidebar_label: Major Nextcloud Update
---

As already stated during the configuration of automatic updates, you need to update your server to major versions manually. You should automatically get notified by Mail and Nextcloud notification if a new major version was found. 

### Things to check before updating
1. Never update to the first Nextcloud release like e.g. `21.0.0`! Although the Nextcloud GmbH states that all releases are stable, you should always wait at least for the first point release, e.g. `21.0.1` before upgrading to a major version!
    :::note
    You can check the latest releases here: ([click here](https://github.com/nextcloud/server/releases))
    :::
1. Check that all apps that you need are compatible with the new major version.
    :::note Instructions
    1. Open `https://yourdomain.com/settings/admin/overview` with the admin account.
    1. Scroll down and change the `Update Channel` from **Stable** to **Beta** (Don't worry, this won't change any important setting on your installation)
    1. Reload the page
    1. You should see now that a new Nextcloud major version was found e.g. `21.0.1` (if you are on Nextcloud 20)
    1. It should also show to you if all installed apps have updates available for the new version or if some apps still miss updates for the new version.
    1. If all apps have updates available for the new version, you are ready to upgrade!
    1. Now you are free to switch the `Update Channel` from **Beta** back to **Stable** (But as I've stated before: this setting won't change anything important on your installation)
    :::

---

:::caution
If at least the first point release is out and you've checked that all apps have updates available for the new major Nextcloud version, you are ready to continue.
:::

---

### Preparation
1. Create a Backup before updating ([instructions](./manual-backup))<br/>
(Although the update is already tested, it could fail, you never know! So better to create a current backup!)

### Execution
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Update Nextcloud major`
1. Choose `No` if you are asked if you want to fetch the latest `update.sh` script.
1. Wait until the update has run and it reports that the update was successful.
1. Wait until the server automatically reboots

Now you should have successfully updated to a new major Nextcloud version!

:::info
If the update has failed for you, you can easily restore your system from the backup that you've just created by following these steps: [click here](./restore-system)
:::

:::tip updates between multiple major versions are unsupported
If the update to the major release won't get executed and you see a popup that states that **updates between multiple major versions are unsupported**, you can work around this by updating to the next major version by executing:
```shell
# Delete current update.sh script (because the latest one is needed)
sudo rm /var/scripts/update.sh

# Download latest update.sh script
sudo wget https://raw.githubusercontent.com/nextcloud/vm/master/static/update.sh -P /var/scripts

# Adjust access rights
sudo chown root:root /var/scripts/update.sh
sudo chmod 700 /var/scripts/update.sh

# Readd automatic restart
sudo sed -i "s|exit|/sbin/shutdown -r +1|g" /var/scripts/update.sh
echo "exit" | sudo tee -a /var/scripts/update.sh >/dev/null

# Update to the next Major version
sudo bash /var/scripts/update.sh nextmajor
```
:::
