(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(200)),i={id:"smart",title:"How to set up Disk Monitoring?",sidebar_label:"Disk Monitoring"},s={unversionedId:"smart",id:"smart",isDocsHomePage:!1,title:"How to set up Disk Monitoring?",description:"Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up Disk Monitoring.",source:"@site/docs/smart.md",slug:"/smart",permalink:"/Nextcloud-NAS-Guide/docs/smart",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smart.md",version:"current",sidebar_label:"Disk Monitoring",sidebar:"docs",previous:{title:"How to enable geoblocking?",permalink:"/Nextcloud-NAS-Guide/docs/geoblock"},next:{title:"How to set up Fail2Ban?",permalink:"/Nextcloud-NAS-Guide/docs/fail2ban"}},c=[],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up Disk Monitoring. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Please note!")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This is no alternative to a backup solution!"))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Disk Monitoring")),Object(a.b)("li",{parentName:"ol"},"Choose to install/reinstall ",Object(a.b)("strong",{parentName:"li"},"S.M.A.R.T Monitoring")),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("strong",{parentName:"li"},"Directly")," to get informed instantly if a disk error was found (and wait until it reports that S.M.A.R.T Monitoring was successfully configured)")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If one or more of your drives doesn't support Smart Monitoring or is unhealthy, you will see a popup that this is the case. If a certain drive that was reported is unhealthy, you should switch the drive because it cannot be trusted. If Smart Monitoring isn't supported on the reported drive, it is up to you to decide if you switch the drive with a supported one or use it, nevertheless. Though, be warned that the system won't be able to warn you about disk health problems of the affected drive in the future! Because of that it is recommended to switch reported drives in any case!"))))}d.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);