(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/thriving-boards/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1182:function(t,e,a){},"34ba":function(t,e,a){"use strict";a("1182")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("nav-bar"),a("v-main",[a("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:""}},[a("div",{staticClass:"d-flex align-center"},[a("h2",[t._v("Thriving Boards")])]),a("v-spacer"),a("div",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-flag",size:"lg"}}),t._v("  Thrive    "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-fire-flame-curved",size:"lg"}}),t._v("  Energy   "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart",size:"lg"}}),t._v("  Like    "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-lightbulb",size:"lg"}}),t._v("  Creativity    "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trophy",size:"lg"}}),t._v("  Achievement ")],1),a("v-spacer"),a("div",{staticClass:"transform-me"},[a("img",{attrs:{src:"qrcode-4.png",width:"32",height:"32"}})]),a("Fancybox",{attrs:{options:{Carousel:{infinite:!1}}}},[a("span",{staticClass:"ml-2"},[t._v("掃碼加入 |"),a("a",{attrs:{href:"https://forms.office.com/r/sGY3XpCAQA",target:"_blank"}},[t._v(" 填寫表單")]),t._v(" | "),a("a",{staticClass:"wordcloud",attrs:{"data-fancybox":"wordcloud",href:"https://charleswang.us/thriving/sample/wordcloud.png",target:"_blank"}},[t._v("文字雲")]),t._v("    ")])]),a("v-btn",{attrs:{text:""},on:{click:t.darkMode}},[t.$vuetify.theme.dark?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-sun",size:"lg"}}):a("font-awesome-icon",{attrs:{icon:"fa-solid fa-moon",size:"lg"}}),a("span",{staticClass:"ml-2"},[t._v(" "+t._s(t.$vuetify.theme.dark?"Light Mode":"Dark Mode"))])],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container"},[t._t("default")],2)},c=[],u=a("5530"),d=a("8563"),f=(a("1393"),{props:{options:Object},mounted:function(){d["a"].bind(this.$refs.container,"[data-fancybox]",Object(u["a"])({},this.options||{}))},updated:function(){d["a"].unbind(this.$refs.container),d["a"].close(),d["a"].bind(this.$refs.container,"[data-fancybox]",Object(u["a"])({},this.options||{}))},unmounted:function(){d["a"].destroy()}}),v=f,p=a("2877"),h=Object(p["a"])(v,l,c,!1,null,null,null),m=h.exports,g={components:{Fancybox:m},methods:{darkMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark;var t=document.querySelector(":root");this.$vuetify.theme.dark?(t.style.setProperty("--bg-color","#003d66"),t.style.setProperty("--bg-color-hover","#262626"),t.style.setProperty("--link-color","#b3ecff"),t.style.setProperty("--link-wordcloud-color","#d8f728f4"),t.style.setProperty("--card-title-color","lemonchiffon"),t.style.setProperty("--card-subtitle-color","#96ff99"),t.style.setProperty("--card-subtitle-weight","bold"),t.style.setProperty("--card-subtitle-en-color","#d0ffff"),t.style.setProperty("--card-subtitle-en-weight","regular"),t.style.setProperty("--card-item-color","#b3ecff"),t.style.setProperty("--card-item-weight","bold")):(t.style.setProperty("--bg-color","#ffffe6"),t.style.setProperty("--bg-color-hover","#ffffb3"),t.style.setProperty("--link-color","#004d99"),t.style.setProperty("--link-wordcloud-color","#006666"),t.style.setProperty("--card-title-color","#0059b3"),t.style.setProperty("--card-subtitle-color","#0B5345"),t.style.setProperty("--card-subtitle-weight","bold"),t.style.setProperty("--card-subtitle-en-color","#2874A6"),t.style.setProperty("--card-subtitle-en-weight","regular"),t.style.setProperty("--card-item-color","#21618C"),t.style.setProperty("--card-item-weight","bold"))}}},y=g,b=(a("34ba"),a("6544")),_=a.n(b),w=a("40dc"),k=a("8336"),C=a("2fa4"),x=Object(p["a"])(y,o,s,!1,null,null,null),P=x.exports;_()(x,{VAppBar:w["a"],VBtn:k["a"],VSpacer:C["a"]});var A={name:"App",components:{"nav-bar":P},data:function(){return{}}},j=A,S=(a("034f"),a("7496")),$=a("f6c4"),O=Object(p["a"])(j,n,r,!1,null,null,null),I=O.exports;_()(O,{VApp:S["a"],VMain:$["a"]});var V=a("bc3a"),q=a.n(V),z=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-select",{attrs:{label:"Quarter",items:t.quarters,"item-text":"name","item-value":"code",solo:"",clearable:""},on:{change:t.quarterChange},model:{value:t.quarter,callback:function(e){t.quarter=e},expression:"quarter"}})],1),a("v-col",[a("v-select",{attrs:{label:"Location",items:t.locations,"item-text":"name","item-value":"code",solo:"",clearable:""},on:{change:t.locationChange},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),a("v-col",[a("v-select",{attrs:{label:"Badge",items:t.badges,"item-text":"name","item-value":"code",solo:"",clearable:""},on:{change:t.badgeChange},model:{value:t.badge,callback:function(e){t.badge=e},expression:"badge"}})],1),a("v-spacer",{staticClass:"d-none d-md-flex d-lg-flex"}),a("v-col",[a("h2",{staticClass:"slogan"},[a("marquee",{attrs:{Width:"500",ScrollAmount:"8"}},[t._v("為何獨自努力？跟隨隊友一起")])],1)])],1),a("v-row",t._l(t.activities,(function(e){return a("v-col",{key:e.activityId,attrs:{md:"3"}},[a("activity-card",t._b({},"activity-card",e,!1))],1)})),1),a("v-row",[a("p")]),a("v-row",[a("p")]),a("v-row",[a("p")]),a("div",{staticClass:"center"},[a("h2",{staticClass:"carousel",staticStyle:{"text-align":"center"}},[t._v("Together We Thrive")])]),a("v-row",[a("p")]),a("v-row",[a("p")]),a("v-row",[a("p")])],1)},T=[],F=(a("ac1f"),a("841c"),a("4de4"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{on:{click:t.gotoDetails}},[a("v-img",{attrs:{height:"200",src:t.gif}}),a("v-card-text",[a("div",{staticClass:"card_title"},[t._v(t._s(t.name))]),a("div",{staticClass:"card_subtitle"},[t._v(t._s(t.project_zh))]),a("div",{staticClass:"card_subtitle_en"},[t._v(t._s(t.project))]),a("div",[t._v(t._s(t.date)+" @ "+t._s(t.location))]),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{"flex-grow":"1"}},[t._v("ID: "+t._s(t.activityId.replace("card","")))]),a("div",[t.popular?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trophy",size:"lg"}}):t._e(),t.popular?a("span",[t._v("    ")]):t._e(),t.like?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart",size:"lg"}}):t._e(),t.like?a("span",[t._v("    ")]):t._e(),t.creative?a("font-awesome-icon",{attrs:{icon:"fa-solid fa-lightbulb",size:"lg"}}):t._e(),t.creative?a("span",[t._v("    ")]):t._e(),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-flag",size:"lg"}}),t._v("     "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-fire-flame-curved",size:"lg"}})],1)])])],1)}),D=[],E={props:{gif:{type:String,default:null},name:{type:String,default:null},project_zh:{type:String,default:null},project:{type:String,default:null},location:{type:String,default:null},date:{type:String,default:null},activityId:{type:String,default:null},popular:{type:Boolean,default:null},like:{type:Boolean,default:null},creative:{type:Boolean,default:null}},methods:{gotoDetails:function(){this.$router.push({name:"Details",params:{code:btoa(this.activityId)}})}}},M=E,L=(a("f528"),a("b0af")),Q=a("99d9"),N=a("adda"),H=Object(p["a"])(M,F,D,!1,null,null,null),Y=H.exports;_()(H,{VCard:L["a"],VCardText:Q["a"],VImg:N["a"]});var R={name:"Home",components:{"activity-card":Y},data:function(){return{activities:[],search:null,location:null,locations:["Taipei","Shanghai","Wuxi"],quarter:null,quarters:["FY24Q1","FY24Q2","FY24Q3"],badge:"Badge",badges:["Thrive","Energy","Like","Creativity","Achievement"]}},mounted:function(){this.getActivities()},watch:{search:{immediate:!0,handler:function(t){t&&(this.location=null,this.getActivities())}}},methods:{locationChange:function(){this.search=null,this.getActivities()},quarterChange:function(){this.search=null,this.getActivities()},badgeChange:function(){this.search=null,this.getBadgeActivities()},clearSearch:function(){var t=this;setTimeout((function(){t.search=null,t.getActivities()}),100)},getActivities:function(){var t=this,e="sample/all.json";this.search?e="sample/name/".concat(this.search):this.location?e="sample/location/".concat(this.location.toLowerCase()):this.quarter&&(e="sample/quarter/".concat(this.quarter.toLowerCase())),setTimeout((function(){t.callAPI(e)}))},getBadgeActivities:function(){var t=this,e="sample/all.json";setTimeout((function(){switch(t.badge){case"Thrive":t.callAPI(e);break;case"Energy":t.callAPI(e);break;case"Like":t.callFilterAPI(e,"like");break;case"Creativity":t.callFilterAPI(e,"creative");break;case"Achievement":t.callFilterAPI(e,"popular");break;default:t.callAPI(e)}}))},callAPI:function(t){var e=this;this.$http.get(t).then((function(t){200==t.status&&(e.activities=t.data)})).catch((function(t){console.log(t)}))},callFilterAPI:function(t,e){var a=this;this.$http.get(t).then((function(t){200==t.status&&(a.activities=t.data.filter((function(t){return 1==t[e]})))})).catch((function(t){console.log(t)}))}}},W=R,J=a("62ad"),U=a("a523"),G=a("0fd9"),X=a("b974"),K=Object(p["a"])(W,B,T,!1,null,null,null),Z=K.exports;_()(K,{VCol:J["a"],VContainer:U["a"],VRow:G["a"],VSelect:X["a"],VSpacer:C["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn",on:{click:t.goBack}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" Back")],1)],1)],1),a("v-row",[a("v-col",{attrs:{md:"6",sm:"12",xs:"12"}},[a("v-img",{attrs:{src:t.activity.gif}})],1),a("v-col",{staticClass:"pa-2",attrs:{md:"6",sm:"12",xs:"12"}},[a("div",{staticClass:"mt-2"},[a("h2",[t._v(t._s(t.activity.name))]),a("p",[t._v("("+t._s(t.activity.alias?t.activity.alias:"N/A")+")")]),a("v-row",{staticClass:"mt-3"},[a("v-col",{attrs:{lg:"12",md:"12",sm:"12",xs:"12"}},[a("div",{class:"d-flex justify-space-between flex-wrap ",staticStyle:{height:"100%"}},[a("div",[a("div",[a("span",{staticClass:"card_item"},[t._v("ID: ")]),t._v(t._s(this.code.replace("card","")))]),a("div",[a("span",{staticClass:"card_item"},[t._v("項目 (中): ")]),t._v(t._s(t.activity.project_zh))]),a("div",[a("span",{staticClass:"card_item"},[t._v("項目 (英): ")]),t._v(t._s(t.activity.project))]),a("div",[a("span",{staticClass:"card_item"},[t._v("地點: ")]),t._v(t._s(t.activity.location))]),a("div",[a("span",{staticClass:"card_item"},[t._v("時間: ")]),t._v(t._s(t.activity.date))]),a("div",[a("span",{staticClass:"card_item"},[t._v("介紹: ")]),t._v(t._s(t.activity.intro))])])])])],1),a("div",{staticClass:"mt-2"},[a("span",t._l(t.activity.quarters,(function(e){return a("v-btn",{key:e,staticClass:"mr-2 mb-2",on:{click:function(a){return t.getQuarter(e)}}},[t._v(t._s(e))])})),1)])],1)])],1)],1)},et=[],at={data:function(){return{activity:{},code:null}},mounted:function(){this.init()},methods:{init:function(){if(this.$route.params.code){var t=atob(this.$route.params.code);this.code=t,this.getActivityDetails()}},getActivityDetails:function(){var t=this;this.$http.get("sample/cards/".concat(this.code)).then((function(e){if(200==e.status){var a=e.data;t.activity=a}})).catch((function(t){console.log(t)}))},goBack:function(){this.$router.push({name:"Home"})},getQuarter:function(t){this.code=t,this.getActivityDetails()}}},it=at,nt=a("132d"),rt=Object(p["a"])(it,tt,et,!1,null,null,null),ot=rt.exports;_()(rt,{VBtn:k["a"],VCol:J["a"],VContainer:U["a"],VIcon:nt["a"],VImg:N["a"],VRow:G["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("404 Not found")])},lt=[],ct={},ut=ct,dt=Object(p["a"])(ut,st,lt,!1,null,null,null),ft=dt.exports;i["a"].use(z["a"]);var vt=[{name:"Home",path:"/",component:Z,meta:{item:null,module:{id:null},title:"Home"}},{name:"Details",path:"/details/:code",component:ot,meta:{item:null,module:{id:null},title:"Details"}},{name:"NotFound",path:"*",component:ft,meta:{item:null,module:{id:null},title:"Not FOund"}}],pt=new z["a"]({mode:"history",base:"/thriving-boards/",routes:vt}),ht=pt;i["a"].filter("numberFormatter",(function(t){return"number"!==typeof t?t:new Intl.NumberFormat("en-US",{maximumSignificantDigits:3}).format(t)}));i["a"].filter;var mt=a("ecee"),gt=a("c074"),yt=a("ad3d"),bt=a("f309");i["a"].use(bt["a"]);var _t=new bt["a"]({theme:{dark:!0,themes:{light:{primary:"hsl(100, 0%, 100%)",background:"hsl(100, 0%, 98%)",input:"hsl(0, 0%, 52%)",text:"hsl(200, 15%, 8%)"},dark:{primary:"hsl(209, 23%, 22%)",background:"hsl(207, 26%, 17%)",text:"hsl(0, 0%, 100%)",input:"hsl(0, 0%, 52%)"}}}});i["a"].config.productionTip=!1;var wt=q.a.create({baseURL:"https://charleswang.us/thriving/"});i["a"].prototype.$http=wt,mt["c"].add(gt["e"]),mt["c"].add(gt["f"]),mt["c"].add(gt["b"]),mt["c"].add(gt["a"]),mt["c"].add(gt["g"]),mt["c"].add(gt["c"]),mt["c"].add(gt["d"]),i["a"].component("font-awesome-icon",yt["a"]),new i["a"]({router:ht,vuetify:_t,render:function(t){return t(I)}}).$mount("#app")},"85ec":function(t,e,a){},a2fc:function(t,e,a){},f528:function(t,e,a){"use strict";a("a2fc")}});
//# sourceMappingURL=app.af580154.js.map