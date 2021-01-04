(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{165:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||s[f]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(165)),i={id:"data-ssd",title:"How to configure the external data SSD/HDD?",sidebar_label:"Overview"},c={unversionedId:"data-ssd",id:"data-ssd",isDocsHomePage:!1,title:"How to configure the external data SSD/HDD?",description:"The following steps are needed to configure the external data SSD/HDD. (This only applies to the one external data SSD/HDD. The two external backup HDDs will get configured afterwards.)",source:"@site/docs\\data-ssd.md",slug:"/data-ssd",permalink:"/Nextcloud-NAS-Guide/docs/data-ssd",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/data-ssd.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"How to download the Not-supported Menu?",permalink:"/Nextcloud-NAS-Guide/docs/not-supported"},next:{title:"How to format, encrypt and mount the external data SSD/HDD?",permalink:"/Nextcloud-NAS-Guide/docs/format-encrypt-mount"}},l=[],u={toc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following steps are needed to configure the external data SSD/HDD. (This only applies to the one ",Object(o.b)("strong",{parentName:"p"},"external data SSD/HDD"),". The two ",Object(o.b)("strong",{parentName:"p"},"external backup HDDs")," will get configured afterwards.)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Format, encrypt and mount")," the drive with ",Object(o.b)("inlineCode",{parentName:"li"},"Veracrypt")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Open")," the drive on a PC"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Copy")," your private files to the drive if you have any and create a sensible folder structure")))}d.isMDXComponent=!0}}]);