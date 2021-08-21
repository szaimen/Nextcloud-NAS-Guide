---
id: more-apps
title: Which other apps are available?
sidebar_label: More apps
---

If you run `sudo bash /var/scripts/menu.sh` over CLI and choose `Additional Apps`, you will see a few more apps that aren't currently covered in this guide mostly because I wouldn't recommend to use them. Nonetheless I list them here so that you are able to get an overview about additional apps.

Currently (29.03.2021) are additionally available:

- Other documentservers apart from the recommended OnlyOffice Documentserver like e.g. Collabora Documentserver
- The official Bitwarden password manager server (because of a limitation regarding backup-restore and needed hardware ressources not recommended. Please use Vaultwarden instead!)
- Adminer, a Graphical User Interface for Nextcloud's Postgresql database.
- Netdata, a real-time server monitor in a Web GUI
- BPYTOP, a real-time server monitor via CLI
- FullTextSearch for Nextcloud (not recommended because it breaks regularly with new NC updates and needs many ressources)
- LDAP for Nextcloud (doesn't have any usecase for the Nextcloud-NAS)
- Midnight Commander (a CLI File Manager. Not needed for the Nextcloud-NAS)
- Webmin, a server Web-GUI like Cpanel
- Face Recognition which scans your photos for faces and shows them in Nextcloud (not recommended because it isn't optimized for the external storage app)
- SMB mount which allows to easily mount SMB shares from other SMB-servers in your network to your server and mount them to Nextcloud (not needed for the Nextcloud-NAS since it is the SMB-server itself)
