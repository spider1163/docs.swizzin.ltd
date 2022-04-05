"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[9954,865],{6060:function(e,t,s){s.r(t),s.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=s(7462),i=s(3366),l=(s(7294),s(4137)),n=s(9124),c=["components"],o={id:"sickchill",title:"Sickchill",sidebar_label:"Sickchill"},r=void 0,d={unversionedId:"applications/sickchill",id:"applications/sickchill",title:"Sickchill",description:"Video File Manager for TV Shows, It watches for new episodes of your favorite shows and when they are posted it does its magic.",source:"@site/docs/applications/sickchill.mdx",sourceDirName:"applications",slug:"/applications/sickchill",permalink:"/applications/sickchill",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/sickchill.mdx",tags:[],version:"current",frontMatter:{id:"sickchill",title:"Sickchill",sidebar_label:"Sickchill"},sidebar:"docs",previous:{title:"Ombi",permalink:"/applications/ombi"},next:{title:"Sickgear",permalink:"/applications/sickgear"}},p={},m=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2}],u={toc:m};function h(e){var t=e.components,s=(0,i.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Video File Manager for TV Shows, It watches for new episodes of your favorite shows and when they are posted it does its magic."),(0,l.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,l.kt)("p",null,"Installing SickChill is easy. Simply issue the following command from SSH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"sudo box install sickchill\n")),(0,l.kt)("p",null,"This command will install and configure SickChill for your user."),(0,l.kt)("h2",{id:"how-to-access"},"How to Access"),(0,l.kt)("p",null,"After installation, you can access SickChill at the url: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/sickchill")),(0,l.kt)("h2",{id:"service-management"},"Service Management"),(0,l.kt)("p",null,"The systemd service file resides at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/sickchill.service\n")),(0,l.kt)(n.default,{service:"sickchill",mdxType:"SystemdTabs"}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"SickChill does not currently handle special characters in your password very well. If you are having troubles connecting to your applications, make sure your password is alpha-numeric"))))}h.isMDXComponent=!0},9124:function(e,t,s){s.r(t),s.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return h}});var a=s(7462),i=s(3366),l=(s(7294),s(4137)),n=s(5529),c=s(8448),o=s(2380),r=["components"],d={},p=void 0,m={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},u={},h=[],k={toc:h};function v(e){var t=e.components,s=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"code"},(0,l.kt)(n.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"status",mdxType:"TabItem"},(0,l.kt)(o.Z,{children:"sudo systemctl status "+s.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(c.Z,{value:"start",mdxType:"TabItem"},(0,l.kt)(o.Z,{children:"sudo systemctl start "+s.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(c.Z,{value:"stop",mdxType:"TabItem"},(0,l.kt)(o.Z,{children:"sudo systemctl stop "+s.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(c.Z,{value:"restart",mdxType:"TabItem"},(0,l.kt)(o.Z,{children:"sudo systemctl restart "+s.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(c.Z,{value:"enable",mdxType:"TabItem"},(0,l.kt)(o.Z,{children:"sudo systemctl enable "+s.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(c.Z,{value:"disable",mdxType:"TabItem"},(0,l.kt)(o.Z,{children:"sudo systemctl disable "+s.service,className:"bash",mdxType:"CodeBlock"})))))}v.isMDXComponent=!0}}]);