(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(165)),i={id:"hpb",title:"How to install the High-Performance backend for Nextcloud Talk?",sidebar_label:"High-Performance backend for Nextcloud Talk"},l={unversionedId:"hpb",id:"hpb",isDocsHomePage:!1,title:"How to install the High-Performance backend for Nextcloud Talk?",description:"In order to be able to make bigger videocalls in Nextcloud Talk and to reduce the load on paticipating clients, you should install the High-Performance backend for Nextcloud Talk.",source:"@site/docs/hpb.md",slug:"/hpb",permalink:"/Nextcloud-NAS-Guide/docs/hpb",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/hpb.md",version:"current",sidebar_label:"High-Performance backend for Nextcloud Talk",sidebar:"someSidebar",previous:{title:"How to install OnlyOffice Documentserver?",permalink:"/Nextcloud-NAS-Guide/docs/onlyoffice"},next:{title:"How to install Bitwarden RS?",permalink:"/Nextcloud-NAS-Guide/docs/bitwarden-rs"}},c=[],d={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to be able to make bigger videocalls in Nextcloud Talk and to reduce the load on paticipating clients, you should install the High-Performance backend for Nextcloud Talk."),Object(a.b)("h4",{id:"preparation"},"Preparation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a subdomain like ",Object(a.b)("inlineCode",{parentName:"li"},"talk.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#how-to-create-a-subdomain-and-point-with-cname-to-your-nextcloud-domain"}),"instructions"),")"),Object(a.b)("li",{parentName:"ol"},"Port-forward port 3478 TCP and 3478 UDP to your server (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#how-to-enable-port-forwarding"}),"instructions"),")")),Object(a.b)("h4",{id:"installation"},"Installation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Talk")),Object(a.b)("li",{parentName:"ol"},"Choose to install ",Object(a.b)("inlineCode",{parentName:"li"},"Nextcloud Talk")),Object(a.b)("li",{parentName:"ol"},"Use the standard port 3478 (don't choose to change the port)"),Object(a.b)("li",{parentName:"ol"},"Wait until coturn is installed"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Don't")," use ",Object(a.b)("inlineCode",{parentName:"li"},"UPNP")," to open the required port since you've already done this manually"),Object(a.b)("li",{parentName:"ol"},"Wait until spreed (old name for Nextcloud Talk) is installed"),Object(a.b)("li",{parentName:"ol"},"Choose to install the ",Object(a.b)("inlineCode",{parentName:"li"},"Talk Signaling Server")),Object(a.b)("li",{parentName:"ol"},"Type in the subdomain that you've created and that points to your Nextcloud domain (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"talk.yourdomain.com"),")"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Don't")," use ",Object(a.b)("inlineCode",{parentName:"li"},"UPNP")," to open the required ports (since you've already done this for your Nextcloud)"),Object(a.b)("li",{parentName:"ol"},"Wait until everything is installed and it reports that everything is working as intended.")),Object(a.b)("p",null,"Now you should be able to make videocalls in Nextcloud Talk with a lot of people and the load on paticipating clients should be reduced!"))}b.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=o,m=u["".concat(i,".").concat(s)]||u[s]||p[s]||a;return n?r.a.createElement(m,l(l({ref:t},d),{},{components:n})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);