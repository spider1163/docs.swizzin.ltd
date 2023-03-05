"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[8210,865],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},425:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(6010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},4259:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),n=a(7294),o=a(6010),i=a(1048),l=a(3609),s=a(1943),u=a(2957),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),T=w.tabGroupChoices,z=w.setTabGroupChoices,N=(0,n.useState)(g),x=N[0],O=N[1],Z=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var S=T[b];null!=S&&S!==x&&h.some((function(e){return e.value===S}))&&O(S)}var I=function(e){var t=e.currentTarget,a=Z.indexOf(t),r=h[a].value;r!==x&&(E(t),O(r),null!=b&&z(b,String(r)))},B=function(e){var t,a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var r,n=Z.indexOf(e.currentTarget)+1;a=null!=(r=Z[n])?r:Z[0];break;case"ArrowLeft":var o,i=Z.indexOf(e.currentTarget)-1;a=null!=(o=Z[i])?o:Z[Z.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:B,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},2272:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=a(9124),l=["components"],s={id:"bazarr",title:"Bazarr",sidebar_label:"Bazarr"},u=void 0,c={unversionedId:"applications/bazarr",id:"applications/bazarr",title:"Bazarr",description:"Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.",source:"@site/docs/applications/bazarr.mdx",sourceDirName:"applications",slug:"/applications/bazarr",permalink:"/applications/bazarr",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/bazarr.mdx",tags:[],version:"current",frontMatter:{id:"bazarr",title:"Bazarr",sidebar_label:"Bazarr"},sidebar:"docs",previous:{title:"Autodl",permalink:"/applications/autodl"},next:{title:"Lidarr",permalink:"/applications/lidarr"}},p={},d=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"More info",id:"more-info",level:3}],m={toc:d};function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Bazarr is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"sudo box install bazarr\n")),(0,o.kt)("p",null,"This command will configure bazarr for the main user."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"Once setup, bazarr will be available at the link ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/bazarr")),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"The systemd script for bazarr can be found at"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/bazarr.service\n")),(0,o.kt)("p",null,"By default, bazarr can only be configured for use with a single user with swizzin."),(0,o.kt)(i.default,{service:"bazarr",mdxType:"SystemdTabs"}),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Forgot your API key or port? No worries, here are one-liners you can submit from SSH:"),(0,o.kt)("p",{parentName:"admonition"},"Sonarr:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.config/sonarr/config.xml | grep -e \\<Api -e \\<Port -e \\<UrlBase\n")),(0,o.kt)("p",{parentName:"admonition"},"Radarr:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.config/Radarr/config.xml | grep -e \\<Api -e \\<Port -e \\<UrlBase\n"))),(0,o.kt)("h3",{id:"more-info"},"More info"),(0,o.kt)("p",null,"If you need further help, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/morpheus65535/bazarr/wiki"},"Bazarr Wiki"),"."))}f.isMDXComponent=!0},9124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=a(4259),l=a(425),s=a(9319),u=["components"],c={},p=void 0,d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},f=[],b={toc:f};function v(e){var t=e.components,a=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}v.isMDXComponent=!0}}]);