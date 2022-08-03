"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95670],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),h=i,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45015:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={description:"IOTA has no mining races or fees. To protect against spam attacks, the protocol has a rate control mechanism that caps the rate of messages from malicious nodes.",image:"https://i.imgur.com/vgbhyJO.png",slug:"4.5RateControl",keywords:["proof of work","pow","rate control mechanism","legacy implementation","time windows","timestamp","message"]},s="4.5 Rate Control Through Adaptive Proof of Work",m={unversionedId:"4.5 Rate Control",id:"4.5 Rate Control",title:"4.5 Rate Control Through Adaptive Proof of Work",description:"IOTA has no mining races or fees. To protect against spam attacks, the protocol has a rate control mechanism that caps the rate of messages from malicious nodes.",source:"@site/content/build/iota-2.0-research-specifications/4.5 Rate Control.md",sourceDirName:".",slug:"/4.5RateControl",permalink:"/IOTA-2.0-Research-Specifications/4.5RateControl",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/content/build/iota-2.0-research-specifications/4.5 Rate Control.md",tags:[],version:"current",frontMatter:{description:"IOTA has no mining races or fees. To protect against spam attacks, the protocol has a rate control mechanism that caps the rate of messages from malicious nodes.",image:"https://i.imgur.com/vgbhyJO.png",slug:"4.5RateControl",keywords:["proof of work","pow","rate control mechanism","legacy implementation","time windows","timestamp","message"]},sidebar:"tutorialSidebar",previous:{title:"4.4 Solidification",permalink:"/IOTA-2.0-Research-Specifications/4.4Solidification"},next:{title:"4.6 Congestion Control",permalink:"/IOTA-2.0-Research-Specifications/4.6CongestionControl"}},p={},d=[{value:"4.5.1 Introduction",id:"451-introduction",level:2},{value:"4.5.1.1 Legacy Implementation",id:"4511-legacy-implementation",level:3},{value:"4.5.1.2 Proposal",id:"4512-proposal",level:3},{value:"4.5.2 Adaptive Proof of Work",id:"452-adaptive-proof-of-work",level:2},{value:"4.5.2.1 Message Generation",id:"4521-message-generation",level:3},{value:"4.5.2.2 Message Verification",id:"4522-message-verification",level:3},{value:"4.5.3 Algorithm",id:"453-algorithm",level:2},{value:"4.5.3.1 Protocol Parameters",id:"4531-protocol-parameters",level:3},{value:"4.5.3.2 Local Variables and Metadata",id:"4532-local-variables-and-metadata",level:3},{value:"4.5.3.3 Built-in Functions",id:"4533-built-in-functions",level:3},{value:"4.5.3.4 Pseudocode",id:"4534-pseudocode",level:3},{value:"<code>TargetPoW(timestamp, nodeID)</code>",id:"targetpowtimestamp-nodeid",level:4},{value:"<code>APoWGeneration()</code>",id:"apowgeneration",level:4},{value:"<code>APoWVerification(msg)</code>",id:"apowverificationmsg",level:4},{value:"4.5.3.5 Implementation",id:"4535-implementation",level:3}],c={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"45-rate-control-through-adaptive-proof-of-work"},"4.5 Rate Control Through Adaptive Proof of Work"),(0,o.kt)("h2",{id:"451-introduction"},"4.5.1 Introduction"),(0,o.kt)("p",null,"In Proof of Work-based blockchains, a built-in rate limit is enforced by the mining difficulty adjustment and the message fees. Without this filter, however, an attacker may be able to easily issue a very large number of messages to potentially harm the network. In order to enable the machine-to-machine economy, IOTA allows neither mining race nor fees, which makes an ",(0,o.kt)("em",{parentName:"p"},"explicit rate control mechanism necessary"),". In order to ensure that the network traffic does not exceed the allowed throughput determined by the limited resources, it is fundamental to limit the number of messages issued at node level."),(0,o.kt)("p",null,"The mechanisms described act as an emergency break during spam attacks, by slowing down the rate of messages a node can issue.  For honest nodes, the proof of work difficulty should be small enough not to hamper performance.  Finer controls on the access are developed in ",(0,o.kt)("a",{parentName:"p",href:"./4.6CongestionControl"},"Section 4.6 - Congestion Control"),", which regulate network traffic during normal periods of congestion."),(0,o.kt)("p",null,"The Rate Control specification depends on the following specifications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"./3.3PeerDiscovery"},"3.3 - Peer Discovery"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"4.2 - Timestamps")))),(0,o.kt)("h3",{id:"4511-legacy-implementation"},"4.5.1.1 Legacy Implementation"),(0,o.kt)("p",null,"In the legacy IOTA implementation, a user is asked to solve a proof of work (PoW) before issuing a new message. The user can either perform that computation locally or outsource it to a third-party service."),(0,o.kt)("p",null,"In the legacy network, the difficulty of the PoW is set to some value ",(0,o.kt)("inlineCode",{parentName:"p"},"POW_DIFFICULTY"),". Received messages are stored in a queue and processed in FIFO order. The protocol dictates that the nodes forward messages if and only if the difficulty of the PoW performed is greater or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"POW_DIFFICULTY"),". Otherwise, messages ",(0,o.kt)("em",{parentName:"p"},"shall")," be dropped."),(0,o.kt)("h3",{id:"4512-proposal"},"4.5.1.2 Proposal"),(0,o.kt)("p",null,"Similar to the legacy implementation, we require the solution of a given cryptographic puzzle before a message is issued. Here, however, we impose that the difficulty of the challenge progressively increases as a node issues multiple messages in a short time interval."),(0,o.kt)("p",null,"The goal of this document is to define this rate control mechanism, called ",(0,o.kt)("em",{parentName:"p"},"Adaptive PoW")," (APoW), which permits nodes' theoretical throughput to be independent on their hardware equipment. We believe that this mechanism is fundamental to prevent spam and denial-of-service attacks, disallowing dishonest nodes from inflating their neighbors' buffers through large number of messages in a short time. Unlike APoW, the congestion control mechanism described in ",(0,o.kt)("a",{parentName:"p",href:"./4.6CongestionControl"},"Section 4.6 - Congestion Control")," sets the actual throughput depending on nodes' access Mana, and protects the protocol against Sybil attacks and selfish behavior."),(0,o.kt)("h2",{id:"452-adaptive-proof-of-work"},"4.5.2 Adaptive Proof of Work"),(0,o.kt)("p",null,"All nodes in the network have knowledge of the following three fixed global parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Base difficulty ",(0,o.kt)("span",{parentName:"em",className:"math math-inline"},"(d_0)")),". It sets the initial difficulty of PoW."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Adaptation rate ",(0,o.kt)("span",{parentName:"em",className:"math math-inline"},"(\\gamma\\in [0, 1])")),". It provides the rate at which difficulty will be adjusted. Equivalently, ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},"1/\\gamma")," indicates how many messages can be sent per time window without increasing the PoW difficulty."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"APoW time window ",(0,o.kt)("span",{parentName:"em",className:"math math-inline"},"(w>0)")),". It describes the width of the time interval considered by the algorithm, i.e., its granularity.")),(0,o.kt)("h3",{id:"4521-message-generation"},"4.5.2.1 Message Generation"),(0,o.kt)("p",null,"Let ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"t")," be the output of the function ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentTime()"),". If node ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," wants to issue a new message, it ",(0,o.kt)("em",{parentName:"p"},"shall")," perform a PoW with difficulty ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"d_m(t)")," such that"),(0,o.kt)("p",null,(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"d_m(t) = d_0 + \\left \\lfloor{\\gamma\\cdot r_m(t)}\\right \\rfloor")),(0,o.kt)("p",null,"where ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"r_m(t)")," represents the number of messages issued by node ",(0,o.kt)("em",{parentName:"p"},"m")," with (message) timestamp in the interval ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"[t-w, t]"),". Note that when ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"\\gamma = 0"),", the algorithm becomes equivalent to the legacy IOTA implementation."),(0,o.kt)("h3",{id:"4522-message-verification"},"4.5.2.2 Message Verification"),(0,o.kt)("p",null,"When a node ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," receives a message from a neighbor, it shall check that PoW with an appropriate difficulty was performed. The verification of the correctness of the PoW computation is the last step of the parser checks, right after signature verification (see ",(0,o.kt)("a",{parentName:"p",href:"./2.4DataFlow"},"Section 2.4 - Data Flow"),"). Let us assume that node ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," receives a message with difficulty ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"d_m")," issued by node ",(0,o.kt)("inlineCode",{parentName:"p"},"m"),". To decide whether this message should be discarded, node ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," counts how many messages ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"r_m(t)")," issued by ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," it has received in the last ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"w")," time units. In accordance with the formula above, the node validates the PoW only if the following condition is satisfied:"),(0,o.kt)("p",null,(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"d_m \\geq d_0 + \\left\\lfloor{\\gamma\\cdot r_m(t)}\\right\\rfloor.")),(0,o.kt)("p",null,"Discussions on the correctness of this procedure can be found on a ",(0,o.kt)("a",{parentName:"p",href:"https://iota.cafe/t/adaptive-pow-without-sequence-numbers/363"},"related article"),"."),(0,o.kt)("h2",{id:"453-algorithm"},"4.5.3 Algorithm"),(0,o.kt)("h3",{id:"4531-protocol-parameters"},"4.5.3.1 Protocol Parameters"),(0,o.kt)("p",null,"In line with the previous section, all nodes know the constants shown by Table 4.5.1."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POW_BASE")),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"The base difficulty ",(0,o.kt)("span",{parentName:"td",className:"math math-inline"},"d_0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APOW_RATE")),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"The adaptation rate ",(0,o.kt)("span",{parentName:"td",className:"math math-inline"},"\\gamma")," (proposed values ","[0.1 - 1]",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APOW_WINDOW")),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"The APoW time window ",(0,o.kt)("span",{parentName:"td",className:"math math-inline"},"w")," (proposed values ","[10 - 60s]",")")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table 4.5.1:"),"  Global constants."),(0,o.kt)("p",null,"The choice of the time window is crucial in the correct functioning of the algorithm. Our claim is that the time window must be kept small for two main reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Message burst can be captured;"),(0,o.kt)("li",{parentName:"ul"},"Implementation is easier as it requires smaller caches.")),(0,o.kt)("p",null,"However, it is fundamental to keep this time window at least larger than the gratuitous network delay ",(0,o.kt)("inlineCode",{parentName:"p"},"DLARGE")," (see ",(0,o.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),")."),(0,o.kt)("h3",{id:"4532-local-variables-and-metadata"},"4.5.3.2 Local Variables and Metadata"),(0,o.kt)("p",null,"Local variables and metadata are described in Table 4.5.2."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable/Metadata"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"A value declared by the node representing time at which the message has been issued")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"nodeID")),(0,o.kt)("td",{parentName:"tr",align:null},"nodeID"),(0,o.kt)("td",{parentName:"tr",align:null},"Identity of the node issuing the message defined as the ",(0,o.kt)("inlineCode",{parentName:"td"},"blake2b")," hash of its public key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"targetDifficulty")),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum difficulty needed to pass the APoW verification")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"powCheck")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean value which indicates whether the APoW verification is successful or not")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ownId")),(0,o.kt)("td",{parentName:"tr",align:null},"nodeID"),(0,o.kt)("td",{parentName:"tr",align:null},"Identity of the node running the algorithm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"msgCache")),(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"Cache storing the timestamp of the most recent messages received by ",(0,o.kt)("inlineCode",{parentName:"td"},"ownID"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"nodeMap")),(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"List of nodeIDs which have issued messages recently (within 2 APoW timestamp windows)")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table 4.5.2:")," Local variables and metadata."),(0,o.kt)("h3",{id:"4533-built-in-functions"},"4.5.3.3 Built-in Functions"),(0,o.kt)("p",null,"Pseudocodes introduced in the next section will use the built-in functions described in Table 4.5.3."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Floor(x)")),(0,o.kt)("td",{parentName:"tr",align:null},"Give the greatest integer less than or equal to ",(0,o.kt)("inlineCode",{parentName:"td"},"x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Sort(x, y)")),(0,o.kt)("td",{parentName:"tr",align:null},"Sort list ",(0,o.kt)("inlineCode",{parentName:"td"},"x")," by metric ",(0,o.kt)("inlineCode",{parentName:"td"},"y"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Append(x, y)")),(0,o.kt)("td",{parentName:"tr",align:null},"Add a new element ",(0,o.kt)("inlineCode",{parentName:"td"},"y")," to list ",(0,o.kt)("inlineCode",{parentName:"td"},"x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Remove(x)")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove the oldest element from the ordered data structure ",(0,o.kt)("inlineCode",{parentName:"td"},"x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Head(x)")),(0,o.kt)("td",{parentName:"tr",align:null},"Get (without removing) the oldest element from the ordered data structure ",(0,o.kt)("inlineCode",{parentName:"td"},"x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CurrentTime()")),(0,o.kt)("td",{parentName:"tr",align:null},"Current time computed with the local clock")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table 4.5.3:")," Built-in functions."),(0,o.kt)("h3",{id:"4534-pseudocode"},"4.5.3.4 Pseudocode"),(0,o.kt)("h4",{id:"targetpowtimestamp-nodeid"},(0,o.kt)("inlineCode",{parentName:"h4"},"TargetPoW(timestamp, nodeID)")),(0,o.kt)("p",null,"This function accesses the ledger to check the history of messages for ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeId"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION targetPoW = TargetPoW(timestamp, nodeID)\n    # cache update (this is done as an optimization)\n    WHILE CurrentTime() - Head(msgCache).timestamp >  2 * APOW_WINDOW\n        Remove(msgCache)\n    Append(msgCache, <nodeID, timestamp>)\n    Sort(msgCache, `timestamp`)\n    countMsg = 0\n    FOR msg IN msgCache[nodeID]\n        IF msg > timestamp - APOW_WINDOW AND msg < timestamp\n            countMsg++\n    RETURN BASE_POW + Floor(APOW_RATE * countMsg)\n")),(0,o.kt)("h4",{id:"apowgeneration"},(0,o.kt)("inlineCode",{parentName:"h4"},"APoWGeneration()")),(0,o.kt)("p",null,"This function sets the difficulty at which the message creator should compute the PoW when generating a new message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"### upon creation of a new message\n\nFUNCTION targetPoW = APoWGeneration()\n    RETURN TargetPoW(CurrentTime(), ownID)\n")),(0,o.kt)("h4",{id:"apowverificationmsg"},(0,o.kt)("inlineCode",{parentName:"h4"},"APoWVerification(msg)")),(0,o.kt)("p",null,"This function is triggered in the parser by new messages, see ",(0,o.kt)("a",{parentName:"p",href:"./2.4DataFlow"},"Section 2.4 - Data Flow"),". It returns ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," if the PoW attached to the message is sufficient, or ",(0,o.kt)("inlineCode",{parentName:"p"},"FALSE")," otherwise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"#### upon arrival of a message msg\n\nFUNCTION powCheck = APoWVerification(msg)\n    targetPoW = TargetPoW(msg.timestamp, msg.nodeID)\n    IF msg.pow >= targetPoW\n        IF nodeMap[msg.nodeID] == NULL\n            Append(nodeMap, msg.nodeID)\n        Append(msgCache, msg.timestamp)\n        RETURN TRUE\n    ELSE\n        RETURN FALSE\n")),(0,o.kt)("h3",{id:"4535-implementation"},"4.5.3.5 Implementation"),(0,o.kt)("p",null,"The most critical part of the algorithm concerns counting the number of messages recently issued by a node. Since querying the database may be expensive, we propose to cache the most recent messages. To this end, we use two data structures (see Image 4.5.4):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nodeMap"),". Each entry in the hashmap corresponds to a different nodeId and points to the doubly linked list of recent messages of the same node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"msgCache"),". A queue which removes old messages and adds new ones according to a FIFO policy.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://i.imgur.com/vgbhyJO.png"},(0,o.kt)("img",{parentName:"a",src:"https://i.imgur.com/vgbhyJO.png",alt:"Proposed data structures for the implementation of the rate control mechanism"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 4.5.4:")," Proposed data structures for the implementation of the rate control mechanism."),(0,o.kt)("p",null,"Both data structures point to the same locations of memory which store the timestamp of the message. These locations of memory also store the pointers to the other elements of ",(0,o.kt)("em",{parentName:"p"},"nodeMap")," and ",(0,o.kt)("em",{parentName:"p"},"msgCache"),"."),(0,o.kt)("p",null,"The size of the cache ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"C")," (in number of timestamps) must be larger of the product between the maximum network throughput and the time window ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"w"),". Assume that max throughput is 1000 TPS and the time window is 50 s, cache size must be larger than 50,000. Given ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},"N")," the number of nodes issuing recent messages, our caching scheme provides the following performance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cache update: ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},"\\mathcal{O}(1)"),";"),(0,o.kt)("li",{parentName:"ul"},"msg counter: ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},"\\mathcal{O}(C/N)"),";"),(0,o.kt)("li",{parentName:"ul"},"cache size: ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},"<10")," MB.")),(0,o.kt)("p",null,"Assume that a node receives a message with PoW difficulty equal to ",(0,o.kt)("em",{parentName:"p"},"targetPoW"),". However, the node cannot (immediately) know whether older messages have been issued before the timestamp of such message, which would make its PoW not sufficient. In this case, in order not to slow down the network, the node will forward anyway the message for scheduling."),(0,o.kt)("p",null,"An attacker may exploit the above in order to issue progressively older messages which would be accepted with easier PoW difficulty. Since the timestamp validation window is pretty large, this attack may theoretically be effective."),(0,o.kt)("p",null,"In case a node receives a new message with a timestamp that would make other messages from the same node would not have the correct PoW difficulty, the node will be blacklisted. However, no transactions which are already scheduled would be dropped."))}h.isMDXComponent=!0}}]);