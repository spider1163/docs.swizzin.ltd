"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2188],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(4137)),i=["components"],s={id:"beta-testing",title:"So you want to run some pre-release software?",sidebar_label:"Beta testing"},u=void 0,l={unversionedId:"dev/beta-testing",id:"dev/beta-testing",title:"So you want to run some pre-release software?",description:"We often need the community's help to test new applications. As the whole tool set is tracked in git, you can try new features quite easily.",source:"@site/docs/dev/beta-testing.md",sourceDirName:"dev",slug:"/dev/beta-testing",permalink:"/dev/beta-testing",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/dev/beta-testing.md",tags:[],version:"current",frontMatter:{id:"beta-testing",title:"So you want to run some pre-release software?",sidebar_label:"Beta testing"},sidebar:"docs",previous:{title:"Functions",permalink:"/dev/functions"}},c={},p=[{value:"The branch checkout dance",id:"the-branch-checkout-dance",level:2},{value:"Branches on the swizzin repo",id:"branches-on-the-swizzin-repo",level:3},{value:"Branches from any fork",id:"branches-from-any-fork",level:3},{value:"Getting back to the master/stable branch",id:"getting-back-to-the-masterstable-branch",level:2},{value:"Preventing updates",id:"preventing-updates",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We often need the community's help to test new applications. As the whole tool set is tracked in git, you can try new features quite easily."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Watch the fuck out!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please make sure you only do this if you know what you're doing. A poorly written installer could easily destroy your entire machine beyond any hope of repair. If you do not know how you would get out of a completely broken install, do not attempt these steps!"))),(0,r.kt)("p",null,"Anyway, if you're courageous enough, here's how you can test the latest and coolest stuff!"),(0,r.kt)("h2",{id:"the-branch-checkout-dance"},"The branch checkout dance"),(0,r.kt)("p",null,"There are two types branches you might want to test. One that is made by the swizzin team, and one that is made on a repository forked from swizzin."),(0,r.kt)("p",null,"As soon as you're on the branch you need to be on, you just keep using ",(0,r.kt)("inlineCode",{parentName:"p"},"box")," just like you usually would. Just watch out for ",(0,r.kt)("inlineCode",{parentName:"p"},"box update"),"s! read more about those ",(0,r.kt)("a",{parentName:"p",href:"#preventing-updates"},"below"),"."),(0,r.kt)("h3",{id:"branches-on-the-swizzin-repo"},"Branches on the swizzin repo"),(0,r.kt)("p",null,"You can run the following quick set of commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/swizzin\nsudo git fetch --all\nsudo git checkout <branch name>\n")),(0,r.kt)("h3",{id:"branches-from-any-fork"},"Branches from any fork"),(0,r.kt)("p",null,"Now this is a little more hands-on as you need to add the remote fork to your repository, but this can be done quite easily with the GitHub CLI tool."),(0,r.kt)("p",null,"You can install it quite easily by installing it from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-apt"},"instructions here")),(0,r.kt)("p",null,"After installing, make sure to run the following, and make sure to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPs")," mechanism when asked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gh auth login\n")),(0,r.kt)("p",null,"When you've got that done, you can just go browse to the specific PR you'd like to test, and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"gh"),' code to use it in the "Open In" menu. This code will look like this for example'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gh pr checkout 401\n")),(0,r.kt)("h2",{id:"getting-back-to-the-masterstable-branch"},"Getting back to the master/stable branch"),(0,r.kt)("p",null,"All you need to do is run ",(0,r.kt)("inlineCode",{parentName:"p"},"box update"),", and you will be back right on track!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HOWEVER"),", none of the changes you made to swizzin can be undone. Make sure to remove any other apps or features which are not supported on the main repo, and reinstall them again when they're merged, or if there have been new commits on the beta branch since you updated."),(0,r.kt)("p",null,"If you are unsure what is safe to do, please ask the author of the branch to provide you with instructions on how to get back."),(0,r.kt)("h3",{id:"preventing-updates"},"Preventing updates"),(0,r.kt)("p",null,"If you'd like to make sure that you do not go back to the master branch until you are ready, please read the ",(0,r.kt)("a",{parentName:"p",href:"/dev/setup#updating-mechanism"},"section on updating"),"."))}h.isMDXComponent=!0}}]);