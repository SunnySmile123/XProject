//details.js
var app = getApp();
Page({

  data: {
    imgUrl:"../../images/url/starBucks.jpg"
  },

  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this;
    //更新数据
    that.setData({
        imgUrl:options.imgUrl
    })
    console.log("the img url is:" + this.data.imgUrl);
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})