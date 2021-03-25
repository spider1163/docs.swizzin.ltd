(window.webpackJsonp=window.webpackJsonp||[]).push([[45,15,77],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(157)),i=n(56),s=n(59),c={id:"emby",title:"Emby",sidebar_label:"Emby"},l={unversionedId:"applications/emby",id:"applications/emby",isDocsHomePage:!1,title:"Emby",description:"Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets.",source:"@site/docs/applications/emby.mdx",slug:"/applications/emby",permalink:"/applications/emby",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/emby.mdx",version:"current",sidebar_label:"Emby",sidebar:"docs",previous:{title:"Znc",permalink:"/applications/znc"},next:{title:"Jellyfin",permalink:"/applications/jellyfin"}},u=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Further setup",id:"further-setup",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Full Removal",id:"full-removal",children:[]}]}],b={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets."),Object(r.b)("p",null,"Or sit back and enjoy Emby from the living room. Emby apps are available for Android TV, Amazon Fire TV, Chromecast, Roku, Xbox, Home Theater Computers, and more."),Object(r.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(r.b)("p",null,"Installing emby is easy. Simply issue the following command from SSH:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install emby\n")),Object(r.b)("p",null,"This command will configure an emby docker container for your user."),Object(r.b)("h2",{id:"how-to-access"},"How to Access"),Object(r.b)("p",null,"Emby can be accessed from your browser at ",Object(r.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/emby/")),Object(r.b)("h2",{id:"service-management"},"Service Management"),Object(r.b)("p",null,"The systemd service file for Emby is the default file. No modifications have been made to change its arguments."),Object(r.b)(i.default,{service:"emby-server",mdxType:"SystemdTabs"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"When you load up Emby for the first time, you'll be greeted by the setup wizard. Setup is fairly straightforward."),Object(r.b)("h2",{id:"further-setup"},"Further setup"),Object(r.b)("p",null,"While not covered in this documentation, there are further guides and documentations on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://emby.media/community/index.php?/forum/24-tutorials-and-guides/"}),"Emby Forum")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)(s.default,{mdxType:"Troubleshooting"}),Object(r.b)("h3",{id:"full-removal"},"Full Removal"),Object(r.b)("p",null,"If you need to remove Emby completely, alongside all configurations please ",Object(r.b)("inlineCode",{parentName:"p"},"sudo box remove emby"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"sudo apt purge emby-server"),"."))}d.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,p=b["".concat(i,".").concat(m)]||b[m]||d[m]||r;return n?o.a.createElement(p,s(s({ref:t},l),{},{components:n})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(161),i=n(160),s=n(57),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,d=e.groupId,m=e.className,p=Object(r.a)(),h=p.tabGroupChoices,f=p.setTabGroupChoices,y=Object(a.useState)(s),v=y[0],O=y[1],g=Object(a.useState)(!1),j=g[0],w=g[1];if(null!=d){var T=h[d];null!=T&&T!==v&&b.some((function(e){return e.value===T}))&&O(T)}var x=function(e){O(e),null!=d&&f(d,e)},E=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",k)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":v===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},159:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=(n(0),n(157)),i=n(158),s=n(159),c=n(162),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},b=[],d={toc:b};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"status",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"start",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(157)),i={},s={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current"},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can always also try the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0}}]);