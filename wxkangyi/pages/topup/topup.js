require("../../common/manifest")
require("../../common/vendor.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:"0.00",
    content:'\n 1 \n 2 \n 3\n'
  },
  method:{
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  pay:function(){
    var that=this;
    wx.request({
      url:'https://wxadmin.kangyichina.cn/api/Bal/balPay', //仅为示例，并非真实的接口地址
      data: {
        token : wx.getStorageSync("token"),
        money:that.data.money
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res)
        console.log('zz')
        if(res.data===2){
          wx.showLoading({
            title: '请填写付款金额',
            icon: 'none',
            duration: 2000,
            mask: true
          })
            return ;
        }
        wx.requestPayment({
          timeStamp: res.data.result.timeStamp,
          nonceStr: res.data.result.nonceStr,
          package: res.data.result.package,
          signType:res.data.result.signType,
          paySign: res.data.result.paySign,
          success (res) {console.log(res) 
            wx.showToast({
              title: '充值成功',
              icon: 'SUCCESS',
              duration: 2000,
              mask: true,
              success:function(){
                console.log('suc')
                setTimeout(function () {
                 wx.navigateBack({
                    dalta:1
                 })
                }, 2000) 
              }
            })
          },
          fail (res) {console.log(res)
            console.log('fail')
            wx.showToast({
              title: '充值失败',
              icon: 'none',
              duration: 2000,
              mask: true,
            })
           }
        })
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