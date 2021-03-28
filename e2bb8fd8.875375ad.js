(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(200)),i={id:"restore-files",title:"How to restore files from backup?",sidebar_label:"Restore files"},s={unversionedId:"restore-files",id:"restore-files",isDocsHomePage:!1,title:"How to restore files from backup?",description:"It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow How to restore the system from a backup",source:"@site/docs/restore-files.md",slug:"/restore-files",permalink:"/Nextcloud-NAS-Guide/docs/restore-files",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-files.md",version:"current",sidebar_label:"Restore files",sidebar:"docs",previous:{title:"How to create new users after the initial setup?",permalink:"/Nextcloud-NAS-Guide/docs/create-new-users"},next:{title:"How to restore the system from backup?",permalink:"/Nextcloud-NAS-Guide/docs/restore-system"}},l=[{value:"Preparations",id:"preparations",children:[]},{value:"Execution",id:"execution",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow ",Object(a.b)("a",{parentName:"p",href:"./restore-system"},"How to restore the system from a backup")),Object(a.b)("h3",{id:"preparations"},"Preparations"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install Midnight Commander (",Object(a.b)("a",{parentName:"li",href:"./mc"},"instructions"),")"),Object(a.b)("li",{parentName:"ol"},"Install Remotedesktop (",Object(a.b)("a",{parentName:"li",href:"./remotedesktop"},"instructions"),")")),Object(a.b)("h3",{id:"execution"},"Execution"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Backup Viewer")),Object(a.b)("li",{parentName:"ol"},"Confirm that you want to view the content of your backups"),Object(a.b)("li",{parentName:"ol"},"If both backup drives are connected, ",Object(a.b)("strong",{parentName:"li"},"select the backup drive")," that you want to view backups from (most likely the daily backup drive)"),Object(a.b)("li",{parentName:"ol"},"Read through the rules that are necessary to know about and ",Object(a.b)("strong",{parentName:"li"},"confirm")," them"),Object(a.b)("li",{parentName:"ol"},"Now, you should see Midnight Commander and all available backup archives. ",Object(a.b)("strong",{parentName:"li"},"Just leave Midnight Commander as it is!")),Object(a.b)("li",{parentName:"ol"},"Connect to your server via RDP (",Object(a.b)("a",{parentName:"li",href:"./rdp-connect"},"instructions"),")"),Object(a.b)("li",{parentName:"ol"},"When you are connected, open a ",Object(a.b)("inlineCode",{parentName:"li"},"terminal")," in the Remotedesktop session "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Copy and paste")," or type into the terminal: ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell"},"xhost +si:localuser:root\nsudo nautilus /tmp/borg\n"))),Object(a.b)("li",{parentName:"ol"},"Now, you should see the file explorer with all available backup archives"),Object(a.b)("li",{parentName:"ol"},"You are now free to navigate through them, ",Object(a.b)("strong",{parentName:"li"},"open files and restore")," them from the backup to the original directory"),Object(a.b)("li",{parentName:"ol"},"After you are done, ",Object(a.b)("strong",{parentName:"li"},"close")," the file explorer and the terminal in the RDP-session and exit the Remotedesktop session"),Object(a.b)("li",{parentName:"ol"},"The last step is to ",Object(a.b)("strong",{parentName:"li"},"close Midnight Commander")," by pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[F10]"),Object(a.b)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"It is crucial that you close Midnight Commander by pressing ",Object(a.b)("inlineCode",{parentName:"p"},"[F10]"),"!",Object(a.b)("br",null),"\n(Don't use any other way to terminate it!)")))),Object(a.b)("li",{parentName:"ol"},"It should now report, that the backup and drive was successfully unmounted.")))}p.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);