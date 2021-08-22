module.exports = {
  docs: {
    "Nextcloud-NAS-Guide": ["introduction","instructions"],
    "Before you start": ['before-start', 'considerations', 'minimal-requirements', 'hardware-recommendations', 'preparations', 'time-indication'],
    "Basic setup": ['basic-setup', 'bios-uefi', 'ubuntu', 'ssh', 'tpm2', 'install-nextcloud', 'nextcloud-startup', 'usb-boot'],
    "Security and Automation": ['security-automation', 'geoblock', 'smart', 'fail2ban', 'clamav', 'automatic-updates'],
    "Backup": ['backup', 'smtp-mail', 'not-supported', 
        {"External data SSD/HDD": ['data-ssd', 'format-encrypt-mount', 'access-veracrypt', 'sensible-folder-structure']},
        {"External backup HDD's": ['backup-hdds', 'format-backup-hdds', 'mount-backup-hdds']},
              'update-manually', 'daily-backup', 'offshore-backup'],
    "SMB-server and user accounts": ['smb-server', 'run-smb-server', 'create-users', 'create-shares', 'recycle-bin-cleanup'],
    "Customize Nextcloud": ['customize-nextcloud', 'previewgenerator', 'cookielifetime', 'share-folder', 'workspaces', 'user-flows'],
    "Activate Let's Encrypt": ['activate-lets-encrypt', 'ddns', 'ddns-providers', 'activate-ddns', 'configure-ddclient', 'port-forwarding', 'activate-tls', 'congratulations'],
    "Optional": ['optional', 'firewall', 'harden-ssh', 'share-link-audit', 'onlyoffice', 'hpb', 'notify_push', 'whiteboard', 'pico', 'extract', 'vaultwarden', 'pi-hole', 'pivpn', 'change-update-time', 'home-access-only', 'pms', 'remotedesktop', 'digitize', 'more-apps'], 
    "FAQ": ['faq', 'improve-performance', 'reduce-power-consumption', 'manual-backup', 'major-update', 'create-new-users', 'restore-files', 'restore-system', 'subdomain-cname', 'mount-hdd', 'smb-connect', 'rdp-connect', 'lynis', 'restore-backup', 'access-backup'],
  },
};
