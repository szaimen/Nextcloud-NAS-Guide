(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(200)),i={id:"minimal-requirements",title:"What are the minimal Hardware requirements?",sidebar_label:"Minimal Requirements"},l={unversionedId:"minimal-requirements",id:"minimal-requirements",isDocsHomePage:!1,title:"What are the minimal Hardware requirements?",description:"You will need the following things:",source:"@site/docs/minimal-requirements.md",slug:"/minimal-requirements",permalink:"/Nextcloud-NAS-Guide/docs/minimal-requirements",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/minimal-requirements.md",version:"current",sidebar_label:"Minimal Requirements",sidebar:"docs",previous:{title:"Are there any considerations you should know of?",permalink:"/Nextcloud-NAS-Guide/docs/considerations"},next:{title:"Do you have any Hardware recommendations?",permalink:"/Nextcloud-NAS-Guide/docs/hardware-recommendations"}},u=[],s={toc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You will need the following things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A x86 PC that will function as your server with:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"At least 2 Cores (because most scripts need at least as much)"),Object(o.b)("li",{parentName:"ul"},"At least 4GB RAM (because most scripts need at least as much)"),Object(o.b)("li",{parentName:"ul"},"One internal SSD with at least 128GB (because some space will get reserved and you don't want to run into space issues)"),Object(o.b)("li",{parentName:"ul"},"Power Supply for your server (if not built-in)"),Object(o.b)("li",{parentName:"ul"},"TPM2 support (you need to Google if the PC has built-in TPM2 support if it is not a NUC. It is needed for automatically unlocking the encrypted root partition while booting.)"))),Object(o.b)("li",{parentName:"ul"},"One (or more) external SSD (or HDD) that will store your personal data with at least 250GB (depending on how much data you are planning to store on your server. Rule of thumb: this drive should be at least twice as big as your current private data)"),Object(o.b)("li",{parentName:"ul"},"Two additional external HDD's that will function as backup drives with at least the same size like the external data SSD/HDD, respectively (because one will be used for daily backups and one for off-shore backups)"),Object(o.b)("li",{parentName:"ul"},"One USB-stick with at least 8GB (for installing Ubuntu)"),Object(o.b)("li",{parentName:"ul"},"For the initial setup you will also need a HDMI-display (e.g. monitor/tv/beamer), USB-mouse and -keyboard. If you don't have one: you don't need to buy those. Borrowing or renting those should be enough. (You really only need them for the initial setup, because you will access your server over SSH afterwards.)")))}c.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);