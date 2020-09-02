require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(153);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_693066b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-693066b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_693066b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/normal/list/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-693066b0", Component.options)
  } else {
    hotAPI.reload("data-v-693066b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            page: 1,
            loading: false,
            loaded: false,
            sort: 0,
            cate_id: null,
            search: null
        });
    },
    onShow: function onShow() {
        that = this;
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        that.check();
    },
    onReachBottom: function onReachBottom() {
        that.loadmore();
    },


    methods: {
        init: function init() {
            that.cate_id = that.get("cate_id");

            that.search = decodeURIComponent(that.get("search"));

            console.log(that.search);
            // if(that.search==undefined){
            //     that.search=null
            // }
            that.showlist();
        },

        //            setsort(sort) {
        //                that.sort = sort
        //            },
        setsort: function setsort(i) {
            that.sort = i;
            that.showlist();
        },
        showlist: function showlist() {
            this.page = 1;
            this.loading = false;
            this.loaded = false;
            this.list = [];
            this.loadmore();
        },
        loadmore: function loadmore() {
            if (that.loading || that.loaded) {
                return;
            }
            that.loading = true;
            if (that.search == "undefined") {
                that.search = null;
            }
            that.$post("sapi/goods/lists", {
                cate_id: that.cate_id,
                search: that.search,
                page: that.page,
                sort: that.sort
            }, function (_list) {
                if (_list.length == 0) {
                    that.toast("暂无相关商品，3秒后自动返回上层");
                    setTimeout(function () {

                        wx.navigateBack({
                            delta: 1
                        });
                    }, 3000);
                } else {
                    for (var i in _list) {
                        that.list.push(_list[i]);
                    }
                    if (_list.length < 10) {
                        that.loaded = true;
                    }
                    that.$nextTick(function () {
                        that.page++;
                        that.loading = false;
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    attrs: {
      "id": "oplist"
    }
  }, [_c('div', {
    staticClass: "op",
    class: _vm.sort == 0 ? 'activate' : '',
    attrs: {
      "id": "sort_0",
      "eventid": '3_0'
    },
    on: {
      "click": function($event) {
        _vm.setsort(0)
      }
    }
  }, [_vm._v("综合")]), _vm._v(" "), _c('div', {
    staticClass: "op",
    class: _vm.sort == 1 ? 'activate' : '',
    attrs: {
      "id": "sort_1",
      "eventid": '3_1'
    },
    on: {
      "click": function($event) {
        _vm.setsort(1)
      }
    }
  }, [_vm._v("销量")]), _vm._v(" "), _c('div', {
    staticClass: "op",
    class: _vm.sort == 2 ? 'activate' : '',
    attrs: {
      "id": "sort_2",
      "eventid": '3_2'
    },
    on: {
      "click": function($event) {
        _vm.setsort(2)
      }
    }
  }, [_vm._v("价格")])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "40px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "area",
    attrs: {
      "id": "list"
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "goods_item"
    }, [_c('a', {
      staticClass: "goods",
      attrs: {
        "href": '/pages/normal/detail/main?id=' + item.id
      }
    }, [_c('div', {
      staticClass: "pic"
    }, [_c('img', {
      attrs: {
        "src": _vm.resurl + item.pic + '?x-oss-process=image/resize,m_fill,w_240,h_240'
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.price))]), _vm._v(" "), _c('div', {
      staticClass: "sales"
    }, [_vm._v("销量:" + _vm._s(item.sales))])])])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-693066b0", esExports)
  }
}

/***/ })

},[152]);