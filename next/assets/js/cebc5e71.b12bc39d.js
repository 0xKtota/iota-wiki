"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the Shimmer network.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer"]},a="The Coordinator",s={unversionedId:"coordinator",id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the Shimmer network.",source:"@site/next/learn/coordinator.md",sourceDirName:".",slug:"/coordinator",permalink:"/next/learn/coordinator",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/learn/coordinator.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the Shimmer network.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer"]},sidebar:"about",previous:{title:"The Tangle",permalink:"/next/learn/tangle"},next:{title:"Data and Value Transfer",permalink:"/next/learn/data-and-value-transfer"}},l={},c=[],d={toc:c};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-coordinator"},"The Coordinator"),(0,o.kt)("p",null,"The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated."),(0,o.kt)("p",null,"To allow the nodes to recognize valid milestones, all Shimmer nodes on the same network are configured with the signatures of a coordinator node which they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them."),(0,o.kt)("p",null,"To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check if they are synchronized with the rest of the network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An artist&#39;s depiction of Coordinator.",src:r(6733).Z,title:"Click to see the full-sized image.",width:"743",height:"500"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Coordinator")))}h.isMDXComponent=!0},6733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/milestones-ca3479a44644b9ab2414b07e1e62d6ac.gif"}}]);