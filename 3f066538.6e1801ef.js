(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(193)),i={id:"ssh",title:"How to connect to your server over SSH?",sidebar_label:"SSH"},c={unversionedId:"ssh",id:"ssh",isDocsHomePage:!1,title:"How to connect to your server over SSH?",description:"In order to connect to your server from a PC in the same network, you should use SSH. You are then able to control your server, use copy and paste and more.",source:"@site/docs/ssh.md",slug:"/ssh",permalink:"/Nextcloud-NAS-Guide/docs/ssh",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/ssh.md",version:"current",sidebar_label:"SSH",sidebar:"docs",previous:{title:"How to set up Ubuntu?",permalink:"/Nextcloud-NAS-Guide/docs/ubuntu"},next:{title:"How to set up automatic TPM2 unlocking and secure your GRUB (bootloader)?",permalink:"/Nextcloud-NAS-Guide/docs/tpm2"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to connect to your server from a PC in the same network, you should use SSH. You are then able to control your server, use copy and paste and more."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Find out the IPv4-address of your server (if not already done): Either login to your server to show it or it will be presented on the login screen after installing Nextcloud"),Object(a.b)("li",{parentName:"ol"},"Open a command prompt on Windows 10 or terminal on Linux"),Object(a.b)("li",{parentName:"ol"},"Type in ",Object(a.b)("inlineCode",{parentName:"li"},"ssh username@ip-address"),Object(a.b)("br",null),"\nOne example is: ",Object(a.b)("inlineCode",{parentName:"li"},"ssh ncadmin@192.168.178.144"),Object(a.b)("br",null),"\n(If it times out although your server is running, the IPv4-address might be wrong. Then please look at step 1 how to find out the IPv4-address)"),Object(a.b)("li",{parentName:"ol"},"If you connect the first time to your server, you will be asked to confirm the server fingerprint which you should do by typing in ",Object(a.b)("inlineCode",{parentName:"li"},"yes")," and pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]"),"."),Object(a.b)("li",{parentName:"ol"},"Now type in your Ubuntu user ",Object(a.b)("strong",{parentName:"li"},"password"))),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you get a fingerprint warning (because the SSH-fingerprint of your server changed), you can reset the fingerprint by typing in your Console/Terminal on your client PC:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"ssh-keygen -R ip-address"),Object(a.b)("br",null),"\nso e.g.",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"ssh-keygen -R 192.168.178.144")))))}u.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);