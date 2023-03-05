"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4886,865,1687],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),i=n(1048),s=n(3609),l=n(1943),u=n(2957),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,y=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,x=(0,a.useState)(k),S=x[0],O=x[1],Z=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=T[f];null!=D&&D!==S&&b.some((function(e){return e.value===D}))&&O(D)}var I=function(e){var t=e.currentTarget,n=Z.indexOf(t),r=b[n].value;r!==S&&(C(t),O(r),null!=f&&N(f,String(r)))},E=function(e){var t,n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var r,a=Z.indexOf(e.currentTarget)+1;n=null!=(r=Z[a])?r:Z[0];break;case"ArrowLeft":var o,i=Z.indexOf(e.currentTarget)-1;n=null!=(o=Z[i])?o:Z[Z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},y)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:E,onClick:I},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},3479:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(9124),s=n(9353),l=["components"],u={id:"syncthing",title:"Syncthing",sidebar_label:"Syncthing"},c=void 0,d={unversionedId:"applications/syncthing",id:"applications/syncthing",title:"Syncthing",description:"Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet.",source:"@site/docs/applications/syncthing.mdx",sourceDirName:"applications",slug:"/applications/syncthing",permalink:"/applications/syncthing",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/syncthing.mdx",tags:[],version:"current",frontMatter:{id:"syncthing",title:"Syncthing",sidebar_label:"Syncthing"},sidebar:"docs",previous:{title:"Rclone",permalink:"/applications/rclone"},next:{title:"vsftpd",permalink:"/applications/vsftpd"}},p={},m=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration &amp; Usage",id:"configuration--usage",level:2},{value:"Setup Remote Device",id:"setup-remote-device",level:3},{value:"Adding a Folder to Synch with a Remote Server",id:"adding-a-folder-to-synch-with-a-remote-server",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Syncthing is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install syncthing\n")),(0,o.kt)("p",null,"This command will configure and install syncthing for your user."),(0,o.kt)("p",null,"After installation, the config is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/syncthing/"),"."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After installation, you can access the web client at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/syncthing/"),"."),(0,o.kt)("p",null,"You can access the download section ",(0,o.kt)("a",{parentName:"p",href:"https://syncthing.net/downloads/"},"here")," for your other client that you plan to sync."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)(i.default,{service:"syncthing",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration--usage"},"Configuration & Usage"),(0,o.kt)("p",null,"Syncthing needs to connect to another server running syncthing. We will do this by editing the settings. "),(0,o.kt)("h3",{id:"setup-remote-device"},"Setup Remote Device"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On your Remote Client, Click Actions and then Show ID."),(0,o.kt)("li",{parentName:"ol"},"Copy the ID"),(0,o.kt)("li",{parentName:"ol"},"On your other server on the bottom right click +Add Remote Device"),(0,o.kt)("li",{parentName:"ol"},"Paste the Device ID and give it a name"),(0,o.kt)("li",{parentName:"ol"},"Press Save"),(0,o.kt)("li",{parentName:"ol"},"On the other client there should be a pop up asking you if you want to add the device; Press add device."),(0,o.kt)("li",{parentName:"ol"},"Another pop up will appear, press Save.")),(0,o.kt)("h3",{id:"adding-a-folder-to-synch-with-a-remote-server"},"Adding a Folder to Synch with a Remote Server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click +Add Folder"),(0,o.kt)("li",{parentName:"ol"},"Give the Folder a Label"),(0,o.kt)("li",{parentName:"ol"},"Add the folder path of the directory that you want to sync to a remote server."),(0,o.kt)("li",{parentName:"ol"},"Go to the Sharing Tab and put a check mark in the client you want to share it with remotely."),(0,o.kt)("li",{parentName:"ol"},"Go to the Advanced Tab and choose the folder type you want."),(0,o.kt)("li",{parentName:"ol"},"On your other client, another pop up will appear, choose add."),(0,o.kt)("li",{parentName:"ol"},"Go through the settings and change what you want.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)(s.default,{mdxType:"Troubleshooting"}),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.syncthing.net/intro/getting-started.html"},"syncthing documentation")," for further help."))}f.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(4259),s=n(425),l=n(9319),u=["components"],c={},d=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],f={toc:h};function y(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}y.isMDXComponent=!0},9353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={},l=void 0,u={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},c={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can always also try the ",(0,o.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!")))}m.isMDXComponent=!0}}]);