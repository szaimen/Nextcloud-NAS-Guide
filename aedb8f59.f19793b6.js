(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(154)),l={id:"clamav",title:"How to install ClamAV?",sidebar_label:"ClamAV"},i={unversionedId:"clamav",id:"clamav",isDocsHomePage:!1,title:"How to install ClamAV?",description:"In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found.",source:"@site/docs/clamav.md",slug:"/clamav",permalink:"/Nextcloud-NAS-Guide/docs/clamav",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/clamav.md",version:"current",sidebar_label:"ClamAV",sidebar:"docs",previous:{title:"How to set up Fail2Ban?",permalink:"/Nextcloud-NAS-Guide/docs/fail2ban"},next:{title:"How to enable automatic updates?",permalink:"/Nextcloud-NAS-Guide/docs/automatic-updates"}},c=[],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run over CLI:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"ClamAV")),Object(o.b)("li",{parentName:"ol"},"Choose to install/reinstall ClamAV"),Object(o.b)("li",{parentName:"ol"},"Wait until it is installed and the service was started"),Object(o.b)("li",{parentName:"ol"},"Choose to set up a ",Object(o.b)("strong",{parentName:"li"},"weekly full scan")," of all your files (the scan will run on sundays starting at 10:00 and for 12h max)"),Object(o.b)("li",{parentName:"ol"},"Choose what shall get done with found files. ",Object(o.b)("strong",{parentName:"li"},"Only log")," is recommended.")),Object(o.b)("p",null,"You've successfully made your server a bit more secure!"))}s.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);