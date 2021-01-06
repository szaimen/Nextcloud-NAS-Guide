---
id: create-users
title: How to create SMB-users and Nextcloud users in one go?
sidebar_label: Create SMB-users and Nextcloud users
---

The big advantage using this method is, that the Nextcloud and SMB-user will have the same credentials for now. Unfortunately if it gets changed in Nextcloud, it will differ from the old SMB-user password, since they are not synchronized.

**First you should make a list which users you will need and create all of them using the following method:**
1. From the `SMB-server Main Menu` select `Open the SMB-user Menu`
1. Choose `Add a SMB-user`
1. Enter the **name** of the user that you want to create. Recommended is to just use the forename of that person.
1. Type in a difficult **password** for that user and store it at a safe place<br/>
(Difficult password means at least 16 characters long, containing small and tall letters, digits and special characters)
1. The user should be successful created now
1. Choose to **create** a Nextcloud user with the **same credentials**
1. A Nextcloud user should be successfully created now

**Now repeat that procedure until all users from your list are created**

:::info
If you are done, please don't close the script! You will need it again in the next step!
:::