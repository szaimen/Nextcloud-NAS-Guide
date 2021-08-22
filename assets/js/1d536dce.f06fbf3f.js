(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4421],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6154:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i={id:"improve-performance",title:"How to drastically improve Nextcloud's performance inside your home network?",sidebar_label:"Improve Nextcloud Performance"},c=void 0,l={unversionedId:"improve-performance",id:"improve-performance",isDocsHomePage:!1,title:"How to drastically improve Nextcloud's performance inside your home network?",description:"After a recent switch to new server hardware, I've discovered that Nextcloud wasn't performing better than before although the hardware and software configuration got better by a lot which pointed to a bottleneck somewhere else. Because of my findings, I've decided to create this FAQ guide how to improve the performance of your Nextcloud installation.",source:"@site/docs/improve-performance.md",sourceDirName:".",slug:"/improve-performance",permalink:"/Nextcloud-NAS-Guide/docs/improve-performance",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/improve-performance.md",version:"current",frontMatter:{id:"improve-performance",title:"How to drastically improve Nextcloud's performance inside your home network?",sidebar_label:"Improve Nextcloud Performance"},sidebar:"docs",previous:{title:"Backup drives - PC access",permalink:"/Nextcloud-NAS-Guide/docs/access-backup"},next:{title:"Reduce power consumption",permalink:"/Nextcloud-NAS-Guide/docs/reduce-power-consumption"}},s=[{value:"General network advices",id:"general-network-advices",children:[]},{value:"Solution",id:"solution",children:[]}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After a recent switch to new server hardware, I've discovered that Nextcloud wasn't performing better than before although the hardware and software configuration got better by a lot which pointed to a bottleneck somewhere else. Because of my findings, I've decided to create this FAQ guide how to improve the performance of your Nextcloud installation."),(0,a.kt)("p",null,"First of all, here are some general network advices that I've followed which helped me identifying the real bottleneck."),(0,a.kt)("h2",{id:"general-network-advices"},"General network advices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since you are running a server in your home network, your internet upload speed matters if you are accessing your server from somewhere else. Currently, (at least in germany) coaxial connections (via the TV network) aren't recommended since they feature a very limited upload speed. Better are DSL connections since they have a better upload speed at limited costs. The best are fiber connections because of much higher upload (and download) speeds than the other two but are (at least in germany) very expensive and not often available. Not recommended are any other connections like e.g. LTE (4G) or Hybrid connections."),(0,a.kt)("li",{parentName:"ul"},"Use a capable router for your home network. Especially, if you plan to access your server via Wi-fi, the router should feature as much Wi-fi bandwidth as possible. Currently, (24.03.2021) routers are recommended with at least Wi-fi 5 (ac) or better Wi-fi 6 (ax).",(0,a.kt)("br",null),"\nFor DSL connections is currently (24.03.2021) the ",(0,a.kt)("a",{parentName:"li",href:"https://geizhals.eu/avm-fritz-box-7530-ax-a2411180.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk"},"FRITZ!Box 7530 AX")," recommended"),(0,a.kt)("li",{parentName:"ul"},"Also make sure, that you connect to your router via the 5 GHz network and not 2.4 GHz network ",(0,a.kt)("br",null),"\n(Usually, you can e.g. give the different frequencies a different name in your routers GUI. By doing so, you can make sure that your devices get always connected to the correct network)"),(0,a.kt)("li",{parentName:"ul"},"If your appartment/house is too big for the 5 GHz network for a complete and speedy coverage (for debugging purposes, you can use e.g. the ",(0,a.kt)("a",{parentName:"li",href:"https://en.avm.de/products/fritzapps/fritzapp-wlan"},"FRITZ!App WLAN"),". A good rule of thumb is that you need a repeater if the 2.4 GHz speed exceeds the 5 GHz speed in rooms that need to get covered by Wi-fi), you should buy a Wi-fi repeater also with Wi-fi 5 or Wi-fi 6 that should get connected to your router via an ethernet cable (hence the repeater needs an ethernet port to be able to do that)",(0,a.kt)("br",null),"\nRecommended is currently (24.03.2021) the ",(0,a.kt)("a",{parentName:"li",href:"https://geizhals.eu/avm-fritz-repeater-2400-20002855-a2082185.html"},"FRITZ!Repeater 2400"),(0,a.kt)("br",null),"\n(Please note that you might be able to achieve a better Wi-fi coverage of your appartment/house by moving the router to a better place where it covers more rooms before buying additional Wi-fi repeaters)"),(0,a.kt)("li",{parentName:"ul"},"Your server should be directly connect to your router via an ethernet cable. Make sure that you use at least a Gbit ethernet cable for this, it must at least match the speed of the ethernet port on your server and router. (The same applies to Wi-fi repeaters that I've mentioned above)",(0,a.kt)("br",null),"\n(Usually, you can check the connection speed to all devices in your routers GUI.) ")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"After testing some network changes, I found out that the router actually seems to be the bottleneck in my home network. My theory is that the so called ",(0,a.kt)("inlineCode",{parentName:"p"},"NAT")," which means ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Address Translation")," is the bottleneck here. It resolves requests from the public IP-address to the local IP-address of my server. By using a local DNS server, I was able to bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"NAT")," and improve the performance a by a lot. Requests to my Nextcloud in my home network are now nearly as fast as my network is capable of."),(0,a.kt)("p",null,"To profit from the same changes, you simply install the Pi-hole on your server (",(0,a.kt)("a",{parentName:"p",href:"./pi-hole"},"instructions"),") and make it the DNS server of your whole home network (as adviced ",(0,a.kt)("a",{parentName:"p",href:"./pi-hole#what-to-do-now"},"here"),")"))}d.isMDXComponent=!0}}]);