"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[154],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},190:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"minimal-requirements",title:"What are the minimal Hardware requirements?",sidebar_label:"Minimal Requirements"},u=void 0,s={unversionedId:"minimal-requirements",id:"minimal-requirements",title:"What are the minimal Hardware requirements?",description:"You will need the following things:",source:"@site/docs/minimal-requirements.md",sourceDirName:".",slug:"/minimal-requirements",permalink:"/Nextcloud-NAS-Guide/docs/minimal-requirements",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/minimal-requirements.md",tags:[],version:"current",frontMatter:{id:"minimal-requirements",title:"What are the minimal Hardware requirements?",sidebar_label:"Minimal Requirements"},sidebar:"docs",previous:{title:"Considerations",permalink:"/Nextcloud-NAS-Guide/docs/considerations"},next:{title:"Hardware recommendations",permalink:"/Nextcloud-NAS-Guide/docs/hardware-recommendations"}},c=[],m={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You will need the following things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A x86 PC that will function as your server with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"At least 2 Cores (because most scripts need at least as much)"),(0,i.kt)("li",{parentName:"ul"},"At least 4GB RAM (because most scripts need at least as much)"),(0,i.kt)("li",{parentName:"ul"},"One internal SSD with at least 128GB (because some space will get reserved and you don't want to run into space issues)"),(0,i.kt)("li",{parentName:"ul"},"Power Supply for your server (if not built-in)"),(0,i.kt)("li",{parentName:"ul"},"TPM2 support (you need to Google if the PC has built-in TPM2 support if it is not a NUC. It is needed for automatically unlocking the encrypted root partition while booting.)"))),(0,i.kt)("li",{parentName:"ul"},"One (or more) external SSD (or HDD) that will store your personal data with at least 250GB (depending on how much data you are planning to store on your server. Rule of thumb: this drive should be at least twice as big as your current private data)"),(0,i.kt)("li",{parentName:"ul"},"Two additional external HDD's that will function as backup drives with at least the same size like the external data SSD/HDD, respectively (because one will be used for daily backups and one for off-shore backups)"),(0,i.kt)("li",{parentName:"ul"},"One USB-stick with at least 8GB (for installing Ubuntu)"),(0,i.kt)("li",{parentName:"ul"},"For the initial setup you will also need a HDMI-display (e.g. monitor/tv/beamer), USB-mouse and -keyboard. If you don't have one: you don't need to buy those. Borrowing or renting those should be enough. (You really only need them for the initial setup, because you will access your server over SSH afterwards.)"),(0,i.kt)("li",{parentName:"ul"},"For accessing the files on the external data SSD/HDD directly, you will also need a Laptop/PC with Windows or Linux a later point: ",(0,i.kt)("a",{parentName:"li",href:"./access-veracrypt"},"click here"))))}p.isMDXComponent=!0}}]);