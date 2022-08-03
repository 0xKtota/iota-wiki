"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[367],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,u=h["".concat(p,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50869:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={description:"The Tangle represents a growing partially-ordered set of messages, linked with each other through cryptographic primitives, and replicated to all nodes in the peer-to-peer network.",image:"https://imgur.com/Rv1zXFI.png",slug:"4.1TheTangle",keywords:["messages","past cone","future cone","transaction","approvals","ledger state","approval switch"]},p="4.1 The Tangle",l={unversionedId:"4.1 The Tangle",id:"4.1 The Tangle",title:"4.1 The Tangle",description:"The Tangle represents a growing partially-ordered set of messages, linked with each other through cryptographic primitives, and replicated to all nodes in the peer-to-peer network.",source:"@site/content/build/iota-2.0-research-specifications/4.1 The Tangle.md",sourceDirName:".",slug:"/4.1TheTangle",permalink:"/IOTA-2.0-Research-Specifications/4.1TheTangle",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/content/build/iota-2.0-research-specifications/4.1 The Tangle.md",tags:[],version:"current",frontMatter:{description:"The Tangle represents a growing partially-ordered set of messages, linked with each other through cryptographic primitives, and replicated to all nodes in the peer-to-peer network.",image:"https://imgur.com/Rv1zXFI.png",slug:"4.1TheTangle",keywords:["messages","past cone","future cone","transaction","approvals","ledger state","approval switch"]},sidebar:"tutorialSidebar",previous:{title:"3.5 Manual Peering",permalink:"/IOTA-2.0-Research-Specifications/3.5ManualPeering"},next:{title:"4.2 Timestamps",permalink:"/IOTA-2.0-Research-Specifications/4.2Timestamps"}},m={},c=[{value:"4.1.1 Description",id:"411-description",level:2},{value:"4.1.2 Definitions",id:"412-definitions",level:2},{value:"4.1.2.1 Approval switch",id:"4121-approval-switch",level:3},{value:"4.1.2.2 Validity",id:"4122-validity",level:3},{value:"4.1.2.3 Branches",id:"4123-branches",level:3},{value:"4.1.2.2 Solidification",id:"4122-solidification",level:3},{value:"4.1.3 Example",id:"413-example",level:2}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"41-the-tangle"},"4.1 The Tangle"),(0,s.kt)("p",null,"This specification describes the data structure used in the IOTA protocol, and introduces its main terminology."),(0,s.kt)("h2",{id:"411-description"},"4.1.1 Description"),(0,s.kt)("p",null,"The Tangle represents a growing partially-ordered set of messages, linked with each other through cryptographic primitives, and replicated to all nodes in the peer-to-peer network. The Tangle enables the possibility to store data and to keep a ledger, the latter being based on UTXO-DAG formed by transactions contained in messages."),(0,s.kt)("p",null,"In mathematical terms, the Tangle is a Directed Acyclic (multi)Graph with messages as vertices and directed edges as references to existing messages.\nDirected edges are labelled: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"0")," represents direct references flagged as ",(0,s.kt)("em",{parentName:"p"},"weak"),", and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"1")," represents direct references flagged as ",(0,s.kt)("em",{parentName:"p"},"strong")," (see ",(0,s.kt)("a",{parentName:"p",href:"./6.4Finalization"},"Section 6.4 - Finalization"),". Messages are linked with each other through cryptographic hashes.\nThe acyclicity condition means that there is no directed cycle composed of weak or strong edges."),(0,s.kt)("h2",{id:"412-definitions"},"4.1.2 Definitions"),(0,s.kt)("p",null,"In this section we provide some useful terminology which is useful to understand the basic elements of the protocol."),(0,s.kt)("h3",{id:"4121-approval-switch"},"4.1.2.1 Approval switch"),(0,s.kt)("p",null,"Here we present the set of rules, called ",(0,s.kt)("em",{parentName:"p"},"approval switch"),", which allow nodes to alternatively approve single messages or the entire past cone of a message."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Parent"),": The protocol requires that each message contains a field ",(0,s.kt)("inlineCode",{parentName:"p"},"parents")," in order to guarantee cryptographic references among messages in the Tangle. These references can be of two types, ",(0,s.kt)("em",{parentName:"p"},"strong")," and ",(0,s.kt)("em",{parentName:"p"},"weak"),", and are defined by the field ",(0,s.kt)("inlineCode",{parentName:"p"},"parents type"),". Intuitively, we say that ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," is a ",(0,s.kt)("em",{parentName:"p"},"strong")," (resp. ",(0,s.kt)("em",{parentName:"p"},"weak"),") ",(0,s.kt)("em",{parentName:"p"},"parent")," of a message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," has a directed strong (resp. weak) edge to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y"),". Each message has a possible number of parents from 2 to 8 with repetitions (with 2 as a default value), where at least one is a strong parent. More information about parents can be found in ",(0,s.kt)("a",{parentName:"p",href:"./2.2MessageLayout"},"Section 2.2 - Message layout"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Approvers"),": A message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," ",(0,s.kt)("em",{parentName:"p"},"directly approves")," ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," is a parent of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x"),". Moreover, ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," is a ",(0,s.kt)("em",{parentName:"p"},"strong")," (resp. ",(0,s.kt)("em",{parentName:"p"},"weak"),") ",(0,s.kt)("em",{parentName:"p"},"approver")," of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," is a strong (resp. weak) parent of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x"),". More generally, we say that a message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," ",(0,s.kt)("em",{parentName:"p"},"strongly approves")," ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," if there is a directed path of strong approvals from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y"),", and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," ",(0,s.kt)("em",{parentName:"p"},"weakly approves")," ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y")," if there is a directed path of approvals of any type from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Past cone"),": We say that the ",(0,s.kt)("em",{parentName:"p"},"(strong) past cone")," of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," is the set of all messages strongly approved by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x"),", and the ",(0,s.kt)("em",{parentName:"p"},"weak past cone")," of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," is the set of all messages weakly or strongly approved by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x"),". ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Future cone"),": We define the ",(0,s.kt)("em",{parentName:"p"},"future cone")," of a message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," as the set of messages that weakly or strongly approve ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x"),". Please note that, unlike its past cone, the future cone of a message changes over time.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Genesis"),": The genesis is the message that creates the entire token supply. Note that this implies that no other tokens will ever be created or, equivalently, no mining occurs. This message has no outgoing edges and is in the weak past cone of every other message."))),(0,s.kt)("p",null,"In short, strong approvals are equivalent to the approvals in the legacy IOTA: if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," strongly approves ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y"),", it approves also ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"y"),"'s past cone. Moreover, weak approvals emulate the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/blob/master/text/0005-white-flag/0005-white-flag"},"White Flag")," approach from Chrysalis: approving a message does not necessarily approve its past cone. This feature allows, for instance, two conflicting messages to be part of the Tangle without creating unmergeable branches."),(0,s.kt)("h3",{id:"4122-validity"},"4.1.2.2 Validity"),(0,s.kt)("p",null,"This subsection introduces the definitions of validity for transactions and messages."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"(Transaction) Validity"),": A transaction is valid if it passes the syntactical filter and its references are valid (see ",(0,s.kt)("a",{parentName:"p",href:"./2.3StandardPayloadsLayout"},"Section 2.3 - Payloads Layout")," for information):"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"It is syntactically correct."),(0,s.kt)("li",{parentName:"ul"},"Unblock conditions are met (see ",(0,s.kt)("a",{parentName:"li",href:"./5.1UTXO"},"Section 5.1 - UTXO")," for further information)."),(0,s.kt)("li",{parentName:"ul"},"Balances are zero, i.e., the sum of the inputs in the transaction's payload is equal to the sum of the outputs spent."),(0,s.kt)("li",{parentName:"ul"},"No conflicts in the past cone on the UTXO DAG (two transactions ",(0,s.kt)("em",{parentName:"li"},"conflict")," if they consume the same UTXO output)."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"(Message) Individual Validity"),": A message is considered individually valid if it passes all the objective filters, i.e. the ones included in the Message Parser (see ",(0,s.kt)("a",{parentName:"p",href:"./2.4DataFlow"},"Section 2.4 - Data Flow"),"):"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"It is syntactically correct."),(0,s.kt)("li",{parentName:"ul"},"Its signature is valid."),(0,s.kt)("li",{parentName:"ul"},"Its Proof of Work is correct."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"(Message) Weak Validity"),": A message is weakly valid if:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Its Individually Valid."),(0,s.kt)("li",{parentName:"ul"},"Its parents are weakly valid."),(0,s.kt)("li",{parentName:"ul"},"Its transaction is valid."),(0,s.kt)("li",{parentName:"ul"},"It passes the Parent Age Check."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"(Message) Strong Validity"),": A message is strongly valid if:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"It is weakly valid."),(0,s.kt)("li",{parentName:"ul"},"Its strong parents do not have a conflicting past."),(0,s.kt)("li",{parentName:"ul"},"Its strong parents are strongly valid.")))),(0,s.kt)("h3",{id:"4123-branches"},"4.1.2.3 Branches"),(0,s.kt)("p",null,"In the IOTA protocol, multiple version of the ledger state can temporarily coexist. These multiple versions of the ledger state are called ",(0,s.kt)("em",{parentName:"p"},"branches"),". As soon as conflicts are detected, new branches are generated where the outputs created by conflicting transactions and those created by transactions that spend these outputs are tracked. If all past conflicts are resolved and no new conflicts are detected, then only one branch will exist. More rigorously, we can refer to a branch as a non-conflicting collection of past cones of outputs in the UTXO DAG. Additional information, as well as the distinction between conflict and aggregated branches, is given in ",(0,s.kt)("a",{parentName:"p",href:"./5.2LedgerState"},"Section 5.2 - Ledger state"),"."),(0,s.kt)("h3",{id:"4122-solidification"},"4.1.2.2 Solidification"),(0,s.kt)("p",null,"Due to the asynchronicity of the network, we may receive messages for which their past cone has missing elements. We refer to these messages as ",(0,s.kt)("em",{parentName:"p"},"unsolid")," messages. It is not possible neither to approve nor to gossip unsolid messages. The actions required to obtain such missing messages is called ",(0,s.kt)("em",{parentName:"p"},"solidification procedure"),", and are described in detail in ",(0,s.kt)("a",{parentName:"p",href:"./4.4Solidification"},"Section 4.4 - Solidification"),"."),(0,s.kt)("h2",{id:"413-example"},"4.1.3 Example"),(0,s.kt)("p",null,"Image 4.1.1 shows an example of the Tangle (strong edges are with a continuous line, weak edges are with a dotted line). Message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"D")," contains a transaction that has been rejected. Thus, in the legacy IOTA implementation, its future cone would be orphaned due to the monotonicity rule. In particular, both messages ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"E")," (data) and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"F")," (transaction) directly reference ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"D"),". In IOTA 2.0, the introduction of the approval switch allows that these messages can be picked up via a weak approval, as messages ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"G")," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"H")," exemplify."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://imgur.com/Rv1zXFI.png"},(0,s.kt)("img",{parentName:"a",src:"https://imgur.com/Rv1zXFI.png",alt:"Example of the IOTA Tangle"}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 4.1.1:")," Example of the IOTA Tangle."))}d.isMDXComponent=!0}}]);