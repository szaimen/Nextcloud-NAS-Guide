"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4643],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7458:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"sensible-folder-structure",title:"How to create a sensible folder structure on the external data SSD/HDD?",sidebar_label:"Sensible folder structure"},u=void 0,s={unversionedId:"sensible-folder-structure",id:"sensible-folder-structure",title:"How to create a sensible folder structure on the external data SSD/HDD?",description:"Recommended is to create the folder structure on the external data SSD/HDD like this.",source:"@site/docs/sensible-folder-structure.md",sourceDirName:".",slug:"/sensible-folder-structure",permalink:"/Nextcloud-NAS-Guide/docs/sensible-folder-structure",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/sensible-folder-structure.md",tags:[],version:"current",frontMatter:{id:"sensible-folder-structure",title:"How to create a sensible folder structure on the external data SSD/HDD?",sidebar_label:"Sensible folder structure"},sidebar:"docs",previous:{title:"Veracrypt drives - PC access",permalink:"/Nextcloud-NAS-Guide/docs/access-veracrypt"},next:{title:"Overview",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds"}},c={},d=[],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recommended is to create the folder structure on the external data SSD/HDD like this."),(0,o.kt)("p",null,"Create a folder on the drive that contains all your files. Inside this folder, there will be the user folders and other folders that shall get shared between users in the future. Every user-folder should contain an ",(0,o.kt)("inlineCode",{parentName:"p"},"Archive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Sync")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup folder")," and you should strictly separate between them. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Sync")," folder should contain files and folders that are used or changed often and thus will get synchronized via the Nextcloud Desktop client. ",(0,o.kt)("inlineCode",{parentName:"p"},"Archive")," contains all files and folders that are not needed or changed often. ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," will contain folders in which e.g. photos from your smartphone will get automatically uploaded or e.g. you can sync your desktop from your laptop to a folder in the Backup folder. (Just so that you know: the backup folder is meant to be a backup folder for data from client devices but isn't the server backup.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here is an example how it could look like:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"external-SSD",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"your data folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"User1 folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Backup"),(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Archive"))),(0,o.kt)("li",{parentName:"ul"},"User2 folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Backup"),(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Archive"))),(0,o.kt)("li",{parentName:"ul"},"Data exchange folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Folder that gets shared between users"),(0,o.kt)("li",{parentName:"ul"},"Some other folder that gets shared between the same users"))),(0,o.kt)("li",{parentName:"ul"},"Some other data exchange folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"And some folder inside"))),(0,o.kt)("li",{parentName:"ul"},"user5 folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Backup"),(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Archive"))))),(0,o.kt)("li",{parentName:"ul"},"Some other folder")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The exact foldernames and order can be different")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"BTW"),": you can also spread your files over more than one external data SSD/HDD using the same system. Of course every ",(0,o.kt)("inlineCode",{parentName:"p"},"User folder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data exchange folder")," will need to be completely on one disk but you could manually add some different user folders or data exchange folders on a second drive. (this might also be useful if you run out of space on your external data SSD/HDD someday in the future)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now copy all private files to the external data SSD/HDD or at least create the folder structure.")),(0,o.kt)("p",null,"If you are done, ",(0,o.kt)("strong",{parentName:"p"},"eject")," the drive from your PC, ",(0,o.kt)("strong",{parentName:"p"},"connect")," the external data SSD/HDD to your server again and ",(0,o.kt)("strong",{parentName:"p"},"power the server on")," by pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"power button")))}f.isMDXComponent=!0}}]);