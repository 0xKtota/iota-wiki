"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),r=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=r(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=r(n),_=o,m=c["".concat(i,".").concat(_)]||c[_]||d[_]||s;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var r=2;r<s;r++)l[r]=n[r];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>r});var a=n(87462),o=(n(67294),n(3905));const s={sidebar_label:"account",title:"iota_wallet.account"},l=void 0,u={unversionedId:"references/python/iota_wallet/account",id:"references/python/iota_wallet/account",title:"iota_wallet.account",description:"Account Objects",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/python/iota_wallet/account.md",sourceDirName:"references/python/iota_wallet",slug:"/references/python/iota_wallet/account",permalink:"/shimmer/wallet.rs/references/python/iota_wallet/account",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/python/iota_wallet/account.md",tags:[],version:"current",frontMatter:{sidebar_label:"account",title:"iota_wallet.account"},sidebar:"docs",previous:{title:"Wallet API Reference",permalink:"/shimmer/wallet.rs/references/java/wallet"},next:{title:"common",permalink:"/shimmer/wallet.rs/references/python/iota_wallet/common"}},i={},r=[{value:"Account Objects",id:"account-objects",level:2},{value:"build_alias_output",id:"build_alias_output",level:3},{value:"build_basic_output",id:"build_basic_output",level:3},{value:"build_foundry_output",id:"build_foundry_output",level:3},{value:"build_nft_output",id:"build_nft_output",level:3},{value:"burn_native_token",id:"burn_native_token",level:3},{value:"burn_nft",id:"burn_nft",level:3},{value:"consolidate_outputs",id:"consolidate_outputs",level:3},{value:"create_alias_output",id:"create_alias_output",level:3},{value:"destroy_alias",id:"destroy_alias",level:3},{value:"destroy_foundry",id:"destroy_foundry",level:3},{value:"generate_addresses",id:"generate_addresses",level:3},{value:"get_outputs_with_additional_unlock_conditions",id:"get_outputs_with_additional_unlock_conditions",level:3},{value:"get_output",id:"get_output",level:3},{value:"get_transaction",id:"get_transaction",level:3},{value:"addresses",id:"addresses",level:3},{value:"addresses_with_unspent_outputs",id:"addresses_with_unspent_outputs",level:3},{value:"outputs",id:"outputs",level:3},{value:"unspent_outputs",id:"unspent_outputs",level:3},{value:"incoming_transactions",id:"incoming_transactions",level:3},{value:"transactions",id:"transactions",level:3},{value:"pending_transactions",id:"pending_transactions",level:3},{value:"decrease_native_token_supply",id:"decrease_native_token_supply",level:3},{value:"increase_native_token_supply",id:"increase_native_token_supply",level:3},{value:"mint_native_token",id:"mint_native_token",level:3},{value:"minimum_required_storage_deposit",id:"minimum_required_storage_deposit",level:3},{value:"mint_nfts",id:"mint_nfts",level:3},{value:"get_balance",id:"get_balance",level:3},{value:"prepare_send_amount",id:"prepare_send_amount",level:3},{value:"prepare_transaction",id:"prepare_transaction",level:3},{value:"sync_account",id:"sync_account",level:3},{value:"send_amount",id:"send_amount",level:3},{value:"send_micro_transaction",id:"send_micro_transaction",level:3},{value:"send_native_tokens",id:"send_native_tokens",level:3},{value:"send_nft",id:"send_nft",level:3},{value:"set_alias",id:"set_alias",level:3},{value:"sign_transaction_essence",id:"sign_transaction_essence",level:3},{value:"submit_and_store_transaction",id:"submit_and_store_transaction",level:3},{value:"claim_outputs",id:"claim_outputs",level:3},{value:"send_outputs",id:"send_outputs",level:3}],p={toc:r};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"account-objects"},"Account Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Account()\n")),(0,o.kt)("h3",{id:"build_alias_output"},"build","_","alias","_","output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def build_alias_output(amount, native_tokens, alias_id, state_index,\n                       state_metadata, foundry_counter, unlock_conditions,\n                       features, immutable_features)\n")),(0,o.kt)("p",null,"Build alias output."),(0,o.kt)("h3",{id:"build_basic_output"},"build","_","basic","_","output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def build_basic_output(amount, native_tokens, unlock_conditions, features)\n")),(0,o.kt)("p",null,"Build basic output."),(0,o.kt)("h3",{id:"build_foundry_output"},"build","_","foundry","_","output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def build_foundry_output(amount, native_tokens, serial_number, token_scheme,\n                         unlock_conditions, features, immutable_features)\n")),(0,o.kt)("p",null,"Build foundry output."),(0,o.kt)("h3",{id:"build_nft_output"},"build","_","nft","_","output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def build_nft_output(amount, native_tokens, nft_id, unlock_conditions,\n                     features, immutable_features)\n")),(0,o.kt)("p",null,"BuildNftOutput."),(0,o.kt)("h3",{id:"burn_native_token"},"burn","_","native","_","token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def burn_native_token(token_id, burn_amount, options=None)\n")),(0,o.kt)("p",null,"Burn native tokens. This doesn","'","t require the foundry output which minted them, but will not increase\nthe foundries ",(0,o.kt)("inlineCode",{parentName:"p"},"melted_tokens")," field, which makes it impossible to destroy the foundry output. Therefore it","'","s\nrecommended to use melting, if the foundry output is available."),(0,o.kt)("h3",{id:"burn_nft"},"burn","_","nft"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def burn_nft(nft_id, options=None)\n")),(0,o.kt)("p",null,"Burn an nft output. Outputs controlled by it will be swept before if they don","'","t have a storage\ndeposit return, timelock or expiration unlock condition. This should be preferred over burning, because after\nburning, the foundry can never be destroyed anymore."),(0,o.kt)("h3",{id:"consolidate_outputs"},"consolidate","_","outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def consolidate_outputs(force, output_consolidation_threshold)\n")),(0,o.kt)("p",null,"Consolidate outputs."),(0,o.kt)("h3",{id:"create_alias_output"},"create","_","alias","_","output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def create_alias_output(alias_output_options, options)\n")),(0,o.kt)("p",null,"Create an alias output."),(0,o.kt)("h3",{id:"destroy_alias"},"destroy","_","alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def destroy_alias(alias_id, options=None)\n")),(0,o.kt)("p",null,"Destroy an alias output. Outputs controlled by it will be swept before if they don","'","t have a\nstorage deposit return, timelock or expiration unlock condition. The amount and possible native tokens will be\nsent to the governor address."),(0,o.kt)("h3",{id:"destroy_foundry"},"destroy","_","foundry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def destroy_foundry(foundry_id, options=None)\n")),(0,o.kt)("p",null,"Destroy a foundry output with a circulating supply of 0.\nNative tokens in the foundry (minted by other foundries) will be transacted to the controlling alias"),(0,o.kt)("h3",{id:"generate_addresses"},"generate","_","addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def generate_addresses(amount, options=None)\n")),(0,o.kt)("p",null,"Generate new addresses."),(0,o.kt)("h3",{id:"get_outputs_with_additional_unlock_conditions"},"get","_","outputs","_","with","_","additional","_","unlock","_","conditions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_outputs_with_additional_unlock_conditions(outputs_to_claim)\n")),(0,o.kt)("p",null,"Get outputs with additional unlock conditions."),(0,o.kt)("h3",{id:"get_output"},"get","_","output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_output(output_id)\n")),(0,o.kt)("p",null,"Get output."),(0,o.kt)("h3",{id:"get_transaction"},"get","_","transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_transaction(transaction_id)\n")),(0,o.kt)("p",null,"Get transaction."),(0,o.kt)("h3",{id:"addresses"},"addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def addresses()\n")),(0,o.kt)("p",null,"List addresses."),(0,o.kt)("h3",{id:"addresses_with_unspent_outputs"},"addresses","_","with","_","unspent","_","outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def addresses_with_unspent_outputs()\n")),(0,o.kt)("p",null,"Returns only addresses of the account with unspent outputs."),(0,o.kt)("h3",{id:"outputs"},"outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def outputs(filter_options=None)\n")),(0,o.kt)("p",null,"Returns all outputs of the account."),(0,o.kt)("h3",{id:"unspent_outputs"},"unspent","_","outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def unspent_outputs(filter_options=None)\n")),(0,o.kt)("p",null,"Returns all unspent outputs of the account."),(0,o.kt)("h3",{id:"incoming_transactions"},"incoming","_","transactions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def incoming_transactions()\n")),(0,o.kt)("p",null,"Returns all incoming transactions of the account."),(0,o.kt)("h3",{id:"transactions"},"transactions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def transactions()\n")),(0,o.kt)("p",null,"Returns all transaction of the account."),(0,o.kt)("h3",{id:"pending_transactions"},"pending","_","transactions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def pending_transactions()\n")),(0,o.kt)("p",null,"Returns all pending transactions of the account."),(0,o.kt)("h3",{id:"decrease_native_token_supply"},"decrease","_","native","_","token","_","supply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def decrease_native_token_supply(token_id, melt_amount, options=None)\n")),(0,o.kt)("p",null,"Melt native tokens. This happens with the foundry output which minted them, by increasing it","'","s\n",(0,o.kt)("inlineCode",{parentName:"p"},"melted_tokens")," field."),(0,o.kt)("h3",{id:"increase_native_token_supply"},"increase","_","native","_","token","_","supply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def increase_native_token_supply(token_id,\n                                 mint_amount,\n                                 increase_native_token_supply_options=None,\n                                 options=None)\n")),(0,o.kt)("p",null,"Mint more native token."),(0,o.kt)("h3",{id:"mint_native_token"},"mint","_","native","_","token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def mint_native_token(native_token_options, options=None)\n")),(0,o.kt)("p",null,"Mint native token."),(0,o.kt)("h3",{id:"minimum_required_storage_deposit"},"minimum","_","required","_","storage","_","deposit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def minimum_required_storage_deposit(output)\n")),(0,o.kt)("p",null,"Minimum required storage deposit."),(0,o.kt)("h3",{id:"mint_nfts"},"mint","_","nfts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def mint_nfts(nfts_options, options=None)\n")),(0,o.kt)("p",null,"Mint nfts."),(0,o.kt)("h3",{id:"get_balance"},"get","_","balance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_balance()\n")),(0,o.kt)("p",null,"Get account balance information."),(0,o.kt)("h3",{id:"prepare_send_amount"},"prepare","_","send","_","amount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def prepare_send_amount(addresses_with_amount, options=None)\n")),(0,o.kt)("p",null,"Prepare send amount."),(0,o.kt)("h3",{id:"prepare_transaction"},"prepare","_","transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def prepare_transaction(outputs, options=None)\n")),(0,o.kt)("p",null,"Prepare transaction."),(0,o.kt)("h3",{id:"sync_account"},"sync","_","account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def sync_account(options=None)\n")),(0,o.kt)("p",null,"Sync the account by fetching new information from the nodes.\nWill also retry pending transactions and consolidate outputs if necessary."),(0,o.kt)("h3",{id:"send_amount"},"send","_","amount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def send_amount(addresses_with_amount, options=None)\n")),(0,o.kt)("p",null,"Send amount."),(0,o.kt)("h3",{id:"send_micro_transaction"},"send","_","micro","_","transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def send_micro_transaction(addresses_with_micro_amount, options=None)\n")),(0,o.kt)("p",null,"Send micro transaction."),(0,o.kt)("h3",{id:"send_native_tokens"},"send","_","native","_","tokens"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def send_native_tokens(addresses_native_tokens, options=None)\n")),(0,o.kt)("p",null,"Send native tokens."),(0,o.kt)("h3",{id:"send_nft"},"send","_","nft"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def send_nft(addresses_nft_ids, options=None)\n")),(0,o.kt)("p",null,"Send nft."),(0,o.kt)("h3",{id:"set_alias"},"set","_","alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def set_alias(alias)\n")),(0,o.kt)("p",null,"Set alias."),(0,o.kt)("h3",{id:"sign_transaction_essence"},"sign","_","transaction","_","essence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def sign_transaction_essence(prepared_transaction_data)\n")),(0,o.kt)("p",null,"Sign a transaction essence."),(0,o.kt)("h3",{id:"submit_and_store_transaction"},"submit","_","and","_","store","_","transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def submit_and_store_transaction(signed_transaction_data)\n")),(0,o.kt)("p",null,"Submit and store transaction."),(0,o.kt)("h3",{id:"claim_outputs"},"claim","_","outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def claim_outputs(output_ids_to_claim)\n")),(0,o.kt)("p",null,"Claim outputs."),(0,o.kt)("h3",{id:"send_outputs"},"send","_","outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@send_message_routine\ndef send_outputs(outputs, options=None)\n")),(0,o.kt)("p",null,"Send outputs in a transaction."))}d.isMDXComponent=!0}}]);