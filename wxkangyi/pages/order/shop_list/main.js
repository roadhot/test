require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(173);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7672e530_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7672e530"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7672e530_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/order/shop_list/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7672e530", Component.options)
  } else {
    hotAPI.reload("data-v-7672e530", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            status: "",
            list: [],
            tab_active: ""
        });
    },
    onShow: function onShow() {
        that = this;
        that.check();
    },

    methods: {
        init: function init() {
            that.status = that.get("status");
            that.tab(that.status);
        },
        tab: function tab(tab_active) {
            that.$post("sapi/user/shoporderlists", { status: tab_active }, function (list) {
                that.list = list;
            });
            that.tab_active = tab_active;
        },
        cancle: function cancle(orderno) {
            that.$post("shop_sapi/user_order/cancel", { orderno: orderno }, function (data) {
                that.toast(data);
                that.tab(that.tab_active);
            });
        },
        confirm: function confirm(orderno) {
            that.$post("shop_sapi/user_order/confirm", { orderno: orderno }, function (data) {
                that.toast(data);
                that.tab(that.tab_active);
            });
        },
        exp: function exp(orderno) {
            wx.navigateTo({
                url: '/pages/order/shop_express/main?orderno=' + orderno
            });
        }
    }
});

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "tab"
  }, [_c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 'all' ? 'active' : ''],
    attrs: {
      "eventid": '2_0'
    },
    on: {
      "click": function($event) {
        _vm.tab('all')
      }
    }
  }, [_vm._v("全部")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 0 ? 'active' : ''],
    attrs: {
      "eventid": '2_1'
    },
    on: {
      "click": function($event) {
        _vm.tab(0)
      }
    }
  }, [_vm._v("待付款")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 1 ? 'active' : ''],
    attrs: {
      "eventid": '2_2'
    },
    on: {
      "click": function($event) {
        _vm.tab(1)
      }
    }
  }, [_vm._v("待发货")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 2 ? 'active' : ''],
    attrs: {
      "eventid": '2_3'
    },
    on: {
      "click": function($event) {
        _vm.tab(2)
      }
    }
  }, [_vm._v("待收货")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 3 ? 'active' : ''],
    attrs: {
      "eventid": '2_4'
    },
    on: {
      "click": function($event) {
        _vm.tab(3)
      }
    }
  }, [_vm._v("已完成")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 5 ? 'active' : ''],
    attrs: {
      "eventid": '2_5'
    },
    on: {
      "click": function($event) {
        _vm.tab(5)
      }
    }
  }, [_vm._v("退款")])]), _vm._v(" "), _c('div', {
    staticClass: "void"
  }), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "top"
    }, [_c('div', {
      staticClass: "orderno"
    }, [_vm._v("订单编号：" + _vm._s(item.orderno))]), _vm._v(" "), (item.status == 0) ? _c('div', {
      staticClass: "status"
    }, [_vm._v("待付款")]) : _vm._e(), _vm._v(" "), (item.status == 1) ? _c('div', {
      staticClass: "status"
    }, [_vm._v("待发货")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "status"
    }, [_vm._v("待收货")]) : _vm._e(), _vm._v(" "), (item.status == 5) ? _c('div', {
      staticClass: "status"
    }, [_vm._v("退款")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('img', {
      staticClass: "pic",
      attrs: {
        "src": _vm.resurl + item.pic,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "left"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "price_num"
    }, [_c('span', {
      staticClass: "price_"
    }, [_vm._v("￥" + _vm._s(item.price))]), _vm._v(" "), _c('span', {
      staticClass: "num"
    }, [_vm._v("x" + _vm._s(item.number))])]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_vm._v("总价："), _c('span', [_vm._v("￥" + _vm._s((item.price - 0) * (item.number - 0)))])])])]), _vm._v(" "), _c('div', {
      staticClass: "top"
    }, [_c('div', {
      staticClass: "orderno"
    }, [_vm._v("下单时间：" + _vm._s(item.datetime))])]), _vm._v(" "), _c('div', {
      staticClass: "bottom"
    }, [(item.status == 0) ? _c('div', {
      staticClass: "btu"
    }, [_vm._v("付款")]) : _vm._e(), _vm._v(" "), (item.status == 0) ? _c('div', {
      staticClass: "btu color",
      attrs: {
        "eventid": '4_6_' + index
      },
      on: {
        "click": function($event) {
          _vm.cancle(item.orderno)
        }
      }
    }, [_vm._v("取消订单")]) : _vm._e(), _vm._v(" "), (item.status == 2 || item.status == 3) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_7_' + index
      },
      on: {
        "click": function($event) {
          _vm.exp(item.orderno)
        }
      }
    }, [_vm._v("查看物流")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_8_' + index
      },
      on: {
        "click": function($event) {
          _vm.confirm(item.orderno)
        }
      }
    }, [_vm._v("完成订单")]) : _vm._e(), _vm._v(" "), (item.status == 5) ? _c('div', {
      staticClass: "btu color"
    }, [_vm._v("已退款")]) : _vm._e()])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7672e530", esExports)
  }
}

/***/ })

},[172]);