(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"190d":function(t,e,o){"use strict";var n=o("81ab"),a=o.n(n);a.a},"32eb":function(t,e,o){"use strict";o.r(e);var n=o("70e1"),a=o.n(n);for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);e["default"]=a.a},"70e1":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{txt:""}},onLaunch:function(){switch(t.getSystemInfoSync().platform){case"android":console.log("运行Android上"," at App.vue:13");break;case"ios":console.log("运行iOS上"," at App.vue:16");break;default:console.log("运行在开发者工具上"," at App.vue:19");break}console.log("App Launch"," at App.vue:22");var e=(new Date).getHours();switch(!0){case e>=23&&e<=5:this.txt="夜深了，注意身体！";break;case e>=6&&e<=9:this.txt="早上好,一日之计在于晨";break;case e>=10&&e<=12:this.txt="上午好，努力奋斗每一天！";break;case e>=13&&e<=18:this.txt="下午好，要注意劳逸结合。";break;case e>=19&&e<=22:this.txt="晚上好，辛苦一天了，记得早点休息";break;default:break}},onShow:function(){t.showToast({title:this.txt,position:"bottom",duration:1200}),console.log("App Show"," at App.vue:52")},onHide:function(){console.log("App Hide"," at App.vue:55")}};e.default=o}).call(this,o("6e42")["default"])},"81ab":function(t,e,o){},f115:function(t,e,o){"use strict";o.r(e);var n=o("32eb");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("190d");var u,c,i=o("2877"),r=Object(i["a"])(n["default"],u,c,!1,null,null,null);e["default"]=r.exports}},[["26b3","common/runtime","common/vendor"]]]);