(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(165)),i={id:"tpm2",title:"How to set up automatic TPM2 unlocking?",sidebar_label:"TPM2 unlocking"},c={unversionedId:"tpm2",id:"tpm2",isDocsHomePage:!1,title:"How to set up automatic TPM2 unlocking?",description:"In order to automatically unlock the encrypted root partition, you need to setup TPM2 unlocking during boot.",source:"@site/docs\\tpm2.md",slug:"/tpm2",permalink:"/Nextcloud-NAS-Guide/docs/tpm2",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/tpm2.md",version:"current",sidebar_label:"TPM2 unlocking",sidebar:"someSidebar",previous:{title:"How to connect to your server over SSH?",permalink:"/Nextcloud-NAS-Guide/docs/ssh"},next:{title:"How to install Nextcloud?",permalink:"/Nextcloud-NAS-Guide/docs/install-nextcloud"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to automatically unlock the encrypted root partition, you need to setup TPM2 unlocking during boot."),Object(a.b)("p",null,"The abbreviation ",Object(a.b)("inlineCode",{parentName:"p"},"CLI")," will be used from now on in this guide (as synonym for controlling your server over SSH) and stands for ",Object(a.b)("inlineCode",{parentName:"p"},"Command Line Interface"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Connect from a PC in the same network to your server over SSH (if not already done)"),Object(a.b)("li",{parentName:"ol"},"Copy and paste the following command over ",Object(a.b)("inlineCode",{parentName:"li"},"CLI"),":\n",Object(a.b)("inlineCode",{parentName:"li"},"wget https://raw.githubusercontent.com/nextcloud/vm/master/not-supported/tpm2-unlock.sh && sudo bash tpm2-unlock.sh"),"\n(",Object(a.b)("strong",{parentName:"li"},"Hint"),": On Windows 10, pasting works by pressing the right mouse-key)"),Object(a.b)("li",{parentName:"ol"},"Enter your ",Object(a.b)("strong",{parentName:"li"},"password")," again"),Object(a.b)("li",{parentName:"ol"},"Choose to install TPM2 Unlock"),Object(a.b)("li",{parentName:"ol"},"Wait until it has configured some small things"),Object(a.b)("li",{parentName:"ol"},"Type in your ",Object(a.b)("strong",{parentName:"li"},"LUKS password")," for your root partition"),Object(a.b)("li",{parentName:"ol"},"Wait until it shows that the setup was successfull and press ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," to reboot your server")),Object(a.b)("p",null,"Now it should unlock the root partition during boot automatically (so that you don't have to enter the LUKS passphrase). If not, something has failed."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Please note: it is not recommended to proceed with this guide, if it doesn't unlock the root partition automatically at this point!")))}s.isMDXComponent=!0}}]);