---
id: fail2ban
title: How to set up Fail2Ban?
sidebar_label: Fail2Ban
---

In order to block too much failed login attempts for Nextcloud and SSH, you should configure Fail2Ban for your server.

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Additional Apps` -> `Fail2Ban` -> `Install-Fail2Ban`
1. Choose to install/reinstall Fail2Ban
1. Wait until everything is installed
1. Choose to get a daily Fail2Ban report by selecting `Yes`