webpackJsonp([1],{AmhP:function(t,e){},OtoH:function(t,e){},b50r:function(t,e){},bAVN:function(t,e){},g8ul:function(t,e){},lO7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-header",[e("i",{staticClass:"el-icon-menu",on:{click:this.toggleCollapse}}),this._v(" "),e("h1",{staticClass:"title"},[this._v("管理系统")])])},staticRenderFns:[]};var s=n("VU/8")({methods:{toggleCollapse:function(){this.$store.commit("setCollapse")}}},r,!1,function(t){n("g8ul")},"data-v-5d2d75d0",null).exports,i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-vertical",attrs:{collapse:t.isCollapse,router:!0,"default-active":t.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","unique-opened":!0}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),n("el-menu-item-group",[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"/opt1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"/opt2"}},[t._v("选项2")])],1),t._v(" "),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"/opt3"}},[t._v("选项3")])],1),t._v(" "),n("el-submenu",{attrs:{index:"1-4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("选项4")]),t._v(" "),n("el-menu-item",{attrs:{index:"/opt41"}},[t._v("选项1")])],1),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/opt5"}},[t._v("选项5")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/opt21"}},[t._v("选项2-1")]),t._v(" "),n("el-menu-item",{attrs:{index:"/opt22"}},[t._v("选项2-2")])],1)],2),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])])],1)},staticRenderFns:[]};var a=n("VU/8")({computed:{isCollapse:function(){return this.$store.state.user.isCollapse}}},i,!1,function(t){n("bAVN")},"data-v-3e1689c4",null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{attrs:{separator:"/"}},t._l(t.routeArr,function(e,r){return n("el-breadcrumb-item",{key:r,attrs:{to:{path:e.path}}},[t._v("\n    "+t._s(e.meta.breadcrumbName)+"\n  ")])}))},staticRenderFns:[]};var o={components:{Breadcrumb:n("VU/8")({data:function(){return{routeArr:[]}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){this.routeArr=this.$route.matched}},watch:{$route:function(t,e){this.getBreadcrumb()}}},l,!1,function(t){n("b50r")},"data-v-55410325",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-main",[e("Breadcrumb"),this._v(" "),e("div",{staticClass:"main-section"},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)],1)},staticRenderFns:[]};var c={name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{Header:s,Menu:a,Main:n("VU/8")(o,u,!1,function(t){n("OtoH")},"data-v-99aa4272",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("el-container",{attrs:{direction:"vertical"}},[e("Header"),this._v(" "),e("el-container",[e("Menu"),this._v(" "),e("Main")],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(c,m,!1,function(t){n("AmhP")},"data-v-2f4be228",null);e.default=v.exports}});