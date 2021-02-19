(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var b=2;b<a;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(154)),i={id:"bios-uefi",title:"How to configure the BIOS/UEFI?",sidebar_label:"BIOS/UEFI"},l={unversionedId:"bios-uefi",id:"bios-uefi",isDocsHomePage:!1,title:"How to configure the BIOS/UEFI?",description:"You will need to configure your BIOS/UEFI in order to harden security and to make things work.",source:"@site/docs/bios-uefi.md",slug:"/bios-uefi",permalink:"/Nextcloud-NAS-Guide/docs/bios-uefi",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/bios-uefi.md",version:"current",sidebar_label:"BIOS/UEFI",sidebar:"docs",previous:{title:"Basic setup",permalink:"/Nextcloud-NAS-Guide/docs/basic-setup"},next:{title:"How to set up Ubuntu?",permalink:"/Nextcloud-NAS-Guide/docs/ubuntu"}},c=[],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You will need to configure your BIOS/UEFI in order to harden security and to make things work. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The following guide is especially written for Intel Visual Bios which is present on Intel NUC devices. If you use a different device as your server it is possible, that some things are different for you. Since BIOS/UEFI can be visually very different, this guide is only plain text."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Connect")," the power-cable, HDMI-display, USB-mouse and -keyboard to your server"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Power on")," your server and ",Object(a.b)("strong",{parentName:"li"},"open the BIOS/UEFI")," by pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[F2]")," (and enter the ",Object(a.b)("strong",{parentName:"li"},"password")," if one is already set)"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Load the BIOS/UEFI defaults")," by pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[F9]")," and ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," to confirm"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Now open the Advanced Menu")," by clicking on the Advanced button in the top right corner"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Set the Fan Control Mode to quiet")," by clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"Cooling")," tab. In the ",Object(a.b)("inlineCode",{parentName:"li"},"CPU Fan Header")," section, select ",Object(a.b)("inlineCode",{parentName:"li"},"Fan Control Mode")," and choose ",Object(a.b)("strong",{parentName:"li"},"Quiet")," (this will make the server operate as quiet as possible)"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Set a Supervisor password")," by clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"Security")," tab. In the ",Object(a.b)("inlineCode",{parentName:"li"},"Passwords")," section, click on ",Object(a.b)("inlineCode",{parentName:"li"},"Set Supervisor Password")," and type in a ",Object(a.b)("strong",{parentName:"li"},"password"),". Store it at a safe place! (The password should be random, at least 8 characters long and no special characters needed)"),Object(a.b)("li",{parentName:"ol"},"Configure your server to ",Object(a.b)("strong",{parentName:"li"},"boot automatically after a power failure")," by clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"Power")," tab. In the ",Object(a.b)("inlineCode",{parentName:"li"},"Secondary Power Settings")," section, click on ",Object(a.b)("inlineCode",{parentName:"li"},"After Power Failure")," and choose ",Object(a.b)("strong",{parentName:"li"},"Power On")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Enable UEFI Boot")," and ",Object(a.b)("strong",{parentName:"li"},"disable Legacy Boot")," by clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"Boot")," tab. The ",Object(a.b)("inlineCode",{parentName:"li"},"Boot Priority")," tab is now automatically selected. In the ",Object(a.b)("inlineCode",{parentName:"li"},"UEFI Boot Priority")," section, ",Object(a.b)("strong",{parentName:"li"},"enable UEFI Boot")," and ",Object(a.b)("strong",{parentName:"li"},"disable Legacy Boot")),Object(a.b)("li",{parentName:"ol"},"Only allow to ",Object(a.b)("strong",{parentName:"li"},"boot from USB-sticks")," by clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"Boot Configuration")," tab. In the ",Object(a.b)("inlineCode",{parentName:"li"},"UEFI Boot")," section, disable everything and ",Object(a.b)("strong",{parentName:"li"},"only enable Boot Network Devices Last"),". In the ",Object(a.b)("inlineCode",{parentName:"li"},"Boot Devices")," section, disable everything and ",Object(a.b)("strong",{parentName:"li"},"only enable USB")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Configure Secure Boot")," by clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"Secure Boot")," tab. In the ",Object(a.b)("inlineCode",{parentName:"li"},"Secure Boot Config")," section, disable everything and ",Object(a.b)("strong",{parentName:"li"},"only enable Secure Boot")," (",Object(a.b)("inlineCode",{parentName:"li"},"Install Intel Platform Key")," might not deactivatable)"),Object(a.b)("li",{parentName:"ol"},"Now ",Object(a.b)("strong",{parentName:"li"},"confirm your settings")," by pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[F10]")," and ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")),Object(a.b)("li",{parentName:"ol"},"Your server might start now automatically, ",Object(a.b)("strong",{parentName:"li"},"press the power button")," to shut it down again.")),Object(a.b)("p",null,"The BIOS/UEFI should now be correctly configured."))}s.isMDXComponent=!0}}]);