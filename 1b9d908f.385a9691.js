(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(149)),i={id:"pms",title:"How to install PLEX Media Server?",sidebar_label:"PLEX Media Server"},l={unversionedId:"pms",id:"pms",isDocsHomePage:!1,title:"How to install PLEX Media Server?",description:"Plex Media Server is a media server application that runs on your own server and perfectly rounds off the feature set that Nextcloud provides. You can stream and open your own videos, movies, series, music and photos on any device that support Plex apps which are almost all platforms.",source:"@site/docs/pms.md",slug:"/pms",permalink:"/Nextcloud-NAS-Guide/docs/pms",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/pms.md",version:"current",sidebar_label:"PLEX Media Server",sidebar:"docs",previous:{title:"How to install PiVPN?",permalink:"/Nextcloud-NAS-Guide/docs/pivpn"},next:{title:"How to install Remotedesktop?",permalink:"/Nextcloud-NAS-Guide/docs/remotedesktop"}},s=[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"What to do now?",id:"what-to-do-now",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Plex Media Server is a media server application that runs on your own server and perfectly rounds off the feature set that Nextcloud provides. You can stream and open your own videos, movies, series, music and photos on any device that support Plex apps which are almost all platforms."),Object(o.b)("h3",{id:"preparation"},"Preparation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Port-forward port 32400 TCP to your server (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./port-forwarding"}),"instructions"),")")),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run over CLI:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"sudo bash /var/scripts/not-supported.sh\n"))),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"PLEX Media Server")),Object(o.b)("li",{parentName:"ol"},"Choose to install PLEX Media server"),Object(o.b)("li",{parentName:"ol"},"Wait until everything is installed and it reports that Plex was successfully installed"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Confirm")," that you want to access ",Object(o.b)("inlineCode",{parentName:"li"},"PLEX")," from outside your home"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Don't")," use ",Object(o.b)("inlineCode",{parentName:"li"},"UPNP")," to open the required port since you've already done this manually"),Object(o.b)("li",{parentName:"ol"},"It should now check the required Port and show the last popup how to set up PLEX")),Object(o.b)("h3",{id:"what-to-do-now"},"What to do now?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"http://internal-server-ip-address:32400/web")," e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"http://192.168.178.144:32400/web")," to set up PLEX")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"notes")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"All your media should be accessible from within Plex in subdirectories of ",Object(o.b)("inlineCode",{parentName:"li"},"/mnt")),Object(o.b)("li",{parentName:"ul"},"All your media is mounted read only so that PLEX is not able to write to or change anything on your drives"),Object(o.b)("li",{parentName:"ul"},"It is recommended to get ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.plex.tv/plex-pass"}),"PLEX Pass")," for your PLEX account because you can use hardware transcoding and any PLEX App on any platform for free; if you have PLEX Pass, you need to manually ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://support.plex.tv/articles/115002178853-using-hardware-accelerated-streaming/"}),"enable hardware transcoding")," in the settings.)"),Object(o.b)("li",{parentName:"ul"},"There is a lot to cover but basically you only have to create one PLEX account that has a PLEX Pass to use all features and create ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://support.plex.tv/articles/203815766-what-is-plex-home/"}),"Plex Home")," users to control the access to your media. You can create music/photos/videos libraries for each user and asssign them their own or create libraries for all PLEX Home users. E.g. movies/series libraries will most likely be accessible by all PLEX Home users."),Object(o.b)("li",{parentName:"ul"},"You should only invite users to your PLEX Home that you really trust, since the only thing hindering those from becoming an admin over your PLEX server is a short 4-digit PIN."),Object(o.b)("li",{parentName:"ul"},"You can digitize your Blu-rays, DVDs & CDs directly on your server (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./digitize"}),"instructions"),")"),Object(o.b)("li",{parentName:"ul"},"You should ",Object(o.b)("strong",{parentName:"li"},"not")," store your digitized Blu-rays and DVDs on your with Veracrypt encrypted external data SSD/HDD but instead use an extra HDD to store those data! (Since it is overkill to backup this data; in exchange will this extra HDD not get encrypted which makes data recovery a lot easier)",Object(o.b)("br",null),"\nYou can find instructions how to do that here: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"./mount-hdd"}),"click here"),". "),Object(o.b)("li",{parentName:"ul"},"Every other data than digitized Blu-rays and DVDs should be stored on the with Veracrypt encrypted external data SSD/HDD so that this data gets backed up."),Object(o.b)("li",{parentName:"ul"},"The whole extra HDD will not be visible and usable in Nextcloud/SMB")))))}p.isMDXComponent=!0}}]);