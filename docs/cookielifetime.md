---
id: cookielifetime
title: How to configure the CookieLifetime?
sidebar_label: CookieLifetime
---

By changing this value, you can configure after how much time any user will forcefully get logged out from a browser session. 

Since you most likely don't want to log into Nextcloud on your devices again every half an hour, it is recommended to change it to a higher value.
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Nextcloud Configuration` -> `CookieLifetime`
1. Select `2419200s 4 Weeks` (4 weeks are recommended and should be enough)

Now your users should no longer get logged out in browsers after half an hour.