webpackJsonp([19],{2301:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}function d(e){var t=e.valdata,a=(e.icon,e.children),l=u(e,["valdata","icon","children"]);return h.default.createElement("li",{className:"list-group-item p-1"},h.default.createElement("div",Object.assign({className:"media my-3 mx-3",key:t},l),h.default.createElement("div",{className:"media-body mb-0 lh-125 "},a)))}function o(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(444),m=l(i),f=a(445),v=l(f),E=a(158),p=l(E),N=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();a(2911),a(2912),a(1024);var b=a(0),h=l(b),y=a(18),k=(a(15),a(12)),x=a(20),w=a(21),_=a(23),g=a(14),A=30,O=function(e){function t(){r(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.listen=function(){},e.addEvent=function(t){t.id=e.id++,e.state.filters.indexOf(t.type)>-1&&e.setState(function(e,a){return{events:[t].concat(n(e.events.slice(0,A)))}})},e.id=0,e.state={events:[],filters:[],filterButtons:[{label:(0,g.tu)("transactions"),icon:"fa fa-exchange-alt",value:"transfer"},{label:(0,g.tu)("votes"),icon:"fa fa-bullhorn",value:"vote"},{label:(0,g.tu)("asset_participation"),icon:"fa fa-arrow-right",value:"asset-participate"},{label:(0,g.tu)("token_created"),icon:"fa fa-plus-circle",value:"asset-create"},{label:(0,g.tu)("witness"),icon:"fa fa-eye",value:"witness-create"},{label:(0,g.tu)("account"),icon:"fa fa-user",value:"account-name-changed"}]};var a=!0,l=!1,c=void 0;try{for(var u,d=e.state.filterButtons[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){var o=u.value;e.state.filters.push(o.value)}}catch(e){l=!0,c=e}finally{try{!a&&d.return&&d.return()}finally{if(l)throw c}}return e}return c(t,e),N(t,[{key:"componentDidMount",value:function(){this.listen()}},{key:"componentWillUnmount",value:function(){this.listener.close()}},{key:"buildRow",value:function(e,t){switch(e.type){case"transfer":return h.default.createElement(d,{key:e.id,icon:"fa-exchange-alt"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-xs-10 col-sm-5"},h.default.createElement("h5",{className:"card-title text-left"},h.default.createElement("b",null,(0,g.tu)("token_transfer"))),(0,g.tu)("from"),": ",h.default.createElement("span",{className:"position-absolute ml-2"},h.default.createElement(_.AddressLink,{address:e.transferFromAddress,truncate:!0}))),h.default.createElement("div",{className:"col-xs-4 col-sm-2 d-flex justify-content-center align-items-center"},h.default.createElement("img",{src:a(218)})),h.default.createElement("div",{className:"col-xs-10 col-sm-5"},h.default.createElement("div",null,(0,g.tu)("asset"),": ","TRX"===e.tokenName?h.default.createElement("b",null,h.default.createElement(k.FormattedNumber,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount/x.ONE_TRX})):h.default.createElement("b",null,h.default.createElement(k.FormattedNumber,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount}))," ",e.tokenName),h.default.createElement("div",null,(0,g.tu)("to"),": ",h.default.createElement("span",{className:"position-absolute ml-2"},h.default.createElement(_.AddressLink,{address:e.transferToAddress,truncate:!0}))))));case"vote":return h.default.createElement(d,{key:e.id,icon:"fa-bullhorn"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-xs-8 col-sm-5"},h.default.createElement("h5",{className:"card-title text-left"},h.default.createElement("b",null,(0,g.tu)("voting")))),h.default.createElement("div",{className:"col-xs-8 col-sm-2"}),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("votes"),": ",h.default.createElement("b",null,h.default.createElement(k.FormattedNumber,{value:e.votes}))),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("voter"),": ",h.default.createElement("span",{className:"position-absolute ml-2"},h.default.createElement(_.AddressLink,{address:e.voterAddress,truncate:!1}))),h.default.createElement("div",{className:"col-xs-8 col-sm-2"}),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("representatives"),": ",h.default.createElement("span",{className:"position-absolute ml-2"},h.default.createElement(_.AddressLink,{address:e.candidateAddress,truncate:!1})))));case"asset-participate":return h.default.createElement(d,{key:e.id,icon:"fa-arrow-right"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-xs-8 col-sm-5"},h.default.createElement("h5",{className:"card-title text-left"},h.default.createElement("b",null,(0,g.tu)("asset_participation")))),h.default.createElement("div",{className:"col-xs-8 col-sm-2"}),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("token_name"),": ",h.default.createElement("b",null,e.name)),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("owner_address"),": ",h.default.createElement("span",{className:"position-absolute ml-2"},h.default.createElement(_.AddressLink,{address:e.ownerAddress,truncate:!1}))),h.default.createElement("div",{className:"col-xs-8 col-sm-2"}),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("bought"),": ",e.amount," ",e.name)));case"asset-create":return h.default.createElement(d,{key:e.id,icon:"fa-plus-circle"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-xs-8 col-sm-5"},h.default.createElement("h5",{className:"card-title text-left"},h.default.createElement("b",null,(0,g.tu)("token_creation")))),h.default.createElement("div",{className:"col-xs-8 col-sm-2"}),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("token_name"),": ",h.default.createElement("b",null,h.default.createElement(_.TokenLink,{name:e.name}))),h.default.createElement("div",{className:"col-sm-9"},(0,g.tu)("address"),": ",h.default.createElement(_.AddressLink,{address:e.ownerAddress,truncate:!1})," ",(0,g.t)("created_token")," ",h.default.createElement(_.TokenLink,{name:e.name}))));case"witness-create":return h.default.createElement(d,{key:e.id,icon:"fa-user"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-xs-8 col-sm-5"},h.default.createElement("h5",{className:"card-title text-left"},h.default.createElement("b",null,(0,g.tu)("sr_candidature")))),h.default.createElement("div",{className:"col-xs-8 col-sm-2"}),h.default.createElement("div",{className:"col-xs-8 col-sm-5"},(0,g.tu)("address"),": ",h.default.createElement(_.AddressLink,{address:e.ownerAddress,truncate:!1})," ",(0,g.t)("applied_for_super_representative"))))}return h.default.createElement("div",{className:"media pt-3",key:"other-"+t},h.default.createElement("p",{className:"media-body pb-3 mb-0 small lh-125 "},"Unknown"))}},{key:"setFilter",value:function(e){this.setState({filters:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.events,l=t.filters,n=t.filterButtons;return h.default.createElement("main",{className:"container header-overlap page-live pb-3 token_black live"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-12 mb-4"},h.default.createElement("div",{className:"card"},h.default.createElement("div",{className:"card-body"},h.default.createElement("h5",{className:"card-title"},(0,g.tu)("filters")),h.default.createElement("form",{className:"pt-2"},h.default.createElement(p.default.Group,{style:{width:"100%"},onChange:this.setFilter.bind(this),defaultValue:l},h.default.createElement(m.default,{className:"d-flex"},n.map(function(e){return h.default.createElement(v.default,{className:"mr-5",key:e.value},h.default.createElement("i",{className:e.icon+" ml-2"}),h.default.createElement("span",{className:"ml-1 mr-1"},e.label),h.default.createElement(p.default,{value:e.value}))}))))))),h.default.createElement("div",{className:"col-md-12 mt-3 mt-md-0"},0===a.length?h.default.createElement("div",{className:"card"},h.default.createElement(w.TronLoader,null,(0,g.tu)("waiting_for_transactions"))):h.default.createElement("div",{className:"card"},h.default.createElement("ul",{className:"list-group list-group-flush"},a.map(function(t){return e.buildRow(t)}))))))}}]),t}(h.default.Component),j={};t.default=(0,y.connect)(o,j)(O)},2911:function(e,t,a){"use strict";a(38),a(1020)},2912:function(e,t,a){"use strict";a(38),a(1020)}});