webpackJsonp([12],{2254:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(l),u=(n(25),n(16)),p=function(e){function t(e){a(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={imgList:[{name:"Skye",img:"pic5.png"},{name:"Ariml",img:"pic2.png"},{name:"HarryXu",img:"pic1.png"},{name:"Lee",img:"pic6.png"},{name:"Zach",img:"pic4.png"},{name:"Vincent Lau",img:"pic7.png"}]},n}return i(t,e),r(t,[{key:"render",value:function(){var e=this.state.imgList;return o.default.createElement("main",{className:"container header-overlap news about"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-12"},o.default.createElement("div",{className:"card"},o.default.createElement("div",{className:"card-body"},o.default.createElement("div",{className:"about_item"},o.default.createElement("h3",null,(0,u.tu)("what_we_do")),o.default.createElement("p",null,(0,u.tu)("Transcan_desc"))),o.default.createElement("div",{className:"about_item"},o.default.createElement("h3",null,(0,u.tu)("Our_team")),o.default.createElement("p",null,(0,u.tu)("Team_desc")),o.default.createElement("div",{className:"about_img_list row"},e.map(function(e){return o.default.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 img_box",key:e.name},o.default.createElement("img",{className:"img_item",src:n(2866)("./"+e.img)}),o.default.createElement("div",{className:"img_desc"},o.default.createElement("p",null,e.name),o.default.createElement("p",{className:"desc_none"},(0,u.tu)(e.name))))}))),o.default.createElement("div",{className:"about_item"},o.default.createElement("h3",null,(0,u.tu)("User_many")),o.default.createElement("p",null,(0,u.tu)("User_many_desc"))))))))}}]),t}(l.Component);t.default=p},2359:function(e,t,n){e.exports=n.p+"static/media/pic1.218f21f2.png"},2360:function(e,t,n){e.exports=n.p+"static/media/pic2.6517f3f5.png"},2361:function(e,t,n){e.exports=n.p+"static/media/pic3.a5cce023.png"},2362:function(e,t,n){e.exports=n.p+"static/media/pic4.72962608.png"},2363:function(e,t,n){e.exports=n.p+"static/media/pic5.5ef86e2a.png"},2364:function(e,t,n){e.exports=n.p+"static/media/pic6.d1b911b4.png"},2365:function(e,t,n){e.exports=n.p+"static/media/pic7.948193dc.png"},2366:function(e,t,n){e.exports=n.p+"static/media/pic8.75aaa846.png"},2866:function(e,t,n){function a(e){return n(c(e))}function c(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./pic1.png":2359,"./pic2.png":2360,"./pic3.png":2361,"./pic4.png":2362,"./pic5.png":2363,"./pic6.png":2364,"./pic7.png":2365,"./pic8.png":2366};a.keys=function(){return Object.keys(i)},a.resolve=c,e.exports=a,a.id=2866}});