(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1131:function(e,t,a){"use strict";a.d(t,"a",function(){return O});var n=a(1153),r=a.n(n),l=a(127),c=a.n(l),o=a(1135),s=a.n(o),i=a(1137),u=a.n(i),m=a(2),d=a.n(m),p=a(7),f=a(5),b=a(14),g=a(15),h=a(24),x=a(23),E=a(25),k=a(0),w=a.n(k),v=a(3),y=a(17),O=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(x.a)(t).call(this,e))).loadDatas=Object(f.a)(d.a.mark(function e(){var t,n,r,l,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:40,r=a.state.filter,e.next=5,y.a.getTokens(Object(p.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(p.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(p.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(p.a)({},e,{name:w.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?w.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:w.a.createElement("div",{className:"custom-filter-dropdown"},w.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),w.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(v.c)("search")),w.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(v.c)("reset"))),filterIcon:w.a.createElement(c.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],l=!0,o=!1,i=void 0;try{for(var m,d=e[Symbol.iterator]();!(l=(m=d.next()).done);l=!0){var f=m.value;if(f.sorter&&!f.filterDropdown){var b={sorter:t(f.key)};r.push(Object(p.a)({},f,b))}else if(!f.sorter&&f.filterDropdown){var g=Object(p.a)({},n);r.push(Object(p.a)({},f,g))}else if(f.sorter&&f.filterDropdown){var h=Object(p.a)({sorter:t(f.key)},n);r.push(Object(p.a)({},f,h))}else r.push(f)}}catch(x){o=!0,i=x}finally{try{l||null==d.return||d.return()}finally{if(o)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:"both",showSizeChanger:!0,defaultPageSize:20},loading:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,c=e.bordered,o=e.pagination,s=void 0===o||o,i=e.scroll,u=e.locale,m=e.addr,d=e.transfers,f=(e.contractAddress,this.setColumn(l)),b=s?Object(p.a)({total:t},this.state.pagination):s;return w.a.createElement("div",null,m?w.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")},w.a.createElement(r.a,{bordered:c,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})," "):w.a.createElement("div",{className:"card table_pos"},w.a.createElement(r.a,{bordered:c,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})))}}]),t}(k.Component)},1132:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(14),r=a(15),l=a(24),c=a(23),o=a(25),s=a(0),i=a.n(s),u=a(154),m=a(12),d=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={open:!1,id:Object(u.a)(24)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,l=r.text,c=r.placement,o=r.testSecond,s=void 0===o?"":o,u=r.className,p=void 0===u?"":u,f=r.info,b=void 0===f?"":f;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(m.h,{placement:c,isOpen:a,target:n,className:p,innerClassName:"w-100"},l?Object(d.b)(l):"",s?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(d.b)(s)):"",b||""))}}]),t}(i.a.Component)},1244:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},1695:function(e,t,a){var n=a(86);e.exports=function(e){return n(e).toLowerCase()}},1790:function(e,t,a){"use strict";var n=a(1135),r=a.n(n),l=a(1137),c=a.n(l),o=a(14),s=a(15),i=a(24),u=a(23),m=a(25),d=a(0),p=a.n(d),f=a(3),b=a(74),g=a.n(b);p.a.Component},3260:function(e,t,a){"use strict";a.r(t);var n,r=a(1695),l=a.n(r),c=a(205),o=a.n(c),s=a(33),i=a.n(s),u=a(2),m=a.n(u),d=a(5),p=a(14),f=a(15),b=a(24),g=a(23),h=a(25),x=a(0),E=a.n(x),k=a(30),w=a(297),v=a(11),y=a(53),O=a.n(y),N=a(3),j=a(17),C=a(19),S=a(1132),T=a(301),A=(a(1790),a(64)),_=a(1131),R=a(9),M=a(20),D=a(44),U=a(82),I=a(132),V=a(22),B=a.n(V),W=a(18),F=a.n(W),P=a(155),q=a(51),J=Object(P.a)(n=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).loadPage=Object(d.a)(m.a.mark(function e(){var t,a,r,l,c,o,s,i,u=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:1,a=u.length>1&&void 0!==u[1]?u[1]:20,r=n.state.filter,l=n.props.intl,n.setState({loading:!0}),!r.name){e.next=13;break}return e.next=8,B.a.get(R.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&name="+r.name);case 8:c=e.sent,o=c.data.data.length,s=c.data.totalAll,e.next=18;break;case 13:return e.next=15,B.a.get(R.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&totalAll=1&showAll=2");case 15:c=e.sent,o=c.data.total,s=c.data.totalAll;case 18:return 0===(i=c.data.data).length&&A.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:i,total:o,totalAll:s}),e.abrupt("return",o);case 22:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=i()(Object(T.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;e>a&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e}),n.buyAmount.value=e;var l=e*t;n.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})},n.preBuyTokens=function(e){n.state.buyAmount;var t=n.props;t.currentWallet;t.wallet.isOpen?n.setState({alert:E.a.createElement(O.a,{showConfirm:!1},E.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},E.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times"})),E.a.createElement("h5",{style:{color:"black"}},Object(N.c)("buy_token_info")),0===e.remaining&&E.a.createElement("span",null," ",Object(N.c)("no_token_to_buy")),E.a.createElement("div",{className:"input-group mt-5"},E.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/R.t,e.remaining)}})),E.a.createElement("div",{className:"text-center mt-3 text-muted"},E.a.createElement("b",null,"= ",E.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0")," TRX")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(N.c)("participate"))))}):n.setState({alert:E.a.createElement(O.a,{info:!0,showConfirm:!1},E.a.createElement("div",{className:"token-sweet-alert"},E.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times"})),E.a.createElement("span",null,Object(N.c)("login_first")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(N.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,l=r.currentWallet,c=(r.wallet,a*(t/R.t));l.balance/R.t<c?n.setState({alert:E.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},E.a.createElement("div",{className:"mt-5 token-sweet-alert"},E.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),E.a.createElement("span",null,Object(N.c)("not_enough_trx_message")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(N.c)("confirm"))))}):n.setState({alert:E.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},E.a.createElement("div",{className:"mt-5 token-sweet-alert"},E.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),E.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(N.c)("buy_confirm_message_1")),E.a.createElement("span",null,a," ",e.name," ",Object(N.b)("for")," ",parseFloat((a*(t/R.t)).toFixed(6))," TRX?"),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(N.c)("confirm"))))})}},n.submit=function(){var e=Object(d.a)(m.a.mark(function e(t){var a,r,l,c,o,s,i,u,d,p,f,b,g,h,x;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,l=r.account,c=r.currentWallet,o=n.state.buyAmount,!F.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(i=n.props.tronWeb(),u=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"!==n.props.walletType.type){e.next=16;break}return e.next=10,i.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((o*a).toFixed(0)),n.props.walletType.address).catch(function(e){return!1});case 10:return d=e.sent,e.next=13,Object(I.b)(d,i);case 13:p=e.sent,f=p.result,s=f;case 16:if("ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=25;break}return e.next=19,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((o*a).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});case 19:return b=e.sent,e.next=22,Object(I.b)(b,u);case 22:g=e.sent,h=g.result,s=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,j.a.participateAsset(c.address,t.ownerAddress,t.id+"",parseInt((o*a).toFixed(0)))(l.key);case 34:x=e.sent,s=x.success;case 36:if(!s){e.next=41;break}return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),e.abrupt("return",!0);case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(d.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,a.account,r=a.intl,n.state.buyAmount,n.setState({alert:E.a.createElement(O.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:r.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,n.submit(t);case 5:if(!e.sent){e.next=9;break}n.setState({alert:E.a.createElement(O.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},E.a.createElement("div",{className:"mt-5 token-sweet-alert"},E.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),E.a.createElement("h5",{style:{color:"black"}},Object(N.c)("transaction")," ",Object(N.c)("confirm")),E.a.createElement("span",null,Object(N.c)("success_receive")," ",t.name," ",Object(N.c)("tokens")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(N.c)("OK"))))}),e.next=10;break;case 9:n.setState({alert:E.a.createElement(O.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(N.c)("fail_transaction"))});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl;return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:o()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return E.a.createElement("div",{className:"table-imgtext"},t.imgUrl?E.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==t.id?E.a.createElement("div",{className:"token-img-top"},E.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl}),E.a.createElement("i",null)):E.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl})):E.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},E.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1244)})),E.a.createElement("div",null,E.a.createElement("h5",null,E.a.createElement(C.f,{name:t.name,id:t.id,namePlus:t.name+" ("+t.abbr+")",address:t.ownerAddress})),E.a.createElement("p",{style:{wordBreak:"break-all"}},t.description)))}},{title:"ID",render:function(e,t,a){return E.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t,a){return E.a.createElement("div",null,E.a.createElement(v.c,{value:t.participated/R.t,maximumFractionDigits:1})," TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(t,a,n){var r=l()(t);return E.a.createElement("div",null,r&&e.formatMessage({id:r}))}},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,a){return null===e&&(e=0),E.a.createElement("div",null,E.a.createElement(v.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e,t,a){return E.a.createElement(v.a,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t,a){return t.isBlack?E.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},Object(N.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?E.a.createElement("span",{style:{fontWeight:"normal"}},Object(N.c)("finish")):t.startTime>new Date?E.a.createElement("span",{style:{fontWeight:"normal"}},Object(N.c)("not_started")):E.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(N.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var r=i()(Object(T.a)(e.location,"search"));return r.length>0&&(n.state.filter.name="".concat(r)),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,c=t.totalAll,o=this.props,s=(o.match,o.intl),i=this.customizedColumn(),u=s.formatMessage({id:"part_total"})+" "+l+"/"+c+" "+s.formatMessage({id:"part_pass"});return E.a.createElement("main",{className:"container header-overlap token_black"},n,r&&E.a.createElement("div",{className:"loading-style"},E.a.createElement(U.b,null)),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-12 table_pos"},l?E.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",E.a.createElement("span",null,E.a.createElement(S.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," \xa0\xa0  ",E.a.createElement(q.a,{to:"/exchange/trc10"},Object(N.b)("Trade_on_TRXMarket"),">")):"",E.a.createElement(_.a,{bordered:!0,loading:r,column:i,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(x.Component))||n;var L={loadTokens:w.b,login:M.t,reloadWallet:D.c};t.default=Object(k.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},L)(Object(v.h)(J))}}]);