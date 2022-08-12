"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2884],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"ssh",title:"How to connect to your server over SSH?",sidebar_label:"SSH"},u=void 0,l={unversionedId:"ssh",id:"ssh",title:"How to connect to your server over SSH?",description:"In order to connect to your server from a PC in the same network, you should use SSH. You are then able to control your server, use copy and paste and more.",source:"@site/docs/ssh.md",sourceDirName:".",slug:"/ssh",permalink:"/Nextcloud-NAS-Guide/docs/ssh",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/ssh.md",tags:[],version:"current",frontMatter:{id:"ssh",title:"How to connect to your server over SSH?",sidebar_label:"SSH"},sidebar:"docs",previous:{title:"Ubuntu Server",permalink:"/Nextcloud-NAS-Guide/docs/ubuntu"},next:{title:"TPM2 unlocking & Secure GRUB",permalink:"/Nextcloud-NAS-Guide/docs/tpm2"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to connect to your server from a PC in the same network, you should use SSH. You are then able to control your server, use copy and paste and more."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find out the IPv4-address of your server (if not already done): Either login to your server to show it or it will be presented on the login screen after installing Nextcloud"),(0,i.kt)("li",{parentName:"ol"},"Open a command prompt on Windows 10 or terminal on Linux"),(0,i.kt)("li",{parentName:"ol"},"Type in ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh username@ip-address"),(0,i.kt)("br",null),"\nOne example is: ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh ncadmin@192.168.178.144"),(0,i.kt)("br",null),"\n(If it times out although your server is running, the IPv4-address might be wrong. Then please look at step 1 how to find out the IPv4-address)"),(0,i.kt)("li",{parentName:"ol"},"If you connect the first time to your server, you will be asked to confirm the server fingerprint which you should do by typing in ",(0,i.kt)("inlineCode",{parentName:"li"},"yes")," and pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"[ENTER]"),"."),(0,i.kt)("li",{parentName:"ol"},"Now type in your Ubuntu user ",(0,i.kt)("strong",{parentName:"li"},"password"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you get a fingerprint warning (because the SSH-fingerprint of your server changed), you can reset the fingerprint by typing in your Console/Terminal on your client PC:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen -R ip-address"),(0,i.kt)("br",null),"\nso e.g.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen -R 192.168.178.144"))))}m.isMDXComponent=!0}}]);