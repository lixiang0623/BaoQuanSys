webpackJsonp([4],{0:function(t,e,n){n(99),t.exports=n(508)},416:function(t,e,n){var i;n(849);var r=n(14)(n(494),n(444),null,null,i);e.__esModule=!0,e.default=r.exports},444:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"firstPage"},[t._m(0),t._v(" "),t.isFlag?i("div",[t._m(1),t._v(" "),i("div",{staticClass:"square_container"},[i("div",{staticClass:"square",staticStyle:{"margin-left":"10px"},on:{click:t.btnYeji}},[i("img",{staticClass:"square_icon",attrs:{src:n(880)}}),t._v(" "),i("p",{staticClass:"square_title"},[t._v("我的业绩")])]),t._v(" "),i("div",{staticClass:"square",on:{click:t.changetx}},[i("img",{staticClass:"square_icon",attrs:{src:n(879)}}),t._v(" "),i("p",{staticClass:"square_title"},[t._v("头像上传")])]),t._v(" "),i("div",{staticClass:"square",on:{click:t.changetx2}}),t._v(" "),i("div",{staticClass:"square",on:{click:t.changetx3}})])]):i("div",[t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"50px",width:"100%",background:"#4895FA","flex-direction":"row",display:"flex"}},[n("div",{staticStyle:{"text-align":"center","font-size":"14px",color:"white",display:"flex",width:"20%","margin-left":"45%","margin-top":"10px"}},[t._v("库卡营销")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:n(878)}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-items":"center","flex-direction":"column"}},[i("img",{staticStyle:{width:"60%","margin-top":"100px"},attrs:{src:n(877)}}),t._v(" "),i("span",{staticStyle:{"margin-top":"20px",color:"#999999","font-size":"17px"}},[t._v("暂无交易权限")])])}]}},494:function(t,e,n){"use strict";function i(){return r?r:r="undefined"!=typeof window&&window.Promise&&"function"==typeof window.Promise.resolve?window.Promise:n(28).default||n(28)}Object.defineProperty(e,"__esModule",{value:!0});var r,s=n(103),a=n(102);e.default={data:function(){return{userid:"",isFlag:!0}},created:function(){var t=this;(0,a.ShouNav)(),(0,a.getUserId)().then(function(e){t.userid=e,t.getquanxian(),console.log("对方水电费")})},methods:{btnYeji:function(){window.location.href="test.html"},changetx:function(){window.location.href="put-headImg.html"},onClickLeft:function(){},getquanxian:function(){return new(i())(function(t,e){var n,r,a,c,o=function(){try{return t()}catch(t){return e(t)}}.bind(this),u=function(t){try{return o()}catch(t){return e(t)}}.bind(this);try{return i().resolve((0,s.quanxian)({userid:this.userid})).then(function(t){try{return n=t,r=n.resultCode,a=n.failreason,c=n.isFlag,"1"==c?this.isFlag=!0:this.isFlag=!1,console.log("权限+"+c),o()}catch(t){return u(t)}}.bind(this),u)}catch(t){u(t)}}.bind(this))}}}},508:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(11),s=i(r),a=n(416),c=i(a);n(101),n(100);var o=n(47);s.default.use(o.NavBar),new s.default({render:function(t){return t(c.default)}}).$mount("#app")},849:function(t,e){},877:function(t,e,n){t.exports=n.p+"img/empty_nopermission@3x.047296a.png"},878:function(t,e,n){t.exports=n.p+"img/home_banner1.09d8aaa.png"},879:function(t,e,n){t.exports=n.p+"img/home_icon_tx@3x.3b2df57.png"},880:function(t,e,n){t.exports=n.p+"img/home_icon_yj@3x.7234f58.png"}});