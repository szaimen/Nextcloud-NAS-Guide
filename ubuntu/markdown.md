layout: true
class: center, middle

---

name: ubuntu
# Nextcloud NAS Guide
# Ubuntu

---

layout: true
class: center, middle
<div class="my-header"><p>Nextcloud NAS Guide - Ubuntu</p></div><br>

---

.center[![language](./language.png)]
Select the correct language with the [ARROW] keys.<br>
Confirm by pressing [ENTER]

---

.center[![installer_update](./installer_update.png)]
Press [ENTER] to continue without updating

---

.center[![keyboard](./keyboard.png)]
Choose the correct keyboard layout with the [ARROW] and [ENTER] keys.<br>
Confirm by selecting "Done" and pressing [ENTER]

---

.center[![network](./network.png)]
Press [ENTER] to use the default settings

---

.center[![proxy](./proxy.png)]
Press [ENTER] to use the default settings

---

.center[![mirror](./mirror.png)]
Press [ENTER] to use the default settings

---

name: luks
.center[![storage-set](./storage-set.png)]
Activate "Encrypt the LVM group with LUKS" and type in a difficult passphrase.<br>
Please note: The installer doesn't check if the passphrases are equal!

---

.center[![storage-show](./storage-show.png)]
Press [ENTER] to confirm the settings

---

.center[![storage-confirm](./storage-confirm.png)]
Select "Continue" and press [ENTER] to confirm the settings

---

name: profile
.center[![profile](./profile.png)]
Type in the values like shown here. As password is "nextcloud" for now good enough.
Please note: The installer doesn't check if the passwords are equal!

---

.center[![ssh-server](./ssh-server.png)]
Activate "Install OpenSSH server", select "Done" and press [ENTER]

---

.center[![snaps](./snaps.png)]
Select "Done" and press [ENTER]

---

.center[![installation](./installation.png)]
Wait until everything was installed.<br>
Afterwards select "Reboot" and press [ENTER] to continue.

---

### Please remove the Ubuntu USB-stick now if not already done.
### Otherwise the system will not reboot.
### It is possible that you must press [ENTER] to continue.

---

.center[![unlock-root](./unlock-root.png)]
During the boot process, type in your [LUKS passphrase](#luks) and press [ENTER] to confirm.

---

.center[![cloud-init-target](./cloud-init-target.png)]
Wait until you see "Reached target Cloud-init target-"<br>
Press [ENTER] to return to the login screen.
---

.center[![login](./login.png)]
Type in your [username and password](#profile)

---

.center[![ip-address](./ip-address.png)]
Here you can see the ip-address which you will need in the next step.

---

### The Ubuntu installation is now done.
### Please click [here](https://github.com/szaimen/Nextcloud-NAS-Guide#how-to-connect-to-your-server-over-ssh) to return to the guide.