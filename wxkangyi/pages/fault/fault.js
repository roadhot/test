// pages/fault/fault.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    about:false,
    code:'',
    imgs:[],
    urls:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options)
    this.setData({
      code:'https://dfsystem.ns321.cn/lock?equiment_id='+options.code,
    })
    console.log(this.data.code)
  },

  img_w_show(){
    var _this=this
    var showurls=[]
    var urls=[]
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

        res.tempFilePaths=res.tempFilePaths.slice(0,2)
        
        for(var i=0;i<res.tempFilePaths.length;i++){
            wx.uploadFile({
              url: 'https://wxadmin.kangyichina.cn/api/Base/upload?dir=weixin', //仅为示例，非真实的接口地址
              filePath: res.tempFilePaths[i],
              name: 'file',
              formData: {},
              success (res){
                var data=JSON.parse(res.data)
                urls.push(data.result)
                showurls.push('https://kangy.oss-cn-beijing.aliyuncs.com/'+data.result)
                console.log(showurls)
                _this.setData({
                  imgs:showurls,
                  urls:urls
                })
              }
            })
        }
      }
    })
  },
  fromsubmit:function(e){

    console.log(this.data.code)
    var data=e.detail.value
    data.content=data.content.replace(/\s+/g, '')
    data.imgs=this.data.urls
    data.token=wx.getStorageSync("token")
    data.code=this.data.code
    if(data.content==''){
      wx.showLoading({
        title: '请填写内容',
        duration: 2000,
        icon: 'none',
        mask: true
      })
      return '';
    }
    if(data.imgs.length==0){
      wx.showLoading({
        title: '请添加图片',
        duration: 2000,
        icon: 'none',
        mask: true
      })
      return '';
    }
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/Fault/addFault',
      data:data,
      method:"POST",
      success(e){
          console.log(e)
          if(e.data.error_code){
            wx.showLoading({
              title: e.data.message,
              duration: 2000,
              icon: 'none',
              mask: true
            })
          }else{
            wx.showLoading({
              title:'添加完成',
              duration: 2000,
              icon: 'success',
              mask: true,
              success:function(){
                setTimeout(function () {
                  wx.reLaunch({
                    url: '/pages/index/index/main'　　
                  })
                }, 2000) 
              }
            })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //123
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