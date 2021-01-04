---
id: ssh
title: How to connect to your server over SSH?
sidebar_label: SSH
---

In order to connect to your server from a PC in the same network, you should use SSH. You are then able to control your server, use copy and paste and more.

1. Find out the IPv4-address of your server (if not already done): Either login to your server to show it or it will be presented on the login screen after installing Nextcloud
1. Open a command prompt on Windows 10 or terminal on Linux
1. Type in `ssh username@ip-address`<br/>
One example is: `ssh ncadmin@192.168.178.144`<br/>
(If it times out although your server is running, the IPv4-address might be wrong. Then please look at step 1 how to find out the IPv4-address)
1. If you connect the first time to your server, you will be asked to confirm the server fingerprint which you should do by typing in `yes` and pressing `[ENTER]`. If your server fingerprint changed, you will be guided to reset it if you want to connect again.
1. Now type in your Ubuntu user **password**