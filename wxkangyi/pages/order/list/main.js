require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(163);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0214d22a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(164)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0214d22a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0214d22a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/order/list/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0214d22a", Component.options)
  } else {
    hotAPI.reload("data-v-0214d22a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 165:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            status: "",
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
            that.$post("sapi/user_order/lists", { status: that.tab_active, page: that.index }, function (list) {

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

/***/ 166:
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
  }, [_vm._v("已完成")])]), _vm._v(" "), _c('div', {
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
    }, [_vm._v("待收货")]) : _vm._e(), _vm._v(" "), (item.status == 3) ? _c('div', {
      staticClass: "status"
    }, [_vm._v("已完成")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, _vm._l((item.goods_list), function(i, v) {
      return _c('div', {
        key: v,
        staticClass: "idv"
      }, [_c('img', {
        staticClass: "pic",
        attrs: {
          "src": _vm.resurl + i.pic,
          "alt": ""
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "left"
      }, [_c('div', {
        staticClass: "name"
      }, [_c('span', [_vm._v(_vm._s(i.name))])]), _vm._v(" "), _c('div', {
        staticClass: "price_num"
      }, [_c('span', {
        staticClass: "price_"
      }, [_vm._v("￥"), _c('span', [_vm._v(_vm._s(i.price))])]), _c('span', {
        staticClass: "num"
      }, [_vm._v("x"), _c('span', [_vm._v(_vm._s(i.buynumber))])])]), _vm._v(" "), (item.status == 3) ? _c('div', {
        staticClass: "btu",
        attrs: {
          "eventid": '6_5_' + index + '-' + v
        },
        on: {
          "click": function($event) {
            _vm.review(item.orderno, i.goods_id)
          }
        }
      }, [_vm._v("评价")]) : _vm._e()])])
    })), _vm._v(" "), _c('div', {
      staticClass: "datetime_price"
    }, [_c('div', {
      staticClass: "datetime"
    }, [_vm._v("下单时间：" + _vm._s(item.datetime))]), _vm._v(" "), _c('div', {
      staticClass: "totalprice"
    }, [_vm._v("订单总和：" + _vm._s(item.totalprice))])]), _vm._v(" "), _c('div', {
      staticClass: "bottom"
    }, [(item.status == 0) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_6_' + index
      },
      on: {
        "click": function($event) {
          _vm.topay(item.orderno)
        }
      }
    }, [_vm._v("立即付款")]) : _vm._e(), _vm._v(" "), (item.status == 1) ? _c('div', {
      staticClass: "btu color",
      attrs: {
        "eventid": '4_7_' + index
      },
      on: {
        "click": function($event) {
          _vm.cancle(item.orderno)
        }
      }
    }, [_vm._v("申请退款")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_8_' + index
      },
      on: {
        "click": function($event) {
          _vm.exp(item.orderno)
        }
      }
    }, [_vm._v("查看物流")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_9_' + index
      },
      on: {
        "click": function($event) {
          _vm.confirm(item.orderno)
        }
      }
    }, [_vm._v("完成订单")]) : _vm._e()])])
  })), _vm._v(" "), (_vm.cancelreason) ? _c('div', {
    staticClass: "reasondv",
    class: [_vm.cancelreason == true ? 'reasonactive' : '']
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.message),
      expression: "message"
    }],
    attrs: {
      "name": "",
      "id": "",
      "cols": "30",
      "rows": "10",
      "placeholder": "请填写退款原因",
      "eventid": '2_10'
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "confirmcancel",
    attrs: {
      "eventid": '2_11'
    },
    on: {
      "click": function($event) {
        _vm.confirmcancel()
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    staticClass: "canceltuikuan",
    attrs: {
      "eventid": '2_12'
    },
    on: {
      "click": function($event) {
        _vm.canceltuikuan()
      }
    }
  }, [_vm._v("我再想想")])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0214d22a", esExports)
  }
}

/***/ })

},[162]);