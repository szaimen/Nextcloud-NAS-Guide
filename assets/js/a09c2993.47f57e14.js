"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"introduction",title:"Introduction to the Nextcloud-Nas-Guide",sidebar_label:"Introduction",slug:"/"},u=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction to the Nextcloud-Nas-Guide",description:"This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it Nextcloud-NAS because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the Nextcloud-VM which you will use to set up your server.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/Nextcloud-NAS-Guide/docs/",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction to the Nextcloud-Nas-Guide",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Instructions",permalink:"/Nextcloud-NAS-Guide/docs/instructions"}},l=[],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it ",(0,i.kt)("inlineCode",{parentName:"p"},"Nextcloud-NAS")," because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nextcloud/vm"},"Nextcloud-VM")," which you will use to set up your server."),(0,i.kt)("p",null,"Here is a not complete list of things that this guide covers: hardware recommendations, UEFI/Bios configuration, Ubuntu Installation, Nextcloud installation, full disk encryption, TPM2 unlocking, Let's encrypt for getting valid certificates, Automatic Updates, geoblocking to allow access to your server only from specific countries/continents, server mail notifications, disk monitoring and notifications, Fail2Ban to block too much failed login attempts, previewgenerator to speed up preview loading in Nextcloud, ClamAV for scanning and detecting your files for malware, a complete backup solution, a way to manage a full fletched SMB-server, Pi-hole as network wide ad-blocker, PiVPN as VPN-server, Vaultwarden as open-source password server, OnlyOffice Documentserver integration for Nextcloud, High-performance backend for Nextcloud Talk and PLEX as media server."),(0,i.kt)("p",null,"If you are interested in this solution, please click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Next")," button below."))}p.isMDXComponent=!0}}]);