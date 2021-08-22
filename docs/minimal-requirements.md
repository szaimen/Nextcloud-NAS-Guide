---
id: minimal-requirements
title: What are the minimal Hardware requirements?
sidebar_label: Minimal Requirements
---

You will need the following things:

- A x86 PC that will function as your server with:
    - At least 2 Cores (because most scripts need at least as much)
    - At least 4GB RAM (because most scripts need at least as much)
    - One internal SSD with at least 128GB (because some space will get reserved and you don't want to run into space issues)
    - Power Supply for your server (if not built-in)
    - TPM2 support (you need to Google if the PC has built-in TPM2 support if it is not a NUC. It is needed for automatically unlocking the encrypted root partition while booting.)
- One (or more) external SSD (or HDD) that will store your personal data with at least 250GB (depending on how much data you are planning to store on your server. Rule of thumb: this drive should be at least twice as big as your current private data)
- Two additional external HDD's that will function as backup drives with at least the same size like the external data SSD/HDD, respectively (because one will be used for daily backups and one for off-shore backups)
- One USB-stick with at least 8GB (for installing Ubuntu)
- For the initial setup you will also need a HDMI-display (e.g. monitor/tv/beamer), USB-mouse and -keyboard. If you don't have one: you don't need to buy those. Borrowing or renting those should be enough. (You really only need them for the initial setup, because you will access your server over SSH afterwards.)
- For accessing the files on the external data SSD/HDD directly, you will also need a Laptop/PC with Windows or Linux a later point: [click here](./access-veracrypt)