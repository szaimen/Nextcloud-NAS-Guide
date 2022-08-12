"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6924],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"smart",title:"How to set up Disk Monitoring?",sidebar_label:"Disk Monitoring"},u=void 0,l={unversionedId:"smart",id:"smart",title:"How to set up Disk Monitoring?",description:"Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up Disk Monitoring.",source:"@site/docs/smart.md",sourceDirName:".",slug:"/smart",permalink:"/Nextcloud-NAS-Guide/docs/smart",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smart.md",tags:[],version:"current",frontMatter:{id:"smart",title:"How to set up Disk Monitoring?",sidebar_label:"Disk Monitoring"},sidebar:"docs",previous:{title:"Geoblocking",permalink:"/Nextcloud-NAS-Guide/docs/geoblock"},next:{title:"Fail2Ban",permalink:"/Nextcloud-NAS-Guide/docs/fail2ban"}},c={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up Disk Monitoring. "),(0,i.kt)("admonition",{title:"Please note!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is no alternative to a backup solution!")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Disk Monitoring")),(0,i.kt)("li",{parentName:"ol"},"Choose to install/reinstall ",(0,i.kt)("strong",{parentName:"li"},"S.M.A.R.T Monitoring")),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Directly")," to get informed instantly if a disk error was found (and wait until it reports that S.M.A.R.T Monitoring was successfully configured)")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If one or more of your drives doesn't support Smart Monitoring or is unhealthy, you will see a popup that this is the case. If a certain drive that was reported is unhealthy, you should switch the drive because it cannot be trusted. If Smart Monitoring isn't supported on the reported drive, it is up to you to decide if you switch the drive with a supported one or use it, nevertheless. Though, be warned that the system won't be able to warn you about disk health problems of the affected drive in the future! Because of that it is recommended to switch reported drives in any case!")))}f.isMDXComponent=!0}}]);