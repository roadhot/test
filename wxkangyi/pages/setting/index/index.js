// pages/setting/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.get();
    
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        wx.login() //重新登录
      }
    })
  },
  get:function(){
    var that = this;
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/user/get',
      data:{
        token:wx.getStorageSync('token')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        if (res.data.result) {
          wx.setStorageSync('user', res.data.result);
          that.setData({user:res.data.result});
        } else {
          that.get();
        }
      }
    })
  },
  getInfo:function(){
    var t = this;
    wx.getUserInfo({
      complete: (res) => {},
      success(res){
        var nickname = res.userInfo.nickName;
        var avatarurl = res.userInfo.avatarUrl;
        var id = t.data.user.id;
        wx.request({
          url: 'https://wxadmin.kangyichina.cn/api/user/add',
          data:{
            nickname:nickname,
            avatarurl:avatarurl,
            id:id,
            token:wx.getStorageSync("token")
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res){
            if (res.data != 0) {
              t.setData({user:res.data.result})
            }
          }
        })
      }
    })
  },
  phone:function(){
    wx.makePhoneCall({
      phoneNumber: '400-0701170' //仅为示例，并非真实的电话号码
    }) 
  },
  getPhoneNumber (e) {
    var t = this;
    var user = wx.getStorageSync('user')
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
    wx.login({
      complete: (res) => {},
      success(res){
        wx.request({
          url: 'https://wxadmin.kangyichina.cn/api/user/demo',
          data:{
            code:res.code,
            encryptedData:e.detail.encryptedData,
            iv:e.detail.iv,
            id:t.data.user.id,
            token:wx.getStorageSync('token')
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res){
            console.log(res);
            if (res.data >= 0) {
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
              })
              t.get();
            } else {
              wx.showToast({
                title: '请再试一次',
                icon: 'none',
                duration: 2000
              })
            }
          }
        })
      }
    })
  },
  nav:function nav(){
    wx.navigateTo({
      url: 'in',
    })
  },
  checkuser:function checkuser(){
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/user/get',
      data:{
        token : wx.getStorageSync("token")
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
          console.log(res);
          if(res.data.result.tel==null||res.data.result.tel==''){
            wx.showToast({
              title: '请完善信息',
              icon: 'none',
              duration: 2000
            })
            return '';
          }else{
            wx.navigateTo({
              url: '/pages/topup/topup'
          });
          }
      }
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
    var that = this;
    wx.request({
      url:'https://wxadmin.kangyichina.cn/api/Bal/getBal', //仅为示例，并非真实的接口地址
      data: {
        token : wx.getStorageSync("token"),
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if (res.data.result) {
          that.setData({
            bal:res.data.result.balance
          }) 
          console.log(that.data.bal);
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