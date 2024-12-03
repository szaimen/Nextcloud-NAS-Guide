"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[169],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return a?r.createElement(y,i(i({ref:t},p),{},{components:a})):r.createElement(y,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6204:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"daily-backup",title:"How to set up a daily backup?",sidebar_label:"Daily Backup"},c=void 0,u={unversionedId:"daily-backup",id:"daily-backup",title:"How to set up a daily backup?",description:"Now that everything is prepared, you should set up a daily backup for your server.",source:"@site/docs/daily-backup.md",sourceDirName:".",slug:"/daily-backup",permalink:"/Nextcloud-NAS-Guide/docs/daily-backup",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/daily-backup.md",tags:[],version:"current",frontMatter:{id:"daily-backup",title:"How to set up a daily backup?",sidebar_label:"Daily Backup"},sidebar:"docs",previous:{title:"Update manually Nextcloud minor",permalink:"/Nextcloud-NAS-Guide/docs/update-manually"},next:{title:"Off-Shore Backup",permalink:"/Nextcloud-NAS-Guide/docs/offshore-backup"}},p={},s=[],d={toc:s};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that everything is prepared, you should set up a daily backup for your server."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run over CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Daily Backup Wizard")),(0,o.kt)("li",{parentName:"ol"},"Confirm that you want to ",(0,o.kt)("strong",{parentName:"li"},"create")," a daily backup script"),(0,o.kt)("li",{parentName:"ol"},"Confirm that you will leave the backup drive connected"),(0,o.kt)("li",{parentName:"ol"},"Select your external data SSD/HDD to be ",(0,o.kt)("strong",{parentName:"li"},"included")," in backups"),(0,o.kt)("li",{parentName:"ol"},"Choose that you want to backup the ",(0,o.kt)("strong",{parentName:"li"},"whole")," external data SSD/HDD"),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"daily backup drive")," as backup target"),(0,o.kt)("li",{parentName:"ol"},"Choose to use the recommended backup directory"),(0,o.kt)("li",{parentName:"ol"},"Enter a difficult ",(0,o.kt)("strong",{parentName:"li"},"encryption key")," for your backup and store it at a safe place",(0,o.kt)("br",null),"\n(Difficult encryption key means at least 20 characters long, containing small and tall letters, digits and special characters)"),(0,o.kt)("li",{parentName:"ol"},"Choose to run the backup at the recommended time at ",(0,o.kt)("inlineCode",{parentName:"li"},"4.00 am")),(0,o.kt)("li",{parentName:"ol"},"Now everything will get set up"),(0,o.kt)("li",{parentName:"ol"},"You should now receive the daily backup config file via mail. Please ",(0,o.kt)("strong",{parentName:"li"},"save/archive")," it"),(0,o.kt)("li",{parentName:"ol"},"Finally, you will see the message that the backup script was successfully created")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is located here: ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/scripts/daily-borg-backup.sh")," and will get executed at your chosen backup time, most likely ",(0,o.kt)("inlineCode",{parentName:"p"},"4.00 am"),". You will get ",(0,o.kt)("strong",{parentName:"p"},"notified")," by mail if something fails and also if the backup was successful. The script which will create the daily backup is based on a program called ",(0,o.kt)("inlineCode",{parentName:"p"},"borgbackup")," which is used to make daily incremental, compressed and deduplicated backup archives from your root partition and external data SSD/HDD.")))}m.isMDXComponent=!0}}]);