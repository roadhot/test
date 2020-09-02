require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(41);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47652c42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47652c42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/main/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47652c42", Component.options)
  } else {
    hotAPI.reload("data-v-47652c42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
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

var that = null;
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return this.datainit({
            driver: null,
            code: null,
            deviceId: null,
            service: null,
            characteristic: null,
            r_characteristic: null,
            mac: null,
            op_index: 0,
            driver_data: null,
            from_page: false,
            info: null,
            rule: '',
            repay:false,
            updatetime:5,
            showimg:0
        });
    },
    onLoad: function onLoad(e) {
        //实现二次进入之前有订单得话不会再次开锁
        // wx.request({
        //     url: 'https://wxadmin.kangyichina.cn/api/order/checkorder4', //仅为示例，并非真实的接口地址
        //     data: {
        //       token:wx.getStorageSync("token")
        //     },
        //     header: {
        //       'content-type': 'application/json' // 默认值
        //     },
        //     success (res) {
        //         console.log(res.data.orderno)
        //       if(res.data.orderno){
        //           that.repay=true
        //       }
        //     }
        //   })
          //实现二次进入之前有订单得话不会再次开锁
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        var q = e.q;
        var code = null;
        console.log(q);
        if (q != null) {
            var url = decodeURIComponent(q);
            var lastindex = url.lastIndexOf("/"); //取到文件名开始到最后一个点的长度
            var url_length = url.length; //取到文件名长度
            var q_before = url.substring(lastindex + 1, url_length);
            code = decodeURIComponent(q_before);
        } else {
            code = this.get("code");
            this.from_page = true;
        }
        // code="UN E83F6D4C84F4"
        // code="UN 69C3859AEC28"
        // code="UN 18CDCF74C36C"
        // code="UN A629839AEC28"
        code=code.substring(code.lastIndexOf('UN ')+3);
        code='https://dfsystem.ns321.cn/lock?equiment_id='+code
        this.code = code;
        console.log(code)
    },
    mounted: function mounted() {},
    onShow: function onShow() {
        that = this;
        this.check();
    },

    methods: {
        backpage: function backpage() {
            if (that.from_page) {
                wx.navigateBack();
            } else {
                wx.reLaunch({
                    url: '/pages/index/index/main'
                });
            }
        },
        init: function init() {
            console.log('that'+that.code)
            that.$post("api/driver/get", { code: that.code }, function (data) {
                console.log(data.code)
                     //截取蓝牙code值
                     var name=data.code.substring(data.code.lastIndexOf('id=')+3);
                     data.code='UN '+name
                that.info = data;
                console.log(that.info)
            });
            that.$post("/api/index/info", null, function (data) {
                that.rule = data.info;
            });
        },
        open_before: function open_before() {
            // that.showimg = "search";
            // wx.showLoading({
            //     title: '正在搜索设备1'
            // });
            console.log("正在搜索设备1")
            wx.startBluetoothDevicesDiscovery({
                allowDuplicatesKey: true,
                success: function success(res) {}
            });
                        var name=that.code.substring(that.code.lastIndexOf('id=')+3);
                        var cd='UN '+name
                            wx.onBluetoothDeviceFound(function (devices) {
                                console.log('啊啊啊')
                                console.log(devices)
                                for (var i in devices) {
                                    //console.log("搜索到一个设备:" +

                                    if (devices[i][0].localName == undefined) {
                                        return;
                                    }
                                    console.log('新的')
                                    console.log("搜索到一个设备:" + devices[0].localName);
                                    console.log(cd)
                                    console.log("查询-1:" + devices[0].localName.indexOf(cd));
                                    if (devices[0].localName.indexOf(cd) != -1) {
                                        var issearch = true;
                                        console.log('到了222222222222222222222222222222222222')
                                        
                                        that.driver = devices[i][0];
                                        var advertisData = that.ab2hex(that.driver.advertisData);
                                        var status = advertisData.slice(24, 26);
                                        console.log('状态'+status)
                                            


                          
                                }
                                        setTimeout(function () {
                                            if (!issearch) {
                                                    console.log("未找到设备");
                                                    wx.stopBluetoothDevicesDiscovery();
                                                    that.showimg = "notfound"
                                                    setTimeout(function () {
                                                        that.showimg="0"
                                                    }, 2500)
                                                    // wx.hideLoading({
                                                    //     success: function success() {
                                                    //         that.toast("设备未找到，请尝试重新连接");
                                                    //     }
                                                    // });
                                                }
                                            }, 20 * 1000);
                            
                                wx.stopBluetoothDevicesDiscovery();
                                        // wx.hideLoading({
                                        //     success: function success() {
                                        //         console.log('到了')
                                        //         that.create_blue();
                                        //     }
                                        // });
                                        return;
                                    }
                            });
                
            that.$post("api/driver/make", { code: that.code }, function (data) {
                console.log('hao')
                console.log(data);
                if (data.status == 0) {
                    that.search_device();
                } else {
                    that.pay_cb();
                }
            });
        },

        pay: function pay(orderno) {
            that.$post("api/driver/pay", {
                orderno: orderno
            }, function (data) {
                wx.requestPayment({
                    'timeStamp': data.timestamp + '',
                    'nonceStr': data.nonceStr,
                    'package': data.package,
                    'signType': 'MD5',
                    'paySign': data.paySign,
                    'success': function success(ref) {
                        that.pay_cb();
                    },
                    'fail': function fail(ref) {
                      wx.showLoading({
                        title: '支付失败',
                        icon: 'none',
                        duration: 2000,
                        mask: true
                      })
                    }
                });
            });
        },
        pay_cb: function pay_cb() {
            that.search_device();
        },
        close_before: function close_before() {
            that.search_device();
        },
        ab2hex: function ab2hex(buffer) {
            var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
                //  console.log('bit:'+'00'+bit);
                return ('00' + bit.toString(16)).slice(-2);
            });
            return hexArr.join('');
        },
        op_box: function op_box(_op_index) {
            that.op_index = _op_index;
            console.log('haohao')
            console.log(that.op_index)
            wx.openBluetoothAdapter({
                success: function success(res) {
                    if (that.op_index == 1) {
                        that.open_before();
                    }
                    if (that.op_index == 2) {
                        that.close_before();
                    }
                },
                fail: function fail(e) {
                    that.showimg = "ble"
                    setTimeout(function () {
                        that.showimg="0"
                    }, 2500)   
                //   wx.showLoading({
                //     title: '请打开手机蓝牙',
                //     icon: 'none',
                //     duration: 2000,
                //     mask:true
                //   })
                }
            });
        },
        open_affter: function open_affter() {
            that.open_box_driver();
        },
        close_affter: function close_affter() {
            // console.log(that.driver_data.status);
            //  console.log(that.driver_data);
            if (that.driver_data.status !== "00") {
                that.showimg = "error"
                setTimeout(function () {
                    that.showimg="0"
                }, 2500)
                // wx.showToast({
                //   title: '请重新扫码，归还物品。',
                //  icon:'none',
                //   duration: 2000,
                //   mask: true
                // })
                return;
            } else {
                that.$post("api/driver/back", { code: that.code }, function (data) {
                  console.log(that.code)
                  that.showimg = "returntrue";
                  setTimeout(function () {
                    that.showimg="0"
                    that.modalcnt(that.code)
                }, 2000) 
                //   wx.showLoading({
                //     title: '归还成功',
                //     icon: 'success',
                //     duration: 2000,
                //     mask: true,
                //     success: function success() {
                //         setTimeout(function () {
                //             that.modalcnt(that.code)
                //         }, 2000)                      
                //     }
                //   })
                });
            }
        },
        modalcnt:function(code){  
            var that=this;
            wx.showModal({  
                title: '是否有故障？',  
                content: '设备故障上报',  
                success: function(res) {  
                    if (res.confirm) {
                        var name=code.substring(code.lastIndexOf('id=')+3); 
                        console.log(name) 
                        wx.navigateTo({
                          url: '/pages/fault/fault?code='+name,
                        })
                    } else if (res.cancel) {  
                        wx.navigateBack();
                    }  
                }  
            })  
        }  ,

        /****************************************这是一条华丽的分割线 以下为蓝牙部分代码****************************************/
        //以下为蓝牙部分代码
        open_box_driver: function open_box_driver() {
            that.showimg = "link";
            // wx.showLoading({
            //     title: '正在连接设备'
            // });
            wx.createBLEConnection({
                deviceId: that.deviceId,
                success: function success(res) {
                    that.showimg = "open";
                    wx.hideLoading({
                        success: function success() {
                            that.toast("正在开锁");
                        }
                    });
                    wx.getBLEDeviceServices({
                        deviceId: that.deviceId,
                        success: function success(res) {
                            console.log(res);
                            var services = res.services;
                            that.service = null;
                            for (var i = 0; i < services.length; i++) {
                                if (services[i].uuid.indexOf("FF50") > 0) {
                                    that.service = services[i];
                                }
                            }
                            if (that.service == null) {
                                that.toast("服务不可用");
                                return;
                            }
                            console.log("service:" + that.service.uuid);
                            wx.getBLEDeviceCharacteristics({
                                // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
                                deviceId: that.deviceId,
                                // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                                serviceId: that.service.uuid,
                                success: function success(res) {
                                    that.characteristic = null;
                                    for (var k in res.characteristics) {
                                        if (res.characteristics[k].uuid.indexOf("FF52") > 0) {
                                            that.characteristic = res.characteristics[k];
                                            that.readdata();
                                        }
                                        if (res.characteristics[k].uuid.indexOf("FF51") > 0) {
                                            that.r_characteristic = res.characteristics[k];
                                            //that.b_notify()
                                        }
                                    }
                                    if (that.characteristic == null) {
                                        that.toast("特征值不可用");
                                        return;
                                    }

                                    console.log("character:" + that.characteristic.uuid);
                                    var hex = 'AA0CB1' + that.driver_data.mac + '010055';
                                    console.log("com:" + hex);

                                    that.writebluedata(hex, function () {
                                        that.writeBluetoothData1()
                                        wx.closeBLEConnection({
                                            deviceId: that.deviceId,
                                            success: function success(res) {
                                                //判断是否显示开锁按钮
                                                // console.log(that.repay)
                                                // that.repay=true;
                                                that.repay=1;
                                                //倒计时开锁
                                                that.getCountDown();
                                                //倒计时开锁
                                                // console.log(that.repay)
                                                //判断是否显示开锁按钮
                                                // that.toast("开锁已完成");
                                                that.showimg = "opentrue"
                                                setTimeout(function () {
                                                    that.showimg="0"
                                                }, 2000)
                                            }
                                        });
                                    });
                                }
                            });
                        },
                        fail: function fail(e) {
                            console.error(e);
                        }
                    });
                },
                fail: function fail(e) {
                    that.showimg = "linkfailed"
                    setTimeout(function () {
                        that.showimg="0"
                    }, 2500)
                    // wx.hideLoading({
                    //     success: function success() {
                    //         that.toast("蓝牙设备连接失败,请重试");
                    //     }
                    // });
                }
            });
        },
        //倒计时开锁方法
        getCountDown(){ 
            if(that.updatetime <= 0){
                that.repay=true
                return false;
            }
            that.updatetime = parseInt(that.updatetime)-1;
            setTimeout(this.getCountDown, 1000);
        },
        //倒计时开锁方法
        get_device: function get_device() {
            var name=that.code.substring(that.code.lastIndexOf('id=')+3);
            var cd='UN '+name
            that.cd=cd
            wx.getBluetoothDevices({
                success: function success(res) {
                    var devices = res.devices;
                    var i = 0;
                    while (i < devices.length) {
                        console.log("找到一个设备:" + devices[i].localName)
                        console.log("找到一个设备:" + devices[i].localName.indexOf(cd))
                        if (devices[i].localName.indexOf(cd) != -1) {
                            that.driver = devices[i];
                            that.create_blue();
                            break;
                        }
                        i++;
                    }
                    if (i == devices.length) {
                        that.search_device();
                    }

                    return;
                }
            });
        },
        search_device: function search_device() {
            var name=that.code.substring(that.code.lastIndexOf('id=')+3);
            var cd='UN '+name
            var issearch = false;
            that.showimg = "search";
            // wx.showLoading({
            //     title: '正在搜索设备'
            // });
            wx.startBluetoothDevicesDiscovery({
                allowDuplicatesKey: true,
                success: function success(res) {}
            });
            wx.onBluetoothDeviceFound(function (devices) {

                console.log(devices)
                for (var i in devices) {
                    //console.log("搜索到一个设备:" +

                    if (devices[i][0].localName == undefined) {
                        return;
                    }
                    console.log("搜索到一个设备:" + devices[i][0].localName);

                    console.log(cd)
                    console.log("查询-1:" + devices[i][0].localName.indexOf(cd));
                    if (devices[i][0].localName.indexOf(cd) != -1) {
                        issearch = true;
                        console.log('到了1')
                        that.driver = devices[i][0];
                        that.create_blue();
                        wx.stopBluetoothDevicesDiscovery();
                        wx.hideLoading({
                            success: function success() {
                                console.log('到了')
                                that.create_blue();
                            }
                        });
                        return;
                    }
                }
            });
            setTimeout(function () {
                if (!issearch) {
                    console.log("未找到设备");
                    wx.stopBluetoothDevicesDiscovery();
                    that.showimg = "notfound"
                    setTimeout(function () {
                        that.showimg="0"
                    }, 2500)
                    // wx.hideLoading({
                    //     success: function success() {
                    //         that.toast("设备未找到，请尝试重新连接");
                    //     }
                    // });
                }
            }, 20 * 1000);
        },
        readdata: function readdata() {
            wx.onBLECharacteristicValueChange(function (characteristic) {
                console.log("读取值:" + that.ab2hex(characteristic.value));
            });

            wx.readBLECharacteristicValue({
                deviceId: that.deviceId,
                // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                serviceId: that.service.uuid,
                // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                characteristicId: that.characteristic.uuid,
                success: function success(res) {
                    // console.log("可接收读取值")
                }
            });
        },
        b_notify: function b_notify() {
            wx.onBLECharacteristicValueChange(function (res) {
                console.log("监听到数据:" + that.ab2hex(res.value));
            });
            wx.notifyBLECharacteristicValueChange({
                state: true, // 启用 notify 功能
                // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
                deviceId: that.deviceId,
                // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                serviceId: that.service.uuid,
                // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                characteristicId: that.r_characteristic.uuid,
                success: function success(res) {
                    console.log('notify成功');
                    console.log(res);
                }
            });
        },

        create_blue: function create_blue() { 
            that.deviceId = that.driver.deviceId;
            console.log(that.driver.deviceId)
            var advertisData = that.ab2hex(that.driver.advertisData); //6cc374cfbb1d00000000030201
           
            var mac = advertisData.slice(0, 12);
            console.log("mac:" + mac);
            console.log('广播包：' + advertisData);
            var status = advertisData.slice(24, 26);
            var battery = advertisData.slice(20, 22);
            that.driver_data = {
                mac: mac, status: status, battery: battery
            };
            console.log('加的')
            console.log(that.driver_data.status)
            
            console.log(that.driver);
                        
            
            //  "UN DEDA849AEC28"

            console.log('加的')
            if (that.op_index == 1) {
                that.open_affter();
            }
            if (that.op_index == 2) {
                that.close_affter();
            }
            return;
        },
        read: function read() {
            console.log("开始监听");
            wx.readBLECharacteristicValue({
                // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
                deviceId: that.deviceId,
                // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                serviceId: that.service.uuid,
                // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                characteristicId: that.r_characteristic.uuid,
                success: function success(res) {
                    console.log("51通道监听");
                    console.log(res);
                },
                fail: function fail(e) {
                    console.log("51通道监听失败");
                    console.log(e);
                }
            });
        },

        getBinaryData: function getBinaryData(message) {
            //将数据转为二进制数组
            var buffer = new ArrayBuffer(6);
            var dataView = new DataView(buffer);
            var numTitle = 0;
            for (var i = 0; i < message.length; i = i + 2) {
                var numStr16 = message.substr(i, 2);
                var num = parseInt(numStr16, 16);
                dataView.setUint8(numTitle, num);
                numTitle++;
            }
            return buffer;
        },
        writeBluetoothData1: function writeBluetoothData1() {
            //写入执行1指令
            console.log('写入距离');
            var that = this;
            wx.writeBLECharacteristicValue({
                deviceId: that.deviceId,
                serviceId: that.service.uuid,
                characteristicId: that.characteristic.uuid,
                //范围
                value: that.getBinaryData("AA0440DD"),
                success: function success(data) {
                    console.log('成功');
                    console.log(data);
                },
                fail: function fail(data) {
                    console.log(data);
                },
                complete: function complete(data) {
                    console.log('complete');
                    wx.closeBLEConnection({
                        deviceId: that.deviceId,
                        success: function success(res) {
                            that.toast("开锁已完成");
                        }
                    });
                }
            });
        },
        writebluedata: function writebluedata(hex, cb) {
            var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
                return parseInt(h, 16);
            }));

            var buffer = typedArray.buffer;
            wx.writeBLECharacteristicValue({
                // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                deviceId: that.deviceId,
                // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                serviceId: that.service.uuid,
                // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                characteristicId: that.characteristic.uuid,
                // 这里的value是ArrayBuffer类型
                value: buffer,
                success: function success(res) {
                    console.log("写入成功:" + hex);
                    if (cb != null) {
                        cb();
                    }
                    console.log(res);
                },
                fail: function fail(e) {
                    console.error("写入失败");
                    console.log(e);
                }
            });
        }
    }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": "/static/images/icon/back.png",
      "alt": "",
      "eventid": '2_0'
    },
    on: {
      "click": function($event) {
        _vm.backpage()
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("康懿综合健康")])]), _vm._v(" "), _c('img', {
    staticClass: "top-img",
    attrs: {
      "src": "/static/images/index_back.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "driver_name"
  }, [(_vm.info) ? _c('span', [_vm._v("正在使用设备:" + _vm._s(_vm.info.name))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "btnlist"
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/kaiqixiangzi.png",
      "alt": "",
      "eventid": '3_1'
    },
    on: {
      "click": function($event) {
        _vm.op_box(1)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/guihuan.png",
      "alt": "",
      "eventid": '3_2'
    },
    on: {
      "click": function($event) {
        _vm.op_box(2)
      }
    }
  })])]), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-47652c42", esExports)
  }
}

/***/ })

},[40]);