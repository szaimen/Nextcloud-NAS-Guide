(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var o=r(3),n=r(7),a=(r(0),r(165)),c={id:"offshore-backup",title:"How to set up an offshore backup?",sidebar_label:"Off-Shore Backup"},i={unversionedId:"offshore-backup",id:"offshore-backup",isDocsHomePage:!1,title:"How to set up an offshore backup?",description:"Now that also the daily backup is prepared, you should set up an off-shore backup for your server.",source:"@site/docs/offshore-backup.md",slug:"/offshore-backup",permalink:"/Nextcloud-NAS-Guide/docs/offshore-backup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/offshore-backup.md",version:"current",sidebar_label:"Off-Shore Backup",sidebar:"someSidebar",previous:{title:"How to set up a daily backup?",permalink:"/Nextcloud-NAS-Guide/docs/daily-backup"},next:{title:"SMB-server",permalink:"/Nextcloud-NAS-Guide/docs/smb-server"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that also the daily backup is prepared, you should set up an off-shore backup for your server."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/not-supported.sh")," over CLI"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Off-Shore Backup Wizard")),Object(a.b)("li",{parentName:"ol"},"Confirm that you want to ",Object(a.b)("strong",{parentName:"li"},"create")," an off-shore backup script"),Object(a.b)("li",{parentName:"ol"},"Confirm that you will leave the backup drive connected"),Object(a.b)("li",{parentName:"ol"},"Select the ",Object(a.b)("strong",{parentName:"li"},"off-shore backup drive")," as backup target"),Object(a.b)("li",{parentName:"ol"},"Choose to use the recommended backup directory"),Object(a.b)("li",{parentName:"ol"},"Choose to run the backup every ",Object(a.b)("inlineCode",{parentName:"li"},"90 days"),", as recommended"),Object(a.b)("li",{parentName:"ol"},"Now everything will get set up"),Object(a.b)("li",{parentName:"ol"},"Finally, you will see the message that the backup script was successfully created")),Object(a.b)("p",null,"It is located here: ",Object(a.b)("inlineCode",{parentName:"p"},"/var/scripts/off-shore-rsync-backup.sh")," and will get executed every ",Object(a.b)("inlineCode",{parentName:"p"},"90 days"),". For now it will be executed every day at ",Object(a.b)("inlineCode",{parentName:"p"},"20:00")," until the first off-shore backup was successfully created. Please leave the drive ",Object(a.b)("strong",{parentName:"p"},"connected")," for now. You will get notified by mail if something fails. If the backup was successful, you will be ",Object(a.b)("strong",{parentName:"p"},"notified")," that you can disconnect the drive. The script which will create the off-shore backup is based on a program called ",Object(a.b)("inlineCode",{parentName:"p"},"rsync")," which will sync the whole backup repository that was made by the daily backup script from your daily backup drive to your offshore backup drive."))}p.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||a;return r?n.a.createElement(d,i(i({ref:t},u),{},{components:r})):n.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);