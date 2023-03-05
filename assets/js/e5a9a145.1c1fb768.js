"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[3614],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(4137)),s=["components"],o={id:"setdisk",title:"setdisk",sidebar_label:"setdisk"},l=void 0,u={unversionedId:"scripts/setdisk",id:"scripts/setdisk",title:"setdisk",description:"This script helps setting quotas to users in an easy manner.",source:"@site/docs/scripts/setdisk.md",sourceDirName:"scripts",slug:"/scripts/setdisk",permalink:"/scripts/setdisk",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/scripts/setdisk.md",tags:[],version:"current",frontMatter:{id:"setdisk",title:"setdisk",sidebar_label:"setdisk"},sidebar:"docs",previous:{title:"3rd party customisations",permalink:"/guides/customisations"},next:{title:"rtx",permalink:"/scripts/rtx"}},c={},p=[{value:"Format for the size.",id:"format-for-the-size",level:2},{value:"Running interactively",id:"running-interactively",level:2},{value:"Running with parameters",id:"running-with-parameters",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This script helps setting quotas to users in an easy manner."),(0,a.kt)("p",null,"It is run during the ",(0,a.kt)("inlineCode",{parentName:"p"},"box adduser")," command as well."),(0,a.kt)("p",null,"By default, the master user does not have a quota set which can result in odd UI behavior. You can use this command to rectify such issues. Please consider if you truly need the quota functionality if you are the sole user of a machine."),(0,a.kt)("h2",{id:"format-for-the-size"},"Format for the size."),(0,a.kt)("p",null,"You can specify the format in one of the following formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specific size",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Available units are MBs, GBs and TBs.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This format does not allow for decimals, therefore only ",(0,a.kt)("inlineCode",{parentName:"li"},"12GB"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"123456MB")," or etc. will work; not ",(0,a.kt)("inlineCode",{parentName:"li"},"12.3GB"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"1.45TB")," etc."))))),(0,a.kt)("li",{parentName:"ul"},"Maximum",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will retrieve the disk that quotas are set on, and set the maximum.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Please note the following caveats"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This size can be slightly larger than what the disk can actually store due to how partitioning works."),(0,a.kt)("li",{parentName:"ul"},'The "Available" is purely a subtraction of the user\'s used space minus the quota, therefore it does not take into account space used by anything else other than the user.')))))),(0,a.kt)("h2",{id:"running-interactively"},"Running interactively"),(0,a.kt)("p",null,"You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo setdisk")," and specify the user and size interactively on the command line. "),(0,a.kt)("h2",{id:"running-with-parameters"},"Running with parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setdisk")," also runs non-interactively. You can set the user as the first argument, and the size as described above as an optional second argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Set size interactively\nsudo setdisk user1\n#Set size as parameter\nsudo setdisk user1 20GB\n")))}m.isMDXComponent=!0}}]);