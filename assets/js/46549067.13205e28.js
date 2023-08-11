"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[545],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"bios-uefi",title:"How to configure the BIOS/UEFI?",sidebar_label:"BIOS/UEFI"},s=void 0,c={unversionedId:"bios-uefi",id:"bios-uefi",title:"How to configure the BIOS/UEFI?",description:"You will need to configure your BIOS/UEFI in order to harden security and to make things work.",source:"@site/docs/bios-uefi.md",sourceDirName:".",slug:"/bios-uefi",permalink:"/Nextcloud-NAS-Guide/docs/bios-uefi",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/bios-uefi.md",tags:[],version:"current",frontMatter:{id:"bios-uefi",title:"How to configure the BIOS/UEFI?",sidebar_label:"BIOS/UEFI"},sidebar:"docs",previous:{title:"Overview",permalink:"/Nextcloud-NAS-Guide/docs/basic-setup"},next:{title:"Ubuntu Server",permalink:"/Nextcloud-NAS-Guide/docs/ubuntu"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You will need to configure your BIOS/UEFI in order to harden security and to make things work. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The following guide is especially written for Intel Visual Bios which is present on Intel NUC devices. If you use a different device as your server it is possible, that some things are different for you. Since BIOS/UEFI can be visually very different, this guide is only plain text.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Connect")," the power-cable, HDMI-display, USB-mouse and -keyboard to your server"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Power on")," your server and ",(0,i.kt)("strong",{parentName:"li"},"open the BIOS/UEFI")," by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"[F2]")," (and enter the ",(0,i.kt)("strong",{parentName:"li"},"password")," if one is already set)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Load the BIOS/UEFI defaults")," by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"[F9]")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to confirm"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Now open the Advanced Menu")," by clicking on the Advanced button in the top right corner"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Set the Fan Control Mode to quiet")," by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Cooling")," tab. In the ",(0,i.kt)("inlineCode",{parentName:"li"},"CPU Fan Header")," section, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Fan Control Mode")," and choose ",(0,i.kt)("strong",{parentName:"li"},"Quiet")," (this will make the server operate as quiet as possible)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Set a Supervisor password")," by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Security")," tab. In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Passwords")," section, click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Set Supervisor Password")," and type in a ",(0,i.kt)("strong",{parentName:"li"},"password"),". Store it at a safe place! (The password should be random, at least 8 characters long and no special characters needed)"),(0,i.kt)("li",{parentName:"ol"},"Configure your server to ",(0,i.kt)("strong",{parentName:"li"},"boot automatically after a power failure")," by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Power")," tab. In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secondary Power Settings")," section, click on ",(0,i.kt)("inlineCode",{parentName:"li"},"After Power Failure")," and choose ",(0,i.kt)("strong",{parentName:"li"},"Power On")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Enable UEFI Boot")," and ",(0,i.kt)("strong",{parentName:"li"},"disable Legacy Boot")," by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot")," tab. The ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Priority")," tab is now automatically selected. In the ",(0,i.kt)("inlineCode",{parentName:"li"},"UEFI Boot Priority")," section, ",(0,i.kt)("strong",{parentName:"li"},"enable UEFI Boot")," and ",(0,i.kt)("strong",{parentName:"li"},"disable Legacy Boot")),(0,i.kt)("li",{parentName:"ol"},"Only allow to ",(0,i.kt)("strong",{parentName:"li"},"boot from USB-sticks")," by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Configuration")," tab. In the ",(0,i.kt)("inlineCode",{parentName:"li"},"UEFI Boot")," section, disable everything and ",(0,i.kt)("strong",{parentName:"li"},"only enable Boot Network Devices Last"),". In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Devices")," section, disable everything and ",(0,i.kt)("strong",{parentName:"li"},"only enable USB")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configure Secure Boot")," by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secure Boot")," tab. In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secure Boot Config")," section, disable everything and ",(0,i.kt)("strong",{parentName:"li"},"only enable Secure Boot")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Install Intel Platform Key")," might not deactivatable)"),(0,i.kt)("li",{parentName:"ol"},"Now ",(0,i.kt)("strong",{parentName:"li"},"confirm your settings")," by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"[F10]")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"[ENTER]")),(0,i.kt)("li",{parentName:"ol"},"Your server might start now automatically, ",(0,i.kt)("strong",{parentName:"li"},"press the power button")," to shut it down again.")),(0,i.kt)("p",null,"The BIOS/UEFI should now be correctly configured."))}m.isMDXComponent=!0}}]);