(function(t){function e(e){for(var i,r,c=e[0],l=e[1],s=e[2],v=0,f=[];v<c.length;v++)r=c[v],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/thriving-boards/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1182:function(t,e,a){},"34ba":function(t,e,a){"use strict";a("1182")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("nav-bar"),a("v-main",[a("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:""}},[a("div",{staticClass:"d-flex align-center"},[a("h2",[t._v("Thriving Boards")])]),a("v-spacer"),a("div",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-flag",size:"lg"}}),t._v("  Thrive    "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-fire-flame-curved",size:"lg"}}),t._v("  Energy   "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart",size:"lg"}}),t._v("  Like    "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-lightbulb",size:"lg"}}),t._v("  Creativity    "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trophy",size:"lg"}}),t._v("  Achievement ")],1),a("v-spacer"),a("div",{staticClass:"transform-me"},[a("img",{attrs:{src:"qrcode-1.png",width:"32",height:"32"}})]),a("span",{staticClass:"ml-2"},[t._v("掃碼加入  ")]),a("v-btn",{attrs:{text:""},on:{click:t.darkMode}},[t.$vuetify.theme.dark?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-sun",size:"lg"}}):a("font-awesome-icon",{attrs:{icon:"fa-solid fa-moon",size:"lg"}}),a("span",{staticClass:"ml-2"},[t._v(" "+t._s(t.$vuetify.theme.dark?"Light Mode":"Dark Mode"))])],1)],1)},c=[],l={methods:{darkMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark;var t=document.querySelector(":root");this.$vuetify.theme.dark?(t.style.setProperty("--bg-color","#003d66"),t.style.setProperty("--bg-color-hover","#262626")):(t.style.setProperty("--bg-color","#ffffe6"),t.style.setProperty("--bg-color-hover","#ffffb3"))}}},s=l,u=(a("34ba"),a("2877")),v=a("6544"),f=a.n(v),d=a("40dc"),h=a("8336"),p=a("2fa4"),m=Object(u["a"])(s,r,c,!1,null,null,null),g=m.exports;f()(m,{VAppBar:d["a"],VBtn:h["a"],VSpacer:p["a"]});var _={name:"App",components:{"nav-bar":g},data:function(){return{}}},y=_,b=(a("034f"),a("7496")),w=a("f6c4"),x=Object(u["a"])(y,n,o,!1,null,null,null),k=x.exports;f()(x,{VApp:b["a"],VMain:w["a"]});var C=a("bc3a"),S=a.n(C),j=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-select",{attrs:{label:"Quarter",items:t.quarters,"item-text":"name","item-value":"code",solo:"",clearable:""},on:{change:t.quarterChange},model:{value:t.quarter,callback:function(e){t.quarter=e},expression:"quarter"}})],1),a("v-col",[a("v-select",{attrs:{label:"Location",items:t.locations,"item-text":"name","item-value":"code",solo:"",clearable:""},on:{change:t.locationChange},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),a("v-spacer",{staticClass:"d-none d-md-flex d-lg-flex"}),a("v-col",[a("h2",{staticClass:"slogan"},[a("marquee",{attrs:{Width:"500",ScrollAmount:"8"}},[t._v("為何獨自努力？跟隨隊友一起")])],1)])],1),a("v-row",t._l(t.activities,(function(e){return a("v-col",{key:e.activityId,attrs:{md:"3"}},[a("activity-card",t._b({},"activity-card",e,!1))],1)})),1),a("v-row",[a("p")]),a("v-row",[a("p")]),a("v-row",[a("p")])],1)},$=[],O=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{on:{click:t.gotoDetails}},[a("v-img",{attrs:{height:"200",src:t.gif}}),a("v-card-text",[a("div",{staticClass:"card_title"},[t._v(t._s(t.name))]),a("div",[a("b",[t._v("項目 (中): ")]),t._v(t._s(t.project_zh))]),a("div",[a("b",[t._v("項目 (英): ")]),t._v(t._s(t.project))]),a("div",[a("b",[t._v("時間: ")]),t._v(t._s(t.date))]),a("div",[a("b",[t._v("地點: ")]),t._v(t._s(t.location))]),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{"flex-grow":"1"}},[a("b",[t._v("ID: ")]),t._v(t._s(t.activityId.replace("card","")))]),a("div",[t.popular?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trophy",size:"lg"}}):t._e(),t.popular?a("span",[t._v("    ")]):t._e(),t.like?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart",size:"lg"}}):t._e(),t.like?a("span",[t._v("    ")]):t._e(),t.creative?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-lightbulb",size:"lg"}}):t._e(),t.creative?a("span",[t._v("    ")]):t._e(),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-flag",size:"lg"}}),t._v("     "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-fire-flame-curved",size:"lg"}})],1)])])],1)}),A=[],q={props:{gif:{type:String,default:null},name:{type:String,default:null},project_zh:{type:String,default:null},project:{type:String,default:null},location:{type:String,default:null},date:{type:String,default:null},activityId:{type:String,default:null},popular:{type:Boolean,default:null},like:{type:Boolean,default:null},creative:{type:Boolean,default:null}},methods:{gotoDetails:function(){this.$router.push({name:"Details",params:{code:btoa(this.activityId)}})}}},z=q,P=(a("f528"),a("b0af")),D=a("99d9"),I=a("adda"),B=Object(u["a"])(z,O,A,!1,null,null,null),M=B.exports;f()(B,{VCard:P["a"],VCardText:D["a"],VImg:I["a"]});var T={name:"Home",components:{"activity-card":M},data:function(){return{activities:[],search:null,location:null,locations:["Taipei","Shanghai","Wuxi"],quarter:null,quarters:["FY24Q1","FY24Q2","FY24Q3"]}},mounted:function(){this.getActivities()},watch:{search:{immediate:!0,handler:function(t){t&&(this.location=null,this.getActivities())}}},methods:{locationChange:function(){this.search=null,this.getActivities()},quarterChange:function(){this.search=null,this.getActivities()},clearSearch:function(){var t=this;setTimeout((function(){t.search=null,t.getActivities()}),100)},getActivities:function(){var t=this,e="all.json";this.search?e="name/".concat(this.search):this.location?e="location/".concat(this.location.toLowerCase()):this.quarter&&(e="quarter/".concat(this.quarter.toLowerCase())),setTimeout((function(){t.callAPI(e)}))},callAPI:function(t){var e=this;this.$http.get(t).then((function(t){200==t.status&&(e.activities=t.data)})).catch((function(t){console.log(t)}))}}},E=T,F=a("62ad"),L=a("a523"),Q=a("0fd9"),N=a("b974"),H=Object(u["a"])(E,V,$,!1,null,null,null),R=H.exports;f()(H,{VCol:F["a"],VContainer:L["a"],VRow:Q["a"],VSelect:N["a"],VSpacer:p["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn",on:{click:t.goBack}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" Back")],1)],1)],1),a("v-row",[a("v-col",{attrs:{md:"6",sm:"12",xs:"12"}},[a("v-img",{attrs:{src:t.activity.gif}})],1),a("v-col",{staticClass:"pa-2",attrs:{md:"6",sm:"12",xs:"12"}},[a("div",{staticClass:"mt-8"},[a("h2",[t._v(t._s(t.activity.name))]),a("p",[t._v(t._s(t.activity.alias?t.activity.alias:"N/A"))]),a("v-row",{staticClass:"mt-3"},[a("v-col",{attrs:{lg:"12",md:"12",sm:"12",xs:"12"}},[a("div",{class:"d-flex justify-space-between flex-wrap ",staticStyle:{height:"100%"}},[a("div",[a("div",[a("b",[t._v("ID: ")]),t._v(t._s(this.code.replace("card","")))]),a("div",[a("b",[t._v("項目 (中): ")]),t._v(t._s(t.activity.project_zh))]),a("div",[a("b",[t._v("項目 (英): ")]),t._v(t._s(t.activity.project))]),a("div",[a("b",[t._v("地點: ")]),t._v(t._s(t.activity.location))]),a("div",[a("b",[t._v("時間: ")]),t._v(t._s(t.activity.date))]),a("div",[a("b",[t._v("介紹: ")]),t._v(t._s(t.activity.intro))])])])])],1),a("div",{staticClass:"mt-2"},[a("span",t._l(t.activity.quarters,(function(e){return a("v-btn",{key:e,staticClass:"mr-2 mb-2",on:{click:function(a){return t.getQuarter(e)}}},[t._v(t._s(e))])})),1)])],1)])],1)],1)},J=[],U={data:function(){return{activity:{},code:null}},mounted:function(){this.init()},methods:{init:function(){if(this.$route.params.code){var t=atob(this.$route.params.code);this.code=t,this.getActivityDetails()}},getActivityDetails:function(){var t=this;this.$http.get("cards/".concat(this.code)).then((function(e){if(200==e.status){var a=e.data;t.activity=a}})).catch((function(t){console.log(t)}))},goBack:function(){this.$router.push({name:"Home"})},getQuarter:function(t){this.code=t,this.getActivityDetails()}}},W=U,G=a("132d"),K=Object(u["a"])(W,Y,J,!1,null,null,null),X=K.exports;f()(K,{VBtn:h["a"],VCol:F["a"],VContainer:L["a"],VIcon:G["a"],VImg:I["a"],VRow:Q["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("404 Not found")])},tt=[],et={},at=et,it=Object(u["a"])(at,Z,tt,!1,null,null,null),nt=it.exports;i["a"].use(j["a"]);var ot=[{name:"Home",path:"/",component:R,meta:{item:null,module:{id:null},title:"Home"}},{name:"Details",path:"/details/:code",component:X,meta:{item:null,module:{id:null},title:"Details"}},{name:"NotFound",path:"*",component:nt,meta:{item:null,module:{id:null},title:"Not FOund"}}],rt=new j["a"]({mode:"history",base:"/thriving-boards/",routes:ot}),ct=rt;a("4de4"),a("d3b7");i["a"].filter("numberFormatter",(function(t){return"number"!==typeof t?t:new Intl.NumberFormat("en-US",{maximumSignificantDigits:3}).format(t)}));i["a"].filter;var lt=a("ecee"),st=a("c074"),ut=a("ad3d"),vt=a("f309");i["a"].use(vt["a"]);var ft=new vt["a"]({theme:{dark:!0,themes:{light:{primary:"hsl(100, 0%, 100%)",background:"hsl(100, 0%, 98%)",input:"hsl(0, 0%, 52%)",text:"hsl(200, 15%, 8%)"},dark:{primary:"hsl(209, 23%, 22%)",background:"hsl(207, 26%, 17%)",text:"hsl(0, 0%, 100%)",input:"hsl(0, 0%, 52%)"}}}});i["a"].config.productionTip=!1;var dt=S.a.create({baseURL:"https://charleswang.us/thriving/"});i["a"].prototype.$http=dt,lt["c"].add(st["e"]),lt["c"].add(st["f"]),lt["c"].add(st["b"]),lt["c"].add(st["a"]),lt["c"].add(st["g"]),lt["c"].add(st["c"]),lt["c"].add(st["d"]),i["a"].component("font-awesome-icon",ut["a"]),new i["a"]({router:ct,vuetify:ft,render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,a){},a2fc:function(t,e,a){},f528:function(t,e,a){"use strict";a("a2fc")}});
//# sourceMappingURL=app.a587b38b.js.map