(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6087],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9784:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l={id:"clamav",title:"How to install ClamAV?",sidebar_label:"ClamAV"},i={unversionedId:"clamav",id:"clamav",isDocsHomePage:!1,title:"How to install ClamAV?",description:"In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found.",source:"@site/docs/clamav.md",sourceDirName:".",slug:"/clamav",permalink:"/Nextcloud-NAS-Guide/docs/clamav",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/clamav.md",version:"current",sidebar_label:"ClamAV",frontMatter:{id:"clamav",title:"How to install ClamAV?",sidebar_label:"ClamAV"},sidebar:"docs",previous:{title:"How to set up Fail2Ban?",permalink:"/Nextcloud-NAS-Guide/docs/fail2ban"},next:{title:"How to enable automatic updates?",permalink:"/Nextcloud-NAS-Guide/docs/automatic-updates"}},c=[],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run over CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"ClamAV")),(0,o.kt)("li",{parentName:"ol"},"Choose to install/reinstall ClamAV"),(0,o.kt)("li",{parentName:"ol"},"Wait until it is installed and the service was started"),(0,o.kt)("li",{parentName:"ol"},"Choose to set up a ",(0,o.kt)("strong",{parentName:"li"},"weekly full scan")," of all your files (the scan will run on sundays starting at 10:00)"),(0,o.kt)("li",{parentName:"ol"},"Choose what shall get done with found files. ",(0,o.kt)("strong",{parentName:"li"},"Only log")," is recommended.")),(0,o.kt)("p",null,"You've successfully made your server a bit more secure!"))}s.isMDXComponent=!0}}]);