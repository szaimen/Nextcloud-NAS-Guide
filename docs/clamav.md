---
id: clamav
title: How to install ClamAV?
sidebar_label: ClamAV
---

In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found.

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `ClamAV`
1. Choose to install/reinstall ClamAV
1. Wait until it is installed and the service was started
1. Choose to set up a **weekly full scan** of all your files (the scan will run on sundays starting at 10:00 and for 12h max)
1. Choose what shall get done with found files. **Only log** is recommended.

You've successfully made your server a bit more secure!