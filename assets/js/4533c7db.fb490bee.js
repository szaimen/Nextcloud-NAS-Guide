"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4594],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,w=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(w,o(o({ref:t},d),{},{components:n})):a.createElement(w,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"vaultwarden",title:"How to install Vaultwarden (formerly known as Bitwarden RS)?",sidebar_label:"Vaultwarden"},s=void 0,u={unversionedId:"vaultwarden",id:"vaultwarden",title:"How to install Vaultwarden (formerly known as Bitwarden RS)?",description:"Vaultwarden, formerly known as Bitwarden RS, is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Vaultwarden. Installing Vaultwarden enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform.",source:"@site/docs/vaultwarden.md",sourceDirName:".",slug:"/vaultwarden",permalink:"/Nextcloud-NAS-Guide/docs/vaultwarden",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/vaultwarden.md",tags:[],version:"current",frontMatter:{id:"vaultwarden",title:"How to install Vaultwarden (formerly known as Bitwarden RS)?",sidebar_label:"Vaultwarden"},sidebar:"docs",previous:{title:"Firewall",permalink:"/Nextcloud-NAS-Guide/docs/firewall"},next:{title:"Pi-hole",permalink:"/Nextcloud-NAS-Guide/docs/pi-hole"}},d={},c=[{value:"Preparation",id:"preparation",level:3},{value:"Installation",id:"installation",level:3},{value:"What to do now?",id:"what-to-do-now",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vaultwarden, formerly known as Bitwarden RS, is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Vaultwarden. Installing Vaultwarden enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform."),(0,i.kt)("h3",{id:"preparation"},"Preparation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a subdomain like ",(0,i.kt)("inlineCode",{parentName:"li"},"bw.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",(0,i.kt)("a",{parentName:"li",href:"./subdomain-cname"},"instructions"),")")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Bitwarden")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaultwarden")),(0,i.kt)("li",{parentName:"ol"},"Choose to install ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaultwarden")),(0,i.kt)("li",{parentName:"ol"},"Accept the risks and confirm that if you are sure to install ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaultwarden")),(0,i.kt)("li",{parentName:"ol"},"Type in the ",(0,i.kt)("strong",{parentName:"li"},"subdomain")," that you've created and that points to your Nextcloud domain like ",(0,i.kt)("inlineCode",{parentName:"li"},"bw.yourdomain.com")," and confirm it"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Don't")," use ",(0,i.kt)("inlineCode",{parentName:"li"},"UPNP")," to open the required ports (since you've already done this for your Nextcloud)"),(0,i.kt)("li",{parentName:"ol"},"Wait until everything is installed"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Note down")," the password for the admin panel that gets shown to you"),(0,i.kt)("li",{parentName:"ol"},"Confirm that you have the admin password now.")),(0,i.kt)("p",null,"Vaultwarden should be successfully installed by now."),(0,i.kt)("h3",{id:"what-to-do-now"},"What to do now?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You should now visit ",(0,i.kt)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/admin")," to set up the ",(0,i.kt)("strong",{parentName:"li"},"SMTP settings")," for Vaultwarden (so that Vaultwarden can send mails, too.)"),(0,i.kt)("li",{parentName:"ul"},"When you've successfully configured the SMTP settings, you should visit ",(0,i.kt)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/admin/users/overview")," to invite a new user via mail-address. And you will be able to create an account using the link that was send to you."),(0,i.kt)("li",{parentName:"ul"},"After you are done creating all needed accounts, you should disable the admin panel (to make it impossible for an attacker to log into the admin panel):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Bitwarden")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaultwarden Admin-panel")),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes (Disable the admin-panel)")),(0,i.kt)("li",{parentName:"ul"},"Wait until it reports that the admin panel was disabled"))),(0,i.kt)("li",{parentName:"ul"},"After creating the Vaultwarden accounts, you should activate two-factor authentication by visiting ",(0,i.kt)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/#/settings/two-factor")," with each account.")),(0,i.kt)("p",null,"Now, Vaultwarden is finally ready and secured as good as possible!"))}m.isMDXComponent=!0}}]);