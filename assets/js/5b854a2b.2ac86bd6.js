"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1194],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"mount-hdd",title:"How to mount an additional HDD for Movies/TV-Shows?",sidebar_label:"Mount HDD for Movies/TV-Shows"},l=void 0,u={unversionedId:"mount-hdd",id:"mount-hdd",title:"How to mount an additional HDD for Movies/TV-Shows?",description:"Preparations",source:"@site/docs/mount-hdd.md",sourceDirName:".",slug:"/mount-hdd",permalink:"/Nextcloud-NAS-Guide/docs/mount-hdd",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/mount-hdd.md",tags:[],version:"current",frontMatter:{id:"mount-hdd",title:"How to mount an additional HDD for Movies/TV-Shows?",sidebar_label:"Mount HDD for Movies/TV-Shows"},sidebar:"docs",previous:{title:"Create subdomain and edit CNAME entry",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname"},next:{title:"Connect via SMB",permalink:"/Nextcloud-NAS-Guide/docs/smb-connect"}},d={},p=[{value:"Preparations",id:"preparations",level:3},{value:"Execution",id:"execution",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"preparations"},"Preparations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Format the HDD to BTRFS (",(0,a.kt)("a",{parentName:"li",href:"./format-backup-hdds"},"instructions"),") (you can skip the formatting if the drive is already BTRFS formatted.)",(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"During formatting, use as ",(0,a.kt)("inlineCode",{parentName:"p"},"drive label")," something like ",(0,a.kt)("inlineCode",{parentName:"p"},"Movies_TV-shows")," or something else that fits. Also just do the procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"one time")," and not twice since you only want to format one drive!")))),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Please ",(0,a.kt)("strong",{parentName:"li"},"don't")," connect the new HDD that you want mount to your server, yet or ",(0,a.kt)("strong",{parentName:"li"},"disconnect")," it from your server!\n(Already mounted drives must stay connected; disconnecting and connecting the HDD that you want to mount is just so that the system is able to understand which drive you want to mount.)"),(0,a.kt)("li",{parentName:"ol"},"Run over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"BTRFS Mount")),(0,a.kt)("li",{parentName:"ol"},"Select to ",(0,a.kt)("inlineCode",{parentName:"li"},"Mount a drive")),(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," to start searching for new BTRFS drives"),(0,a.kt)("li",{parentName:"ol"},"Now ",(0,a.kt)("strong",{parentName:"li"},"connect")," the HDD to your server (you have 1 minute)"),(0,a.kt)("li",{parentName:"ol"},"You should get the message that the drive was found"),(0,a.kt)("li",{parentName:"ol"},"Wait until the drive has spin up"),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},"BTRFS partition")," that shall get mounted"),(0,a.kt)("li",{parentName:"ol"},"Type in the mountpath that you would like to use. Recommended is something like ",(0,a.kt)("inlineCode",{parentName:"li"},"/mnt/Movies_TV-shows"),"."),(0,a.kt)("li",{parentName:"ol"},"You should get the message that the mount was successful."),(0,a.kt)("li",{parentName:"ol"},"When asked if this is a backup drive, confirm ",(0,a.kt)("inlineCode",{parentName:"li"},"No")," by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]"),"!"),(0,a.kt)("li",{parentName:"ol"},"You should see the message now, that PLEX Media Server was found. Press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to continue"),(0,a.kt)("li",{parentName:"ol"},"Wait until everything is done and you see the popup that ",(0,a.kt)("strong",{parentName:"li"},"PLEX was adjusted!")),(0,a.kt)("li",{parentName:"ol"},"Now back to the Menu, just choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Exit")," to exit this script.")),(0,a.kt)("p",null,"Now, the drive should be accessible by PLEX!"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This drive is only accessible by PLEX and not in Nextcloud/SMB. It is not encrypted and doesn't get backed up. So please make sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"not")," store any private/personal data on this HDD! It is really only meant to store Movies/TV-Shows!")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"After you've exited the script, you should reinstall Disk Monitoring to make sure that all drives support Smart Monitoring and are healthy. (",(0,a.kt)("a",{parentName:"p",href:"./smart"},"instructions"),")")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"At least you should get informed if some S.M.A.R.T issues get reported by disk-monitoring that you've set up earlier (",(0,a.kt)("a",{parentName:"p",href:"./smart"},"here"),"), so that if you are lucky, you can copy the files in time to a new drive before it fails. But this is no Backup and no real data protection! In my opinion this is okay, though since the data that you should store on this HDD like Movies/TV-Shows is not precious because you can always digitize those again from the DVDs/Blu-rays so ",(0,a.kt)("strong",{parentName:"p"},"don't sell and don't give away")," those! If you are unlucky and the drive fails before you've successfully copied all the data to a new drive, not encrypting the drive makes it much easier to recover some data if you should decide to pay for data-recovery. Better would most likely be in this case just redigitizing the Movies/TV-Shows from their DVD/Blu-ray.")))}m.isMDXComponent=!0}}]);