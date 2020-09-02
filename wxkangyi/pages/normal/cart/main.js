require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(73);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_06cb129c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(77);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_06cb129c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/normal/cart/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06cb129c", Component.options)
  } else {
    hotAPI.reload("data-v-06cb129c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shoping__ = __webpack_require__(11);

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
            list: [],
            totalprice: 0,
            id: null,
            op: 'sub',
            ops: 'add',
            lists:0
        });
    },
    onShow: function onShow() {
        that = this;
        that.check();
    },
    mounted: function mounted() {},

    methods: {
        init: function init() {
            var buylist = Object(__WEBPACK_IMPORTED_MODULE_1__utils_shoping__["d" /* get */])();
            
            that.lists = buylist.length;

            that.$post("api/goods/full", { list: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(buylist) }, function (list) {
                that.list = list;
                that.settotalprice();
            });
        },

        settotalprice: function settotalprice() {
            var totalprice = 0;
            var list = that.list;
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                totalprice += parseInt(item['price'] * item['buynumber'] * 100);
            }
            that.totalprice = totalprice / 100;
        },
        opnumber: function opnumber(_id, _op) {
            that.id = _id;
            that.op = _op;
            var goods = that.getgoods(_id);
            if (_op == "sub") {
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_shoping__["a" /* change */])(goods, -1);
            }
            that.init();
        },
        opnumbers: function opnumbers(_id, _ops) {
            that.id = _id;
            that.ops = _ops;
            var goods = that.getgoods(_id);
            if (_ops == "add") {
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_shoping__["a" /* change */])(goods, 1);
            }
            that.init();
        },
        getgoods: function getgoods(id) {
            var list = that.list;
            var _index = -1;
            console.log(list);
            for (var i in list) {

                if (list[i].id == id) {
                    _index = i;
                }
            }
            return list[_index];
        },
        del: function del(_id) {
            that.id = _id;
            wx.showModal({
                title: '操作提示',
                content: '确定要将该商品移除购物车么',
                success: function success(res) {
                    if (res.confirm) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils_shoping__["c" /* del */])(_id);
                        that.init();
                    }
                }
            });
        },
        buy: function buy() {
            wx.navigateTo({
                url: '/pages/normal/make/main'
            });
        }
    }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [(_vm.list.length == 0) ? _c('block', [_c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/shopingcar.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('text', [_vm._v("购物车空空如也 快去逛逛吧")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/pages/index/index/main",
      "open-type": "switchTab"
    }
  }, [_vm._v("去逛逛")])])])]) : _c('block', [_c('div', {
    staticClass: "buylist"
  }, _vm._l((_vm.list), function(item, index) {
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
      staticClass: "numberop"
    }, [_c('div', {
      staticClass: "changenumber",
      attrs: {
        "eventid": '6_0_' + index
      },
      on: {
        "click": function($event) {
          _vm.opnumber(item.id, _vm.op)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.buynumber))]), _vm._v(" "), _c('div', {
      staticClass: "changenumber",
      attrs: {
        "data-op": "add",
        "eventid": '6_1_' + index
      },
      on: {
        "click": function($event) {
          _vm.opnumbers(item.id, _vm.ops)
        }
      }
    }, [_vm._v("+")])]), _vm._v(" "), _c('img', {
      staticClass: "del",
      attrs: {
        "src": "/static/images/deld.png",
        "alt": "",
        "eventid": '5_2_' + index
      },
      on: {
        "click": function($event) {
          _vm.del(item.id)
        }
      }
    })])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "totalprice"
  }, [_vm._v("总额:" + _vm._s(_vm.totalprice))]), _vm._v(" "), _c('a', {
    staticClass: "button",
    attrs: {
      "eventid": '2_3'
    },
    on: {
      "click": _vm.buy
    }
  }, [_vm._v("立即结算")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-06cb129c", esExports)
  }
}

/***/ })

},[72]);