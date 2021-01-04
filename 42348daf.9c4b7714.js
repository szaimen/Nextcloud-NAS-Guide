(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),i=(n(0),n(165)),a={id:"usb-boot",title:"How to disable USB-boot?",sidebar_label:"Disable USB-boot"},c={unversionedId:"usb-boot",id:"usb-boot",isDocsHomePage:!1,title:"How to disable USB-boot?",description:"In order to improve security, you should disable booting from USB devices.",source:"@site/docs\\usb-boot.md",slug:"/usb-boot",permalink:"/Nextcloud-NAS-Guide/docs/usb-boot",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/usb-boot.md",version:"current",sidebar_label:"Disable USB-boot",sidebar:"someSidebar",previous:{title:"Security and Automation",permalink:"/Nextcloud-NAS-Guide/docs/security-automation"},next:{title:"How to enable geoblocking?",permalink:"/Nextcloud-NAS-Guide/docs/geoblock"}},b=[],l={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to improve security, you should disable booting from USB devices."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Shutdown the server by pressing the ",Object(i.b)("inlineCode",{parentName:"li"},"Power button")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Power on")," your server and ",Object(i.b)("strong",{parentName:"li"},"open the BIOS/UEFI")," by pressing ",Object(i.b)("inlineCode",{parentName:"li"},"[F2]")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Type in your Supervisor password")," to open the BIOS/UEFI (the password that you've set for your BIOS/UEFI)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Open the Advanced Menu")," by clicking on the Advanced button in the top right corner"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Disable all boot options")," by clicking on the ",Object(i.b)("inlineCode",{parentName:"li"},"Boot")," tab. Now click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Boot Configuration")," tab below. In the ",Object(i.b)("inlineCode",{parentName:"li"},"Boot Devices")," section, ",Object(i.b)("strong",{parentName:"li"},"disable everything")," (also USB devices)."),Object(i.b)("li",{parentName:"ol"},"Now ",Object(i.b)("strong",{parentName:"li"},"confirm your settings")," by pressing ",Object(i.b)("inlineCode",{parentName:"li"},"[F10]")," and ",Object(i.b)("inlineCode",{parentName:"li"},"[ENTER]")),Object(i.b)("li",{parentName:"ol"},"Your server should reboot and boot automatically.")),Object(i.b)("h4",{id:"now-you-can-disconnect-the-mouse-the-keyboard-and-the-display-from-your-server-since-they-are-not-needed-anymore"},"Now, you can disconnect the mouse, the keyboard and the display from your server since they are not needed anymore."))}s.isMDXComponent=!0}}]);