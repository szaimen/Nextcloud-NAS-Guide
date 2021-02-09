(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{153:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return t?o.a.createElement(m,i(i({ref:r},u),{},{components:t})):o.a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(153)),c={id:"run-smb-server",title:"How to run the SMB-server script?",sidebar_label:"Run the SMB-server script"},i={unversionedId:"run-smb-server",id:"run-smb-server",isDocsHomePage:!1,title:"How to run the SMB-server script?",description:"1. Run over CLI:",source:"@site/docs/run-smb-server.md",slug:"/run-smb-server",permalink:"/Nextcloud-NAS-Guide/docs/run-smb-server",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/run-smb-server.md",version:"current",sidebar_label:"Run the SMB-server script",sidebar:"docs",previous:{title:"SMB-server",permalink:"/Nextcloud-NAS-Guide/docs/smb-server"},next:{title:"How to create SMB-users and Nextcloud users in one go?",permalink:"/Nextcloud-NAS-Guide/docs/create-users"}},s=[],u={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo bash /var/scripts/not-supported.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"SMB-server")),Object(a.b)("li",{parentName:"ol"},"Choose to install SMB-server"),Object(a.b)("li",{parentName:"ol"},"You will now see the ",Object(a.b)("strong",{parentName:"li"},"Main Menu")," of the SMB-server script")))}l.isMDXComponent=!0}}]);