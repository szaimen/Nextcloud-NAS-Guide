(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(149)),i={id:"configure-ddclient",title:"How to configure DDclient?",sidebar_label:"Configure DDclient"},c={unversionedId:"configure-ddclient",id:"configure-ddclient",isDocsHomePage:!1,title:"How to configure DDclient?",description:"After you've got your domain from a supported provider and activated DDNS for your domain, you should now configure DDclient. DDclient is an easy way to update your domain regularly with your new public ip-address and is the recommended way to set up Dynamic DNS for your server.",source:"@site/docs/configure-ddclient.md",slug:"/configure-ddclient",permalink:"/Nextcloud-NAS-Guide/docs/configure-ddclient",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/configure-ddclient.md",version:"current",sidebar_label:"Configure DDclient",sidebar:"docs",previous:{title:"How to activate DDNS for your Domain",permalink:"/Nextcloud-NAS-Guide/docs/activate-ddns"},next:{title:"How to enable Port Forwarding?",permalink:"/Nextcloud-NAS-Guide/docs/port-forwarding"}},l=[],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After you've got your domain from a supported provider and activated DDNS for your domain, you should now configure DDclient. DDclient is an easy way to update your domain regularly with your new public ip-address and is the recommended way to set up Dynamic DNS for your server. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Caution!")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Please inspect the documents of your DDNS-provider what exactly you need to enter here. For Strato, the example below should work."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"sudo bash /var/scripts/menu.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"DDclient Configuration")),Object(a.b)("li",{parentName:"ol"},"Choose to install/reinstall DDclient"),Object(a.b)("li",{parentName:"ol"},"Select your ",Object(a.b)("strong",{parentName:"li"},"DDNS-provider")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"Strato"),"), enter the ",Object(a.b)("strong",{parentName:"li"},"Host/Domain")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"yourdomain.com"),"), the ",Object(a.b)("strong",{parentName:"li"},"Login/Domain")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"yourdomain.com"),") and the ",Object(a.b)("strong",{parentName:"li"},"Password or API-key")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"your-ddns-password"),")"),Object(a.b)("li",{parentName:"ol"},"Confirm your settings "),Object(a.b)("li",{parentName:"ol"},"It should now report that the initial DNS update was successful.")))}d.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);