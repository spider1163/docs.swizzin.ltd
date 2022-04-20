(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4195],{9607:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png 1892w",images:[{path:a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png",width:1892,height:1027}],src:a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png",toString:function(){return a.p+"assets/ideal-img/panel-screenshot.045381c.1892.png"},placeholder:void 0,width:1892,height:1027},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVQImQXBu24CMRAFUP/SYq/n5WG88P9SmvQU0GBFOAiRhtXNOWll/l5ZXiL6IKLJLFNE5lrrJOapZk9mviUzu+acwUcDmcJU4a3hsCzgpojzBiZ6J1O+HHKGqHxEZCfhvW2xs8huqh82R6H6m9zjVkpBjw7rR1RX+BZQUzRVVO9YhP6Su3+VUh7e2l26j9V1+BbDzEaPGBynn0Xo8g9LT1F4IVLCkgAAAABJRU5ErkJggg==",palette:null}},7186:function(e,t,a){"use strict";var l=a(7294),n=a(5529),r=a(8448),i=a(2380),s=[{label:"curl",cmd:"bash <(curl -sL git.io/swizzin) && . ~/.bashrc"},{label:"wget",cmd:"bash <(wget -qO - git.io/swizzin) && . ~/.bashrc"}];t.Z=function(){return l.createElement(l.Fragment,null,s&&s.length&&l.createElement(n.Z,{defaultValue:s[0].label,values:s.map((function(e,t){return{label:e.label,value:e.label}}))},s.map((function(e,t){return l.createElement(r.Z,{value:e.label},l.createElement("div",{className:"code"},l.createElement(i.Z,{children:e.cmd,className:"bash"})))}))))}},9009:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return $}});var l=a(7294),n=a(1475),r=a(9962),i=a(3699),s={question:"question_qhXA",title:"title_SZPs"},o=[{title:l.createElement(l.Fragment,null,"What is swizzin?"),description:l.createElement(l.Fragment,null,"swizzin is a collection of bash scripts for Debian-based servers which helps you automate the boring and repetitive tasks of installing, managing and adminsitering a seedbox server. Originally based on QuickBox, swizzin forked away and brought new life to the project in the form of extended OS support, the nginx webserver, a custom built dashboard and extended application support.")},{title:l.createElement(l.Fragment,null,"Is swizzin actively maintained?"),description:l.createElement(l.Fragment,null,"Yes! swizzin currently supports Debian Stretch, Buster, and Bullseye as well as Ubuntu Bionic and Focal. Packages are kept in working order and reported, reproducible issues are promptly patched. Support for operating systems is subject to change based on availability of upstream support; however, new long-term support versions of Debian & Ubuntu will be added accordingly.")},{title:l.createElement(l.Fragment,null,"Is swizzin bloated?"),description:l.createElement(l.Fragment,null,"swizzin only installs the applications you request and the dependencies required to support them. In addition to this, there are a few other global dependencies installed during setup which are generally required by a large portion of packages. As far as which packages to install, that's completely up to you!")},{title:l.createElement(l.Fragment,null,"Why not put it all in docker?"),description:l.createElement(l.Fragment,null,"We prefer to keep our applications running as close to the metal as possible. There are many valid times and places where docker would be a good systematic choice, however we believe the trade-offs are not worth it for a seedbox scenario. Keeping apps outside of containers helps you grow buffer, and a lets you tinker with everything as much as you want.")},{title:l.createElement(l.Fragment,null,"Is swizzin good?"),description:l.createElement(l.Fragment,null,"It won't end world hunger, it's not going to cure AIDS or adopt all the stray dogs, but it will do what it says it does and make your life easier so there's that.")}];function c(e){var t=e.title,a=e.description;return l.createElement("div",{className:s.question},l.createElement("h3",{className:s.title},t),l.createElement("p",null,a))}var u=function(){return l.createElement("section",{id:"faq",className:s.faq},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6"},o[0]&&l.createElement(c,o[0]),o[1]&&l.createElement(c,o[1])),l.createElement("div",{className:"col col--6"},o[2]&&l.createElement(c,o[2]),o[3]&&l.createElement(c,o[3])),l.createElement("div",{className:"col col--6"}))))},m=a(7462),p=a(6010),d=a(6893),g=a(5697),h="headline_gSTO",E="category_BK2h",f="title_g1jT";function b(e){var t=e.category,a=e.title,n=e.offset;return l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--"+(12-n)+" col--offset-"+n},l.createElement("div",{className:h},t&&l.createElement("span",{className:E},t),a&&l.createElement("h2",{className:f},a))))}b.propTypes={category:g.PropTypes.string,title:g.PropTypes.string,offset:g.PropTypes.number},b.defaultProps={offset:0};var y=b,v={features:"features_dM1s",applications:"applications_TFsE",button:"button_hnzF"},w=[{title:"Airsonic",url:"applications/airsonic"},{title:"Autobrr",url:"applications/autobrr"},{title:"AutoDL-irssi",url:"applications/autodl"},{title:"Bazarr",url:"applications/bazarr"},{title:"Deluge",url:"applications/deluge"},{title:"DuckDNS",url:"applications/duckdns"},{title:"Emby Server",url:"applications/emby"},{title:"ffmpeg",url:"applications/ffmpeg"},{title:"Filebrowser",url:"applications/filebrowser"},{title:"Flood",url:"applications/flood"},{title:"Jackett",url:"applications/jackett"},{title:"Jellyfin",url:"applications/jellyfin"},{title:"Let's Encrypt",url:"applications/letsencrypt"},{title:"Librespeed",url:"applications/librespeed"},{title:"Lidarr",url:"applications/lidarr"},{title:"The Lounge",url:"applications/lounge"},{title:"Mango",url:"applications/mango"},{title:"Medusa",url:"applications/medusa"},{title:"Mylar",url:"applications/mylar"},{title:"Navidrome",url:"applications/navidrome"},{title:"Netdata",url:"applications/netdata"},{title:"Nextcloud",url:"applications/nextcloud"},{title:"Nginx",url:"applications/nginx"},{title:"NZBGet",url:"applications/nzbget"},{title:"NZBHydra2",url:"applications/nzbhydra"},{title:"Ombi",url:"applications/ombi"},{title:"Organizr",url:"applications/organizr"},{title:"Plex",url:"applications/plex"},{title:"Prowlarr",url:"applications/prowlarr"},{title:"pyLoad",url:"applications/pyload"},{title:"qBittorrent",url:"applications/qbittorrent"},{title:"Quassel",url:"applications/quassel"},{title:"Quota",url:"applications/quota"},{title:"Radarr",url:"applications/radarr"},{title:"Rapidleech",url:"applications/rapidleech"},{title:"Rclone",url:"applications/rclone"},{title:"Resilio Sync",url:"applications/btsync"},{title:"rTorrent",url:"applications/rtorrent"},{title:"ruTorrent",url:"applications/rutorrent"},{title:"SABnzbd",url:"applications/sabnzbd"},{title:"Shellinabox",url:"applications/shellinabox"},{title:"SickChill",url:"applications/sickchill"},{title:"SickGear",url:"applications/sickgear"},{title:"Sonarr",url:"applications/sonarr"},{title:"Swizzin Panel",url:"applications/panel"},{title:"Syncthing",url:"applications/syncthing"},{title:"Tautulli",url:"applications/tautulli"},{title:"Transmission",url:"applications/transmission"},{title:"Vsftpd",url:"applications/vsftpd"},{title:"Webmin",url:"applications/webmin"},{title:"Wireguard",url:"applications/wireguard"},{title:"X2go",url:"applications/x2go"},{title:"Xmrig",url:"applications/xmrig"},{title:"ZNC",url:"applications/znc"}];function N(e){var t=e.title,a=e.url;return l.createElement("div",{className:(0,p.Z)("col col--2",v.feature,v.applications)},l.createElement(i.Z,{href:a},t))}var z=function(){return l.createElement(l.Fragment,null,w&&w.length>0&&l.createElement("section",{id:"applications",className:v.features},l.createElement("div",{className:"container"},l.createElement(y,{category:"Applications",title:"A whole repository of applications to fit your needs",offset:1}),l.createElement("div",{className:"row"},w.map((function(e,t){return l.createElement(N,(0,m.Z)({key:t},e))}))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--5 col--offset-1"},l.createElement(i.Z,{className:(0,p.Z)("button button--primary button--lg",v.button),href:"https://feathub.com/liaralabs/swizzin"},l.createElement(d.MJI,{size:24})," App and feature requests"))))))},F={features:"features_ET2H"},A=[{title:l.createElement(l.Fragment,null,"One command to rule them all"),description:l.createElement(l.Fragment,null,"Install, remove and update apps with ease. Make new users and manage their accounts.")},{title:l.createElement(l.Fragment,null,"All the apps you need"),description:l.createElement(l.Fragment,null,"From autodl to ZNC and everything in between, you won't need to look elsewhere")},{title:l.createElement(l.Fragment,null,"Actively maintained"),description:l.createElement(l.Fragment,null,"Quick response time to breaking changes when new app versions release")},{title:l.createElement(l.Fragment,null,"Helpful community"),description:l.createElement(l.Fragment,null,"Need help setting up or making choices? Our community has your back any time")},{title:l.createElement(l.Fragment,null,"Fast and lean"),description:l.createElement(l.Fragment,null,"Footprint is as light as the choice of your applications")},{title:l.createElement(l.Fragment,null,"Trusted by the industry"),description:l.createElement(l.Fragment,null,"A popular choice of paid hosting providers, as well as  hobbyist self-hosters")},{title:l.createElement(l.Fragment,null,"Multi-user capable"),description:l.createElement(l.Fragment,null,"Share your server with others by making them their own server-wide accounts")},{title:l.createElement(l.Fragment,null,"Little skills necessary"),description:l.createElement(l.Fragment,null,"As long as you can SSH into your server and you know how to read, sky is the limit. Thoroughly fool-proof")},{title:l.createElement(l.Fragment,null,"Stability first"),description:l.createElement(l.Fragment,null,"Built to make those uptimes grow, but not to keep you on last decade's releases. Want features earlier? Switch to the develop branch.")},{title:l.createElement(l.Fragment,null,"Runs even on Raspberry Pis"),description:l.createElement(l.Fragment,null,"If your machine can run 64-bit, it can run our scripts")}];function k(e){var t=e.title,a=e.description;return l.createElement("div",{className:(0,p.Z)("col col--4",F.feature)},l.createElement("div",{className:"card"},l.createElement("div",{className:"card__header"},l.createElement("h3",null,t)),l.createElement("div",{className:"card__body"},l.createElement("p",null,a))))}var Z=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),l=e[t];e[t]=e[a],e[a]=l}return e.splice(6,3),e}(A);return l.createElement(l.Fragment,null,e&&e.length>0&&l.createElement("section",{id:"features",className:F.features},l.createElement("div",{className:"container"},l.createElement(y,{category:"Features",title:"Manage your box with ease and confidence",offset:1}),l.createElement("div",{className:"row"},A.map((function(e,t){return l.createElement(k,(0,m.Z)({key:t},e))}))))))},_=a(9269),S=a.n(_),B=a(9524),q=a(5944),x=(a(9607),"banner_TLY1"),C="logo_s_8U",T="buttons_C3jr",U="button_Yg3G",L="subtitle_IB6R",R="image_dcpV";var O=function(){var e=(0,r.Z)().siteConfig,t=void 0===e?{}:e;return l.createElement("header",{id:"hero",className:(0,p.Z)("hero",x)},l.createElement("div",{className:"container"},l.createElement("img",{src:(0,B.Z)("img/logo-sm.png"),alt:"Logo",className:C}),l.createElement("h1",{className:"hero__title"},t.title),l.createElement("p",{className:(0,p.Z)("hero__subtitle",L)},"An all-in-one seedbox solution for Ubuntu and Debian"),l.createElement("div",{className:T},l.createElement(S(),{className:(0,p.Z)("button button--primary button--lg",U),href:"#quick-start"},"Get Started"),l.createElement(i.Z,{className:(0,p.Z)("button button--info button--lg",U),href:"getting-started"},"Get Help"))),l.createElement(q.Z,{img:(0,B.Z)("img/pages/dark/panel-screenshot.png"),className:(0,p.Z)("shadow-md",R)}))},P=a(9583),j="resources_Kb3L",I="resource_eRtx",D="card_Fh4Q",G=[{href:"/getting-started/faqs",icon:l.createElement(P.g_g,{size:48}),description:l.createElement(l.Fragment,null,"Frequently Asked Questions")},{href:"https://discord.gg/sKjs9UM",icon:l.createElement(P.j2d,{size:48}),description:l.createElement(l.Fragment,null,"Join our Discord to keep in touch")},{href:"getting-started",icon:l.createElement(d.yK7,{size:48}),title:l.createElement(l.Fragment,null,"Documentation"),description:l.createElement(l.Fragment,null,"Check our documentation to get your devices up and running in minutes")},{href:"https://github.com/liaralabs/swizzin",icon:l.createElement(d.uOf,{size:48}),title:l.createElement(l.Fragment,null,"Contribute"),description:l.createElement(l.Fragment,null,"Help us improve by submitting bugs and feature requests on GitHub")}],H=function(){return l.createElement(l.Fragment,null,G&&G.length>0&&l.createElement("section",{id:"resouces",className:j},l.createElement("div",{className:"container"},l.createElement(y,{category:"Resources",title:"Browse our resources to get started with swizzin",offset:1}),l.createElement("div",{className:"row"},G[0]&&G[1]&&l.createElement("div",{className:(0,p.Z)("col",I)},l.createElement(M,G[0]),l.createElement(M,G[1])),G[2]&&l.createElement("div",{className:(0,p.Z)("col",I)},l.createElement(M,G[2])),G[3]&&l.createElement("div",{className:(0,p.Z)("col",I)},l.createElement(M,G[3]))))))};function M(e){var t=e.href,a=e.icon,n=e.title,r=e.description;return l.createElement(i.Z,{className:(0,p.Z)("card",D),to:t},l.createElement("div",{className:"card__header"},a&&l.createElement("div",{className:"card__icon"},a),n&&l.createElement("h3",null,n)),r&&l.createElement("div",{className:"card__body"},l.createElement("p",null,r)))}var Q=a(7186),V=a(859),J="quickstart_ZPRH",W="button_UQjj",X="platforms_gCNB";var K=function(){return l.createElement("section",{id:"quick-start",className:J},l.createElement("div",{className:"container"},l.createElement(y,{category:"Quick Start",title:"Get up and running within minutes",offset:1}),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--5 col--offset-1"},l.createElement("p",null,"Use the following commands as root to get the swizzin installer up and running. Depending on your choice of packages and your CPU, you can have your applications up and running within just a few minutes!"),l.createElement(i.Z,{className:(0,p.Z)("button button--primary button--lg",W),href:"https://github.com/liaralabs/swizzin/blob/master/CHANGELOG.md"},l.createElement(d.uOf,{size:24})," Changelog")),l.createElement("div",{className:"col col--5"},l.createElement(Q.Z,null),l.createElement("div",{className:X},l.createElement("h3",null,"Supported Platforms"),l.createElement("div",null,l.createElement(V.Uyt,{size:36}),l.createElement(V.E6C,{size:36}),l.createElement("p",null,"(Supports amd64 and arm64)")))))))},Y="main_dzIC";var $=function(){var e=(0,r.Z)().siteConfig,t=(void 0===e?{}:e).tagline;return l.createElement(n.Z,{description:t},l.createElement(O,null),l.createElement("main",{className:Y},l.createElement(Z,null),l.createElement(z,null),l.createElement(K,null),l.createElement(u,null),l.createElement(H,null)))}}}]);