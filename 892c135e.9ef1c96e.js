(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(154)),c={id:"offshore-backup",title:"How to set up an offshore backup?",sidebar_label:"Off-Shore Backup"},i={unversionedId:"offshore-backup",id:"offshore-backup",isDocsHomePage:!1,title:"How to set up an offshore backup?",description:"Now that also the daily backup is prepared, you should set up an off-shore backup for your server.",source:"@site/docs/offshore-backup.md",slug:"/offshore-backup",permalink:"/Nextcloud-NAS-Guide/docs/offshore-backup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/offshore-backup.md",version:"current",sidebar_label:"Off-Shore Backup",sidebar:"docs",previous:{title:"How to set up a daily backup?",permalink:"/Nextcloud-NAS-Guide/docs/daily-backup"},next:{title:"SMB-server",permalink:"/Nextcloud-NAS-Guide/docs/smb-server"}},s=[],l={toc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that also the daily backup is prepared, you should set up an off-shore backup for your server."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run over CLI:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Off-Shore Backup Wizard")),Object(o.b)("li",{parentName:"ol"},"Confirm that you want to ",Object(o.b)("strong",{parentName:"li"},"create")," an off-shore backup script"),Object(o.b)("li",{parentName:"ol"},"Confirm that you will leave the backup drive connected"),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("strong",{parentName:"li"},"off-shore backup drive")," as backup target"),Object(o.b)("li",{parentName:"ol"},"Choose to use the recommended backup directory"),Object(o.b)("li",{parentName:"ol"},"Choose to run the backup every ",Object(o.b)("inlineCode",{parentName:"li"},"90 days"),", as recommended"),Object(o.b)("li",{parentName:"ol"},"Now everything will get set up"),Object(o.b)("li",{parentName:"ol"},"Finally, you will see the message that the backup script was successfully created")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is located here: ",Object(o.b)("inlineCode",{parentName:"p"},"/var/scripts/off-shore-rsync-backup.sh")," and will get executed every ",Object(o.b)("inlineCode",{parentName:"p"},"90 days"),". For now it will be executed every day at ",Object(o.b)("inlineCode",{parentName:"p"},"20:00")," until the first off-shore backup was successfully created. Please leave the drive ",Object(o.b)("strong",{parentName:"p"},"connected")," for now. You will get notified by mail if something fails. If the backup was successful, you will be ",Object(o.b)("strong",{parentName:"p"},"notified")," that you can disconnect the drive. The script which will create the off-shore backup is based on a program called ",Object(o.b)("inlineCode",{parentName:"p"},"rsync")," which will sync the whole backup repository that was made by the daily backup script from your daily backup drive to your offshore backup drive."))))}p.isMDXComponent=!0},154:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(f,i(i({ref:t},l),{},{components:r})):n.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);