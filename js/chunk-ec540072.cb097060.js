(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec540072"],{"06d4":function(e,t,a){},1775:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main-panel",{staticClass:"email-container",attrs:{title:"博客设置"}},[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"博客地址"}},[a("el-input",{model:{value:e.formData.blogUrl,callback:function(t){e.$set(e.formData,"blogUrl",t)},expression:"formData.blogUrl"}})],1),a("el-form-item",{attrs:{label:"博客标题"}},[a("el-input",{model:{value:e.formData.blogTitle,callback:function(t){e.$set(e.formData,"blogTitle",t)},expression:"formData.blogTitle"}})],1),a("el-form-item",{attrs:{label:"博客子标题"}},[a("el-input",{model:{value:e.formData.blogSubTitle,callback:function(t){e.$set(e.formData,"blogSubTitle",t)},expression:"formData.blogSubTitle"}})],1),a("el-form-item",{attrs:{label:"logo"}},[a("el-input",{model:{value:e.formData.blogLogo,callback:function(t){e.$set(e.formData,"blogLogo",t)},expression:"formData.blogLogo"}})],1),a("el-form-item",{attrs:{label:"favicon"}},[a("el-input",{model:{value:e.formData.faviconUrl,callback:function(t){e.$set(e.formData,"faviconUrl",t)},expression:"formData.faviconUrl"}})],1),a("el-form-item",{attrs:{label:"Meta"}},[a("el-input",{model:{value:e.formData.blogMeta,callback:function(t){e.$set(e.formData,"blogMeta",t)},expression:"formData.blogMeta"}})],1),a("el-form-item",{attrs:{label:"Meta Description"}},[a("el-input",{model:{value:e.formData.blogMetaDesc,callback:function(t){e.$set(e.formData,"blogMetaDesc",t)},expression:"formData.blogMetaDesc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.doLoading},on:{click:e.update}},[e._v("更新")]),a("el-button",[e._v("取消")])],1)],1)],1)},o=[],r=(a("96cf"),a("3b8d")),l=a("d225"),i=a("b0b4"),s=a("308d"),c=a("6bb5"),u=a("4e2b"),f=a("9ab4"),m=a("60a3"),b=a("3550"),g=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.formData={blogUrl:"",blogTitle:"",blogSubTitle:"",blogLogo:"",faviconUrl:"",blogMeta:"",blogMetaDesc:""},e.loading=!0,e.doLoading=!1,e}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"mounted",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,b["a"].findBaseSetting();case 4:t=e.sent,t&&Object.assign(this.formData,t),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$message.error(e.t0.message);case 11:return e.prev=11,this.loading=!1,e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.doLoading=!0,e.next=4,b["a"].updateBaseSetting(this.formData);case 4:e.sent,this.$message.success("更新成功！"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$message.error(e.t0.message);case 11:return e.prev=11,this.doLoading=!1,e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])}));function t(){return e.apply(this,arguments)}return t}()}]),t}(m["c"]);g=f["a"]([m["a"]],g);var p=g,d=p,v=(a("f299"),a("2877")),D=Object(v["a"])(d,n,o,!1,null,null,null);t["default"]=D.exports},3550:function(e,t,a){"use strict";var n=a("0e9d");t["a"]={findBaseSetting:function(){return n["a"].get("/setting/base",{})},updateBaseSetting:function(e){return n["a"].post("/setting/base",{payload:e})},findEmailSetting:function(){return n["a"].get("/setting/email",{})},updateEmailSetting:function(e){return n["a"].post("/setting/email",{payload:e})}}},f299:function(e,t,a){"use strict";var n=a("06d4"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-ec540072.cb097060.js.map