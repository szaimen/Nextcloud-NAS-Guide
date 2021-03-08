---
id: lynis
title: How to run a security audit on your instance?
sidebar_label: Security Audit
---

In case you wonder how secure your Nextcloud-NAS concerning the OS really is, there is a way to run a security audit on your instance. Here is how to do it.

Run over CLI:
```shell
# Get newest lynis version
# https://kifarunix.com/install-and-setup-lynis-security-auditing-tool-on-ubuntu-20-04/
wget -O - https://packages.cisofy.com/keys/cisofy-software-public.key | sudo apt-key add -
echo "deb https://packages.cisofy.com/community/lynis/deb/ stable main" | sudo tee /etc/apt/sources.list.d/cisofy-lynis.list
echo 'Acquire::Languages "none";' | sudo tee /etc/apt/apt.conf.d/99disable-translations
sudo apt install apt-transport-https
sudo apt update

# Install lynis
sudo apt install lynis -y

# Run NextcloudPi's security audit script
wget https://raw.githubusercontent.com/nextcloud/nextcloudpi/master/bin/ncp/SECURITY/nc-audit.sh
echo install >> nc-audit.sh
echo configure >> nc-audit.sh
sudo bash nc-audit.sh
rm nc-audit.sh

# Remove lynis again
sudo apt purge lynis -y
sudo rm /etc/apt/sources.list.d/cisofy-lynis.list
sudo apt update
sudo apt autoremove -y
```

Now, you should have gotten an output with a security rating and security advices, apart from other things.