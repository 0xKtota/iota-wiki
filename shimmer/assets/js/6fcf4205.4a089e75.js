"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={description:"Getting started with your project.",image:"/img/logo/iota_logo.svg",keywords:["install","prerequisites","getting started","hello world"]},o="Example Getting Started File",l={unversionedId:"contribute-to-wiki/reference/structure/getting_started",id:"contribute-to-wiki/reference/structure/getting_started",title:"Example Getting Started File",description:"Getting started with your project.",source:"@site/common/community/contribute-to-wiki/reference/structure/getting_started.md",sourceDirName:"contribute-to-wiki/reference/structure",slug:"/contribute-to-wiki/reference/structure/getting_started",permalink:"/shimmer/community/contribute-to-wiki/reference/structure/getting_started",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/common/community/contribute-to-wiki/reference/structure/getting_started.md",tags:[],version:"current",lastUpdatedAt:1669374092,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{description:"Getting started with your project.",image:"/img/logo/iota_logo.svg",keywords:["install","prerequisites","getting started","hello world"]},sidebar:"learn",previous:{title:"Overview",permalink:"/shimmer/community/contribute-to-wiki/reference/structure/overview"},next:{title:"How Tos",permalink:"/shimmer/community/contribute-to-wiki/reference/structure/how_tos"}},s={},u=[{value:"Required Prior Knowledge",id:"required-prior-knowledge",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Project",id:"install-the-project",level:2},{value:"NPM Install Example",id:"npm-install-example",level:3},{value:"Yarn Install Example",id:"yarn-install-example",level:3},{value:"Use the Project",id:"use-the-project",level:2},{value:"NodeJS Usage Example",id:"nodejs-usage-example",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-getting-started-file"},"Example Getting Started File"),(0,i.kt)("h2",{id:"required-prior-knowledge"},"Required Prior Knowledge"),(0,i.kt)("p",null,"You should list any knowledge the user requires to properly understand your project, and it's source code and examples.\nFor example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.java.com/"},"Java"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/js/"},"JavaScript"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/docs/guides/"},"Node.js"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/about/gettingstarted/"},"Python"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/learn/get-started"},"Rust"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"Wasm"),".")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You should list any software and hardware requisites to run the project in this subsection, ideally with a link to the\nofficial installation instructions. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://npmjs.com"},"Npm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"))),(0,i.kt)("h2",{id:"install-the-project"},"Install the Project"),(0,i.kt)("p",null,"You should use this subsection to give the user concrete and concise instructions on how to install the project.\nIdeally, these should be very short, and if an in depth explanation is required to install extensions or\nnon-essential software you should address it in the ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/how_tos"},"How Tos")," or\n",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/tutorials"},"Tutorials")," folders."),(0,i.kt)("h3",{id:"npm-install-example"},"NPM Install Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/client-wasm\n")),(0,i.kt)("h3",{id:"yarn-install-example"},"Yarn Install Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @iota/client-wasm\n")),(0,i.kt)("h2",{id:"use-the-project"},"Use the Project"),(0,i.kt)("p",null,"You should use this subsection to provide the users with the simplest possible example in which they can use the project\nafter installing it, as well as minimal explanations if required. Keep in mind that as in the\n",(0,i.kt)("a",{parentName:"p",href:"#install-the-project"},"Install the Project")," subsection, complex use cases should be addressed in the\n",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/how_tos"},"How Tos")," or ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/tutorials"},"Tutorials"),". For example:"),(0,i.kt)("h3",{id:"nodejs-usage-example"},"NodeJS Usage Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const iota = require('@iota/client-wasm/node');\n\nasync function main() {\n  // Get the nodeinfo\n  let iota_client = await iota.Client.withNode(\n    'https://api.lb-0.h.chrysalis-devnet.iota.cafe/',\n  );\n  console.log('Nodeinfo: ', await iota_client.getInfo());\n}\nmain();\n")))}p.isMDXComponent=!0}}]);