---
id: pico
title: How to install Pico CMS for Nextcloud?
sidebar_label: Pico CMS
---

Pico CMS for Nextcloud combines the power of Pico and Nextcloud to create simple, secure, shareable and amazingly powerful websites with just a few clicks. Pico is a stupidly simple, blazing fast, flat file CMS - making the web easy! You can find more infos about this app here: [click here](https://github.com/nextcloud/cms_pico#about)

This guide allows you to access your Pico CMS sites on a different Domain than your Nextcloud Domain. Here is how to do that:

### Preparation
1. Create a subdomain like `blog.yourdomain.com` or `sites.yourdomain.com` and edit the DNS settings for this subdomain to point to your Nextcloud Domain. ([instructions](./subdomain-cname))
    :::tip
    You can also use a completely different domain like `thatsyourotherdomain.com`
    :::

### Installation
1. Run over CLI:
    ```shell
    sudo bash /var/scripts/menu.sh
    ```
1. Choose `Additional Apps` -> `Pico CMS`
1. Choose to install/reinstall Pico CMS
1. Most likely you will now see a popup that Nextcloud's default `Text` app is enabled which has incompatibility issues with Pico CMS. **Confirm** that you want to disable it.
1. Wait until it reports that the base configuration of Pico CMS was successful
1. **Choose** that you want to make your sites available on a different Domain
1. Now enter the domain that you've created and pointed to your Nextcloud domain during the preparation section of this guide
1. **Don't use** UPNP to open the ports for you
1. You should now get asked if you want to make a specific site available when opening the chosen domain. I'd recommend to **confirm** that since otherwise accessing the domain directly will redirect to your Nextcloud domain which will kind of defend the purpose of using another domain for the Pico CMS sites. 
1. Now enter the sites Identifier e.g. `blog` or `mysite`
1. Now wait until everything is installed and it reports that Pico CMS was successfully installed


### What to do now?
You should now create at least one new Pico CMS site with the same Identifier that you've entered during step 10 of the installation section by opening `https://yourdomain.com/settings/user/cms_pico` with your Nextcloud user. Afterwards you can edit the site which consists of a few new files directly in your Nextcloud. All public Pico CMS sites of your Nextcloud instance should now be accessible by opening the chosen subdomain. E.g. when using `blog` as the sites identifier: `https://subdomain.com/blog`. The site that you've entered during step 10 of the installation section will be accessible by opening `https://subdomain.com` directly.

Otherwise, you can change some Pico CMS admin settings, e.g. restrict the app usage to some groups, etc. by opening: `https://yourdomain.com/settings/admin/cms_pico`
