(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(200)),i={id:"format-backup-hdds",title:"How to format the external backup HDD's?",sidebar_label:"Format"},c={unversionedId:"format-backup-hdds",id:"format-backup-hdds",isDocsHomePage:!1,title:"How to format the external backup HDD's?",description:"You will now reformat them to NTFS. You can skip this step, if they are already NTFS formatted!",source:"@site/docs/format-backup-hdds.md",slug:"/format-backup-hdds",permalink:"/Nextcloud-NAS-Guide/docs/format-backup-hdds",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/format-backup-hdds.md",version:"current",sidebar_label:"Format",sidebar:"docs",previous:{title:"How to configure the external backup HDD's?",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds"},next:{title:"How to mount the external backup HDD's?",permalink:"/Nextcloud-NAS-Guide/docs/mount-backup-hdds"}},l=[],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You will now reformat them to NTFS. You can skip this step, if they are already NTFS formatted!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning: this will delete any data on this drive!")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Power on")," your server by pressing the ",Object(o.b)("inlineCode",{parentName:"li"},"power button")," (if not already done)"),Object(o.b)("li",{parentName:"ol"},"Please ",Object(o.b)("strong",{parentName:"li"},"don't")," connect the backup HDDs to your server, yet!",Object(o.b)("br",null),"\n(The already with Veracrypt encrypted and mounted external data SSD/HDD must stay connected; disconnecting and connecting one backup HDD that you want to format is just so that the system is able to understand which drive you want to format.)"),Object(o.b)("li",{parentName:"ol"},"Run over CLI:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"NTFS Format")),Object(o.b)("li",{parentName:"ol"},"Select to ",Object(o.b)("inlineCode",{parentName:"li"},"Format a drive")),Object(o.b)("li",{parentName:"ol"},"Press ",Object(o.b)("inlineCode",{parentName:"li"},"OK")," to start searching for new drives"),Object(o.b)("li",{parentName:"ol"},"Now ",Object(o.b)("strong",{parentName:"li"},"connect")," one of your backup HDD's to your server (you have 1 minute)"),Object(o.b)("li",{parentName:"ol"},"You should get the message that the drive was found"),Object(o.b)("li",{parentName:"ol"},"Select the drive that you want to format to NTFS"),Object(o.b)("li",{parentName:"ol"},"Type in the ",Object(o.b)("strong",{parentName:"li"},"label")," that this partition shall get. It should be a recognizable label like ",Object(o.b)("inlineCode",{parentName:"li"},"Daily Backup")," for the daily backup drive and ",Object(o.b)("inlineCode",{parentName:"li"},"Off-shore Backup")," for the off-shore backup drive "),Object(o.b)("li",{parentName:"ol"},"Confirm that you are sure to format the drive to NTFS by selecting ",Object(o.b)("inlineCode",{parentName:"li"},"Yes")),Object(o.b)("li",{parentName:"ol"},"Now the drive should be successfully formatted")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Now repeat the same procedure for the second backup drive. Start at point 5.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The with Veracrypt encrypted data SSD/HDD must stay connected to the server!"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are done, just choose ",Object(o.b)("inlineCode",{parentName:"p"},"Exit")," to exit this script."))))}b.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);