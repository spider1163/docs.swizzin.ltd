"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[9359],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),l=["components"],o={id:"box-basics",title:"Getting started with box",sidebar_label:"Getting started with box"},s=void 0,u={unversionedId:"getting-started/box-basics",id:"getting-started/box-basics",title:"Getting started with box",description:"box is a homegrown application that will help you install applications on your server and manage their services.",source:"@site/docs/getting-started/box-basics.md",sourceDirName:"getting-started",slug:"/getting-started/box-basics",permalink:"/getting-started/box-basics",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/getting-started/box-basics.md",tags:[],version:"current",frontMatter:{id:"box-basics",title:"Getting started with box",sidebar_label:"Getting started with box"},sidebar:"docs",previous:{title:"How do I connect to the server?",permalink:"/getting-started/how-do-i-connect"},next:{title:"Frequently Asked Questions",permalink:"/getting-started/faqs"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"box",id:"box",level:2},{value:"help",id:"help",level:2},{value:"install",id:"install",level:2},{value:"remove",id:"remove",level:2},{value:"update",id:"update",level:2},{value:"upgrade",id:"upgrade",level:2},{value:"adduser",id:"adduser",level:2},{value:"deluser",id:"deluser",level:2},{value:"chpasswd",id:"chpasswd",level:2},{value:"list",id:"list",level:2},{value:"Test",id:"test",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"box")," is a homegrown application that will help you install applications on your server and manage their services."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In order to use the installer and management functions on your slot, you'll need to use the included management script: ",(0,i.kt)("inlineCode",{parentName:"p"},"box"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"box")," has several functions, which we'll go over here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"help"),(0,i.kt)("li",{parentName:"ul"},"install"),(0,i.kt)("li",{parentName:"ul"},"remove"),(0,i.kt)("li",{parentName:"ul"},"update"),(0,i.kt)("li",{parentName:"ul"},"upgrade"),(0,i.kt)("li",{parentName:"ul"},"adduser"),(0,i.kt)("li",{parentName:"ul"},"deluser"),(0,i.kt)("li",{parentName:"ul"},"chpasswd"),(0,i.kt)("li",{parentName:"ul"},"list"),(0,i.kt)("li",{parentName:"ul"},"test")),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"box")," is considered a complete box management script, its functions require root/sudo permissions to execute. The guide will assume that you're either a root user or prefixing the commands with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo"))),(0,i.kt)("h2",{id:"box"},"box"),(0,i.kt)("p",null,"When run alone, box will start a graphical user interface with install and remove functions similar to the initial setup. This is a good option if you are new to swizzin and/or linux, but once you get familiar with the system, ",(0,i.kt)("inlineCode",{parentName:"p"},"install")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," are more powerful options."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box\n")),(0,i.kt)("h2",{id:"help"},"help"),(0,i.kt)("p",null,"The function of help is basic: provide you usage details on how to use box and the commands available to you."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box help\n")),(0,i.kt)("h2",{id:"install"},"install"),(0,i.kt)("p",null,"The function used to install applications from the server. If you need help with specific commands, they are available on the application sub-pages here. You can specify as many applications is you like here."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box install rtorrent deluge\n")),(0,i.kt)("h2",{id:"remove"},"remove"),(0,i.kt)("p",null,"The function used to remove applications from the server. If you need help with specific commands, they are available on the application sub-pages here. You can specify as many applications is you like here."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box remove rtorrent deluge\n")),(0,i.kt)("h2",{id:"update"},"update"),(0,i.kt)("p",null,"This function can be used to update your swizzin repository. There are a number of update scripts that trigger each time this command is called -- these will typically help fix issues or upgrade your current installation to a new method of handling the application in question."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box update\n")),(0,i.kt)("h2",{id:"upgrade"},"upgrade"),(0,i.kt)("p",null,"This function can be used to upgrade a specific application to a newer version or recompile an application which was compiled during install. Only selected applications have upgrade scripts. You can check which scripts have ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," components by looking in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/swizzin/scripts/upgrade")," directory. Call them directly by name."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box upgrade nginx\n")),(0,i.kt)("h2",{id:"adduser"},"adduser"),(0,i.kt)("p",null,"The function used to add a secondary user to your server. Please note, only the master user has access to a significant portion of the included applications"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box adduser faithfulfriend\n")),(0,i.kt)("h2",{id:"deluser"},"deluser"),(0,i.kt)("p",null,"The function used to remove a user from your server. All of the user's data will be destroyed, please use with caution."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box deluser exgirlfriend\n")),(0,i.kt)("h2",{id:"chpasswd"},"chpasswd"),(0,i.kt)("p",null,"Use this command when you'd like to change your password. ",(0,i.kt)("inlineCode",{parentName:"p"},"chpasswd")," will change the password for SSH, FTP, HTTP and Deluge. You must specify a username as well."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box chpasswd forgetfulfriend\n")),(0,i.kt)("h2",{id:"list"},"list"),(0,i.kt)("p",null,"This function lists the applications currently available for installation and a quick description of the application."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box list\n")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"You can use this in order to perform a sanity check about the status of installed applications. Primarily intended for CI, but might as well let you know."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box test # Tests all installed apps\nbox test sonarr radarr # Tests only specified app(s)\n")))}h.isMDXComponent=!0}}]);