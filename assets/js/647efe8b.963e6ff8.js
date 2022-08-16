"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9286],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||l[p]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return l}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"subdomain-cname",title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",sidebar_label:"Create subdomain and edit CNAME entry"},c=void 0,d={unversionedId:"subdomain-cname",id:"subdomain-cname",title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",description:"In order to install OnlyOffice Documentserver or Talk High-performance backend, you need to create a subdomain and point with a CNAME-entry to your Nextcloud Domain.",source:"@site/docs/subdomain-cname.md",sourceDirName:".",slug:"/subdomain-cname",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/subdomain-cname.md",tags:[],version:"current",frontMatter:{id:"subdomain-cname",title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",sidebar_label:"Create subdomain and edit CNAME entry"},sidebar:"docs",previous:{title:"Database shrinking",permalink:"/Nextcloud-NAS-Guide/docs/database-shrinking"},next:{title:"Mount HDD for Movies/TV-Shows",permalink:"/Nextcloud-NAS-Guide/docs/mount-hdd"}},s={},l=[{value:"Strato",id:"strato",level:3}],m={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to install OnlyOffice Documentserver or Talk High-performance backend, you need to create a subdomain and point with a CNAME-entry to your Nextcloud Domain."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"How to do this highly depends on your service provider.")),(0,a.kt)("p",null,"Here is the documentation for some pre-chosen providers:"),(0,a.kt)("h3",{id:"strato"},"Strato"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.strato.de/faq/domains/subdomains-anlegen-und-loeschen/#subdomain_anlegen"},"Create a subdomain")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.strato.com/faq/en_us/domain/this-is-how-you-can-change-the-cname-entry-for-your-subdomain/"},"Edit the CNAME entry for subdomains")," and type in your Nextcloud Domain. (You can find your subdomains by clicking on the small Plus icon next to your Domain. And don't forget to add a dot at the end of the domain that you type in! This is somehow missing in their documentation!)")))}p.isMDXComponent=!0}}]);