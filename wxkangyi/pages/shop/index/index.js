Page({

  /**
   * 页面的初始数据
   */
  data: {
    cindex: 0,
    slide_list: [],
    cate_list: [],
    goods_list: [],
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
  that.setData({page:2});
  that.setData({id:options.id});
  that.setData({name:options.name});
  that.setData({resurl:"https://kangy.oss-cn-beijing.aliyuncs.com/"});
  that.init();
  },
  init: function init() {
    var that = this;
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/index/slide',
      data:{},
      success(list){
        for (var i = 0; i < list.length; i++) {
          list[i].i = i;
      }
      that.setData({slide_list:list});
      }
    })
  wx.request({
    url: 'https://wxadmin.kangyichina.cn/api/goods/getone',
    data:{ id: that.data.id },
    success(list){
      that.setData({goods_list:list.data.result.data})
      // console.log(list)
      that.tocate();
    }
  })
},
tocate: function tocate() {
  var cate_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  // 查询指定分类下商品
  // that.$post('api/goods/lists', { cate_id: cate_id }, function (list) {
  //   // console.log(list)
  //     that.goods_list = list;
  // });
},
detail_t:function(e){
  var url = e.currentTarget.dataset.url;
  wx.navigateTo({
    url: url,
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
    // console.log(
    //   '上拉'+
    //   that.page
    // )
    // that.$post('api/goods/getone', { id: that.id,page:that.page }, function (list) {
     
    //   // api / goods / getone
    //   // that.goods_list = list.data;
      
    //   that.page+=1;
    //   for(var i=0;i<list.data.length;i++){
    //     that.goods_list.push(list.data[i])
    //   }
    //   that.tocate();
    //   console.log(that.goods_list)
      
    // });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})