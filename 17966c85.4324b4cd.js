(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,b=u["".concat(i,".").concat(p)]||u[p]||f[p]||a;return r?o.a.createElement(b,l(l({ref:t},d),{},{components:r})):o.a.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(165)),i={id:"share-folder",title:"How to define a Share-folder for Nextcloud shares?",sidebar_label:"Share-folder"},l={unversionedId:"share-folder",id:"share-folder",isDocsHomePage:!1,title:"How to define a Share-folder for Nextcloud shares?",description:"If you internally share documents, they will be always added to the users root directory in Nextcloud. Since this can quickly become confusing for your users if they share many files internally, it is recommended to set a Share-folder.",source:"@site/docs\\share-folder.md",slug:"/share-folder",permalink:"/Nextcloud-NAS-Guide/docs/share-folder",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/share-folder.md",version:"current",sidebar_label:"Share-folder",sidebar:"someSidebar",previous:{title:"How to configure the CookieLifetime?",permalink:"/Nextcloud-NAS-Guide/docs/cookielifetime"},next:{title:"How to disable workspaces?",permalink:"/Nextcloud-NAS-Guide/docs/workspaces"}},c=[],d={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you internally share documents, they will be always added to the users root directory in Nextcloud. Since this can quickly become confusing for your users if they share many files internally, it is recommended to set a ",Object(a.b)("inlineCode",{parentName:"p"},"Share-folder"),". "),Object(a.b)("p",null,"All shared files will in this case not be visible in the users root directory but in a folder called ",Object(a.b)("inlineCode",{parentName:"p"},"Shared"),"."),Object(a.b)("p",null,"If you have followed this guide and made the root directory in Nextcloud ",Object(a.b)("strong",{parentName:"p"},"read only")," for all users, you will need to do something first, though: Please create a folder in the root folder by running a command like:\n",Object(a.b)("inlineCode",{parentName:"p"},'sudo mkdir "/mnt/data/your data folder/root/Shared"')," over CLI\nPlease remember to adjust this command depending on the path you've chosen to be the root folder."),Object(a.b)("p",null,"Now you can configure this option:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Nextcloud Configuration")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Share-folder")),Object(a.b)("li",{parentName:"ol"},"Choose that you want to enable this option")),Object(a.b)("p",null,"All Nextcloud internal shares will from now on visible in the ",Object(a.b)("inlineCode",{parentName:"p"},"Shared")," folder."))}s.isMDXComponent=!0}}]);