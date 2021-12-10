"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4339],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5621:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"restore-backup",title:"How to restore a Backup on a different server or upgrade Ubuntu?",sidebar_label:"Restore Backup/Upgrade Ubuntu"},s=void 0,p={unversionedId:"restore-backup",id:"restore-backup",title:"How to restore a Backup on a different server or upgrade Ubuntu?",description:"Theoretically it could happen that your system drive fails or that you need to update the Ubuntu version.",source:"@site/docs/restore-backup.md",sourceDirName:".",slug:"/restore-backup",permalink:"/Nextcloud-NAS-Guide/docs/restore-backup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-backup.md",tags:[],version:"current",frontMatter:{id:"restore-backup",title:"How to restore a Backup on a different server or upgrade Ubuntu?",sidebar_label:"Restore Backup/Upgrade Ubuntu"},sidebar:"docs",previous:{title:"Restore system",permalink:"/Nextcloud-NAS-Guide/docs/restore-system"},next:{title:"Backup drives - PC access",permalink:"/Nextcloud-NAS-Guide/docs/access-backup"}},c=[{value:"Preparations (if your server doesn&#39;t work because of a failed system drive)",id:"preparations-if-your-server-doesnt-work-because-of-a-failed-system-drive",children:[],level:2},{value:"Preparations (if you want to upgrade Ubuntu)",id:"preparations-if-you-want-to-upgrade-ubuntu",children:[],level:2},{value:"Execution",id:"execution",children:[],level:2},{value:"Reinstall Apps and Addons",id:"reinstall-apps-and-addons",children:[{value:"Necessary are those",id:"necessary-are-those",children:[{value:"Now your Nextcloud should work again completely!",id:"now-your-nextcloud-should-work-again-completely",children:[],level:4}],level:3},{value:"Optional are those",id:"optional-are-those",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Theoretically it could happen that your system drive fails or that you need to update the Ubuntu version.\nIn those cases you need to reinstall Ubuntu and thus restore a backup on a different server (it looks like it is a different server for the scripts)."),(0,o.kt)("p",null,"Here is what you need to do in those cases:"),(0,o.kt)("h2",{id:"preparations-if-your-server-doesnt-work-because-of-a-failed-system-drive"},"Preparations (if your server doesn't work because of a failed system drive)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Buy a new with your server compatible internal SSD (recommended specifications describe ",(0,o.kt)("a",{parentName:"li",href:"./hardware-recommendations#general-hardware-recommendations"},"here"),")"),(0,o.kt)("li",{parentName:"ol"},"Put the new drive into your server")),(0,o.kt)("h2",{id:"preparations-if-you-want-to-upgrade-ubuntu"},"Preparations (if you want to upgrade Ubuntu)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update to the latest major Nextcloud release by following the instructions here: ",(0,o.kt)("a",{parentName:"li",href:"./major-update"},"click here"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please read carefully through all info there, especially the ",(0,o.kt)("inlineCode",{parentName:"p"},"Things to check before updating")," section before updating. (E.g. it is not recommended to update to any new major Nextcloud release before the first point release: all info there is valid here, too.)")))),(0,o.kt)("li",{parentName:"ol"},"Create a backup of your server (",(0,o.kt)("a",{parentName:"li",href:"./manual-backup"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Only if the backup (from step 2) was created successfully (otherwise skip this 3rd step!), get your ",(0,o.kt)("inlineCode",{parentName:"li"},"Off-Shore Backup HDD"),", connect it to your server and create a new off-shore backup by running:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo sed -i 's|^DAYS_SINCE_LAST_BACKUP.*|DAYS_SINCE_LAST_BACKUP=1000|' /var/scripts/off-shore-rsync-backup.sh \\\n&& sudo bash /var/scripts/off-shore-rsync-backup.sh\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should really only create a new off-shore backup if the backup from step 2 was created successfully!")))),(0,o.kt)("li",{parentName:"ol"},"Use your ",(0,o.kt)("strong",{parentName:"li"},"last chance")," and find out if you still have the passphrase of your backup stored at a safe place by comparing it with the output of:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo grep "ENCRYPTION_KEY" /var/scripts/daily-borg-backup.sh\n')),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you don't have it stored, just ",(0,o.kt)("strong",{parentName:"p"},"note it down")," another time. ",(0,o.kt)("strong",{parentName:"p"},"This is crutial!"),(0,o.kt)("br",null),"\n(because this is the last chance to retrieve the password from your server)"))))),(0,o.kt)("h2",{id:"execution"},"Execution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Shut down")," your server by pressing the power button"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Disconnect")," all external drives from your server"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Execute")," the complete Basic setup section (",(0,o.kt)("a",{parentName:"li",href:"./basic-setup"},"this section"),")",(0,o.kt)("br",null),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Don't go any further and stop at the beginning of the next section!",(0,o.kt)("br",null),"\n(This is the last step that shall get executed: ",(0,o.kt)("a",{parentName:"p",href:"./usb-boot"},"click here"),")")))),(0,o.kt)("li",{parentName:"ol"},"If you are done with the basic setup section, run the manual update once (",(0,o.kt)("a",{parentName:"li",href:"./update-manually"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Please ",(0,o.kt)("strong",{parentName:"li"},"don't")," connect the backup HDD to your server, yet or ",(0,o.kt)("strong",{parentName:"li"},"disconnect")," the backup HDD from your server!"),(0,o.kt)("li",{parentName:"ol"},"Now run the restore-backup script by executing:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/restore-backup.sh \\\n&& sudo bash restore-backup.sh\n"))),(0,o.kt)("li",{parentName:"ol"},"Enter your password"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Confirm")," that you want to restore your server from backup"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"OK")," to start searching for new backup drives"),(0,o.kt)("li",{parentName:"ol"},"Now ",(0,o.kt)("strong",{parentName:"li"},"connect")," one of your backup drives (most likely the daily backup HDD) to your server (you have 1 minute)"),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},"BTRFS/NTFS partition")," that shall get mounted"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select")," one found valid backup repository"),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"passphrase")," that was used to encrypt the backup"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"backup archive")," that shall get restored (most likely the newest one if your system was in a working state when the backup was created)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Choose")," if you want to check if the backup extracting works (this is up to you)",(0,o.kt)("br",null),"\n(If you choose yes and it takes too long, you can cancel it by pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"[CTRL] + [C]"),". Then start from step 5 again and simply skip it.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Confirm")," that you want to restore the backup"),(0,o.kt)("li",{parentName:"ol"},"Now wait until you see the next popup! (This can take a while.)"),(0,o.kt)("li",{parentName:"ol"},"It should now report that the restore was completed and you should connect all drives now. So please ",(0,o.kt)("strong",{parentName:"li"},"connect all external drives")," now that were connected to your old server!"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"[ENTER]")," so that they get mounted"),(0,o.kt)("li",{parentName:"ol"},"Now you should see a popup were it is recommended to open your nextcloud web interface to confirm that the restore was successful. Do so by opening the suggested link. E.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://192.168.178.144"),". After you've confirmed that Nextcloud works, press ",(0,o.kt)("inlineCode",{parentName:"li"},"[ENTER]")),(0,o.kt)("li",{parentName:"ol"},"Now it will report to you that you need to reinstall a lot of apps/addons in case they were installed on your old server. This is what you will do next. Press ",(0,o.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to exit the script.")),(0,o.kt)("h2",{id:"reinstall-apps-and-addons"},"Reinstall Apps and Addons"),(0,o.kt)("p",null,"If the Nextcloud web interface works as expected, you will need to reinstall all apps/addons that were installed on your old server."),(0,o.kt)("h3",{id:"necessary-are-those"},"Necessary are those"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reinstall Geoblocking (",(0,o.kt)("a",{parentName:"li",href:"./geoblock"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reinstall Disk Monitoring (",(0,o.kt)("a",{parentName:"li",href:"./smart"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reinstall Fail2Ban (",(0,o.kt)("a",{parentName:"li",href:"./fail2ban"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reinstall ClamAV (",(0,o.kt)("a",{parentName:"li",href:"./clamav"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reinstall SMTP Mail (",(0,o.kt)("a",{parentName:"li",href:"./smtp-mail"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reinstall DDclient (",(0,o.kt)("a",{parentName:"li",href:"./configure-ddclient"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reconfigure Port Forwarding (",(0,o.kt)("a",{parentName:"li",href:"./port-forwarding"},"instructions"),")"),(0,o.kt)("li",{parentName:"ol"},"Reactivate TLS for your Nextcloud Domain (",(0,o.kt)("a",{parentName:"li",href:"./activate-tls"},"instructions"),")")),(0,o.kt)("h4",{id:"now-your-nextcloud-should-work-again-completely"},"Now your Nextcloud should work again completely!"),(0,o.kt)("h3",{id:"optional-are-those"},"Optional are those"),(0,o.kt)("p",null,"(You only need to reinstall them ",(0,o.kt)("strong",{parentName:"p"},"if they were installed before"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reenable the Firewall on your server (",(0,o.kt)("a",{parentName:"li",href:"./firewall"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reharden the SSH configuration (",(0,o.kt)("a",{parentName:"li",href:"./harden-ssh"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall OnlyOffice for Nextcloud (",(0,o.kt)("a",{parentName:"li",href:"./onlyoffice"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall High-Performance backend for Nextcloud Talk (",(0,o.kt)("a",{parentName:"li",href:"./hpb"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Push Notifications for Nextcloud (",(0,o.kt)("a",{parentName:"li",href:"./notify_push"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Whiteboard for Nextcloud (",(0,o.kt)("a",{parentName:"li",href:"./whiteboard"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Pico CMS for Nextcloud (",(0,o.kt)("a",{parentName:"li",href:"./pico"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Extract for Nextcloud (",(0,o.kt)("a",{parentName:"li",href:"./extract"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Previewgenerator (",(0,o.kt)("a",{parentName:"li",href:"./previewgenerator"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Vaultwarden (formerly known as Bitwarden RS) (",(0,o.kt)("a",{parentName:"li",href:"./vaultwarden"},"instructions"),")",(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Attention! Please use the ",(0,o.kt)("strong",{parentName:"p"},"same domain")," that you've used before for Bitwarden RS or Vaultwarden (if you've had Bitwarden RS or Vaultwarden installed on your old server!)")))),(0,o.kt)("li",{parentName:"ul"},"Reinstall Pi-hole (",(0,o.kt)("a",{parentName:"li",href:"./pi-hole"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall PiVPN (",(0,o.kt)("a",{parentName:"li",href:"./pivpn"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Redo the change of the update time (",(0,o.kt)("a",{parentName:"li",href:"./change-update-time"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Redo the change to only allow access to your server from inside your home network (",(0,o.kt)("a",{parentName:"li",href:"./home-access-only"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall Plex Media Server (",(0,o.kt)("a",{parentName:"li",href:"./pms"},"instructions"),")",(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When reinstalling Plex, all drives that Plex shall have access to need to be mounted to the server! (Otherwise there could appear some problems.) You can make sure that this is the case by connecting all drives to your server and rebooting your sever before reinstalling Plex!")))),(0,o.kt)("li",{parentName:"ul"},"Reinstall Remotedesktop (",(0,o.kt)("a",{parentName:"li",href:"./remotedesktop"},"instructions"),")"),(0,o.kt)("li",{parentName:"ul"},"Reinstall other apps that you might have had installed before (",(0,o.kt)("a",{parentName:"li",href:"./more-apps"},"overview"),") ")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"daily backup")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that the next scheduled daily backup will take a long time because the local borgbackup cache has to be rebuilt. So don't be surprised if this is the case since it is completely normal!"))))}d.isMDXComponent=!0}}]);