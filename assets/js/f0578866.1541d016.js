"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2842,865],{4546:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var s=a(7462),i=a(3366),n=(a(7294),a(4137)),o=a(9124),r=["components"],l={id:"navidrome",title:"Navidrome",sidebar_label:"Navidrome"},d=void 0,u={unversionedId:"applications/navidrome",id:"applications/navidrome",title:"Navidrome",description:"Navidrome is an open source web-based music collection server and streamer. It gives you freedom to listen to your music collection from any browser or mobile device. It's like your personal Spotify!",source:"@site/docs/applications/navidrome.mdx",sourceDirName:"applications",slug:"/applications/navidrome",permalink:"/applications/navidrome",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/navidrome.mdx",tags:[],version:"current",frontMatter:{id:"navidrome",title:"Navidrome",sidebar_label:"Navidrome"},sidebar:"docs",previous:{title:"Mango",permalink:"/applications/mango"},next:{title:"Plex",permalink:"/applications/plex"}},m={},c=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:c};function v(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Navidrome is an open source web-based music collection server and streamer. It gives you freedom to listen to your music collection from any browser or mobile device. It's like your personal Spotify!"),(0,n.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,n.kt)("p",null,"Installing navidrome is easy. Simply issue the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install navidrome\n")),(0,n.kt)("p",null,"This command will configure navidrome for your user."),(0,n.kt)("h2",{id:"upgrade"},"Upgrade"),(0,n.kt)("p",null,"Upgrading navidrome is as easy. Simply issue the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade navidrome\n")),(0,n.kt)("h2",{id:"how-to-access"},"How to Access"),(0,n.kt)("p",null,"After navidrome has been installed, it will be available for access at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/navidrome"),"."),(0,n.kt)("p",null,"The port is 4533."),(0,n.kt)("h2",{id:"service-management"},"Service Management"),(0,n.kt)(o.default,{service:"navidrome",mdxType:"SystemdTabs"}),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"In order to get navidrome working, you need to do the following steps:"),(0,n.kt)("p",null,"After installing Navidrome in your platform, you need to create your first user. This will be your admin user, a super user that can manage all aspects of Navidrome, including the ability to manage other users. Just browse to Navidrome\u2019s homepage."),(0,n.kt)("p",null,"Just fill out the username and password you want to use, confirm the password and click on the \u201cCreate Admin\u201d button."),(0,n.kt)("p",null,"That\u2019s it! You should now be able to browse and listen to all your music."),(0,n.kt)("p",null,"You can find your music folder at ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/<username>/music"),"."),(0,n.kt)("p",null,"Note: It usually take a couple of minutes for your music to start appearing in Navidrome\u2019s UI. You can check the logs to see what is the scan progress."))}v.isMDXComponent=!0},9124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return v}});var s=a(7462),i=a(3366),n=(a(7294),a(4137)),o=a(5529),r=a(8448),l=a(2380),d=["components"],u={},m=void 0,c={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},v=[],b={toc:v};function k(e){var t=e.components,a=(0,i.Z)(e,d);return(0,n.kt)("wrapper",(0,s.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"code"},(0,n.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"status",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(r.Z,{value:"start",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(r.Z,{value:"stop",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(r.Z,{value:"restart",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(r.Z,{value:"enable",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(r.Z,{value:"disable",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}k.isMDXComponent=!0}}]);