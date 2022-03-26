"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9793],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={id:"pico",title:"How to install Pico CMS for Nextcloud?",sidebar_label:"Pico CMS"},s=void 0,c={unversionedId:"pico",id:"pico",title:"How to install Pico CMS for Nextcloud?",description:"Pico CMS for Nextcloud combines the power of Pico and Nextcloud to create simple, secure, shareable and amazingly powerful websites with just a few clicks. Pico is a stupidly simple, blazing fast, flat file CMS - making the web easy! You can find more infos about this app here: click here",source:"@site/docs/pico.md",sourceDirName:".",slug:"/pico",permalink:"/Nextcloud-NAS-Guide/docs/pico",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/pico.md",tags:[],version:"current",frontMatter:{id:"pico",title:"How to install Pico CMS for Nextcloud?",sidebar_label:"Pico CMS"},sidebar:"docs",previous:{title:"Whiteboard",permalink:"/Nextcloud-NAS-Guide/docs/whiteboard"},next:{title:"Extract",permalink:"/Nextcloud-NAS-Guide/docs/extract"}},p={},u=[{value:"Preparation",id:"preparation",level:3},{value:"Installation",id:"installation",level:3},{value:"What to do now?",id:"what-to-do-now",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pico CMS for Nextcloud combines the power of Pico and Nextcloud to create simple, secure, shareable and amazingly powerful websites with just a few clicks. Pico is a stupidly simple, blazing fast, flat file CMS - making the web easy! You can find more infos about this app here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nextcloud/cms_pico#about"},"click here")),(0,a.kt)("p",null,"This guide allows you to access your Pico CMS sites on a different Domain than your Nextcloud Domain. Here is how to do that:"),(0,a.kt)("h3",{id:"preparation"},"Preparation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a subdomain like ",(0,a.kt)("inlineCode",{parentName:"li"},"blog.yourdomain.com")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"sites.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",(0,a.kt)("a",{parentName:"li",href:"./subdomain-cname"},"instructions"),")",(0,a.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can also use a completely different domain like ",(0,a.kt)("inlineCode",{parentName:"p"},"thatsyourotherdomain.com")))))),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Pico CMS")),(0,a.kt)("li",{parentName:"ol"},"Choose to install/reinstall Pico CMS"),(0,a.kt)("li",{parentName:"ol"},"Most likely you will now see a popup that Nextcloud's default ",(0,a.kt)("inlineCode",{parentName:"li"},"Text")," app is enabled which has incompatibility issues with Pico CMS. ",(0,a.kt)("strong",{parentName:"li"},"Confirm")," that you want to disable it. If you have the ",(0,a.kt)("inlineCode",{parentName:"li"},"Issue Template")," or the ",(0,a.kt)("inlineCode",{parentName:"li"},"Terms of Service")," app installed, you will also be asked to disable them which you should ",(0,a.kt)("strong",{parentName:"li"},"confirm")," as well."),(0,a.kt)("li",{parentName:"ol"},"Wait until it reports that the base configuration of Pico CMS was successful"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Choose")," that you want to make your sites available on a different Domain"),(0,a.kt)("li",{parentName:"ol"},"Now enter the domain that you've created and pointed to your Nextcloud domain during the preparation section of this guide"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don't use")," UPNP to open the ports for you"),(0,a.kt)("li",{parentName:"ol"},"You should now get asked if you want to make a specific site available when opening the chosen domain. I'd recommend to ",(0,a.kt)("strong",{parentName:"li"},"confirm")," that since otherwise accessing the domain directly will redirect to your Nextcloud domain which will kind of defend the purpose of using another domain for the Pico CMS sites. "),(0,a.kt)("li",{parentName:"ol"},"Now enter the sites Identifier e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"blog")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"mysite")),(0,a.kt)("li",{parentName:"ol"},"Now wait until everything is installed and it reports that Pico CMS was successfully installed")),(0,a.kt)("h3",{id:"what-to-do-now"},"What to do now?"),(0,a.kt)("p",null,"You should now create at least one new Pico CMS site with the same Identifier that you've entered during step 10 of the installation section by opening ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/settings/user/cms_pico")," with your Nextcloud user. Afterwards you can edit the site which consists of a few new files directly in your Nextcloud. All public Pico CMS sites of your Nextcloud instance should now be accessible by opening the chosen subdomain. E.g. when using ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," as the sites identifier: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://subdomain.com/blog"),". The site that you've entered during step 10 of the installation section will be accessible by opening ",(0,a.kt)("inlineCode",{parentName:"p"},"https://subdomain.com")," directly."),(0,a.kt)("p",null,"Otherwise, you can change some Pico CMS admin settings, e.g. restrict the app usage to some groups, etc. by opening: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/settings/admin/cms_pico")))}m.isMDXComponent=!0}}]);