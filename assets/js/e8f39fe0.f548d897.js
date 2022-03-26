"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5060],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2915:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"format-encrypt-mount",title:"How to format, encrypt and mount the external data SSD/HDD?",sidebar_label:"Format, encrypt & mount"},s=void 0,c={unversionedId:"format-encrypt-mount",id:"format-encrypt-mount",title:"How to format, encrypt and mount the external data SSD/HDD?",description:"In order to prepare the external data SSD/HDD for your server, you should first format and encrypt it using Veracrypt.",source:"@site/docs/format-encrypt-mount.md",sourceDirName:".",slug:"/format-encrypt-mount",permalink:"/Nextcloud-NAS-Guide/docs/format-encrypt-mount",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/format-encrypt-mount.md",tags:[],version:"current",frontMatter:{id:"format-encrypt-mount",title:"How to format, encrypt and mount the external data SSD/HDD?",sidebar_label:"Format, encrypt & mount"},sidebar:"docs",previous:{title:"Overview",permalink:"/Nextcloud-NAS-Guide/docs/data-ssd"},next:{title:"Veracrypt drives - PC access",permalink:"/Nextcloud-NAS-Guide/docs/access-veracrypt"}},p={},m=[],d={toc:m};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to prepare the external data SSD/HDD for your server, you should first format and encrypt it using ",(0,o.kt)("inlineCode",{parentName:"p"},"Veracrypt"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning: this will delete any data on this drive!")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Please ",(0,o.kt)("strong",{parentName:"li"},"don't")," connect the external data SSD/HDD to your server, yet!"),(0,o.kt)("li",{parentName:"ol"},"Run over CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"BTRFS Veracrypt")),(0,o.kt)("li",{parentName:"ol"},"Select that you want to ",(0,o.kt)("strong",{parentName:"li"},"install")," veracrypt"),(0,o.kt)("li",{parentName:"ol"},"Select that you want to continue"),(0,o.kt)("li",{parentName:"ol"},"Wait until it is installed"),(0,o.kt)("li",{parentName:"ol"},"After pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"OK"),", ",(0,o.kt)("strong",{parentName:"li"},"connect")," the drive to your server"),(0,o.kt)("li",{parentName:"ol"},"It should get found after a few seconds"),(0,o.kt)("li",{parentName:"ol"},"Select the drive that you want to format and encrypt"),(0,o.kt)("li",{parentName:"ol"},"Enter a difficult ",(0,o.kt)("strong",{parentName:"li"},"password")," and store it at a safe place.",(0,o.kt)("br",null),"\n(Difficult password means at least 20 characters long, containing small and tall letters, digits and special characters)"),(0,o.kt)("li",{parentName:"ol"},"Confirm the password"),(0,o.kt)("li",{parentName:"ol"},"Confirm that you are sure to format and encrypt the drive by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"Now the drive should be successfully formatted and encrypted"),(0,o.kt)("li",{parentName:"ol"},"Choose to ",(0,o.kt)("strong",{parentName:"li"},"mount")," the drive to your server"),(0,o.kt)("li",{parentName:"ol"},"Type in the ",(0,o.kt)("strong",{parentName:"li"},"mountpath")," that you want to use, recommended is ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/data")),(0,o.kt)("li",{parentName:"ol"},"Wait until everything is configured")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now, the drive should be ready.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"BTW"),": You could run this script a second time now to format, encrypt and mount a second drive, if you want to use more than one external data SSD/HDD. (The two backup HDDs will get configured below.)"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After you've exited the script, you should reinstall Disk Monitoring to make sure that all drives support Smart Monitoring and are healthy. (",(0,o.kt)("a",{parentName:"p",href:"./smart"},"instructions"),")"))))}u.isMDXComponent=!0}}]);