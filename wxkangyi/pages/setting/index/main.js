require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(183);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c4e863d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(184)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c4e863d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0c4e863d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/setting/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c4e863d", Component.options)
  } else {
    hotAPI.reload("data-v-0c4e863d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 184:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            user: {
                avatar: null,
                nickname: null
            },
            bal:0,
            name: null,
            full_name: null,
            tel: null,
            isapply: true,
            shopbyuser: null,
            wxname: null,
            wxpic: null,
            wxmessage: null
        });
    },
    onShow: function onShow() {
        that = this;
        that.check();
        that.isapply = true;

    
        // 查看用户申请店长状态  0:正常店长 -1试用期没通过 -2审核驳回 1审核中 2试用中
    },

    onUnload: function onUnload() {
        that.isapply = true;
        that.name = null;
        that.full_name = null;
        that.tel = null;
    },

    methods: {
        init: function init() {
            that.$post("api/user/get", null, function (user) {
              // console.log(user)  
              that.user = user;
            });

        },

    }

});

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "header area"
  }, [_c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "info"
  }, [_c('img', {
    staticClass: "thumb_pic",
    attrs: {
      "src": _vm.user && _vm.user.avatar ? _vm.resurl + _vm.user.avatar : '/static/images/icon/avatar_default.png',
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "nickname"
  }, [_vm._v("\n            昵称：" + _vm._s(_vm.user && _vm.user.nickname ? _vm.user.nickname : '点击登录') + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "jifen"
  }, [_vm._v("\n            积分：" + _vm._s(_vm.user && _vm.user.integral ? _vm.user.integral : '0') + "\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "order_box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "box_list"
  }, [_c('a', {
    staticClass: "item",
    attrs: {
      "href": '/pages/driver/order/main?status=1'
    }
  }, [_c('img', {
    staticClass: "item_icon",
    attrs: {
      "src": "/static/images/icon_0.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("正在租赁")])]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "href": '/pages/driver/order/main?status=2'
    }
  }, [_c('img', {
    staticClass: "item_icon",
    attrs: {
      "src": "/static/images/icon_3.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("已经完成")])])])]), _vm._v(" "), _c('div', {
    staticClass: "op-list"
  }, [_c('a', {
    attrs: {
      "href": "/pages/shop/order/main?status=0"
    }
  }, [_vm._v("商城订单")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/pages/user/edit/main"
    }
  }, [_vm._v("完善信息")]), _vm._v(" "), _c('button', {
    staticClass: "item",
    attrs: {
      "open-type": "contact"
    }
  }, [_vm._v("在线客服")]), _vm._v(" "), _c('button', {
    staticClass: "item",
    attrs: {
      "open-type": "feedback"
    }
  }, [_vm._v("意见反馈")]), _vm._v(" "), _c('button', {
    staticClass: "item",
    attrs: {
      "open-type": "phone"
    }
  }, [_vm._v("联系电话")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_c('img', {
    staticClass: "top_icon",
    attrs: {
      "src": "/static/images/icon_5.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top_text"
  }, [_vm._v("设备订单")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c4e863d", esExports)
  }
}

/***/ })

},[182]);