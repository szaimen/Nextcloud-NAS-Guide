---
id: geoblock
title: How to enable geoblocking?
sidebar_label: Geoblocking
---

In order to improve security, you can allow access to your webserver only from specific countries or continents.

1. **Power On** your server (if not already done)
1. Connect from a PC in the same network to your server over SSH (if not already done; if you cannot connect because the SSH fingerprint changed, type in `ssh-keygen -R ip-address` so e.g. `ssh-keygen -R 192.168.178.144` to remove the old fingerprint and try again to connect to your server over SSH.)
1. Run `sudo rm /var/scripts/activate-tls.sh` over CLI to delete the activate-tls script (you will run it at the end via a Menu, so the local script isn't needed)
1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Server Configuration` -> `GeoBlock`
1. Choose to install/reinstall Geoblock
1. Select whatever countries/continents you would like to allow the access to your server. All other will be blocked, based on the ip-address. (At least your own country should get selected to make this work.)