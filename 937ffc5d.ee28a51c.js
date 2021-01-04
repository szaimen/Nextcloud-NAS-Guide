(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(165)),i={id:"workspaces",title:"How to disable workspaces?",sidebar_label:"Workspaces"},c={unversionedId:"workspaces",id:"workspaces",isDocsHomePage:!1,title:"How to disable workspaces?",description:"Nextcloud 18 introduced the so-called workspaces. This shows a readme file on top of any folder in Nextcloud which will be disturbing for most users, so you should disable them if you have no usecase for them.",source:"@site/docs\\workspaces.md",slug:"/workspaces",permalink:"/Nextcloud-NAS-Guide/docs/workspaces",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/workspaces.md",version:"current",sidebar_label:"Workspaces",sidebar:"someSidebar",previous:{title:"How to define a Share-folder for Nextcloud shares?",permalink:"/Nextcloud-NAS-Guide/docs/share-folder"},next:{title:"How to disable User Flows?",permalink:"/Nextcloud-NAS-Guide/docs/user-flows"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Nextcloud 18 introduced the so-called ",Object(a.b)("inlineCode",{parentName:"p"},"workspaces"),". This shows a readme file on top of any folder in Nextcloud which will be disturbing for most users, so you should disable them if you have no usecase for them."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Nextcloud Configuration")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Disable workspaces")),Object(a.b)("li",{parentName:"ol"},"Choose to disable ",Object(a.b)("inlineCode",{parentName:"li"},"rich workspaces"))),Object(a.b)("p",null,"Rich workspaces are now disabled."))}u.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?n.a.createElement(f,c(c({ref:t},l),{},{components:r})):n.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);