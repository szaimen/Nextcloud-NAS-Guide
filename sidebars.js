module.exports = {
  docs: {
    "Nextcloud-NAS-Guide": ["introduction","instructions"],
    "Before you start": ['before-start', 'considerations', 'minimal-requirements', 'hardware-recommendations', 'preparations', 'time-indication'],
    "Basic setup": ['basic-setup', 'bios-uefi', 'ubuntu', 'ssh', 'tpm2', 'install-nextcloud', 'nextcloud-startup', 'usb-boot'],
    "Security and Automation": ['security-automation', 'geoblock', 'smart', 'fail2ban', 'clamav', 'automatic-updates'],
    "External drives": ['external-drives', 'not-supported', 
          {"External data SSD/HDD": ['data-ssd', 'format-encrypt-mount', 'access-veracrypt', 'sensible-folder-structure']},
          {"External backup HDD's": ['backup-hdds', 'format-backup-hdds', 'mount-backup-hdds']},
      ], 
    "Backup": ['backup', 'smtp-mail', 'update-manually', 'daily-backup', 'offshore-backup'],
    "SMB-server and user accounts": ['smb-server', 'run-smb-server', 'create-users', 'create-shares', 'recycle-bin-cleanup'],
    "Customize Nextcloud": ['customize-nextcloud', 'previewgenerator', 'cookielifetime', 'share-folder', 'workspaces', 'user-flows'],
    "Activate Let's Encrypt": ['activate-lets-encrypt', 'ddns', 'ddns-providers', 'activate-ddns', 'configure-ddclient', 'port-forwarding', 'activate-tls', 'congratulations'],
    "Optional": [ {"Server Addons": ['firewall', 'harden-ssh', 'vaultwarden', 'pi-hole', 'pivpn', 'pms', 'remotedesktop']}, 
          {"Nextcloud Addons": ['share-link-audit', 'onlyoffice', 'hpb', 'notify_push', 'pdfannotate', 'whiteboard', 'pico', 'extract', 'more-apps']}, 
          {"Miscellaneous": ['digitize', 'change-update-time', 'home-access-only']}
      ], 
    "FAQ": [ {"Backup and Restore": ['manual-backup', 'restore-files', 'restore-system', 'restore-backup', 'access-backup']}, 
          {"Miscellaneous": ['improve-performance', 'reduce-power-consumption', 'major-update', 'create-new-users', 'database-shrinking', 'subdomain-cname', 'mount-hdd', 'smb-connect', 'rdp-connect', 'picard', 'lynis']}
       ]
  },
};
