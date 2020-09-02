require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(26);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_92db1eda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(29);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-92db1eda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_92db1eda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/driver/order/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92db1eda", Component.options)
  } else {
    hotAPI.reload("data-v-92db1eda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            status: 1,
            list: [],
            tab_active: "",
            index: 1,
            name: [],
            cancelreason: false,
            message: "",
            num: null
        });
    },
    onLoad: function onLoad() {
        that = this;
        that.status = that.get("status");
    },
    onShow: function onShow() {
        that.check();
    },

    methods: {
        init: function init() {
            that.tab(that.status);
        },
        tab: function tab(tab_active) {
            that.tab_active = tab_active;
            that.index = 1;
            that.list = [];
            that.display();
        },
        display: function display() {
            that.$post("api/user_driver/lists", { status: that.tab_active, page: that.index }, function (list) {
        
              var lastlist = that.list;
                for (var i in list) {
                    lastlist.push(list[i]);
                }
                that.list = lastlist;
                that.index++;
            });
        },

        onReachBottom: function onReachBottom() {
            that.display();
        },
        cancle: function cancle(orderno) {
            that.cancelreason = true;
            that.num = orderno;
        },
        confirm: function confirm(orderno) {
            that.$post("sapi/user_order/confirm", { orderno: orderno }, function (data) {
                that.toast(data);
                that.tab(that.tab_active);
            });
        },
        exp: function exp(orderno) {
            wx.navigateTo({
                url: '/pages/order/vetiot_express/main?orderno=' + orderno
            });
        },
        canceltuikuan: function canceltuikuan() {
            that.cancelreason = false;
            that.message = "";
            that.num = null;
            console.log("我再想想");
        },
        confirmcancel: function confirmcancel() {
            that.$post("sapi/order/backorder", { orderno: that.num, message: that.message }, function (data) {
                that.toast(data);
                that.tab(that.tab_active);
                that.num = null;
                that.cancelreason = false;
                that.message = "";
            }, function (mess) {
                that.cancelreason = false;
                that.toast(mess);
                that.message = "";
            });
        },
        topay: function topay(orderno) {
            that.pay(orderno);
        },


        pay: function pay(orderno) {

            that.$post("sapi/order/pay", {
                orderno: orderno
                // openid: that.openid,
                // openid_key: that.openid_key
            }, function (data) {
                wx.requestPayment({
                    'timeStamp': data.timestamp + '',
                    'nonceStr': data.nonceStr,
                    'package': data.package,
                    'signType': 'MD5',
                    'paySign': data.paySign,
                    'success': function success(ref) {
                        that.toast("支付成功");
                        that.init();
                    },
                    'fail': function fail(ref) {
                        that.toast("支付失败");
                    }
                });
            });
        },

        review: function review(orderno, goods_id) {
            wx.navigateTo({
                url: '/pages/review/review/main?orderno=' + orderno + '&goods_id=' + goods_id
            });
        }
    }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "tab"
  }, [_c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 1 ? 'active' : ''],
    attrs: {
      "eventid": '2_0'
    },
    on: {
      "click": function($event) {
        _vm.tab(1)
      }
    }
  }, [_vm._v("正在租赁")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 2 ? 'active' : ''],
    attrs: {
      "eventid": '2_1'
    },
    on: {
      "click": function($event) {
        _vm.tab(2)
      }
    }
  }, [_vm._v("已经完成")])]), _vm._v(" "), _c('div', {
    staticClass: "void"
  }), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "line"
    }, [_vm._v("订单编号：" + _vm._s(item.orderno))]), _vm._v(" "), _c('div', {
      staticClass: "line"
    }, [_vm._v("开始时间：" + _vm._s(item.start_datetime))]), _vm._v(" "), _c('div', {
      staticClass: "line"
    }, [_vm._v("支付金额：￥" + _vm._s(item.pay_price))]), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "line"
    }, [_vm._v("归还时间：" + _vm._s(item.end_datetime))]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "line"
    }, [_vm._v("使用时长：" + _vm._s(item.use_time) + "秒")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "line"
    }, [_vm._v("消费金额：￥" + _vm._s(item.price))]) : _vm._e()])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-92db1eda", esExports)
  }
}

/***/ })

},[25]);