"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2351,865],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(50),o=n(6010),i="tabItem_HqPw",s=37,c=39;var l=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=(0,r.Z)(),f=m.tabGroupChoices,k=m.setTabGroupChoices,h=(0,a.useState)(l),v=h[0],b=h[1],y=(0,a.useState)(!1),w=y[0],g=y[1];if(null!=d){var N=f[d];null!=N&&N!==v&&u.some((function(e){return e.value===N}))&&b(N)}var x=function(e){b(e),null!=d&&k(d,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},j=function(){g(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",j),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",j)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:(0,o.Z)("tabs__item",t,i,{"tabs__item--active":v===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},9215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(9971),s=["components"],c={id:"jackett",title:"Jackett",sidebar_label:"Jackett"},l=void 0,u={unversionedId:"applications/jackett",id:"applications/jackett",isDocsHomePage:!1,title:"Jackett",description:"API support for your favorite torrent trackers.",source:"@site/docs/applications/jackett.mdx",sourceDirName:"applications",slug:"/applications/jackett",permalink:"/applications/jackett",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/jackett.mdx",version:"current",frontMatter:{id:"jackett",title:"Jackett",sidebar_label:"Jackett"},sidebar:"docs",previous:{title:"vsftpd",permalink:"/applications/vsftpd"},next:{title:"Nzbhydra",permalink:"/applications/nzbhydra"}},d=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Connect to other clients",id:"connect-to-other-clients",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"API support for your favorite torrent trackers."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Jackett is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install jackett\n")),(0,o.kt)("p",null,"This command will configure jackett for your user."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After installation, you can access the web client at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/jackett/"),". When prompted for an admin password, simply enter your slot password. This double authentication layer is necessary because your jackett port has been exposed externally -- if you disabled the password authentication, your configuration and tracker information would be publicly accessible."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Despite using the multi-user format, jackett multi-user is not enabled by default."),(0,o.kt)("p",null,"The service for jackett resides at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/jackett@.service\n")),(0,o.kt)(i.default,{service:"jackett@<username>",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To add a new tracker to Jackett, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Indexer")," button near the top of the page. There should be some instructions to help you get Jackett set up with the tracker you've specified."),(0,o.kt)("p",null,"Since every tracker is different in how they accept connections through their API, you should refer to your tracker if you need specific help in setting up an Indexer."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please do not touch the following settings:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Admin password (you can change, but do not remove)"),(0,o.kt)("li",{parentName:"ul"},"Base URL"),(0,o.kt)("li",{parentName:"ul"},"Server Port"),(0,o.kt)("li",{parentName:"ul"},"External access (leave enabled)")))),(0,o.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,o.kt)("p",null,"In order to connect Jackett with other trackers, you need to connect directly to the port. You must bypass the webserver because it has authentication headers which are not supported when accessing Jackett from other clients. If you need help in constructing your URL for a tracker, please refer to the example below."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default Jackett port is ",(0,o.kt)("inlineCode",{parentName:"p"},"9117")))),(0,o.kt)("p",null,"Now, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy Torznab Feed"),". The link you'll receive will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhost>.ltd/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),(0,o.kt)("p",null,"We need to edit this link to ",(0,o.kt)("strong",{parentName:"p"},"remove https")," , ",(0,o.kt)("strong",{parentName:"p"},"remove the reverse proxy"),", and ",(0,o.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,o.kt)("inlineCode",{parentName:"p"},"9117"),", your edited URL would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://127.0.0.1:9117/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")))}m.isMDXComponent=!0},9971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(4297),s=n(8448),c=n(1462),l=["components"],u={},d=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},m=[],f={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(c.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(c.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(c.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(c.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(c.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(c.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}k.isMDXComponent=!0}}]);