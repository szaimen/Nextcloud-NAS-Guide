---
id: user-flows
title: How to disable User Flows?
sidebar_label: User Flows
---

User flows are a feature which was introduces with Nextcloud 18. They can lead to performance issues if one user chooses to create many of them so they should get disabled, especially if you have no usecase for them.

1. Run `sudo bash /var/scripts/menu.sh` over CLI
1. Choose `Nextcloud Configuration` -> `Disable user flows`
1. Choose to disable `user flows`

User flows are now disabled, admin flows still usable.