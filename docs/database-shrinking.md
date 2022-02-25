---
id: database-shrinking
title: How to shrink your database?
sidebar_label: Database shrinking
---

In some cases it might happen that your database gets too big. This happens more likely if you are using the external storage app in your Nextcloud. There is now a script that allows to shrink your database.

How to execute it:
1. Choose `Server Configuration` -> `Database Shrinking`
1. Choose to install `Database Shrinking`
1. Choose that you haven't created a backup of you Nextcloud, yet
1. Choose to run the backup now
1. Wait until the backup is done which will automatically execute and run the database shrinking process after the backup was created successfully
1. Wait until it reports that shrinking was done successfully
1. Now open your Nextcloud and see if still everything works. If not, simply restore from backup by following [this guide](./restore-system).
