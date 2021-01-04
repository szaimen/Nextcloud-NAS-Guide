module.exports = {
  someSidebar: {
    "How to use this guide?": ["instructions"], 
    "Before you start": ['before-start', 'considerations', 'minimal-requirements', 'hardware-recommendations', 'preparations', 'time-indication'],
    "Basic setup": ['basic-setup', 'bios-uefi', 'ubuntu', 'ssh', 'tpm2', 'install-nextcloud', 'nextcloud-startup'],
    "Security and Automation": ['security-automation', 'usb-boot', 'geoblock', 'smart', 'fail2ban', 'clamav', 'automatic-updates'],
    "Backup": ['backup', 'smtp-mail', 'not-supported', 
        {"External data SSD/HDD": ['data-ssd', 'format-encrypt-mount', 'access-veracrypt', 'sensible-folder-structure']},
        {"External backup HDD's": ['backup-hdds', 'format-backup-hdds', 'mount-backup-hdds']},
              'update-manually', 'daily-backup', 'offshore-backup'],
    "SMB-server": ['smb-server', 'run-smb-server', 'create-users', 'create-shares', 'readonly-root'],
    "Customize Nextcloud": ['customize-nextcloud', 'previewgenerator', 'cookielifetime', 'share-folder', 'workspaces', 'user-flows'],
    "Activate Let's Encrypt": ['activate-lets-encrypt', 'ddns', 'ddns-providers', 'activate-ddns', 'configure-ddclient', 'port-forwarding', 'activate-tls', 'congratulations'],
    "Optional": ['optional', 'onlyoffice', 'hpb', 'bitwarden-rs', 'pi-hole', 'pivpn', 'remotedesktop', 'mc'],
    "FAQ": ['faq', 'restore-files', 'restore-system', 'subdomain-cname']
  },
};
