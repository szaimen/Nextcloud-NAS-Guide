"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8710],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},811:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"access-veracrypt",title:"How to access the encrypted external data SSD/HDD on any PC?",sidebar_label:"Veracrypt drives - PC access"},c=void 0,s={unversionedId:"access-veracrypt",id:"access-veracrypt",title:"How to access the encrypted external data SSD/HDD on any PC?",description:"Next, you should open the encrypted external data SSD/HDD on a different PC to be able to copy files or create the sensible folder structure.",source:"@site/docs/access-veracrypt.md",sourceDirName:".",slug:"/access-veracrypt",permalink:"/Nextcloud-NAS-Guide/docs/access-veracrypt",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/access-veracrypt.md",tags:[],version:"current",frontMatter:{id:"access-veracrypt",title:"How to access the encrypted external data SSD/HDD on any PC?",sidebar_label:"Veracrypt drives - PC access"},sidebar:"docs",previous:{title:"Format, encrypt & mount",permalink:"/Nextcloud-NAS-Guide/docs/format-encrypt-mount"},next:{title:"Sensible folder structure",permalink:"/Nextcloud-NAS-Guide/docs/sensible-folder-structure"}},p={},d=[],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Next, you should open the encrypted external data SSD/HDD on a different PC to be able to copy files or create the sensible folder structure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Power off")," your server by pressing the ",(0,a.kt)("inlineCode",{parentName:"li"},"power button")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Disconnect")," the external data SSD/HDD"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don`t")," connect the drive to your PC, yet"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Download")," Veracrypt from ",(0,a.kt)("a",{parentName:"li",href:"https://www.veracrypt.fr/en/Downloads.html"},"here")," and ",(0,a.kt)("strong",{parentName:"li"},"install")," it on your PC (if needed, ",(0,a.kt)("strong",{parentName:"li"},"restart")," your PC)"),(0,a.kt)("li",{parentName:"ol"},"Now, ",(0,a.kt)("strong",{parentName:"li"},"connect")," the drive to your PC (choose to ",(0,a.kt)("strong",{parentName:"li"},"not")," reformat the drive if you get a popup, that it must get reformatted)",(0,a.kt)("admonition",{parentName:"li",title:"BTRFS on Windows (this section can be skipped on Linux)",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Since the Veracrypt drive is internally BTRFS formatted and you've probably not yet installed the Open Source BTRFS Windows driver, you probably need to install it first before you are able to access the drive via Veracrypt:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Open this link: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/maharmstone/btrfs/releases"},"click here")),(0,a.kt)("li",{parentName:"ol"},"Download the latest ",(0,a.kt)("inlineCode",{parentName:"li"},"btrfs-x.x.x.zip")," release file like e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"btrfs-1.7.8.1.zip")),(0,a.kt)("li",{parentName:"ol"},"Extract the zip archive"),(0,a.kt)("li",{parentName:"ol"},"In the folder, right-click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"btrfs.inf")," file and select ",(0,a.kt)("inlineCode",{parentName:"li"},"install")," (you might need to confirm that you want to execute the file and choose to trust the author) and confirm to ",(0,a.kt)("inlineCode",{parentName:"li"},"reboot")," if you get asked to do so."),(0,a.kt)("li",{parentName:"ol"},"After the restart, the driver might still not work if ",(0,a.kt)("inlineCode",{parentName:"li"},"Secure Boot")," is enabled which is the case on most devices nowadays."),(0,a.kt)("li",{parentName:"ol"},"In order to solve this, open ",(0,a.kt)("strong",{parentName:"li"},"regedit"),", navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\CI\\Policy"),", create a new ",(0,a.kt)("inlineCode",{parentName:"li"},"DWORD")," value, name it ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradedSystem"),", set it to ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," and reboot another time (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/maharmstone/btrfs#secureboot"},"source"),")"),(0,a.kt)("li",{parentName:"ol"},"After the reboot, the driver should work correctly.")))),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"Veracrypt"),", select the drive, type in the ",(0,a.kt)("strong",{parentName:"li"},"password")," and wait until it is mounted to your system",(0,a.kt)("br",null),"\n(Here is a guide how to do that in detail: ",(0,a.kt)("a",{parentName:"li",href:"https://tdicomputing.dartmouth.edu/veracrypt-mounting-encrypted-volumes-containers/#windows"},"click here"),")")),(0,a.kt)("p",null,"Now you should be able to access the encrypted drive."))}m.isMDXComponent=!0}}]);