(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1593:function(e,t,a){e.exports=a(1866)},1866:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),s=a.n(l),c=a(25);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p=a(3),b=function(e){function t(e){var a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=d(t).call(this,e),a=!r||"object"!==typeof r&&"function"!==typeof r?f(n):r,h(f(f(a)),"handleClick",function(e){var t=a.state.checked,n=a.props.onClick,r=!t;a.setChecked(r,e),n&&n(r,e)}),h(f(f(a)),"handleKeyDown",function(e){37===e.keyCode?a.setChecked(!1,e):39===e.keyCode&&a.setChecked(!0,e)}),h(f(f(a)),"handleMouseUp",function(e){var t=a.props.onMouseUp;a.node&&a.node.blur(),t&&t(e)}),h(f(f(a)),"saveNode",function(e){a.node=e});var l=!1;return l="checked"in e?!!e.checked:!!e.defaultChecked,a.state={checked:l},a}var a,l,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n["Component"]),a=t,s=[{key:"getDerivedStateFromProps",value:function(e){var t={},a=e.checked;return"checked"in e&&(t.checked=!!a),t}}],(l=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,a=e.disabled;t&&!a&&this.focus()}},{key:"setChecked",value:function(e,t){var a=this.props,n=a.disabled,r=a.onChange;n||("checked"in this.props||this.setState({checked:e}),r&&r(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.className,n=t.prefixCls,l=t.disabled,s=t.loadingIcon,c=t.checkedChildren,u=t.unCheckedChildren,d=i(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),m=this.state.checked,f=p((h(e={},a,!!a),h(e,n,!0),h(e,"".concat(n,"-checked"),m),h(e,"".concat(n,"-disabled"),l),e));return r.a.createElement("button",o({},d,{type:"button",role:"switch","aria-checked":m,disabled:l,className:f,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),s,r.a.createElement("span",{className:"".concat(n,"-inner")},m?c:u))}}])&&u(a.prototype,l),s&&u(a,s),t}();b.propTypes={className:s.a.string,prefixCls:s.a.string,disabled:s.a.bool,checkedChildren:s.a.any,unCheckedChildren:s.a.any,onChange:s.a.func,onMouseUp:s.a.func,onClick:s.a.func,tabIndex:s.a.number,checked:s.a.bool,defaultChecked:s.a.bool,autoFocus:s.a.bool,loadingIcon:s.a.node},b.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c.polyfill)(b),t.default=b},1869:function(e,t,a){"use strict";var n=a(723),r=a.n(n),l=a(37),s=a(14),c=a(13),o=a(21),i=a(20),u=a(22),d=a(0),m=a.n(d),f=a(10),h=a(65),p=a.n(h),b=a(97),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).disabledStartDate=function(e){var t=a.state.endValue;return e&&t?e.valueOf()>t.valueOf()||e.valueOf()<p()([2018,5,25]).valueOf():e.valueOf()>p()().valueOf()||e.valueOf()<p()([2018,5,25]).valueOf()},a.disabledEndDate=function(e){var t=a.state.startValue;return e&&t&&e.valueOf()<=t.valueOf()||e.valueOf()>p()().valueOf()},a.onChange=function(e,t){a.setState(Object(l.a)({},e,t))},a.onStartChange=function(e){a.onChange("startValue",e)},a.onEndChange=function(e){a.onChange("endValue",e)},a.handleStartOpenChange=function(e){e||a.setState({endOpen:!0})},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a.handleOk=function(e,t){var n=a.props,r=n.onDateOk,l=n.intl;e?t?r(e,t):b.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"select_end_time"})):b.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"select_start_time"}))},a.state={startValue:p()([2018,5,25]).startOf("day"),endValue:p()(),endOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.startValue,n=t.endValue,l=t.endOpen,s=this.props.dateClass,c=void 0===s?"date-range-box":s;return m.a.createElement("div",{className:c},m.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:a,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange}),"\xa0\xa0~\xa0\xa0",m.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"End",onChange:this.onEndChange,open:l,onOpenChange:this.handleEndOpenChange,onOk:function(){return e.handleOk(a,n)}}))}}]),t}(m.a.Component);t.a=Object(f.h)(v)},3547:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(5),s=a(14),c=a(13),o=a(21),i=a(20),u=a(22),d=a(0),m=a.n(d),f=a(431),h=a(31),p=a(1607),b=a(1617),v=a(461),g=a(19),k=a(4),O=a(10),E=a(26),y=a(733),j=a(295),w=a(103),N=a(1946),C=a(30),x=a(294),S=a.n(x),D=a(75),T=a.n(D),M=a(37),P=a(428),I=a(1660),B=a(66),z=a(1945),H=a(1703),F=a(1869),A=a(65),R=a.n(A),V=a(299),Y=a(1683);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(M.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L,X=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).onChange=function(e,t){n.setState({page:e,pageSize:t},function(){n.load(e,t)})},n.load=function(){var e=Object(l.a)(r.a.mark(function e(t,a){var l,s,c,o,i,u,d,m,f,h,p,b,v,k,O;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.props,c=s.filter,o=s.istrc20,void 0!==o&&o,i=n.state,u=i.showTotal,d=i.hideSmallCurrency,m=i.tokenName,n.setState({loading:!0,page:t,pageSize:a}),p=0,e.next=6,g.a.getTransfers(K({sort:"-timestamp",limit:a,start:(t-1)*a,count:!!u||null,total:n.state.total,token:m,start_timestamp:n.start,end_timestamp:n.end},c));case 6:b=e.sent,v=b.transfers,k=b.total,O=b.rangeTotal,f=v,h=k,p=O,Object(B.a)(f,"tokenName","amount").map(function(e){c.address?(e.fromtip=!(e.transferFromAddress==c.address),e.totip=!(e.transferToAddress==c.address)):(e.fromtip=!0,e.totip=!0)}),l=d?_(v).filter(function(e){return"_"===e.tokenName||"TRX"===T()(e.tokenName)}).value():v,n.setState({page:t,transfers:l,total:h,rangeTotal:p,loading:!1});case 17:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),n.handleSwitch=function(e){var t=n.state;t.page,t.pageSize;e?n.setState({hideSmallCurrency:e,tokenName:"_"},function(){n.load(1,20)}):n.setState({hideSmallCurrency:e,tokenName:""},function(){n.load(1,20)})},n.customizedColumn=function(){var e=n.props.intl;return[{title:S()(e.formatMessage({id:"hash"})),dataIndex:"transactionHash",key:"transactionHash",align:"left",width:"20%",className:"ant_table",render:function(e,t,a){return m.a.createElement(C.a,null,m.a.createElement(E.h,{hash:e},e))}},{title:S()(e.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",align:"left",className:"ant_table",width:"14%",render:function(e,t,a){return m.a.createElement(Y.a,{time:e})}},{title:S()(e.formatMessage({id:"from"})),dataIndex:"transferFromAddress",key:"transferFromAddress",align:"left",className:"ant_table",render:function(e,t,a){return t.fromtip?m.a.createElement(E.a,{address:e},e):m.a.createElement(C.b,null,e)}},{title:"",className:"ant_table",width:"30px",render:function(e,t,n){return m.a.createElement("img",{src:a(1743)})}},{title:S()(e.formatMessage({id:"to"})),dataIndex:"transferToAddress",key:"transferToAddress",align:"left",className:"ant_table",render:function(e,t,a){return t.totip?m.a.createElement(E.a,{address:e},e):m.a.createElement(C.b,null,e)}},{title:S()(e.formatMessage({id:"status"})),dataIndex:"confirmed",key:"confirmed",align:"left",className:"ant_table",width:"14%",render:function(e,t,n){return e?m.a.createElement("span",null,m.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1699)})," ",Object(k.c)("full_node_version_confirmed")):m.a.createElement("span",null,m.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1700)})," ",Object(k.c)("full_node_version_unconfirmed"))}},{title:S()(e.formatMessage({id:"amount"})),dataIndex:"amount",key:"amount",align:"right",className:"ant_table _text_nowrap",render:function(e,t,a){return m.a.createElement(V.a,{value:t})}}]},n.start=R()([2018,5,25]).startOf("day").valueOf(),n.end=R()().valueOf(),n.state={filter:{},transfers:[],page:1,total:0,pageSize:20,showTotal:!1!==e.showTotal,emptyState:e.emptyState,autoRefresh:e.autoRefresh||!1,hideSmallCurrency:!1,tokenName:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.page,n=t.pageSize;this.load(a,n),!1!==this.state.autoRefresh&&this.props.setInterval(function(){return e.load(a,n)},this.state.autoRefresh)}},{key:"onDateOk",value:function(e,t){this.start=e.valueOf(),this.end=t.valueOf();var a=this.state,n=a.page,r=a.pageSize;this.load(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.transfers,n=(t.page,t.total),r=t.rangeTotal,l=void 0===r?0:r,s=(t.pageSize,t.loading),c=(t.emptyState,this.customizedColumn()),o=this.props,i=o.intl,u=(o.istrc20,o.address),d=void 0!==u&&u,f=(i.formatMessage({id:"view_total"}),i.formatMessage({id:"transfers_unit"}),{emptyText:i.formatMessage({id:"no_transfers"})});return m.a.createElement("div",{className:"token_black table_pos"},s&&m.a.createElement("div",{className:"loading-style"},m.a.createElement(w.b,null)),a.length?m.a.createElement("div",{className:"d-flex justify-content-between",style:{left:"auto"}},m.a.createElement(H.a,{total:n,rangeTotal:l,typeText:"transfers_unit",common:!d,divClass:"table_pos_info_addr"}),m.a.createElement("div",{className:"table_pos_switch d-md-block table_pos_switch_addr table_pos_switch_addr_transfers"},m.a.createElement(z.a,{handleSwitch:this.handleSwitch,text:"only_TRX_transfers",isHide:!1})),d?m.a.createElement("div",{className:"transactions-rangePicker table_pos_picker transfers_pos_picker",style:{width:"360px"}},m.a.createElement(F.a,{onDateOk:function(t,a){return e.onDateOk(t,a)},dateClass:"date-range-box-address-transfer"})):""):m.a.createElement("div",{className:"d-flex justify-content-between",style:{left:"auto"}},m.a.createElement(H.a,{total:n,rangeTotal:l,typeText:"transfers_unit",common:!d,divClass:"table_pos_info_addr2"}),m.a.createElement("div",{className:"table_pos_switch d-md-block table_pos_switch_addr2"},m.a.createElement(z.a,{handleSwitch:this.handleSwitch,text:"only_TRX_transfers",isHide:!1})),d?m.a.createElement("div",{className:"transactions-rangePicker table_pos_picker",style:{width:"360px"}},m.a.createElement(F.a,{onDateOk:function(t,a){return e.onDateOk(t,a)},dateClass:"date-range-box-address-nodata"})):""),s||0!==a.length?m.a.createElement(I.a,{bordered:!0,loading:s,column:c,data:a,total:n,locale:f,addr:"address",transfers:"address",onPageChange:function(t,a){e.onChange(t,a)}}):m.a.createElement("div",{className:"p-3 text-center no-data"},Object(k.c)("no_transfers")))}}]),t}(m.a.Component),J=Object(P.a)(Object(O.h)(X)),W=a(11),q=null,G=Object(O.h)(L=function(e){function t(e){var a;e.match;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this))).state={loading:!0,notFound:!1,block:{number:-1,transfers:[]},tabs:{transactions:{id:"transactions",icon:"fa fa-exchange-alt",path:"",label:m.a.createElement("span",null,Object(k.c)("transactions")),cmp:function(){return m.a.createElement(w.b,null)}},transfers:{id:"transfers",icon:"fa fa-handshake",path:"/transfers",label:m.a.createElement("span",null,Object(k.c)("transfers")),cmp:function(){return m.a.createElement(w.b,null)}}},confirmedNum:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadBlock(e.params.id)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.id!==e.match.params.id&&this.loadBlock(t.params.id)}},{key:"componentWillUnmount",value:function(){clearInterval(q)}},{key:"loadBlock",value:function(){var e=Object(l.a)(r.a.mark(function e(t){var a,n,s,c=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loading:!0,block:{number:t}}),isNaN(t)){e.next=7;break}return e.next=4,g.a.getBlockByNumber(t);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,g.a.getBlockByHash(t);case 9:a=e.sent;case 10:if(a){e.next=13;break}return this.setState({notFound:!0}),e.abrupt("return");case 13:if(!a.number){e.next=20;break}return e.next=16,g.a.getBlockByNumber(a.number);case 16:n=e.sent,s=n&&n.confirmations,this.setState({confirmedNum:s}),s<19?q=setInterval(Object(l.a)(r.a.mark(function e(){var n,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.getBlockByNumber(a.number);case 2:if(n=e.sent,l=n&&n.confirmations,c.setState({confirmedNum:l}),!(l>18)){e.next=11;break}return e.next=8,g.a.getBlockByNumber(t);case 8:a=e.sent,c.setState({block:a}),clearInterval(q);case 11:case"end":return e.stop()}},e)})),3e3):clearInterval(q);case 20:this.setState({loading:!1,block:a,totalTransactions:a.nrOfTrx,tabs:{transactions:{id:"transactions",icon:"fa fa-handshake",path:"",label:m.a.createElement("span",null,Object(k.c)("transactions")),cmp:function(){return m.a.createElement(N.a,{filter:{block:a.number},isBlock:!0})}},transfers:{id:"transfers",icon:"fa fa-exchange-alt",path:"/transfers",label:m.a.createElement("span",null,Object(k.c)("transfers")),cmp:function(){return m.a.createElement(J,{filter:{block:a.number}})}}}});case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.block,a=e.tabs,n=e.loading,r=e.totalTransactions,l=e.notFound,s=e.confirmedNum,c=this.props,o=(c.activeLanguage,c.match),i=c.intl;return l?m.a.createElement("main",{className:"container header-overlap"},m.a.createElement(W.a,{color:"warning",className:"text-center"},Object(k.c)("block_not_found"))):m.a.createElement("main",{className:"container header-overlap"},n?m.a.createElement("div",{className:"card"},m.a.createElement(w.b,null,Object(k.c)("loading_block")," ",t.number)):m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12 "},m.a.createElement("div",{className:"card list-style-header"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h5",{className:"card-title m-0"},m.a.createElement("i",{className:"fa fa-cube mr-2"}),Object(k.c)("block")," #",t.number)),m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table table-hover m-0"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,m.a.createElement("span",null,Object(k.c)("status"))," ",m.a.createElement(j.a,{placement:"right",text:i.formatMessage({id:"full_node_version_confirmed_tips"})}),":"),m.a.createElement("td",null,t.confirmed?m.a.createElement("div",null,m.a.createElement("span",{className:"badge badge-success text-uppercase"},Object(k.c)("full_node_version_confirmed")," "),s>200?m.a.createElement("span",{className:"block-status-tag"},Object(k.c)("block_detail_confirmed_over_show")):m.a.createElement("span",{className:"block-status-tag"},m.a.createElement(O.b,{id:"block_detail_confirmed_show",values:{num:s}}))):m.a.createElement("div",null,m.a.createElement("span",{className:"badge badge-confirmed text-uppercase"},Object(k.c)("full_node_version_unconfirmed")),s>200?m.a.createElement("span",{className:"block-status-tag"},Object(k.c)("block_detail_confirmed_over_show")):m.a.createElement("span",{className:"block-status-tag"},m.a.createElement(O.b,{id:"block_detail_confirmed_show",values:{num:s}}))))),m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("hash"),":"),m.a.createElement("td",null,m.a.createElement(C.a,null,t.hash," ",m.a.createElement(y.a,{text:t.hash,className:"ml-1"})))),m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("height"),":"),m.a.createElement("td",null,t.number)),0!==t.timestamp&&m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("time"),":"),m.a.createElement("td",null,m.a.createElement(O.a,{value:t.timestamp}),"\xa0",m.a.createElement(O.e,{value:t.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0")),m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("transactions"),":"),m.a.createElement("td",null,r," Txns")),m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("parenthash"),":"),m.a.createElement("td",null,m.a.createElement(C.a,null,m.a.createElement(E.b,{number:t.number-1},t.parentHash),m.a.createElement(y.a,{text:t.parentHash,className:"ml-1"})))),""!==t.witnessAddress&&m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("produced_by"),":"),m.a.createElement("td",null,m.a.createElement(C.a,null,m.a.createElement(E.a,{address:t.witnessAddress,includeCopy:!0},t.witnessName)))),m.a.createElement("tr",null,m.a.createElement("th",null,Object(k.c)("size"),":"),m.a.createElement("td",null,m.a.createElement(O.c,{value:t.size}),"\xa0",Object(k.c)("bytes"))))))),m.a.createElement("div",{className:"card mt-3 list-style-body"},m.a.createElement("div",{className:"card-header list-style-body__header"},m.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},Object.values(a).map(function(e){return m.a.createElement("li",{key:e.id,className:"nav-item"},m.a.createElement(p.a,{exact:!0,to:o.url+e.path,className:"nav-link text-dark"},e.label))}))),m.a.createElement("div",{className:"card-body p-0 list-style-body__body"},m.a.createElement(b.a,null,Object.values(a).map(function(e){return m.a.createElement(v.a,{key:e.id,exact:!0,path:o.url+e.path,render:function(a){return m.a.createElement(e.cmp,{block:t})}})})))))))}}]),t}(m.a.Component))||L;var Q={loadTokens:f.b};t.default=Object(h.connect)(function(e){return{block:{},activeLanguage:e.app.activeLanguage}},Q)(G)}}]);