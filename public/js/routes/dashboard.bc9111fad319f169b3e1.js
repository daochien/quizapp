webpackJsonp([1],{"V/AM":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".dropdown-item{cursor:pointer}",""])},XyMi:function(t,e,a){"use strict";e.a=function(t,e,a,s,i,n,r,o){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var c,d="function"==typeof t?t.options:t;e&&(d.render=e,d.staticRenderFns=a,d._compiled=!0);s&&(d.functional=!0);n&&(d._scopeId=n);r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i);if(c)if(d.functional){d._injectStyles=c;var v=d.render;d.render=function(t,e){return c.call(e),v(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:d}}},YPds:function(t,e,a){var s=a("V/AM");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("rjj0").default)("421f18cf",s,!0,{})},ZfbF:function(t,e,a){var s=a("mMlE");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("rjj0").default)("c7fefadc",s,!0,{})},ezBe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("En79"),i=a.n(s),n=a("vknp"),r=a("UwCj"),o=a("NYxO");function l(t,e,a,s,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,i)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){v(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={data:function(){return{showSideBarMobile:!1}},computed:d({},Object(o.b)("user",["getName","getEmail"])),methods:d({},Object(o.c)("sidebar",["set_active"]),{showMenuMobile:function(){this.showSideBarMobile=!this.showSideBarMobile,this.set_active(this.showSideBarMobile)},signOut:function(){var t,e=(t=i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(n.b)();case 3:this.$store.commit("user/set_is_login",!1),Object(r.b)(),this.$router.push({name:"Login"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}),function(){var e=this,a=arguments;return new Promise(function(s,i){var n=t.apply(e,a);function r(t){l(n,s,i,r,o,"next",t)}function o(t){l(n,s,i,r,o,"throw",t)}r(void 0)})});return function(){return e.apply(this,arguments)}}()})},u=a("XyMi");var m=function(t){a("YPds")},f=Object(u.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-menu-wrapper d-flex align-items-center"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("ul",{staticClass:"navbar-nav ml-auto"},[t._m(3),t._v(" "),t._m(4),t._v(" "),a("li",{staticClass:"nav-item dropdown d-none d-xl-inline-block user-dropdown"},[t._m(5),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right navbar-dropdown",attrs:{"aria-labelledby":"UserDropdown"}},[a("div",{staticClass:"dropdown-header text-center"},[a("img",{staticClass:"img-md rounded-circle",attrs:{src:"/admin/assets/images/faces/face8.jpg",alt:"Profile image"}}),t._v(" "),a("p",{staticClass:"mb-1 mt-3 font-weight-semibold"},[t._v(t._s(t.getName))]),t._v(" "),a("p",{staticClass:"font-weight-light text-muted mb-0"},[t._v(t._s(t.getEmail))])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("a",{staticClass:"dropdown-item",on:{click:function(e){return t.signOut()}}},[t._v("Sign Out"),a("i",{staticClass:"dropdown-item-icon ti-power-off"})])])])]),t._v(" "),a("button",{staticClass:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",attrs:{type:"button","data-toggle":"offcanvas"},on:{click:function(e){return t.showMenuMobile()}}},[a("span",{staticClass:"mdi mdi-menu"})])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"},[e("a",{staticClass:"navbar-brand brand-logo"},[e("img",{attrs:{src:"/admin/assets/images/logo.svg",alt:"logo"}})]),this._v(" "),e("a",{staticClass:"navbar-brand brand-logo-mini",attrs:{href:"index.html"}},[e("img",{attrs:{src:"/admin/assets/images/logo-mini.svg",alt:"logo"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item font-weight-semibold d-none d-lg-block"},[t._v("Help : +050 2992 709")]),t._v(" "),a("li",{staticClass:"nav-item dropdown language-dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle px-2 d-flex align-items-center",attrs:{id:"LanguageDropdown",href:"#","data-toggle":"dropdown","aria-expanded":"false"}},[a("div",{staticClass:"d-inline-flex mr-0 mr-md-3"},[a("div",{staticClass:"flag-icon-holder"},[a("i",{staticClass:"flag-icon flag-icon-us"})])]),t._v(" "),a("span",{staticClass:"profile-text font-weight-medium d-none d-md-block"},[t._v("English")])]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left navbar-dropdown py-2",attrs:{"aria-labelledby":"LanguageDropdown"}},[a("a",{staticClass:"dropdown-item"},[a("div",{staticClass:"flag-icon-holder"},[a("i",{staticClass:"flag-icon flag-icon-us"})]),t._v("English\n            ")]),t._v(" "),a("a",{staticClass:"dropdown-item"},[a("div",{staticClass:"flag-icon-holder"},[a("i",{staticClass:"flag-icon flag-icon-fr"})]),t._v("French\n            ")]),t._v(" "),a("a",{staticClass:"dropdown-item"},[a("div",{staticClass:"flag-icon-holder"},[a("i",{staticClass:"flag-icon flag-icon-ae"})]),t._v("Arabic\n            ")]),t._v(" "),a("a",{staticClass:"dropdown-item"},[a("div",{staticClass:"flag-icon-holder"},[a("i",{staticClass:"flag-icon flag-icon-ru"})]),t._v("Russian\n            ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"ml-auto search-form d-none d-md-block",attrs:{action:"#"}},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Search Here"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link count-indicator",attrs:{id:"messageDropdown",href:"#","data-toggle":"dropdown","aria-expanded":"false"}},[a("i",{staticClass:"mdi mdi-bell-outline"}),t._v(" "),a("span",{staticClass:"count"},[t._v("7")])]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0",attrs:{"aria-labelledby":"messageDropdown"}},[a("a",{staticClass:"dropdown-item py-3"},[a("p",{staticClass:"mb-0 font-weight-medium float-left"},[t._v("You have 7 unread mails ")]),t._v(" "),a("span",{staticClass:"badge badge-pill badge-primary float-right"},[t._v("View all")])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item preview-item"},[a("div",{staticClass:"preview-thumbnail"},[a("img",{staticClass:"img-sm profile-pic",attrs:{src:"/admin/assets/images/faces/face10.jpg",alt:"image"}})]),t._v(" "),a("div",{staticClass:"preview-item-content flex-grow py-2"},[a("p",{staticClass:"preview-subject ellipsis font-weight-medium text-dark"},[t._v("Marian Garner ")]),t._v(" "),a("p",{staticClass:"font-weight-light small-text"},[t._v(" The meeting is cancelled ")])])]),t._v(" "),a("a",{staticClass:"dropdown-item preview-item"},[a("div",{staticClass:"preview-thumbnail"},[a("img",{staticClass:"img-sm profile-pic",attrs:{src:"/admin/assets/images/faces/face12.jpg",alt:"image"}})]),t._v(" "),a("div",{staticClass:"preview-item-content flex-grow py-2"},[a("p",{staticClass:"preview-subject ellipsis font-weight-medium text-dark"},[t._v("David Grey ")]),t._v(" "),a("p",{staticClass:"font-weight-light small-text"},[t._v(" The meeting is cancelled ")])])]),t._v(" "),a("a",{staticClass:"dropdown-item preview-item"},[a("div",{staticClass:"preview-thumbnail"},[a("img",{staticClass:"img-sm profile-pic",attrs:{src:"/admin/assets/images/faces/face1.jpg",alt:"image"}})]),t._v(" "),a("div",{staticClass:"preview-item-content flex-grow py-2"},[a("p",{staticClass:"preview-subject ellipsis font-weight-medium text-dark"},[t._v("Travis Jenkins ")]),t._v(" "),a("p",{staticClass:"font-weight-light small-text"},[t._v(" The meeting is cancelled ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link count-indicator",attrs:{id:"notificationDropdown",href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"mdi mdi-email-outline"}),t._v(" "),a("span",{staticClass:"count bg-success"},[t._v("3")])]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0",attrs:{"aria-labelledby":"notificationDropdown"}},[a("a",{staticClass:"dropdown-item py-3 border-bottom"},[a("p",{staticClass:"mb-0 font-weight-medium float-left"},[t._v("You have 4 new notifications ")]),t._v(" "),a("span",{staticClass:"badge badge-pill badge-primary float-right"},[t._v("View all")])]),t._v(" "),a("a",{staticClass:"dropdown-item preview-item py-3"},[a("div",{staticClass:"preview-thumbnail"},[a("i",{staticClass:"mdi mdi-alert m-auto text-primary"})]),t._v(" "),a("div",{staticClass:"preview-item-content"},[a("h6",{staticClass:"preview-subject font-weight-normal text-dark mb-1"},[t._v("Application Error")]),t._v(" "),a("p",{staticClass:"font-weight-light small-text mb-0"},[t._v(" Just now ")])])]),t._v(" "),a("a",{staticClass:"dropdown-item preview-item py-3"},[a("div",{staticClass:"preview-thumbnail"},[a("i",{staticClass:"mdi mdi-settings m-auto text-primary"})]),t._v(" "),a("div",{staticClass:"preview-item-content"},[a("h6",{staticClass:"preview-subject font-weight-normal text-dark mb-1"},[t._v("Settings")]),t._v(" "),a("p",{staticClass:"font-weight-light small-text mb-0"},[t._v(" Private message ")])])]),t._v(" "),a("a",{staticClass:"dropdown-item preview-item py-3"},[a("div",{staticClass:"preview-thumbnail"},[a("i",{staticClass:"mdi mdi-airballoon m-auto text-primary"})]),t._v(" "),a("div",{staticClass:"preview-item-content"},[a("h6",{staticClass:"preview-subject font-weight-normal text-dark mb-1"},[t._v("New user registration")]),t._v(" "),a("p",{staticClass:"font-weight-light small-text mb-0"},[t._v(" 2 days ago ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"UserDropdown",href:"#","data-toggle":"dropdown","aria-expanded":"false"}},[e("img",{staticClass:"img-xs rounded-circle",attrs:{src:"/admin/assets/images/faces/face8.jpg",alt:"Profile image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item"},[this._v("My Profile "),e("span",{staticClass:"badge badge-pill badge-danger"},[this._v("1")]),e("i",{staticClass:"dropdown-item-icon ti-dashboard"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item"},[this._v("Messages"),e("i",{staticClass:"dropdown-item-icon ti-comment-alt"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item"},[this._v("Activity"),e("i",{staticClass:"dropdown-item-icon ti-location-arrow"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item"},[this._v("FAQ"),e("i",{staticClass:"dropdown-item-icon ti-help-alt"})])}],!1,m,null,null).exports;function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _={computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach(function(e){h(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({},Object(o.b)("user",["getName"]),{},Object(o.b)("sidebar",["activeMenuMobile"]))};var b=function(t){a("pYBh")};var C=function(t){a("ZfbF")},w={components:{NavBar:f,SideBar:Object(u.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"sidebar sidebar-offcanvas",class:{active:t.activeMenuMobile},attrs:{id:"sidebar"}},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item nav-profile"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._m(0),t._v(" "),a("div",{staticClass:"text-wrapper"},[a("p",{staticClass:"profile-name"},[t._v(t._s(t.getName))]),t._v(" "),a("p",{staticClass:"designation"},[t._v("Premium user")])])])]),t._v(" "),a("li",{staticClass:"nav-item nav-category"},[t._v("Main Menu")]),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Dashboard"},href:"../../index.html"}},[a("i",{staticClass:"menu-icon typcn typcn-document-text"}),t._v(" "),a("span",{staticClass:"menu-title"},[t._v("Dashboard")])])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"CourseManage"}}},[a("i",{staticClass:"menu-icon typcn typcn-shopping-bag"}),t._v(" "),a("span",{staticClass:"menu-title"},[t._v("Quản lý khóa học")])])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"QuestionManage"}}},[a("i",{staticClass:"menu-icon typcn typcn-th-large-outline"}),t._v(" "),a("span",{staticClass:"menu-title"},[t._v("Quản lý câu hỏi")])])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Media"}}},[a("i",{staticClass:"menu-icon typcn typcn-bell"}),t._v(" "),a("span",{staticClass:"menu-title"},[t._v("Quản lý media")])])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-image"},[e("img",{staticClass:"img-xs rounded-circle",attrs:{src:"/admin/assets/images/faces/face8.jpg",alt:"profile image"}}),this._v(" "),e("div",{staticClass:"dot-indicator bg-success"})])}],!1,b,"data-v-53c6d86b",null).exports,FooterBar:Object(u.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container-fluid clearfix"},[e("span",{staticClass:"text-muted d-block text-center text-sm-left d-sm-inline-block"},[this._v("Copyright © 2019 "),e("a",{attrs:{href:"http://www.bootstrapdash.com/",target:"_blank"}},[this._v("Bootstrapdash")]),this._v(". All rights reserved.")]),this._v(" "),e("span",{staticClass:"float-none float-sm-right d-block mt-1 mt-sm-0 text-center"},[this._v("Hand-crafted & made with "),e("i",{staticClass:"mdi mdi-heart text-danger"})])])])}],!1,C,"data-v-5283540d",null).exports},computed:{getbreadcrumb:function(){return this.$route.matched}},created:function(){}},y=Object(u.a)(w,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-scroller"},[a("nav-bar"),t._v(" "),a("div",{staticClass:"container-fluid page-body-wrapper"},[a("side-bar"),t._v(" "),a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"row page-title-header"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"quick-link-wrapper w-100 d-md-flex flex-md-wrap"},[a("ul",{staticClass:"quick-links"},t._l(t.getbreadcrumb,function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.meta.title))])],1)}),0),t._v(" "),t._m(0)])])])]),t._v(" "),a("router-view")],1),t._v(" "),a("footer-bar")],1)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"quick-links ml-auto"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Settings")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Analytics")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Watchlist")])])])}],!1,null,null,null);e.default=y.exports},f2mA:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},mMlE:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},pYBh:function(t,e,a){var s=a("f2mA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("rjj0").default)("a343c3a8",s,!0,{})},rjj0:function(t,e,a){"use strict";function s(t,e){for(var a=[],s={},i=0;i<e.length;i++){var n=e[i],r=n[0],o={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};s[r]?s[r].parts.push(o):a.push(s[r]={id:r,parts:[o]})}return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,i){c=a,v=i||{};var r=s(t,e);return m(r),function(e){for(var a=[],i=0;i<r.length;i++){var o=r[i];(l=n[o.id]).refs--,a.push(l)}for(e?m(r=s(t,e)):r=[],i=0;i<a.length;i++){var l;if(0===(l=a[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete n[l.id]}}}};var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},v=null,p="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var e=0;e<t.length;e++){var a=t[e],s=n[a.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](a.parts[i]);for(;i<a.parts.length;i++)s.parts.push(g(a.parts[i]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{var r=[];for(i=0;i<a.parts.length;i++)r.push(g(a.parts[i]));n[a.id]={id:a.id,refs:1,parts:r}}}}function f(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,a,s=document.querySelector("style["+p+'~="'+t.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(u){var i=l++;s=o||(o=f()),e=b.bind(null,s,i,!1),a=b.bind(null,s,i,!0)}else s=f(),e=function(t,e){var a=e.css,s=e.media,i=e.sourceMap;s&&t.setAttribute("media",s);v.ssrId&&t.setAttribute(p,e.id);i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,s),a=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}var h,_=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function b(t,e,a,s){var i=a?"":s.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var n=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(n,r[e]):t.appendChild(n)}}}});