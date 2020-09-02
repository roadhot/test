require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_lib__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_lib__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__utils_lib___default.a);
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */

if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdcc911a", Component.options)
  } else {
    hotAPI.reload("data-v-cdcc911a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {}
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {
    
var m_color = "#20c987";
var baseurl = "https://wxadmin.kangyichina.cn/";

var resurl = "https://kangy.oss-cn-beijing.aliyuncs.com/";
var appname = "康懿综合健康";
var Lib = {};
Lib.install = function (Vue, options) {
    Vue.prototype.$post = function (api, data, cb, error_cb) {
        var _t = this;
        if (data == null) {
            data = {};
        }
        var token = wx.getStorageSync("token");
        if (token != null) {
            data.token = token;
        }
        var url = baseurl + api;
        wx.request({
            url: url,
            data: data,
            method: 'POST',
            success: function success(res) {
                if (res.statusCode != 200) {
                    _t.toast("接口状态不正确:" + api);
                    return;
                }

                var data = res.data;
                if (data.error_code == 1) {
                    if (error_cb == null) {
                        _t.toast(data.message);
                    } else {
                        error_cb(data.message, data.error_code);
                    }
                    return;
                }
                if (data.error_code == 300) {
                    if (error_cb == null) {
                        _t.check();
                    } else {
                        error_cb();
                    }
                    return;
                }
                // if (data.error_code == 301) {
                //     wx.navigateTo({
                //         url: '/pages/user/edit/main'
                //     });
                //     return;
                // }
                if (data.error_code == 0) {
                    cb(data.result);
                }
            },
            fail: function fail(res) {
                app.toast("接口请求失败" + _url);
            }

        });
    };
    Vue.prototype.upload = function (dir, filePath, cb) {
        var data = {};
        var token = wx.getStorageSync("token");
        if (token != null) {
            data.token = token;
        }
        data.dir = dir;
        var url = baseurl + "api/index/uploads";
        var up = wx.uploadFile({
            url: url,
            filePath: filePath,
            name: 'file',
            formData: data,
            success: function success(res) {
                var data = JSON.parse(res.data);
                if (data.error_code == 0) {
                    cb(data.result);
                }
            }
        });
        return up;
    };
    Vue.prototype.toast = function (message, cb) {
        wx.showToast({
            title: message,
            icon: 'none',
            duration: 2000
        });
        if (cb != null) {
            setTimeout(cb, 2000);
        }
    };
    Vue.prototype.check = function () {
        var _t = this;
        _t.$post("api/site/init", null, function (data) {
            console.log('init');
            _t.nickname = data.nickname;
            _t.shop = data.shop;
            _t.init(data);
        }, function () {
            console.log('login');
            _t.login();
        });
    };
    Vue.prototype.login = function () {
        var _t = this;
        wx.login({
            success: function success(lres) {
                if (lres.code) {
                    _t.$post("api/user/login", { code: lres.code }, function (token) {
                        wx.setStorageSync("token", token);
                        _t.check();
                    });
                } else {
                    _that.toast("登录失败，请重新打开小程序");
                }
            }
        });
    };

    Vue.prototype.datainit = function (data) {

        var d2 = this.clone(data);
        d2.shop = null;
        d2.m_color = m_color;
        d2.nickname = null;
        d2.baseurl = baseurl;
        d2.resurl = resurl;
        d2.appname = appname;
        return d2;
    };

    Vue.prototype.reset = function (default_data) {
        for (var key in default_data) {
            this[key] = default_data[key];
        }
    };
    Vue.prototype.clone = function (Obj) {
        var buf;
        if (Obj instanceof Array) {
            buf = []; // 创建一个空的数组
            var i = Obj.length;
            while (i--) {
                buf[i] = this.clone(Obj[i]);
            }
            return buf;
        } else if (Obj instanceof Object) {
            buf = {}; // 创建一个空对象
            for (var k in Obj) {
                // 为这个对象添加新的属性
                buf[k] = this.clone(Obj[k]);
            }
            return buf;
        } else {
            return Obj;
        }
    };
    Vue.prototype.get = function (key) {
        return this.$root.$mp.query[key];
    };

    Vue.prototype.cache = function (name, val) {
        if (val == null) {
            var v = wx.getStorageSync(name);
            v = v == "" ? null : v;
            return v;
        }
        if (val == "del") {
            wx.removeStorageSync(name);
            return;
        }
        wx.setStorageSync(name, val);
    };
    
};
module.exports = Lib;

/***/ })

},[18]);
