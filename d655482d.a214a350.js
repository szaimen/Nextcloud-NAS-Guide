(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(154)),i={id:"smtp-mail",title:"How to set up SMTP Mail to enable your server to send mails?",sidebar_label:"SMTP Mail"},c={unversionedId:"smtp-mail",id:"smtp-mail",isDocsHomePage:!1,title:"How to set up SMTP Mail to enable your server to send mails?",description:"In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails.",source:"@site/docs/smtp-mail.md",slug:"/smtp-mail",permalink:"/Nextcloud-NAS-Guide/docs/smtp-mail",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smtp-mail.md",version:"current",sidebar_label:"SMTP Mail",sidebar:"docs",previous:{title:"Backup",permalink:"/Nextcloud-NAS-Guide/docs/backup"},next:{title:"How to download the Not-supported Menu?",permalink:"/Nextcloud-NAS-Guide/docs/not-supported"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Before you can start, please get a mail account that your server will use to send mails.")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For german users is recommended: ",Object(o.b)("a",{parentName:"p",href:"https://signup.mail.de/de/"},"mail.de")," and ",Object(o.b)("a",{parentName:"p",href:"https://posteo.de/registrierung"},"posteo.org")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Please inspect your mail providers documents how to connect over SMTP before continuing!")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run over CLI:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"SMTP Mail")),Object(o.b)("li",{parentName:"ol"},"Choose to install/reinstall SMTP Mail"),Object(o.b)("li",{parentName:"ol"},"Enter the ",Object(o.b)("strong",{parentName:"li"},"SMTP URL")," (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"smtp.mail.de"),")"),Object(o.b)("li",{parentName:"ol"},"Choose the ",Object(o.b)("strong",{parentName:"li"},"encryption protocol")," (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"SSL"),")"),Object(o.b)("li",{parentName:"ol"},"Choose that you want to use the ",Object(o.b)("strong",{parentName:"li"},"default port")," (the default port should be correct most of the time)"),Object(o.b)("li",{parentName:"ol"},"Most mail servers need credentials, so answer that your mail server ",Object(o.b)("strong",{parentName:"li"},"needs credentials")),Object(o.b)("li",{parentName:"ol"},"Enter your ",Object(o.b)("strong",{parentName:"li"},"SMTP username")," (the ",Object(o.b)("strong",{parentName:"li"},"mail account")," that will be used to send mails e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"server@mail.de"),")"),Object(o.b)("li",{parentName:"ol"},"Enter the ",Object(o.b)("strong",{parentName:"li"},"password")," for your mail account"),Object(o.b)("li",{parentName:"ol"},"Enter the ",Object(o.b)("strong",{parentName:"li"},"recipient")," mail-address that will receive all mails that are sent by the server (e.g. your main mail-address)"),Object(o.b)("li",{parentName:"ol"},"Confirm your settings")),Object(o.b)("p",null,"If all settings were entered correctly, you should receive a testmail which proves that it was setup correctly."))}p.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);