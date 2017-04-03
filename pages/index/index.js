//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    imgUrls:[
      "../../images/top/cm.png",
      "../../images/top/nike.png",
      "../../images/top/disco.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    navItems:[
      {
        name:'堂食',
        url:"../../images/top/b1.png"
      },
      {
        name:'外卖',
        url:"../../images/top/b1.png",
        isSplot:true
      },
      {
        name:'外带',
        url:"../../images/top/b1.png",
      },
      {
        name:'订单',
        url:"../../images/top/b1.png",
      },
      {
        name:'帐单',
        url:"../../images/top/b1.png",
        isSplot:true
      },
      {
        name:'报表',
        url:"../../images/top/b1.png",
      },{
        name:'订单',
        url:"../../images/top/b1.png",
      },
      {
        name:'帐单',
        url:"../../images/top/b1.png",
        isSplot:true
      },
      {
        name:'报表',
        url:"../../images/top/b1.png",
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  tapBrand:function(e){
    console.log("tap brand");
    

  }
})
