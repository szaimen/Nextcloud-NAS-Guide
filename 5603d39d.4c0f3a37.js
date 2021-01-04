(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(165)),l={id:"create-shares",title:"How to create SMB-shares and mount it to Nextcloud in one go?",sidebar_label:"Create SMB-shares and mount it to Nextcloud"},s={unversionedId:"create-shares",id:"create-shares",isDocsHomePage:!1,title:"How to create SMB-shares and mount it to Nextcloud in one go?",description:"The big advantage is, that you can create a SMB-share and mount the same location to Nextcloud in one go.",source:"@site/docs\\create-shares.md",slug:"/create-shares",permalink:"/Nextcloud-NAS-Guide/docs/create-shares",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/docs/create-shares.md",version:"current",sidebar_label:"Create SMB-shares and mount it to Nextcloud",sidebar:"someSidebar",previous:{title:"How to create SMB-users and Nextcloud users in one go?",permalink:"/Nextcloud-NAS-Guide/docs/create-users"},next:{title:"How to make the root directory in Nextcloud read only for all users?",permalink:"/Nextcloud-NAS-Guide/docs/readonly-root"}},i=[],c={toc:i};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The big advantage is, that you can create a SMB-share and mount the same location to Nextcloud in one go."),Object(r.b)("p",null,"If you have followed this guide, you should have set up a ",Object(r.b)("strong",{parentName:"p"},"sensible folder structure")," on the external data SSD/HDD by now. Based on this structure, you should ",Object(r.b)("strong",{parentName:"p"},"share")," the ",Object(r.b)("inlineCode",{parentName:"p"},"user folders")," with the corresponding user that you just created. The ",Object(r.b)("inlineCode",{parentName:"p"},"data exchange")," folders should get shared with the users that shall have access to those folders. "),Object(r.b)("p",null,"If you have mounted the external data SSD/HDD in ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data")," as recommended, is here one example:\nYour data folder should be now found in ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data/your data folder"),". One of your user folders and data exchange folders might be ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/user1 folder")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/Data exchange folder")," now. You should then ",Object(r.b)("strong",{parentName:"p"},"share")," the ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/user1 folder")," with ",Object(r.b)("inlineCode",{parentName:"p"},"user1")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/Data exchange folder")," with all users that shall get access to this folder. As you now see, best case is, if the user folders on your external data SSD/HDD match exactly the user count of newly created users."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"BTW"),": you can at this point still shutdown your server, disconnect the external data SSD/HDD, connect it to your PC, open it with ",Object(r.b)("inlineCode",{parentName:"p"},"Veracrypt")," and change the folder structure there. Afterwards you can connect the drive to your server again and power it back on."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Based on the example above, you should now create a list how do you want to share your data with your users.")),Object(r.b)("p",null,"Here is how to work off this list technically:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go back to the ",Object(r.b)("strong",{parentName:"li"},"SMB-server Main Menu")," and select ",Object(r.b)("inlineCode",{parentName:"li"},"Open the SMB-share Menu")),Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Create a SMB-share")),Object(r.b)("li",{parentName:"ol"},"You will see now a list of valid directories you can type in"),Object(r.b)("li",{parentName:"ol"},"Type in one ",Object(r.b)("strong",{parentName:"li"},"directory")," that you want to share. Based on the example above, it could be e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt/data/your data folder/user1 folder")," or ",Object(r.b)("inlineCode",{parentName:"li"},"/mnt/data/your data folder/Data exchange folder")),Object(r.b)("li",{parentName:"ol"},"Type in the ",Object(r.b)("strong",{parentName:"li"},"Share name")," that you want to use. It should most likely have the same name like the folder that you want to share. Please note, that spaces are not supported. For e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"user1 folder")," you would thus need to use ",Object(r.b)("inlineCode",{parentName:"li"},"user1_folder")," or ",Object(r.b)("inlineCode",{parentName:"li"},"user1-folder")," as name"),Object(r.b)("li",{parentName:"ol"},"Now ",Object(r.b)("strong",{parentName:"li"},"select the SMB-users")," that shall get ",Object(r.b)("strong",{parentName:"li"},"access")," to the share. If it is a ",Object(r.b)("inlineCode",{parentName:"li"},"user folder"),", you should only share it with the corresponding user. If it is a ",Object(r.b)("inlineCode",{parentName:"li"},"Data exchange folder"),", you should share it with all users that shall get access to the folder."),Object(r.b)("li",{parentName:"ol"},"Now select if the share shall be ",Object(r.b)("strong",{parentName:"li"},"writeable"),", which you should most likely answer with ",Object(r.b)("inlineCode",{parentName:"li"},"Yes")),Object(r.b)("li",{parentName:"ol"},"After restarting Samba, the SMB-share should be successfully created!"),Object(r.b)("li",{parentName:"ol"},"Select that you ",Object(r.b)("strong",{parentName:"li"},"want to mount")," the same directory to Nextcloud as local storage (you are making the path that you've chosen in the beginning accessible in Nextcloud this way)"),Object(r.b)("li",{parentName:"ol"},"You can now change the name of your directory for the usage in Nextcloud. Recommended is to just use the already chosen name."),Object(r.b)("li",{parentName:"ol"},"Now everything should get set up automatically"),Object(r.b)("li",{parentName:"ol"},"Enabling Inotify is ",Object(r.b)("strong",{parentName:"li"},"not")," recommended and normally not necessary")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Now repeat that method for the whole list that you've made, starting at point 2."),"\n(If you are done, please don't close the script! You will need it again in the next step!)"),Object(r.b)("p",null,"Please note that you can always change the settings for your mounts in Nextcloud by opening ",Object(r.b)("inlineCode",{parentName:"p"},"https://yourdomain-or-ipaddress/settings/admin/externalstorages")," with your Nextcloud admin account afterwards."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Your users should also be able to access their files and folders using SMB over the local network (as shown during point 8).")))}u.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,p=d["".concat(l,".").concat(h)]||d[h]||b[h]||r;return a?o.a.createElement(p,s(s({ref:t},c),{},{components:a})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);