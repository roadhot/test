require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(36);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_861e9702_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(39);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_861e9702_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-861e9702", Component.options)
  } else {
    hotAPI.reload("data-v-861e9702", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            top_img: '/static/images/48f9615fb42df565d6aadb496931a21.jpg',
            code: null,
            rule: '',
          });
    },
    mounted: function mounted() {},
    onShow: function onShow() {
        that = this;
        this.check();
        //获取data的方式
        that.top_img='/static/images/48f9615fb42df565d6aadb496931a21.jpg'
      },

    methods: {
        init: function init() {
            that.$post("/api/index/info", null, function (data) {
                that.rule = data.info;
            });
        },
      
        scan: function scan() {
          //图片变化设置开始
          that.top_img = '/static/images/9b2d238b56026ac2ca1024cd6038bdb.jpg'
          //图片变化设置结束
          //检查余额
          wx.request({
            url: 'https://wxadmin.kangyichina.cn/api/Bal/checkBalance', //仅为示例，并非真实的接口地址
            data: {
              token : wx.getStorageSync("token")
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {

              console.log(res)
              if(res.data.result===0){
                wx.showLoading({
                  title: '余额不足',
                  icon: 'none',
                  duration: 1500,
                  mask: true,
                  success:function(){
                    setTimeout(function () {
                      wx.navigateTo({
                        url: '/pages/topup/topup',
                      })();
                    }, 2000) 
                  }
                })
              }else{
                wx.scanCode({
                  onlyFromCamera: true,
                  success: function success(res) {
                      var q = res.result;
                      console.log(q)
                      // var name=s.substring(s.lastIndexOf("/")+1);
                      var name=q.substring(q.lastIndexOf('id=')+3);
                      q='UN '+name
                      console.log('code:'+q)


                            wx.request({
                                  url: 'https://wxadmin.kangyichina.cn/api/order/checkOrder', 
                                  data: {
                                  token:wx.getStorageSync("token"),
                                  code:q
                                  },
                                  header: {
                                  'content-type': 'application/json'
                                  },
                                  success (res) {
                                      // console.log(res)     
                                      if(res.data.result==3){
                                        wx.showToast({
                                            title: '正在使用其他设备',
                                            icon: 'none',
                                            duration: 2000,
                                            mask: true,
                                            success: function success() {
                                                
                                                setTimeout(function () {
                                                    wx.navigateBack();
                                                }, 2000)    
                                                return ;
                                                                                
                                            }
                                        })  
                                      } else if(res.data.result==4) {
                                        wx.showToast({
                                          title: '该设备已被占用',
                                          icon: 'none',
                                          duration: 2000,
                                          mask: true,
                                          success: function success() {
                                              setTimeout(function () {
                                                  wx.navigateBack();
                                              }, 2000)    
                                              return ;
                                                                              
                                          }
                                      })
                                      } else {
                                        if (q == null) {
                                          that.toast("二维码格式不正确");
                                          return;
                                      }
                                      var url = decodeURIComponent(q);
                                      var lastindex = url.lastIndexOf("/"); //取到文件名开始到最后一个点的长度
                                      var url_length = url.length; //取到文件名长度
                                      var q_before = url.substring(lastindex + 1, url_length);
                                      if (q_before == null) {
                                          that.toast("二维码格式不正确");
                                          return;
                                      }
                                      console.log('code:'+q_before)
                                      wx.navigateTo({
                                          url: '/pages/index/main/main?code=' + q_before
                                      });
                                      }  
                                  }
                              })

            
                  }
              });
              }
            }
          })
          //检查余额

        }
    },

});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('img', {
    staticClass: "top-img",
    attrs: {
      "src": "/static/images/index_back.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btnlist"
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/erweima.png",
      "alt": "",
      "eventid": '3_0'
    },
    on: {
      "click": function($event) {
        _vm.scan()     
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "smks"
  }, [_c('button', {
    attrs: {
      "eventid": '2_1'
    },
    on: {
      "click": function($event) {
        _vm.scan()
        //这里是单击按钮时候变化
        // that.data.top_img='432'
        //  console.log(this.top_img)
        //  this.top_img="9b2d238b56026ac2ca1024cd6038bdb.png"
        //  console.log(this.top_img)
      }
    }
  }, [_vm._v("扫码开锁")])], 1), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', [_vm._v("收费标准：")]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.rule)
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-861e9702", esExports)
  }
}

/***/ })

},[35]);
