(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),i=n(7),r=(n(0),n(193)),a={id:"onlyoffice",title:"How to install OnlyOffice Documentserver?",sidebar_label:"OnlyOffice"},c={unversionedId:"onlyoffice",id:"onlyoffice",isDocsHomePage:!1,title:"How to install OnlyOffice Documentserver?",description:"OnlyOffice Documentserver is a Nextcloud integration that features real-time CO-editing of Office files in your Nextcloud in the Browser. Although Collabora Online is also an option, OnlyOffice is recommended because it features a UI similar to Microsoft Office and has better compatibility with Microsoft Office files. It also doesn't need as much ressources as Collabora Online.",source:"@site/docs/onlyoffice.md",slug:"/onlyoffice",permalink:"/Nextcloud-NAS-Guide/docs/onlyoffice",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/onlyoffice.md",version:"current",sidebar_label:"OnlyOffice",sidebar:"docs",previous:{title:"How to harden the SSH configuration?",permalink:"/Nextcloud-NAS-Guide/docs/harden-ssh"},next:{title:"How to install the High-Performance backend for Nextcloud Talk?",permalink:"/Nextcloud-NAS-Guide/docs/hpb"}},l=[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"OnlyOffice Documentserver is a Nextcloud integration that features real-time CO-editing of Office files in your Nextcloud in the Browser. Although Collabora Online is also an option, OnlyOffice is recommended because it features a UI similar to Microsoft Office and has better compatibility with Microsoft Office files. It also doesn't need as much ressources as Collabora Online."),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a subdomain like ",Object(r.b)("inlineCode",{parentName:"li"},"office.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",Object(r.b)("a",{parentName:"li",href:"./subdomain-cname"},"instructions"),")")),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run over CLI:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Documentserver")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"OnlyOffice (Docker)")),Object(r.b)("li",{parentName:"ol"},"Choose to install ",Object(r.b)("inlineCode",{parentName:"li"},"OnlyOffice (Docker)")),Object(r.b)("li",{parentName:"ol"},"Type in the ",Object(r.b)("strong",{parentName:"li"},"subdomain")," that you've created and that points to your Nextcloud domain like ",Object(r.b)("inlineCode",{parentName:"li"},"office.yourdomain.com")," and confirm it"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Don't")," use ",Object(r.b)("inlineCode",{parentName:"li"},"UPNP")," to open the required ports (since you've already done this for your Nextcloud)"),Object(r.b)("li",{parentName:"ol"},"Wait until everything is installed and it reports a successful installation")),Object(r.b)("p",null,"Now, you should be able to create, open and edit Office files in Nextcloud in the Browser using OnlyOffice!"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You should open ",Object(r.b)("inlineCode",{parentName:"p"},"https://yourdomain.com/settings/admin/onlyoffice")," with your Nextcloud admin account to adjust some OnlyOffice settings. E.g. it is recommended to enable the option to ",Object(r.b)("inlineCode",{parentName:"p"},"Keep intermediate versions when editing")," but also you can choose to make OnlyOffice the default for many file extensions and more."))))}u.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,p=d["".concat(a,".").concat(b)]||d[b]||f[b]||r;return n?i.a.createElement(p,c(c({ref:t},s),{},{components:n})):i.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);