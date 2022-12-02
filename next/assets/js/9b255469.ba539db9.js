"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),f=n,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||i;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},l="Interface: AliasOutputOptions",s={unversionedId:"libraries/nodejs/references/interfaces/AliasOutputOptions",id:"libraries/nodejs/references/interfaces/AliasOutputOptions",title:"Interface: AliasOutputOptions",description:"Options for the alias output creation",source:"@site/next/external/wallet.rs/documentation/docs/libraries/nodejs/references/interfaces/AliasOutputOptions.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/AliasOutputOptions",permalink:"/next/wallet.rs/libraries/nodejs/references/interfaces/AliasOutputOptions",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/libraries/nodejs/references/interfaces/AliasOutputOptions.md",tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"immutableMetadata",id:"immutablemetadata",level:3},{value:"metadata",id:"metadata",level:3},{value:"stateMetadata",id:"statemetadata",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interface-aliasoutputoptions"},"Interface: AliasOutputOptions"),(0,n.kt)("p",null,"Options for the alias output creation"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/wallet.rs/libraries/nodejs/references/interfaces/AliasOutputOptions#address"},"address")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/wallet.rs/libraries/nodejs/references/interfaces/AliasOutputOptions#immutablemetadata"},"immutableMetadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/wallet.rs/libraries/nodejs/references/interfaces/AliasOutputOptions#metadata"},"metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/wallet.rs/libraries/nodejs/references/interfaces/AliasOutputOptions#statemetadata"},"stateMetadata"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"address"},"address"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"address"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Bech32 encoded address to which the Nft will be minted. Default will use the\nfirst address of the account"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"immutablemetadata"},"immutableMetadata"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"immutableMetadata"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Hex encoded bytes"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"metadata"},"metadata"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"metadata"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Hex encoded bytes"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"statemetadata"},"stateMetadata"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"stateMetadata"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Hex encoded bytes"))}d.isMDXComponent=!0}}]);