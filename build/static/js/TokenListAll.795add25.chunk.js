(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1132:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(14),r=a(15),l=a(24),c=a(23),o=a(25),s=a(0),i=a.n(s),d=a(154),m=a(12),u=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={open:!1,id:Object(d.a)(24)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,l=r.text,c=r.placement,o=r.testSecond,s=void 0===o?"":o,d=r.className,p=void 0===d?"":d,g=r.info,b=void 0===g?"":g;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(m.h,{placement:c,isOpen:a,target:n,className:p,innerClassName:"w-100"},l?Object(u.b)(l):"",s?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(u.b)(s)):"",b||""))}}]),t}(i.a.Component)},1244:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},3262:function(e,t,a){"use strict";a.r(t);var n,r=a(1153),l=a.n(r),c=a(1436),o=a.n(c),s=a(84),i=a(205),d=a.n(i),m=a(2),u=a.n(m),p=a(7),g=a(5),b=a(14),h=a(15),k=a(24),f=a(23),x=a(25),v=a(0),E=a.n(v),T=a(11),O=a(3),N=(a(17),a(19)),_=a(1132),I=a(9),j=a(82),y=a(22),w=a.n(y),A=a(12),S=a(155),R=a(51),M=Object(S.a)(n=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(k.a)(this,Object(f.a)(t).call(this,e))).loadPage=Object(g.a)(u.a.mark(function e(){var t,a,r,l,c,o,s,i,d,m,g,b,h=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>0&&void 0!==h[0]?h[0]:1,a=h.length>1&&void 0!==h[1]?h[1]:20,n.setState({loading:!0}),r=n.state,l=r.filter,c=r.countTop,e.next=6,w.a.get(I.e+"/api/tokens/overview",{params:Object(p.a)({start:(t-1)*a,limit:a},l)});case 6:return o=e.sent,s=o.data,i=s.tokens,d=s.total,m=s.totalAll,g=0,b=0,i.map(function(e,r){e.isTop?(b+=1,n.setState({countTop:b},function(){e.index=g+1+(t-1)*a-c})):(e.index=1==t?g+1+(t-1)*a:g+1+(t-1)*a-c,g++),e.marketcap=e.marketcap||0,e.nrOfTokenHolders=e.nrOfTokenHolders||"-",e.volume24hInTrx=e.volume24hInTrx||0,e.priceInTrx=e.priceInTrx||"-",void 0!=e.gain?(e.gain=1e4*e.gain,e.gain<0&&(e.color="col-red",e.gain=parseInt(e.gain)/100+"%"),e.gain>0&&(e.color="col-green",e.gain="+"+parseInt(e.gain)/100+"%"),0==e.gain&&(e.color="col-green",e.gain=parseInt(e.gain)/100+"%")):e.gain="-"}),n.setState({loading:!1,tokens:i,pagination:Object(p.a)({},n.state.pagination,{total:d}),total:d,totalAll:m}),e.abrupt("return",d);case 16:case"end":return e.stop()}},e)})),n.onChange=function(e){n.setState({filter:Object(p.a)({},n.state.filter,{order:"desc",sort:"volume24hInTrx",filter:e.target.value,order_current:"descend"})},function(){return n.loadPage()})},n.handleTableChange=function(e,t,a){var r=Object(p.a)({},n.state.pagination);r.current=e.current,r.pageSize=e.pageSize;n.setState({pagination:r,filter:Object(p.a)({},n.state.filter,{sort:{nrOfTokenHolders:"holderCount",gain:"gain",priceInTrx:"priceInTrx",volume24hInTrx:"volume24hInTrx",marketcap:"marketcap"}[a.columnKey]||"volume24hInTrx",order:{descend:"desc",ascend:"asc"}[a.order]||"desc",order_current:a.order})},function(){return n.loadPage(r.current,r.pageSize)})},n.customizedColumn=function(){var e=n.state.filter,t=n.props.intl;return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,t,a){return E.a.createElement("span",null,t.isTop?E.a.createElement("div",null,E.a.createElement("span",{className:"starbeat"},E.a.createElement("i",{className:"fas fa-star"})," "),E.a.createElement("span",{className:"star-tip"})):E.a.createElement("span",null,e))}},{title:d()(t.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return E.a.createElement("div",{className:"table-imgtext"},t.imgUrl?E.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},"USDT"==t.abbr||"BTT"==t.abbr||"WIN"==t.abbr?E.a.createElement("div",{className:"token-img-top"},E.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl}),E.a.createElement("i",null)):E.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl})):E.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},E.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1244)})),E.a.createElement("div",null,E.a.createElement("h5",null,t.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==t.contractAddress?E.a.createElement("a",{href:"javascript:;"},t.name+" ("+t.abbr+")"):E.a.createElement("div",null,"trc10"==t.tokenType&&E.a.createElement(N.f,{name:t.name,id:t.tokenId,namePlus:t.name+" ("+t.abbr+")"}),"trc20"==t.tokenType&&E.a.createElement(N.g,{name:t.name,namePlus:t.name+" ("+t.abbr+")",address:t.contractAddress}))),E.a.createElement("p",{style:{wordBreak:"break-all"}},t.description)))}},{title:t.formatMessage({id:"price"})+" (TRX)",dataIndex:"priceInTrx",key:"priceInTrx",sorter:!0,sortOrder:"priceInTrx"===e.sort&&e.order_current,align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"gain"}),sorter:!0,sortOrder:"gain"===e.sort&&e.order_current,dataIndex:"gain",key:"gain",render:function(e,t,a){return E.a.createElement("div",{className:t.color},t.gain)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"volume_24_trx"}),dataIndex:"volume24hInTrx",key:"volume24hInTrx",align:"center",className:"ant_table",sorter:!0,sortOrder:"volume24hInTrx"===e.sort&&e.order_current,render:function(e,t,a){return e>0?E.a.createElement(T.c,{value:e,maximumFractionDigits:2}):"-"}},{title:t.formatMessage({id:"market_capitalization_trx"}),dataIndex:"marketcap",key:"marketcap",sorter:!0,sortOrder:"marketcap"===e.sort&&e.order_current,render:function(e,t,a){return e>0?E.a.createElement(T.c,{value:e}):"-"},align:"center",className:"ant_table _text_nowrap"},{title:t.formatMessage({id:"token_holders"}),dataIndex:"nrOfTokenHolders",key:"nrOfTokenHolders",sorter:!0,sortOrder:"holderCount"===e.sort&&e.order_current,render:function(e,t,a){return e>0?E.a.createElement(T.c,{value:e}):"-"},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:t.formatMessage({id:"trc20_cur_order_header_action"}),dataIndex:"abbr",key:"abbr",width:"10%",render:function(e,t,a){return E.a.createElement("div",null,"trc10"==t.tokenType&&E.a.createElement(R.a,{to:"/token/".concat(encodeURI(t.tokenId)),className:"token-details btn"},Object(O.c)("details")),"trc20"==t.tokenType&&E.a.createElement(R.a,{to:"/token20/".concat(encodeURI(t.contractAddress)),className:"token-details btn"},Object(O.c)("details")),t.extra?E.a.createElement("a",{href:t.extra.url,className:"token-active-details btn mt-2"},Object(O.c)(t.extra.desc)):t.pairId?E.a.createElement("a",{href:"https://trx.market/exchange?id=".concat(t.pairId),className:"token-details btn mt-2",target:"_blank"}," ",Object(O.c)("token_trade")):E.a.createElement("div",null,E.a.createElement("a",{href:"javascript:;",className:"token-disabled-exchange btn mt-2",id:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,onMouseOver:function(e,a){return n.setState(Object(s.a)({},t.abbr+t.tokenId,!0))},onMouseOut:function(){return n.setState(Object(s.a)({},t.abbr+t.tokenId,!1))}},Object(O.c)("token_trade")),E.a.createElement(A.h,{placement:"top",target:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,isOpen:n.state[t.abbr+t.tokenId]}," ",E.a.createElement("span",{className:"text-capitalize"},Object(O.c)("token_does_not_support_exchange")))))},align:"center",className:"ant_table d-sm-table-cell token-list-action"}]},n.state={tokens:[],loading:!1,total:0,totalAll:0,countTop:0,filter:{order:"desc",filter:"all",sort:"volume24hInTrx",order_current:"descend"},pagination:{showQuickJumper:!0,position:"both",showSizeChanger:!0,defaultPageSize:20,total:0}},n}return Object(x.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"render",value:function(){var e=this.state,t=e.tokens,a=e.alert,n=e.loading,r=e.total,c=e.totalAll,s=e.filter,i=this.props,d=(i.match,i.intl),m=this.customizedColumn(),u=d.formatMessage({id:"part_total"})+" "+r+"/"+c+" "+d.formatMessage({id:"part_pass"}),p="https://trx.market/launchBase?utm_source=TS3";return"zh"==d.locale&&(p="https://trx.market/zh/launchBase?utm_source=TS3"),E.a.createElement("main",{className:"container header-overlap token_black"},a,n&&E.a.createElement("div",{className:"loading-style"},E.a.createElement(j.b,null)),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg pt-5 pt-md-0"},r?E.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},E.a.createElement("div",null,u," ",E.a.createElement("span",null,E.a.createElement(_.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," \xa0\xa0",E.a.createElement("a",{href:"https://trx.market",target:"_blank"},Object(O.b)("Trade_on_TRXMarket"),">"))):"",E.a.createElement("div",{className:"d-md-flex apply-trc20 apply-all align-items-center"},E.a.createElement("div",{className:"d-flex align-items-center mb-2 mb-md-0"},E.a.createElement(o.a.Group,{size:"Small",value:s.filter,onChange:this.onChange},E.a.createElement(o.a.Button,{value:"all"},Object(O.c)("all")),E.a.createElement(o.a.Button,{value:"trc10"},"TRC10"),E.a.createElement(o.a.Button,{value:"trc20"},"TRC20")))),E.a.createElement(l.a,{columns:m,rowKey:function(e,t){return t},dataSource:t,loading:n,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.isTop)return"trc20-star-ad"},onRow:function(e){return{onClick:function(t){e.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==e.contractAddress&&window.open(p)}}}}))))}}]),t}(v.Component))||n;t.default=Object(T.h)(M)}}]);