// dist/wx/pages/shop/catelist/catelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(123)
    var that=this;

    that=this;
    
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/cate/lists', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res)
        that.setData({
          list:res.data.result
        })
       console.log(that.list)
        // console.log(that.list)
        // that.addwd()
      }
    })
    
  },
  isset:function(e){
    var user = wx.getStorageSync('user');
    var url = e.currentTarget.dataset.url;
    if (user.tel){
      wx.navigateTo({
        url: url,
      })
    } else {
      wx.showToast({
        title: '请完善信息',
        icon:'none',
        duration: 2000
      })
      setTimeout(function () {
        wx.switchTab({
          url: '/pages/setting/index/index',
        });
      }, 2000)
    }
  },
  /**
   * 随机宽高方法 addwd
   */
    // addwd:function(){
    //   // console.log(4)
    //   var planwd=0;
      
    //   for(var i=0;i<that.list.length;i++){
    //     // console.log(i)
    //     if(i==0){
    //       that.list[0]['wd']=48
    //       console.log(that.list[0])
    //       continue;
    //     }
    //     if(i==1){
    //       that.list[1]['wd']=50
    //       console.log(that.list[0])
    //       continue;
    //     }
    //     if(i%2){
    //       that.list[i]['wd']=(98-planwd)
    //     }
    //     if(!(i%2)){
    //       planwd=that.ranaa(40,60)
    //       that.list[i]['wd']=planwd
    //     }
    //     console.log(that.list)
    //     this.setData({
    //       list:that.list
    //     })
    //   }
    // },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  ranaa:function(lowerValue,upperValue)
{
 return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
})