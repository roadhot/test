// pages/normal/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = 
    this.setData({
      id:options.id,
      good:0,
      zan:"/static/images/comment/zan.png",
      zanle:"/static/images/comment/zanle.png",
      cai:"/static/images/comment/cai.png",
      caile:"/static/images/comment/caile.png"
    });
    this.goods();
    this.get();
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
    console.log('show');
    this.get();
  },
  get:function(){
    var t = this;
    var num = this.data.num;
    var user = wx.getStorageSync('user');
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/comment/select',

//       data:{id:id,num:num},

      data:{id:t.data.id,num:t.data.num,status:t.data.good},

      success(res){
        var com = res.data.result.data;
        
        for (var i = 0; i < com.length; i++) {
          var gnum = 0;
          var bnum = 0;
          com[i].i=i;
          for (var j = 0; j < com[i].good.length; j++) {
            if (com[i].good[j] == '')  gnum++;
            if (com[i].good[j] == user.id) com[i].praise = 1;
          }
          com[i].good.length -= gnum;

          for (var j = 0; j < com[i].bad.length; j++) {
            if (com[i].bad[j] == '')  bnum++;
            if (com[i].bad[j] == user.id) com[i].demote = 1;
          }
          com[i].bad.length -= bnum;
        }
        t.setData({comment:res.data.result.data});
        num = num+10;
        t.setData({num:num})
      }
    })
  },
  goods:function(e){
    var t = this;
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/comment/goods',
      data:{id:t.data.id},
      success(res){
        // https://kangy.oss-cn-beijing.aliyuncs.com/
        if (res.data.result) {
          var goods = res.data.result
          goods.pic = 'https://kangy.oss-cn-beijing.aliyuncs.com/'+goods.pic
          t.setData({goods:res.data.result})
        } else {
          t.setData({goods:0})
        }
      }
    })
    this.setData({
      sub:'/static/images/comment/xing1.png',
      sup:'/static/images/comment/xing.png'
    })
  },
  goo:function(e){
    console.log(e.currentTarget.dataset);
    this.setData({good:e.currentTarget.dataset.number});
    this.get();
  },
  praise:function(e){
    var event = e.currentTarget.dataset;
    if (event.other) return false; //如果点击过则结束
    var t = this;
    var user = wx.getStorageSync('user');
    var comment = this.data.comment;
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/comment/praise',
      data:{
        id:event.id, uid:user.id,praise:event.tr
      },
      success(res){
        t.get();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})