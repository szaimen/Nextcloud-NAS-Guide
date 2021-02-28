---
id: smtp-mail
title: How to set up SMTP Mail to enable your server to send mails?
sidebar_label: SMTP Mail
---

In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails.

:::info
**Before you can start, please get a mail account that your server will use to send mails.**
:::

:::note
For german users is recommended: [mail.de](https://signup.mail.de/de/) and [posteo.org](https://posteo.de/registrierung)
:::

**Please inspect your mail providers documents how to connect over SMTP before continuing!**
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Server Configuration` -> `SMTP Mail`
1. Choose to install/reinstall SMTP Mail
1. :::note either mail.de setup
    Select `mail.de` as your mail provider if you've created an account there and want to use it for sending mails.
    :::
1. :::note or complete Manual setup
    1. Select `Manual` if you want to use a mail-address from a different mail provider.
    1. Enter the **SMTP URL** (e.g. `smtp.mail.de`)
    1. Choose the **encryption protocol** (e.g. `SSL`)
    1. Choose that you want to use the **default port** (the default port should be correct most of the time)
    1. Most mail servers need credentials, so answer that your mail server **needs credentials**
    :::
1. Enter your **SMTP username** (the **mail account** that will be used to send mails e.g. `server@mail.de`)
1. Enter the **password** for your mail account
1. Enter the **recipient** mail-address that will receive all mails that are sent by the server (e.g. your main mail-address)
1. Confirm your settings
1. It should report now that a testmail was sent successfully.
1. Confirm that you want to use the same mail server settings in your Nextcloud
1. Select the admin user that shall get the recipient's mail-address
1. It should report now that everything was set up correctly!
