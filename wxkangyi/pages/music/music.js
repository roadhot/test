// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   * param sequence 1 单曲循环
   * param sequence 0 列表循环
   */
  data: {
    resurl:"https://kangy.oss-cn-beijing.aliyuncs.com/",
    bian:0,
    sequence:1,
    block:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://wxadmin.kangyichina.cn/api/music/get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        for (var i = 0; i < res.data.result.length;i++){
          res.data.result[i].id = i;
          res.data.result[i].img_url = that.data.resurl+ res.data.result[i].img_url;
          res.data.result[i].music_url = that.data.resurl+ res.data.result[i].music_url;
          res.data.result[i].title_img = that.data.resurl+ res.data.result[i].title_img;
        }
        that.setData({list:res.data.result});
        that.setData({dan:res.data.result[0]})
      }
    })
  },
  // 音乐播放
  play:function(){
    
    var dan = this.data.dan;
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    var currentTime = this.data.currentTime;
    // 标题，专辑，歌手
    backgroundAudioManager.title = dan.music_name
    backgroundAudioManager.epname = dan.music_name
    backgroundAudioManager.singer = dan.sing_name
    backgroundAudioManager.coverImgUrl = dan.img_url
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = dan.music_url
    // currentTime 播放音乐的进度
    // dan 当前歌曲的数据
    console.log(currentTime)
    if (currentTime) {
      backgroundAudioManager.seek(currentTime)
    }
    backgroundAudioManager.play();
    backgroundAudioManager.onPlay(()=>{
      this.setData({bian:1});
      console.log("正在播放")
    })
    backgroundAudioManager.onEnded(()=>{
      var sequence = this.data.sequence;
      if (sequence) {
        this.setData({bian:0});
        this.play();
      } else {
        this.setData({bian:0});
        var id = this.data.dan.id;
        var list = this.data.list;
        id++;
        if (id == list.length) {
          id = 0;
        }
        dan = list[id];
        console.log(dan);
        this.setData({dan:dan});
        this.play();
      }
    })

  },
  kuai:function(){
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.duration = 120
    backgroundAudioManager.playbackRate = 2
    backgroundAudioManager.seek(175)
  },
  // 暂停
  stop:function(){
    this.setData({bian:0});
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.pause()
    this.setData({currentTime:backgroundAudioManager.currentTime});
  },
  // 单击歌曲开始播放
  click:function(e){
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    var list = this.data.list;
    this.setData({dan:list[id]});
    this.play();
  },
  danqu:function(){
    this.setData({sequence:1});
    this.setData({block:0});
  },
  liebiao:function(){
    this.setData({sequence:0});
    this.setData({block:0});
  },
  lie:function(){
    if (this.data.block){
      this.setData({block:0});
    } else {
      this.setData({block:1});
    }
  },
  win:function(){
    this.setData({block:0});
  },
  bindTimeChange:function(options){
    var date=new Date();
    var hour = date.getHours()
    var minute = date.getMinutes()
    var user_hour=options.detail.value.substring(0,2)
    var user_minute = options.detail.value.substring(3,5)
    // while(1){
    //      console.log(123)
    // }
    console.log(hour+'aa'+minute)
    console.log(user_hour)
    console.log(user_minute)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})