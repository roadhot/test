require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(158);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3ffb5000_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ffb5000"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3ffb5000_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/normal/make/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ffb5000", Component.options)
  } else {
    hotAPI.reload("data-v-3ffb5000", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_shoping__ = __webpack_require__(11);


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
var default_data = {
    user: null,
    init_coupon: false,
    coupon_index: 0,
    coupon_id: null,
    remark: null,
    total_price: "",
    id: null,
    pt_id: null,
    buylist: [],
    order: { goods_list: [] },
    address: null,
    orderno: null,
    paytype: 1,
    index: 0,
    has_coupon: false,
    czlist: [],
    shop_id: "",
    countnum: 0,
    coupon_list: [],
    coupon_price: 0,
    coupon: null,
    pay_type_list: [{ pay_type: 0, name: "不使用积分抵扣", checked: 'true' }, { pay_type: 1, name: "使用积分抵扣" }],
    jifenkoujian: 0,
    pay_type: 1
};
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit(default_data);
    },
    onLoad: function onLoad() {
        that = this;
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        that.check();
    },
    onUnload: function onUnload() {
        that.coupon_list_info = [];
        that.coupon_list = [];
    },

    methods: {
        init: function init() {
            that.$post("api/user/get", null, function (user) {
                that.user = user;
                if (that.user.integral > 100) {
                    that.jifenkoujian = '10.00';
                } else {
                    that.jifenkoujian = parseFloat(that.user.integral * 1 / 10);
                }
            });
            
            that.id = that.get('id'); //商品id
            that.orderno = null;

            if (that.id != null) {
                var buynumber = that.get("number");
                if (buynumber == null) {
                    buynumber = 1;
                }
                that.buylist = [{ id: that.id, buynumber: buynumber }];
            } else {
                that.buylist = Object(__WEBPACK_IMPORTED_MODULE_2__utils_shoping__["d" /* get */])();
            }
            if (that.cache("address") != null && that.cache("address") != "") {
                try {
                    that.address = JSON.parse(that.cache("address"));
                    that.setpre();
                } catch (e) {}
            } else {
                that.toast('请先选择地址');
                that.changeaddress();
            }
        },
        set_coupon: function set_coupon(e) {
            var i = parseInt(e.target.value);
            that.set_coupon_core(i);
        },
        set_coupon_core: function set_coupon_core(i) {
            var coupon = that.coupon_list[i];
            that.coupon = coupon;
            that.coupon_id = coupon.id;
            that.coupon_index = i;
            that.coupon_price = coupon.discount;
            that.setpre();
        },
        select: function select(i) {
            that.shop_id = i;
        },

        pickerChange: function pickerChange(e) {
            that.index = e.mp.detail.value;
        },

        pay: function pay() {

            that.$post("api/order/pay", {
                orderno: that.orderno
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
                        setTimeout(function () {
                            wx.redirectTo({
                                url: "/pages/shop/order/main?status=1"
                            });
                        }, 2000);
                    },
                    'fail': function fail(ref) {
                        that.toast("支付失败");
                    }
                });
            });
        },
        radioChange: function radioChange(e) {
            that.pay_type = parseInt(e.target.value);
            if (that.pay_type == 1) {
                if (that.user.integral > 100) {
                    that.jifenkoujian = '10.00';
                } else {
                    that.jifenkoujian = parseFloat(that.user.integral * 1 / 10);
                }
            }
            that.setpre();
        },
        setpre: function setpre() {
            that.$post("api/order/make", { goods_list: that.buylist, address: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.address), params: { coupon_id: that.coupon_id }, type: "normal", is_integral: that.pay_type }, function (_order) {
                that.order = _order;
                that.orderno = _order.orderno;
            });
        },


        onclickmake: function onclickmake() {

            // // console.log(adress)
            // that.$post("api/order/make", {pre_token: that.pre_token,make_params:{coupon_id:that.coupon_id}, address: realaddress,remark:that.remark}, function (_order) {
            //     that.orderno = _order
            //     if (that.orderno != null) {
            //         that.pay();
            //     }
            //     if(that.id==null){
            //         clear()
            //     }
            // })
            // that.$post("api/order/make",{goods_list: that.buylist, address: JSON.stringify(that.address),params:{coupon_id:that.coupon_id},type: "normal"}, function (_order) {
            //     that.orderno = _order.orderno
            //     that.order = _order
            //
            // })
            if (that.orderno != null) {
                that.pay();
            } else {
              wx.showToast({
                title: '请添加商品',
                icon: 'none',
                duration: 2000
              })
              wx.navigateBack({
                complete: (res) => {},
              })
            }
            if (that.id == null) {
                Object(__WEBPACK_IMPORTED_MODULE_2__utils_shoping__["b" /* clear */])();
            }
        },
        set_coupon_list: function set_coupon_list() {
            var goods_price = that.order.goods_price;
            that.$post("api/coupon/listbytotalprice", { totalprice: goods_price }, function (data) {
                if (data != null && data.length > 0) {
                    that.coupon_list = data;
                    that.set_coupon_core(0);
                }
            });
        },


        changeaddress: function changeaddress() {
            wx.chooseAddress({
                success: function success(res) {
                    var cou = 0;
                    var address = {
                        addressee: res.userName,
                        province: res.provinceName,
                        addressdetail: res.detailInfo,
                        city: res.cityName,
                        county: res.countyName,
                        tel: res.telNumber
                    };
                    if (that.address != 0) {
                        cou = 1;
                    }
                    that.address = address;
                    that.cache("address", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(address));
                    if (cou == 0) {
                        that.setpre();
                    } else {
                        that.$post("api/order/update_address", { orderno: that.order.orderno, address: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.address) }, function (data) {});
                    }
                },
                fail: function fail() {
                    wx.showModal({
                        title: '重要提示',
                        content: '您禁止了地址选择器,请删除小程序后重新添加',
                        showCancel: false,
                        success: function success(res) {
                            wx.navigateBack();
                        }
                    });
                }
            });
        }

    }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "line",
    attrs: {
      "eventid": '1_0'
    },
    on: {
      "click": _vm.changeaddress
    }
  }, [_c('div', {
    staticClass: "right"
  }, [(_vm.address == null) ? _c('div', {
    staticClass: "noaddress"
  }, [_c('span', [_vm._v("您尚未设置收件地址\\n点击设置")])]) : _c('div', {
    staticClass: "address"
  }, [_c('div', {
    staticClass: "span",
    staticStyle: {
      "color": "#000"
    }
  }, [_c('span', {
    attrs: {
      "space": "ensp"
    }
  }, [_vm._v(_vm._s(_vm.address.addressee) + " " + _vm._s(_vm.address.tel))])]), _vm._v(" "), _c('div', {
    staticClass: "span"
  }, [_c('span', {
    attrs: {
      "space": "ensp"
    }
  }, [_vm._v(_vm._s(_vm.address.province) + " " + _vm._s(_vm.address.city) + " " + _vm._s(_vm.address.county) + " " + _vm._s(_vm.address.addressdetail))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("订单详情")]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.order.goods_list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "goods"
    }, [_c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": _vm.resurl + item.pic + '?x-oss-process=image/resize,m_fill,w_240,h_240',
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.price))]), _vm._v(" "), _c('div', {
      staticClass: "buynumber"
    }, [_vm._v("x" + _vm._s(item.buynumber))])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "remarkdv"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.remark),
      expression: "remark"
    }],
    attrs: {
      "name": "",
      "id": "",
      "cols": "30",
      "rows": "10",
      "placeholder": "请输入备注信息",
      "eventid": '2_1'
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.pay_type == 1) ? _c('div', {
    staticStyle: {
      "padding-bottom": "10px",
      "padding-left": "15px",
      "background-color": "#fff"
    }
  }, [_vm._v("积分抵扣:" + _vm._s(_vm.order.consume_price) + " 元")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "buy_btn",
    attrs: {
      "eventid": '2_2'
    },
    on: {
      "click": _vm.onclickmake
    }
  }, [_vm._v("立即付款")]), _vm._v(" "), _c('div', {
    staticClass: "real_price"
  }, [_vm._v("应付：\n                "), _c('span', [_vm._v(_vm._s(_vm.order.totalprice))]), (_vm.order.exp_price == 0) ? _c('span', [_vm._v("(包邮)")]) : _c('span', [_vm._v("(运费" + _vm._s(_vm.order.exp_price) + ")")])])]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.coupon_index,
      "range-key": "text",
      "range": _vm.coupon_list,
      "eventid": '1_3'
    },
    on: {
      "change": _vm.set_coupon
    }
  }, [(_vm.coupon) ? _c('view', {
    staticClass: "coupon"
  }, [_vm._v("\n                优惠券:" + _vm._s(_vm.coupon['text']) + "\n            ")]) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ffb5000", esExports)
  }
}

/***/ })

},[157]);