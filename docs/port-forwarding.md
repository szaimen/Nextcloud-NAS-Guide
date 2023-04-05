---
id: port-forwarding
title: How to enable Port Forwarding?
sidebar_label: Port Forwarding
---

You will need to port forward some specific ports to your server in order to make it possible to run a public webserver on it.
:::info
How to do port forwarding in detail, completely depends on your router. Thus, you should inspect your router's manual for that.
:::
#### Here are some guides for different router models:
- [FRITZ!Box 7590](https://en.avm.de/service/knowledge-base/dok/FRITZ-Box-7590/893_Setting-up-static-port-sharing/) (only point 2 of this guide is needed)
#### You will need to port forward the following two ports to your server:
- Port 80 TCP
- Port 443 TCP

:::note Hint
Most likely is your server internally called `nextcloud`; Otherwise you can identify your server by its internal IP-address e.g. `192.168.178.144`
:::
:::caution
You should really only open the necessary ports that are requested to get opened/port-forwarded. **So make sure to open as few as possible!**
:::