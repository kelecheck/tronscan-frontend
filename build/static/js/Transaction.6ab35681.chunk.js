(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1241:function(e,a,t){"use strict";t.d(a,"a",function(){return m});for(var n=t(133),l={},c=0,r=Object.keys(n.Transaction.Contract.ContractType);c<r.length;c++){var s=r[c];l[n.Transaction.Contract.ContractType[s]]=s}var m=l},1778:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(3),l=t(0),c=t.n(l);function r(e){var a=e.label,t=e.children;return c.a.createElement("tr",null,c.a.createElement("th",null,Object(n.c)(a)),c.a.createElement("td",null,t))}},1999:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var n=t(0),l=t.n(n),c=t(9),r=t(19),s=t(1778),m=t(153),o=t(3),d=t(11),E=t(54),i=t(31),b=t(206);function u(e){var a,t,u=e.contract,_=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(u.parameters)for(var f in u.parameters)for(var N in _)f===N&&(a=_[f],t=u.parameters[f]);var v=[];v.push(u);var h=Object(E.a)(v,"asset_name","amount")[0];if(u.contractType)switch(u.contractType.toUpperCase()){case"TRANSFERCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("transfer_contract"),l.a.createElement("small",null,Object(o.c)("TRX_transfer_between_addresses")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"from"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"to"},l.a.createElement(r.a,{address:u.to_address})),l.a.createElement(s.a,{label:"amount"},l.a.createElement(m.b,{amount:u.amount/c.t})),u.contract_note&&l.a.createElement(s.a,{label:"note"},decodeURIComponent(u.contract_note))))));case"TRANSFERASSETCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("transfer_asset_contract"),l.a.createElement("small",null,Object(o.c)("token_transfer_between_addresses")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"from"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"to"},l.a.createElement(r.a,{address:u.to_address})),l.a.createElement(s.a,{label:"amount"},h.map_amount),l.a.createElement(s.a,{label:"token"},l.a.createElement(b.a,{value:u,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("participate_asset_issue_contract"),l.a.createElement("small",null,Object(o.c)("participate_token_between_addresses")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"to"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"issuer"},l.a.createElement(r.a,{address:u.to_address})),l.a.createElement(s.a,{label:"amount"},u.amount/c.t),l.a.createElement(s.a,{label:"token"},l.a.createElement(b.a,{value:u,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("witness_update_contract"),l.a.createElement("small",null,Object(o.c)("updates_a_witness")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"URL"},u.url))));case"WITNESSCREATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("witness_create_contract"),l.a.createElement("small",null,Object(o.c)("create_a_witness")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"URL"},u.url))));case"ACCOUNTUPDATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("account_update_contract"),l.a.createElement("small",null,Object(o.c)("update_account_name")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"account_name"},Object(i.toUtf8)(u.account_name)))));case"ACCOUNTCREATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("account_create_contract"),l.a.createElement("small",null,Object(o.c)("account_create")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"create_from_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"create_to_address"},l.a.createElement(r.a,{address:u.account_address})))));case"WITHDRAWBALANCECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("withdraw_balance_contract"),l.a.createElement("small",null,Object(o.c)("withdraw_balance")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})))));case"FREEZEBALANCECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("freeze_balance_contract"),l.a.createElement("small",null,Object(o.c)("freeze_TRX")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),u.receiver_address&&l.a.createElement(s.a,{label:"receive_list"},l.a.createElement(r.a,{address:u.receiver_address})),u.resource?l.a.createElement(s.a,{label:"type"},u.resource):l.a.createElement(s.a,{label:"type"},"Bandwidth"),l.a.createElement(s.a,{label:"frozen_balance"},u.frozen_balance/c.t),l.a.createElement(s.a,{label:"frozen_days"},u.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("unfreeze_balance_contract"),l.a.createElement("small",null,Object(o.c)("unfreeze_TRX")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),u.receiver_address&&l.a.createElement(s.a,{label:"receive_list"},l.a.createElement(r.a,{address:u.receiver_address})))));case"VOTEWITNESSCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("vote_witness_contract"),l.a.createElement("small",null,Object(o.c)("vote_for_a_witness")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement("tr",null,l.a.createElement("th",null,Object(o.c)("votes")),l.a.createElement("td",null,l.a.createElement("ul",null,u.votes.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(r.a,{address:e.vote_address,truncate:!1}),Object(o.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("asset_issue_contract"),l.a.createElement("small",null,Object(o.c)("issue_a_new_asset")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement(s.a,{label:"token_name"},Object(i.toUtf8)(u.name)),l.a.createElement(s.a,{label:"total_supply"},l.a.createElement(d.c,{value:u.total_supply/(u.precision?Math.pow(10,u.precision):1)})),l.a.createElement(s.a,{label:"TRX_exchange_rate"},u.trx_num/c.t," : ",u.num),l.a.createElement(s.a,{label:"start_time"},u.end_time-u.start_time>1e3?l.a.createElement(d.a,{value:u.start_time}):"-"),l.a.createElement(s.a,{label:"end_time"},u.end_time-u.start_time>1e3?l.a.createElement(d.a,{value:u.end_time}):"-"),l.a.createElement(s.a,{label:"description"},Object(i.toUtf8)(u.description)),l.a.createElement(s.a,{label:"URL"},l.a.createElement(r.d,{url:Object(i.toUtf8)(u.url)})))));case"PROPOSALCREATECONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("proposal_create_contract"),l.a.createElement("small",null,Object(o.c)("proposal_create")))),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})),l.a.createElement("tr",null,l.a.createElement("th",null,a),l.a.createElement("td",null,t)))));case"TRIGGERSMARTCONTRACT":return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("trigger_smart_contract"),l.a.createElement("small",null,Object(o.c)("normal_address_trigger_smart_contract")))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content_pos"},l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Basic_info")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_triggers_owner_address"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:u.owner_address}))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_address"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:u.contract_address,isContract:!0}))),l.a.createElement("div",{className:"d-flex content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("value"),":"),u.call_value?l.a.createElement(m.b,{amount:u.call_value/c.t}):l.a.createElement(m.b,{amount:0})))),u.tokenTransferInfo&&void 0!==u.tokenTransferInfo.decimals&&void 0!==u.tokenTransferInfo.symbol&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("TRC20_transfers")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("from"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:u.tokenTransferInfo.from_address}))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("to"),":"),l.a.createElement("div",{className:"flex1"},l.a.createElement(r.a,{address:u.tokenTransferInfo.to_address}))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("amount"),":"),l.a.createElement("div",{className:"flex1"},Number(u.tokenTransferInfo.amount_str)/Math.pow(10,u.tokenTransferInfo.decimals))),l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("token_txs_info"),":"),l.a.createElement("div",{className:"flex1"},u.tokenTransferInfo.contract_address==c.i||u.tokenTransferInfo.contract_address==c.j||u.tokenTransferInfo.contract_address==c.h?l.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},l.a.createElement("img",{width:20,height:20,src:u.tokenTransferInfo.icon_url,alt:u.tokenTransferInfo.name}),l.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):l.a.createElement("img",{width:20,height:20,src:u.tokenTransferInfo.icon_url,alt:u.tokenTransferInfo.name,style:{marginRight:5}}),l.a.createElement(r.g,{name:u.tokenTransferInfo.name,address:u.tokenTransferInfo.contract_address,namePlus:u.tokenTransferInfo.name+" ("+u.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(u.internal_transactions)&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Internal_txns")),l.a.createElement("div",{className:"flex1"},Object.keys(u.internal_transactions).map(function(e,a){var t=[];return u.internal_transactions[e].map(function(e,a){var n=Object(E.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];t.push(l.a.createElement("div",{className:"d-flex align-items-center content_item"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"mr-1"},Object(o.c)("transfers")),l.a.createElement("div",{className:"mr-1"},n.map_amount+" "+n.map_token_name_abbr),l.a.createElement("div",{className:"mr-1"},Object(o.c)("from")),l.a.createElement("div",{className:"mr-1",style:{width:"150px"}},l.a.createElement(r.c,{address:e.caller_address})),l.a.createElement("div",{className:"mr-1"},Object(o.c)("to")),l.a.createElement("div",{className:"mr-1",style:{width:"150px"}},l.a.createElement(r.c,{address:e.transfer_to_address})))))}),t}))),"{}"!=JSON.stringify(u.cost)&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Fee_Consumption")),l.a.createElement("div",{className:"flex1"},Object.keys(u.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),l.a.createElement("div",{className:"flex1"},u.cost[e]/1e6," TRX")):l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),l.a.createElement("div",{className:"flex1"},u.cost[e]))}))),u.method&&l.a.createElement("div",{className:"d-flex border-bottom pt-2"},l.a.createElement("div",{className:"content_box_name"},Object(o.c)("Method_calling")),l.a.createElement("div",{className:"flex1"},l.a.createElement("div",{className:"d-flex border-bottom content_item"},l.a.createElement("div",{className:"content_name"},Object(o.c)("contract_method"),":"),l.a.createElement("div",{className:"flex1"},u.method)),u.parameter&&Object.keys(u.parameter).map(function(e){return l.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},l.a.createElement("div",{className:"content_name"},e,":"),l.a.createElement("div",{className:"flex1"},u.parameter[e]))}))))));default:return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card-body table-title"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",u.contractType)),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,u.owner_address?l.a.createElement(s.a,{label:"owner_address"},l.a.createElement(r.a,{address:u.owner_address})):"")))}return l.a.createElement("div",null,u.contractType&&l.a.createElement("div",{className:"card-body"},JSON.stringify(u)))}},3270:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),c=t(7),r=t(5),s=t(14),m=t(15),o=t(24),d=t(23),E=t(25),i=t(0),b=t.n(i),u=t(30),_=t(1102),f=t(334),N=t(17),v=t(3),h=t(11),O=t(19),p=t(311),T=t(82),y=t(28),j=t(1999),g=t(1241),C=t(12),A=t(20),x=t(212),w=t.n(x),R=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(d.a)(a).call(this))).state={loading:!0,notFound:!1,transaction:{hash:-1,timestamp:0},tabs:{contracts:{id:"contracts",icon:"fa fa-exchange-alt",path:"",label:b.a.createElement("span",null,Object(v.c)("contracts")),cmp:function(){return b.a.createElement(T.b,null)}}}},e}return Object(E.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){document.documentElement.scrollTop=0;var e=this.props,a=e.match,t=e.location,n=w.a.parse(t.search).lang;n&&this.props.setLanguage(n),this.load(a.params.hash)}},{key:"componentDidUpdate",value:function(e){var a=this.props.match;a.params.hash!==e.match.params.hash&&this.load(a.params.hash)}},{key:"load",value:function(){var e=Object(r.a)(l.a.mark(function e(a){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,transaction:{hash:a}}),e.next=3,N.a.getTransactionByHash(a);case 3:if((t=e.sent).hash){e.next=7;break}return this.setState({notFound:!0}),e.abrupt("return");case 7:this.setState({loading:!1,transaction:t,tabs:{contracts:{id:"contracts",icon:"fa fa-exchange-alt",path:"",label:b.a.createElement("span",null,Object(v.c)("contracts")),cmp:function(){return b.a.createElement(j.a,{contract:Object(c.a)({},{cost:t.cost},t.contractData,t.trigger_info,{internal_transactions:t.internal_transactions},{tokenTransferInfo:t.tokenTransferInfo},{contract_note:t.data},{contractType:g.a[t.contractType]})})}}}});case 8:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.transaction,t=e.tabs,n=e.loading,l=e.notFound,c=this.props.match;return l?b.a.createElement("main",{className:"container header-overlap"},b.a.createElement(C.a,{color:"warning",className:"text-center"},Object(v.c)("transaction_not_found"))):b.a.createElement("main",{className:"container header-overlap"},n?b.a.createElement("div",{className:"card"},b.a.createElement(T.b,null,Object(v.c)("loading_transaction"))):b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-12"},b.a.createElement("div",{className:"card  list-style-header"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title m-0"},b.a.createElement("i",{className:"fa fa-hashtag mr-1"}),Object(v.c)("hash")," ",a.hash)),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table table-hover m-0"},b.a.createElement("tbody",null,a.hasOwnProperty("confirmed")&&b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("status"),":"),b.a.createElement("td",null,a.confirmed?b.a.createElement("span",{className:"badge badge-success text-uppercase"},Object(v.c)("Confirmed")):b.a.createElement("span",{className:"badge badge-danger text-uppercase"},Object(v.c)("Unconfirmed")))),a.hasOwnProperty("contractRet")&&b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("result"),":"),b.a.createElement("td",null,a.contractRet)),b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("hash"),":"),b.a.createElement("td",null,b.a.createElement(y.a,null,a.hash,b.a.createElement(p.a,{text:a.hash,className:"ml-1"})))),b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("block"),":"),b.a.createElement("td",null,b.a.createElement(O.b,{number:a.block}))),0!==a.timestamp&&b.a.createElement("tr",null,b.a.createElement("th",null,Object(v.c)("time"),":"),b.a.createElement("td",null,b.a.createElement(h.a,{value:a.timestamp}),"\xa0",b.a.createElement(h.e,{value:a.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0")))))),b.a.createElement("div",{className:"card mt-3  list-style-body"},b.a.createElement("div",{className:"card-body p-0  list-style-body__body",style:{overflow:"auto"}},b.a.createElement(_.a,null,Object.values(t).map(function(e){return b.a.createElement(f.a,{key:e.id,exact:!0,path:c.url+e.path,render:function(a){return b.a.createElement(e.cmp,null)}})})))))))}}]),a}(b.a.Component);var k={setLanguage:A.z};a.default=Object(u.connect)(function(e){return{}},k)(R)}}]);