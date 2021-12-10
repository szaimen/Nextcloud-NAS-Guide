"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8600],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"install-nextcloud",title:"How to install Nextcloud?",sidebar_label:"Install Nextcloud"},s=void 0,u={unversionedId:"install-nextcloud",id:"install-nextcloud",title:"How to install Nextcloud?",description:"In order to set up Nextcloud, you should use the scripts from the Nextcloud-VM, since it is the most user-friendly way to set up Nextcloud as far as we know and has many features built-in.",source:"@site/docs/install-nextcloud.md",sourceDirName:".",slug:"/install-nextcloud",permalink:"/Nextcloud-NAS-Guide/docs/install-nextcloud",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/install-nextcloud.md",tags:[],version:"current",frontMatter:{id:"install-nextcloud",title:"How to install Nextcloud?",sidebar_label:"Install Nextcloud"},sidebar:"docs",previous:{title:"TPM2 unlocking & Secure GRUB",permalink:"/Nextcloud-NAS-Guide/docs/tpm2"},next:{title:"Nextcloud startup",permalink:"/Nextcloud-NAS-Guide/docs/nextcloud-startup"}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to set up Nextcloud, you should use the scripts from the Nextcloud-VM, since it is the most user-friendly way to set up Nextcloud as far as we know and has many features built-in."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect from a PC in the same network to your server over SSH"),(0,a.kt)("li",{parentName:"ol"},"Copy and paste the following command over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sudo lvcreate --size 5G --name "NcVM-installation" ubuntu-vg \\\n&& sudo lvcreate --size 30G --name "NcVM-reserved" ubuntu-vg \\\n&& wget https://raw.githubusercontent.com/nextcloud/vm/master/nextcloud_install_production.sh \\\n&& sudo bash nextcloud_install_production.sh --not-latest\n'))),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("strong",{parentName:"li"},"password")," again"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"We have prepared a slideshow for you that you can use. Please click ",(0,a.kt)("a",{parentName:"strong",href:"https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-installation"},"here")," to start the slideshow. Otherwise, just continue with the steps below")),(0,a.kt)("li",{parentName:"ol"},"Select that you ",(0,a.kt)("strong",{parentName:"li"},"want")," to make all ",(0,a.kt)("strong",{parentName:"li"},"free space")," available to your ",(0,a.kt)("strong",{parentName:"li"},"root partition")),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"1 Disk (Only use one disk /mnt/ncdata - NO ZFS!")," since 2 Disks is currently not supported by the backup scripts since it complicates things by a lot and doesn't support disk encryption. Additionally you would need one dedicated disk only for that directory."),(0,a.kt)("li",{parentName:"ol"},"Wait until everything is installed"),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Local (DNS on gateway)"),", because then you can choose the DNS server in your router in one place for all your devices"),(0,a.kt)("li",{parentName:"ol"},"Wait until everything is installed"),(0,a.kt)("li",{parentName:"ol"},"Deselect any apps that you don't want to install. (It is recommended to ",(0,a.kt)("strong",{parentName:"li"},"deselect IssueTemplate, Mail & Group-Folders"),". If you wonder: you will be able to install all those apps manually directly over the Nextcloud GUI if you should ever need them in the future.)"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," to ",(0,a.kt)("strong",{parentName:"li"},"reboot")," your server")),(0,a.kt)("p",null,"Now the initial Nextcloud setup should be done."))}p.isMDXComponent=!0}}]);