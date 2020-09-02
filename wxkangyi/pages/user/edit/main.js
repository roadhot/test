require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(198);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3c3b7d10_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(201);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(199)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3c3b7d10_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/edit/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c3b7d10", Component.options)
  } else {
    hotAPI.reload("data-v-3c3b7d10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
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
            info: {
                tel: null,
                name: null
            }
        });
    },
    mounted: function mounted() {},
    onShow: function onShow() {
        that = this;
        that.init();
        that.get();
    },

    methods: {
      //获取用户信息
        getuserinfo: function getuserinfo(e) {
            var userinfo = JSON.parse(e.target.rawData);
            console.log(userinfo)
            console.log(11)
            that.$post("api/user/autobind", userinfo, function (data) {
                that.submit_form();
            });
        },
        init: function init() {
            that.$post("api/user/get", null, function (data) {
                that.info.tel = data.tel;
                that.info.name = data.name;
            });
        },
        submit_form: function submit_form() {
            that.$post("api/user/set", that.info, function (e) {
                that.toast("编辑成功", function () {
                    wx.navigateBack();
                });
            });
        }
    }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "middle-nav"
  }, [_c('div', {
    staticClass: "line"
  }, [_c('label', [_vm._v("电    话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.info.tel),
      expression: "info.tel"
    }],
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号",
      "eventid": '3_0'
    },
    domProps: {
      "value": (_vm.info.tel)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.info.tel = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }, [_c('label', [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.info.name),
      expression: "info.name"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入姓名",
      "eventid": '3_1'
    },
    domProps: {
      "value": (_vm.info.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.info.name = $event.target.value
      }
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "botton-btn"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '2_2'
    },
    on: {
      "getuserinfo": _vm.getuserinfo
    }
  }, [_vm._v("确定\n    ")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c3b7d10", esExports)
  }
}

/***/ })

},[197]);