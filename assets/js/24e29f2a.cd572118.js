"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4886,865],{3479:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return h}});var a=n(7462),o=n(3366),s=(n(7294),n(4137)),i=n(9124),r=n(9353),l=["components"],d={id:"syncthing",title:"Syncthing",sidebar_label:"Syncthing"},c=void 0,u={unversionedId:"applications/syncthing",id:"applications/syncthing",title:"Syncthing",description:"Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet.",source:"@site/docs/applications/syncthing.mdx",sourceDirName:"applications",slug:"/applications/syncthing",permalink:"/applications/syncthing",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/syncthing.mdx",tags:[],version:"current",frontMatter:{id:"syncthing",title:"Syncthing",sidebar_label:"Syncthing"},sidebar:"docs",previous:{title:"Rclone",permalink:"/applications/rclone"},next:{title:"vsftpd",permalink:"/applications/vsftpd"}},p={},h=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration &amp; Usage",id:"configuration--usage",level:2},{value:"Setup Remote Device",id:"setup-remote-device",level:3},{value:"Adding a Folder to Synch with a Remote Server",id:"adding-a-folder-to-synch-with-a-remote-server",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:h};function y(t){var e=t.components,n=(0,o.Z)(t,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet."),(0,s.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,s.kt)("p",null,"Installing Syncthing is easy. Simply issue the following command from SSH:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install syncthing\n")),(0,s.kt)("p",null,"This command will configure and install syncthing for your user."),(0,s.kt)("p",null,"After installation, the config is stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.config/syncthing/"),"."),(0,s.kt)("h2",{id:"how-to-access"},"How to Access"),(0,s.kt)("p",null,"After installation, you can access the web client at ",(0,s.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/syncthing/"),"."),(0,s.kt)("p",null,"You can access the download section ",(0,s.kt)("a",{parentName:"p",href:"https://syncthing.net/downloads/"},"here")," for your other client that you plan to sync."),(0,s.kt)("h2",{id:"service-management"},"Service Management"),(0,s.kt)(i.default,{service:"syncthing",mdxType:"SystemdTabs"}),(0,s.kt)("h2",{id:"configuration--usage"},"Configuration & Usage"),(0,s.kt)("p",null,"Syncthing needs to connect to another server running syncthing. We will do this by editing the settings. "),(0,s.kt)("h3",{id:"setup-remote-device"},"Setup Remote Device"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"On your Remote Client, Click Actions and then Show ID."),(0,s.kt)("li",{parentName:"ol"},"Copy the ID"),(0,s.kt)("li",{parentName:"ol"},"On your other server on the bottom right click +Add Remote Device"),(0,s.kt)("li",{parentName:"ol"},"Paste the Device ID and give it a name"),(0,s.kt)("li",{parentName:"ol"},"Press Save"),(0,s.kt)("li",{parentName:"ol"},"On the other client there should be a pop up asking you if you want to add the device; Press add device."),(0,s.kt)("li",{parentName:"ol"},"Another pop up will appear, press Save.")),(0,s.kt)("h3",{id:"adding-a-folder-to-synch-with-a-remote-server"},"Adding a Folder to Synch with a Remote Server"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click +Add Folder"),(0,s.kt)("li",{parentName:"ol"},"Give the Folder a Label"),(0,s.kt)("li",{parentName:"ol"},"Add the folder path of the directory that you want to sync to a remote server."),(0,s.kt)("li",{parentName:"ol"},"Go to the Sharing Tab and put a check mark in the client you want to share it with remotely."),(0,s.kt)("li",{parentName:"ol"},"Go to the Advanced Tab and choose the folder type you want."),(0,s.kt)("li",{parentName:"ol"},"On your other client, another pop up will appear, choose add."),(0,s.kt)("li",{parentName:"ol"},"Go through the settings and change what you want.")),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)(r.default,{mdxType:"Troubleshooting"}),(0,s.kt)("p",null,"Please refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.syncthing.net/intro/getting-started.html"},"syncthing documentation")," for further help."))}y.isMDXComponent=!0},9124:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(7462),o=n(3366),s=(n(7294),n(4137)),i=n(5529),r=n(8448),l=n(2380),d=["components"],c={},u=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},h={},m=[],y={toc:m};function g(t){var e=t.components,n=(0,o.Z)(t,d);return(0,s.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"code"},(0,s.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"status",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(r.Z,{value:"start",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(r.Z,{value:"stop",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(r.Z,{value:"restart",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(r.Z,{value:"enable",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(r.Z,{value:"disable",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}g.isMDXComponent=!0},9353:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=n(7462),o=n(3366),s=(n(7294),n(4137)),i=["components"],r={},l=void 0,d={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},c={},u=[],p={toc:u};function h(t){var e=t.components,n=(0,o.Z)(t,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can always also try the ",(0,s.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}h.isMDXComponent=!0}}]);