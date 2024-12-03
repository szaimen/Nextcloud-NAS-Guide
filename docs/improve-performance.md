---
id: improve-performance
title: How to drastically improve Nextcloud's performance inside your home network?
sidebar_label: Improve Nextcloud Performance
---
After a recent switch to new server hardware, I've discovered that Nextcloud wasn't performing better than before although the hardware and software configuration got better by a lot which pointed to a bottleneck somewhere else. Because of my findings, I've decided to create this FAQ guide how to improve the performance of your Nextcloud installation.

First of all, here are some general network advices that I've followed which helped me identifying the real bottleneck.

## General network advices
- Since you are running a server in your home network, your internet upload speed matters if you are accessing your server from somewhere else. Currently, (at least in germany) coaxial connections (via the TV network) aren't recommended since they feature a very limited upload speed. Better are DSL connections since they have a better upload speed at limited costs. The best are fiber connections because of much higher upload (and download) speeds than the other two but are (at least in germany) very expensive and not often available. Not recommended are any other connections like e.g. LTE (4G) or Hybrid connections.
- Use a capable router for your home network. Especially, if you plan to access your server via Wi-fi, the router should feature as much Wi-fi bandwidth as possible. Currently, (24.03.2021) routers are recommended with at least Wi-fi 5 (ac) or better Wi-fi 6 (ax).<br/>
For DSL connections is currently (24.03.2021) the [FRITZ!Box 7530 AX](https://geizhals.eu/avm-fritz-box-7530-ax-a2411180.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk) recommended
- Also make sure, that you connect to your router via the 5 GHz network and not 2.4 GHz network <br/>
(Usually, you can e.g. give the different frequencies a different name in your routers GUI. By doing so, you can make sure that your devices get always connected to the correct network)
- If your appartment/house is too big for the 5 GHz network for a complete and speedy coverage (for debugging purposes, you can use e.g. the [FRITZ!App WLAN](https://en.avm.de/products/apps/fritzapp-wi-fi/). A good rule of thumb is that you need a repeater if the 2.4 GHz speed exceeds the 5 GHz speed in rooms that need to get covered by Wi-fi), you should buy a Wi-fi repeater also with Wi-fi 5 or Wi-fi 6 that should get connected to your router via an ethernet cable (hence the repeater needs an ethernet port to be able to do that)<br/>
Recommended is currently (24.03.2021) the [FRITZ!Repeater 2400](https://geizhals.eu/avm-fritz-repeater-2400-20002855-a2082185.html)<br/>
(Please note that you might be able to achieve a better Wi-fi coverage of your appartment/house by moving the router to a better place where it covers more rooms before buying additional Wi-fi repeaters)
- Your server should be directly connect to your router via an ethernet cable. Make sure that you use at least a Gbit ethernet cable for this, it must at least match the speed of the ethernet port on your server and router. (The same applies to Wi-fi repeaters that I've mentioned above)<br/>
(Usually, you can check the connection speed to all devices in your routers GUI.) 

## Solution
After testing some network changes, I found out that the router actually seems to be the bottleneck in my home network. My theory is that the so called `NAT` which means `Network Address Translation` is the bottleneck here. It resolves requests from the public IP-address to the local IP-address of my server. By using a local DNS server, I was able to bridge `NAT` and improve the performance a by a lot. Requests to my Nextcloud in my home network are now nearly as fast as my network is capable of.

To profit from the same changes, you simply install the Pi-hole on your server ([instructions](./pi-hole)) and make it the DNS server of your whole home network (as adviced [here](./pi-hole#what-to-do-now))
