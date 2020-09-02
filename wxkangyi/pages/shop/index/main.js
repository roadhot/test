require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(188);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5810d7b6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(191);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5810d7b6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/shop/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5810d7b6", Component.options)
  } else {
    hotAPI.reload("data-v-5810d7b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            cindex: 0,
            slide_list: [],
            cate_list: [],
            goods_list: [],
            name:''
        });
    },
  // onLoad: function onLoad(opt) {
  //   console.log(opt);
  //   that = this;
  //   that.id = that.get("id");
  // },
    mounted: function mounted() {},
    onReachBottom:function(){
      console.log(
        '上拉'+
        that.page
      )
      that.$post('api/goods/getone', { id: that.id,page:that.page }, function (list) {
       
        // api / goods / getone
        // that.goods_list = list.data;
        
        that.page+=1;
        for(var i=0;i<list.data.length;i++){
          that.goods_list.push(list.data[i])
        }
        that.tocate();
        console.log(that.goods_list)
        
      });


    },
    onShow: function onShow() {
        that = this;
        this.check();
        that.goods_list=null
      // console.log(that.get("id"))
      that.page=2;
      that.id = that.get("id");
      that.name=that.get("name")
      // console.log(that.goods_list)
    },
    methods: {
        init: function init() {
            that.$post('api/index/slide', null, function (list) {
                for (var i = 0; i < list.length; i++) {
                    list[i].i = i;
                }
                that.slide_list = list;
            });
          // that.$post('api/goods/getone', {id:that.id}, function (list) {
            
          //     console.log(list)
          //     // api / goods / getone
          //       that.cate_list = list;
          //       that.tocate();
          //   });
          that.$post('api/goods/getone', { id: that.id }, function (list) {

            // api / goods / getone
            that.goods_list = list.data;
            that.tocate();
          });
        },

        swiperChange: function swiperChange(e) {
            that.cindex = e.target.current;
        },
        // 查询商品列表
        tocate: function tocate() {
            var cate_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            // 查询指定分类下商品
            // that.$post('api/goods/lists', { cate_id: cate_id }, function (list) {
            //   // console.log(list)
            //     that.goods_list = list;
            // });
        }
    }
});

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('view', {
    staticClass: "slide"
  }, [_c('swiper', {
    staticClass: "bannerSwiper",
    attrs: {
      "previous-margin": "54rpx",
      "next-margin": "54rpx",
      "indicator-dots": "true",
      "indicator-color": "#B5B5B5",
      "indicator-active-color": "#fff",
      "interval": "3000",
      "duration": "500",
      "circular": "true",
      "eventid": '2_0'
    },
    on: {
      "change": _vm.swiperChange
    }
  }, _vm._l((_vm.slide_list), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('img', {
      class: index == _vm.cindex ? 'imageBanner' : 'imageBanner_small',
      attrs: {
        "src": _vm.resurl + item.pic + '?x-oss-process=image/resize,m_fill,w_750,h_300',
        "mode": "aspectFill"
      }
    })])
  }))], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cate"
  }, _vm._l((_vm.cate_list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '2_1_' + index
      },
      on: {
        "click": function($event) {
          _vm.tocate(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.resurl + item.pic + '?x-oss-process=image/resize,m_fill,w_180',
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "cate_name"
    }, [_vm._v(_vm._s(item.name))])])
  })), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "cricle"
  }, [_c('div', {
    staticClass: "cricle-col"
  }, [_c('p', [_vm._v("\n          商品列表\n        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "goods_list"
  }, _vm._l((_vm.goods_list), function(goods, index) {
    return _c('a', {
      key: _vm.goods_index,
      staticClass: "item goods_box",
      attrs: {
        "href": '/pages/normal/detail/main?id=' + goods.id
      }
    }, [_c('div', {}, [_c('div', {
      staticClass: "goods_pic"
    }, [_c('img', {
      attrs: {
        "src": _vm.resurl + goods.pic,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "goods_info_box"
    }, [_c('div', {
      staticClass: "goods_title"
    }, [_vm._v(_vm._s(goods.name))]), _vm._v(" "), _c('div', {
      staticClass: "goods_price"
    }, [_vm._v("￥ " + _vm._s(goods.price))]), _vm._v(" "), _c('div', {
      staticClass: "goods_sales"
    }, [_vm._v("销量" + _vm._s(goods.sales))])])])])
  }))])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "line",
    staticStyle: {
      "padding-top": "10px"
    }
  }, [_c('div', {
    staticClass: "line-col"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "line",
    staticStyle: {
      "padding-bottom": "10px"
    }
  }, [_c('div', {
    staticClass: "line-col"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5810d7b6", esExports)
  }
}

/***/ })

},[187]);