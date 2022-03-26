"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5622],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"lynis",title:"How to run a security audit on your instance?",sidebar_label:"Security Audit"},s=void 0,c={unversionedId:"lynis",id:"lynis",title:"How to run a security audit on your instance?",description:"In case you wonder how secure your Nextcloud-NAS concerning the OS really is, there is a way to run a security audit on your instance. Here is how to do it.",source:"@site/docs/lynis.md",sourceDirName:".",slug:"/lynis",permalink:"/Nextcloud-NAS-Guide/docs/lynis",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/lynis.md",tags:[],version:"current",frontMatter:{id:"lynis",title:"How to run a security audit on your instance?",sidebar_label:"Security Audit"},sidebar:"docs",previous:{title:"Edit Audio/Music metadata",permalink:"/Nextcloud-NAS-Guide/docs/picard"}},l={},d=[],p={toc:d};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In case you wonder how secure your Nextcloud-NAS concerning the OS really is, there is a way to run a security audit on your instance. Here is how to do it."),(0,i.kt)("p",null,"Run over CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Get newest lynis version\n# https://kifarunix.com/install-and-setup-lynis-security-auditing-tool-on-ubuntu-20-04/\nwget -O - https://packages.cisofy.com/keys/cisofy-software-public.key | sudo apt-key add -\necho "deb https://packages.cisofy.com/community/lynis/deb/ stable main" | sudo tee /etc/apt/sources.list.d/cisofy-lynis.list\necho \'Acquire::Languages "none";\' | sudo tee /etc/apt/apt.conf.d/99disable-translations\nsudo apt install apt-transport-https\nsudo apt update\n\n# Install lynis\nsudo apt install lynis -y\n\n# Run NextcloudPi\'s security audit script\nwget https://raw.githubusercontent.com/nextcloud/nextcloudpi/master/bin/ncp/SECURITY/nc-audit.sh\necho install >> nc-audit.sh\necho configure >> nc-audit.sh\nsudo bash nc-audit.sh\nrm nc-audit.sh\n\n# Remove lynis again\nsudo apt purge lynis -y\nsudo rm /etc/apt/sources.list.d/cisofy-lynis.list\nsudo apt update\nsudo apt autoremove -y\n')),(0,i.kt)("p",null,"Now, you should have gotten an output with a security rating and security advices, apart from other things."))}y.isMDXComponent=!0}}]);