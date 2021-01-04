(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(165)),i={id:"mount-backup-hdds",title:"How to mount the external backup HDD's?",sidebar_label:"Mount"},c={unversionedId:"mount-backup-hdds",id:"mount-backup-hdds",isDocsHomePage:!1,title:"How to mount the external backup HDD's?",description:"Now that the drives are prepared, you will mount the drives to your sever:",source:"@site/docs\\mount-backup-hdds.md",slug:"/mount-backup-hdds",permalink:"/Nextcloud-NAS-Guide/docs/mount-backup-hdds",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/mount-backup-hdds.md",version:"current",sidebar_label:"Mount",sidebar:"someSidebar",previous:{title:"How to format the external backup HDD's?",permalink:"/Nextcloud-NAS-Guide/docs/format-backup-hdds"},next:{title:"How to update your server manually?",permalink:"/Nextcloud-NAS-Guide/docs/update-manually"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that the drives are prepared, you will mount the drives to your sever:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Please ",Object(a.b)("strong",{parentName:"li"},"don't")," connect the backup HDDs to your server, yet or ",Object(a.b)("strong",{parentName:"li"},"disconnect")," the backup HDDs from your server!\n(The already with Veracrypt encrypted and mounted external data SSD/HDD must stay connected; disconnecting and connecting one backup HDD that you want to mount is just so that the system is able to understand which drive you want to mount.)"),Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/not-supported.sh")," over CLI"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"NTFS Mount")),Object(a.b)("li",{parentName:"ol"},"Select to ",Object(a.b)("inlineCode",{parentName:"li"},"Mount a drive")),Object(a.b)("li",{parentName:"ol"},"Press ",Object(a.b)("inlineCode",{parentName:"li"},"OK")," to start searching for new NTFS drives"),Object(a.b)("li",{parentName:"ol"},"Now ",Object(a.b)("strong",{parentName:"li"},"connect")," one of your backup drives to your server (you have 1 minute)"),Object(a.b)("li",{parentName:"ol"},"You should get the message that the drive was found"),Object(a.b)("li",{parentName:"ol"},"Wait until the drive has spin up"),Object(a.b)("li",{parentName:"ol"},"Choose the ",Object(a.b)("strong",{parentName:"li"},"NTFS partition")," that shall get mounted"),Object(a.b)("li",{parentName:"ol"},"Type in the mountpath that you would like to use. The easiest way is to just type in the ",Object(a.b)("strong",{parentName:"li"},"recommended mountpath"),". (The recommended mountpath is proposed to you in the popup)"),Object(a.b)("li",{parentName:"ol"},"You should get the message that the mount was successful."),Object(a.b)("li",{parentName:"ol"},"When asked if this is a backup drive, select ",Object(a.b)("inlineCode",{parentName:"li"},"Yes"),"!"),Object(a.b)("li",{parentName:"ol"},"You should see the message now, that the backup drive is ready.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Now repeat this same procedure with the second drive! Start at point 4!"),"\n(The already mounted backup HDD and the with Veracrypt encrypted data SSD/HDD must stay connected to the server!)"),Object(a.b)("p",null,"If you are done, just choose ",Object(a.b)("inlineCode",{parentName:"p"},"Exit")," to exit this script."))}l.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);