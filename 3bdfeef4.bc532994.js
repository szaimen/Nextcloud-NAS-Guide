(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(199)),i={id:"restore-system",title:"How to restore the system from backup?",sidebar_label:"Restore system"},l={unversionedId:"restore-system",id:"restore-system",isDocsHomePage:!1,title:"How to restore the system from backup?",description:"It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow How to restore files from backup?",source:"@site/docs/restore-system.md",slug:"/restore-system",permalink:"/Nextcloud-NAS-Guide/docs/restore-system",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-system.md",version:"current",sidebar_label:"Restore system",sidebar:"docs",previous:{title:"How to restore files from backup?",permalink:"/Nextcloud-NAS-Guide/docs/restore-files"},next:{title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname"}},s=[{value:"Preparation",id:"preparation",children:[]},{value:"Execution",id:"execution",children:[]}],c={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow ",Object(a.b)("a",{parentName:"p",href:"./restore-files"},"How to restore files from backup?")),Object(a.b)("h3",{id:"preparation"},"Preparation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a Backup (",Object(a.b)("a",{parentName:"li",href:"./manual-backup"},"instructions"),") ",Object(a.b)("br",null),"\n(You save your current system partition this way and will be able to restore your system to this point after restoring it to a different restore point.)")),Object(a.b)("h3",{id:"execution"},"Execution"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"System Restore")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Confirm")," that you want to restore your system to a previous state"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Confirm")," that you've created a backup by selecting ",Object(a.b)("inlineCode",{parentName:"li"},"Yes")," and pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")),Object(a.b)("li",{parentName:"ol"},"If both backup drives are connected, ",Object(a.b)("strong",{parentName:"li"},"select the backup drive")," that you want to view backups from (most likely the daily backup drive)"),Object(a.b)("li",{parentName:"ol"},"Select a ",Object(a.b)("strong",{parentName:"li"},"backup archive")," that you want to restore to (you will see the date and time when it was made)"),Object(a.b)("li",{parentName:"ol"},"Read through and ",Object(a.b)("strong",{parentName:"li"},"confirm")," the next popup"),Object(a.b)("li",{parentName:"ol"},"Confirm that you want to run the ",Object(a.b)("inlineCode",{parentName:"li"},"extracting check"),Object(a.b)("br",null),"\n(If this step takes too long, you can cancel it by pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[CTRL] + [C]"),". Then start from step 1 again and skip the ",Object(a.b)("inlineCode",{parentName:"li"},"extracting check"),".)"),Object(a.b)("li",{parentName:"ol"},"Read through and ",Object(a.b)("strong",{parentName:"li"},"confirm")," the next popup"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Wait")," until you see the next Menu!"),Object(a.b)("li",{parentName:"ol"},"Now you should see a Menu that states that the dry-run was successful. You can now show all files/folders that will get changed/deleted. After you are done, just select ",Object(a.b)("inlineCode",{parentName:"li"},"Continue")," and press ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," to continue."),Object(a.b)("li",{parentName:"ol"},"Now you will see a popup with stats from the dry-run. This is an overview about the operation."),Object(a.b)("li",{parentName:"ol"},"You will be asked next if you really want to restore your system to this state. Now select ",Object(a.b)("inlineCode",{parentName:"li"},"Yes")," and press ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," if you are sure. (This is the last chance to cancel the operation!)"),Object(a.b)("li",{parentName:"ol"},"Wait until it has restored the system and you see a popup that the restore process was successful."),Object(a.b)("li",{parentName:"ol"},"Finally, press ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," to ",Object(a.b)("strong",{parentName:"li"},"reboot")," your server.")))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?n.a.createElement(d,l(l({ref:t},c),{},{components:r})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);