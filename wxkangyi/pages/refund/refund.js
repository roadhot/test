require("../../common/manifest")
require("../../common/vendor.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:''
  },
  method:{
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/Bal/getOrder', //仅为示例，并非真实的接口地址
      data: {
        token : wx.getStorageSync("token")
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res)
        that.setData({
          'list':res.data.result
        })
      }
    })
  },

  updateinput:function(e){
    // var str=str(e.detail.value)
    // str.indexof('.123')
    var str=e.detail.value+'';
    
    if(!(str.indexOf(".")==-1)){
      var cutstr=str.split('.')
      if(cutstr[1].length>2){
        return str;
      }
      e.detail.value=cutstr[0]+'.'+cutstr[1];
    }
    console.log(e.detail.value)
    // str=str.indexOf('.00')=='-1'?str+'.00':
    if(e.detail.value==''){
      e.detail.value='0.00'
    }
    this.setData({
      money:e.detail.value
    })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  refund:function(options){
    console.log(options)
    var that=this;
    wx.request({
      url:'https://wxadmin.kangyichina.cn/api/Bal/refund', //仅为示例，并非真实的接口地址
      data: {
        token : wx.getStorageSync("token"),
        orderon:options.currentTarget.dataset.orderon,
        pay_price:options.currentTarget.dataset.balance,
        refund_price:options.currentTarget.dataset.balance
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
          console.log(res)
          if(res.data.result===1){
            wx.showToast({
              title: '退款成功',
              icon: 'SUCCESS',
              duration: 2000,
              mask: true,
                success:function(){
                  setTimeout(function () {
                    wx.request({
                      url: 'https://wxadmin.kangyichina.cn/api/Bal/getOrder', //仅为示例，并非真实的接口地址
                      data: {
                        token : wx.getStorageSync("token")
                      },
                      header: {
                        'content-type': 'application/json' // 默认值
                      },
                      success (res) {
                        console.log(res)
                        that.setData({
                          'list':res.data.result
                        })
                      }
                    })
                  }, 2000) 
                

              }
            })
          }
          if(res.data.error_code===1){
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000,
              mask: true,
            })
          }
      }
    })

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})