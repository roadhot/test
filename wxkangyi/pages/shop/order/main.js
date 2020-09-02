require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(193);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d91f0be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d91f0be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d91f0be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/shop/order/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d91f0be", Component.options)
  } else {
    hotAPI.reload("data-v-0d91f0be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            status: "0",
            list: [],
            tab_active: "0",
            index: 1,
            name: [],
            cancelreason: false,
            message: "",
            num: null,
            order_num: null,
            show:0,
        });
    },
    onLoad: function onLoad() {
        that = this;
        that.status = that.get("status");
    },
    onShow: function onShow() {
        that.check();
        that.cancelreason = false;
    },

    methods: {
        init: function init() {
            that.tab(that.status);
        },
        qrsh: function qrsh(id) {
          console.log(id)
            that.$post("/api/order/finish", { orderno: id }, function (data) {
                if (data.code == 0) {
                    that.toast('确认成功');
                    that.tab(2);
                } else {
                    that.toast('操作失败');
                }
            });
        },
        tab: function tab(tab_active) {
            that.tab_active = tab_active;
            that.index = 1;
            that.list = [];
            that.display();
        },
        display: function display() {
            that.$post("api/user_order/lists", { status: that.tab_active, page: that.index }, function (data) {
                // that.order_num = data.order_status;
                //t/hat.order_num.all= that.order_num.status_zero*1+that.order_num.status_one*1+that.order_num.status_two*1+that.order_num.status_three*1;
                var lastlist = that.list;
                for (var i in data) {
                    lastlist.push(data[i]);
                }
                that.list = lastlist;

                that.index++;
                console.log(that.list)
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
            that.$post("api/user_order/confirm", { orderno: orderno }, function (data) {
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
            that.$post("api/order/backorder", { orderno: that.num, message: that.message }, function (data) {
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

            that.$post("api/order/pay", {
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "tab"
  }, [_c('div', {
    staticClass: "item",
    class: [_vm.tab_active == 0 ? 'active' : ''],
    attrs: {
      "eventid": '2_0'
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
      "eventid": '2_1'
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
      "eventid": '2_2'
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
      "eventid": '2_3'
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
      "eventid": '2_4'
    },
    on: {
      "click": function($event) {
        _vm.tab(5)
      }
    }
  }, [_vm._v("待退款")])]), _vm._v(" "), _c('div', {
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
    }, [_vm._v("已完成")]) : _vm._e(), _vm._v(" "), (item.status == 4) ? _c('div', {
      staticClass: "status"
    }, [_vm._v("待退款")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
      }, [_vm._v("x"), _c('span', [_vm._v(_vm._s(i.buynumber))])])])])])
    })), _vm._v(" "), _c('div', {
      staticClass: "datetime_price"
    }, [_c('div', {
      staticClass: "datetime"
    }, [_vm._v("下单时间：" + _vm._s(item.datetime))]), _vm._v(" "), _c('div', {
      staticClass: "totalprice"
    }, [_vm._v("订单总和：" + _vm._s(item.totalprice))])]), _vm._v(" "), _c('div', {
      staticClass: "datetime_price"
    }, [(item.exp_no) ? _c('div', {
      staticClass: "totalprice"
    }, [_vm._v("快递名称：" + _vm._s(item.exp_no))]) : _vm._e(), _vm._v(" "), (item.exp_order) ? _c('div', {
      staticClass: "totalprice"
    }, [_vm._v("快递单号：" + _vm._s(item.exp_order))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "bottom"
    }, [(item.status == 0) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_5_' + index
      },
      on: {
        "click": function($event) {
          _vm.topay(item.orderno)
        }
      }
    }, [_vm._v("立即付款")]) : _vm._e(), _vm._v(" "), (item.status == 1 || item.status == 2) ? _c('div', {
      staticClass: "btu color",
      attrs: {
        "eventid": '4_6_' + index
      },
      on: {
        "click": function($event) {
          _vm.cancle(item.orderno)
        }
      }
    }, [_vm._v("申请退款")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('div', {
      staticClass: "btu",
      attrs: {
        "eventid": '4_7_' + index
      },
      on: {
        "click": function($event) {
          _vm.qrsh(item.orderno)
        }
      }
    }, [_vm._v("确认收货")]) : _vm._e()])])
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
      "eventid": '2_8'
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
      "eventid": '2_9'
    },
    on: {
      "click": function($event) {
        _vm.confirmcancel()
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    staticClass: "canceltuikuan",
    attrs: {
      "eventid": '2_10'
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
     require("vue-hot-reload-api").rerender("data-v-0d91f0be", esExports)
  }
}

/***/ })

},[192]);