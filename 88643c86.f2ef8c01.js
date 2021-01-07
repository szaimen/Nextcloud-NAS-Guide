(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(149)),s={id:"user-flows",title:"How to disable User Flows?",sidebar_label:"User Flows"},c={unversionedId:"user-flows",id:"user-flows",isDocsHomePage:!1,title:"How to disable User Flows?",description:"User flows are a feature which was introduces with Nextcloud 18. They can lead to performance issues if one user chooses to create many of them so they should get disabled, especially if you have no usecase for them.",source:"@site/docs/user-flows.md",slug:"/user-flows",permalink:"/Nextcloud-NAS-Guide/docs/user-flows",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/user-flows.md",version:"current",sidebar_label:"User Flows",sidebar:"docs",previous:{title:"How to disable workspaces?",permalink:"/Nextcloud-NAS-Guide/docs/workspaces"},next:{title:"Activate Let's Encrypt",permalink:"/Nextcloud-NAS-Guide/docs/activate-lets-encrypt"}},i=[],l={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"User flows are a feature which was introduces with Nextcloud 18. They can lead to performance issues if one user chooses to create many of them so they should get disabled, especially if you have no usecase for them."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo bash /var/scripts/menu.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Nextcloud Configuration")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Disable user flows")),Object(a.b)("li",{parentName:"ol"},"Choose to disable ",Object(a.b)("inlineCode",{parentName:"li"},"user flows"))),Object(a.b)("p",null,"User flows are now disabled, admin flows still usable."))}u.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);