(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4037],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return d},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8294:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i={id:"considerations",title:"Are there any considerations you should know of?",sidebar_label:"Considerations"},s={unversionedId:"considerations",id:"considerations",isDocsHomePage:!1,title:"Are there any considerations you should know of?",description:"Please read carefully through this list of considerations you should know of!",source:"@site/docs/considerations.md",sourceDirName:".",slug:"/considerations",permalink:"/Nextcloud-NAS-Guide/docs/considerations",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/considerations.md",version:"current",sidebar_label:"Considerations",frontMatter:{id:"considerations",title:"Are there any considerations you should know of?",sidebar_label:"Considerations"},sidebar:"docs",previous:{title:"Before you start",permalink:"/Nextcloud-NAS-Guide/docs/before-start"},next:{title:"What are the minimal Hardware requirements?",permalink:"/Nextcloud-NAS-Guide/docs/minimal-requirements"}},l=[],c={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Please read carefully through this list of considerations you should know of!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This guide is only meant for home servers, for nothing else."),(0,a.kt)("li",{parentName:"ul"},"It is provided as is and without warranty of any kind. (Read the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/szaimen/Nextcloud-NAS-Guide/blob/main/LICENSE"},"License"),")"),(0,a.kt)("li",{parentName:"ul"},"You should ",(0,a.kt)("strong",{parentName:"li"},"neither")," use Nextclouds ",(0,a.kt)("inlineCode",{parentName:"li"},"Groupfolder")," app ",(0,a.kt)("strong",{parentName:"li"},"nor")," use ",(0,a.kt)("inlineCode",{parentName:"li"},"normal Nextcloud storage")," since those have issues with external changes that are made via SMB, and other shortcomings. Also all files that are created via those two storage providers will be located on your root disk which is limitated in its size and you won't be able to use SMB with this location. The only Nextcloud storage app that should get used is the ",(0,a.kt)("inlineCode",{parentName:"li"},"External Storage app")," since you can use it to mount your files from external drives into your Nextcloud which is the recommended way to mount files in Nextcloud. And don't despair! This guide covers how to do this. Please note that some Nextcloud apps have limitations when used together with the ",(0,a.kt)("inlineCode",{parentName:"li"},"external storage app"),", though."),(0,a.kt)("li",{parentName:"ul"},"You shoud ",(0,a.kt)("strong",{parentName:"li"},"not")," use any encryption that is offered by Nextcloud e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"Server side encryption")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"End to end encryption")," if you want to access you data over SMB or other services since the files that are encrypted like this will only be readable through Nextcloud which also introduces problems regarding backups and such. Also it is not necessary since you will use disk encryption for your data. On the other hand: if you only want to encrypt very less files (e.g. only your most important) which don't need to be readable over SMB or other services, ",(0,a.kt)("inlineCode",{parentName:"li"},"End to end encryption")," is the encryption to choose. Using ",(0,a.kt)("inlineCode",{parentName:"li"},"E2E")," will make sure that not even the server admin can decrypt the files so be warned! You can find a good explanation of this feature ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/desktop/blob/cd598a00f7b40c2fa71a0625df106aa775a28e46/doc/architecture.rst#end-to-end-encryption"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"Most of this guide is based on scripts that are provided by the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/vm"},(0,a.kt)("strong",{parentName:"a"},"Nextcloud-VM"))," and will need to be executed in order to make everything work. This could theoretically set your server under risk but we made sure that all of them are secure."),(0,a.kt)("li",{parentName:"ul"},"The internal root partition, the external data SSD/HDD and the backups will be ",(0,a.kt)("strong",{parentName:"li"},"encrypted")," for security. This could theoretically prevent you from accessing those if you loose the key/passphrase. So please always store the passwords/passphrases at a safe place!"),(0,a.kt)("li",{parentName:"ul"},"The three external drives will be ",(0,a.kt)("strong",{parentName:"li"},"NTFS")," formatted, which has the advantage that they can be read by almost any x86 OS. But it doesn't provide features like snapshots or integrity checking. "),(0,a.kt)("li",{parentName:"ul"},"Also please note that while formatting, those drives will not be completely erased because that could take hours depending on the drive size. So if you already had data on one of those drives, please make sure to wipe them manually if you want that security. (otherwise an attacker could theoretically be able to restore some of your private data if it was stored unencrypted on one of those drives before.)"),(0,a.kt)("li",{parentName:"ul"},"You will use an Open Source program called ",(0,a.kt)("inlineCode",{parentName:"li"},"Veracrypt")," for encrypting and formatting the external data SSD/HDD which has the advantage that this tool is compatible with almost any OS but the program needs to get installed before you can decrypt the drive and access the data. Also, the program on your server needs to get installed from a 3rd party repository in order to be always up-to-date but this could theoretically set your server under risk."),(0,a.kt)("li",{parentName:"ul"},"You will set up ",(0,a.kt)("strong",{parentName:"li"},"TPM2 unlocking")," which will automatically unlock your encrypted root partition during boot. This is a big convenience factor but would allow an attacker theoretically to break the encryption of this partition (only with much effort), if he/she steals the whole server. Encrypting the root partition makes sense nonetheless, since an attacker cannot simply take out the internal drive, connect it to another PC and read out all the data in cleartext."),(0,a.kt)("li",{parentName:"ul"},"You will create an off-shore backup drive that needs to get connected to your server every ",(0,a.kt)("strong",{parentName:"li"},"90 days")," (this is configurable) in order to make a new backup. After creating one off-shore backup, the drive should get disconnected from your server and stored at a safe place outside your home. So you will need a place where to store it during this time and connect it manually every 90 days (or as configured)."),(0,a.kt)("li",{parentName:"ul"},"You need a capable internet router to make this solution work! Cheap provider routers won't work in most cases. Recommended are Fritz!Box's by AVM"),(0,a.kt)("li",{parentName:"ul"},"This solution is meant to run 24/7. Manually shutting the server down/rebooting or disconnecting, etc. can cause problems.")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"If not all points above are acceptable for you, you will need to look for a different solution. Otherwise please continue!")))))}d.isMDXComponent=!0}}]);