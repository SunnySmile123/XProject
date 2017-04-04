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
        name:'星巴克',
        imgUrl:"../../images/top/b1.png",
        url:"../../images/url/starBucks.jpg"
      },
      {
        name:'外卖',
        imgUrl:"../../images/top/b1.png",
        url:"",
        isSplot:true
      },
      {
        name:'外带',
        imgUrl:"../../images/top/b1.png",
        url:"",
      },
      {
        name:'订单',
        imgUrl:"../../images/top/b1.png",
        url:"",
      },
      {
        name:'帐单',
        imgUrl:"../../images/top/b1.png",
        url:"",
        isSplot:true
      },
      {
        name:'报表',
        imgUrl:"../../images/top/b1.png",
        url:"",
      },{
        name:'订单',
        imgUrl:"../../images/top/b1.png",
        url:"",
      },
      {
        name:'帐单',
        imgUrl:"../../images/top/b1.png",
        url:"",
        isSplot:true
      },
      {
        name:'报表',
        imgUrl:"../../images/top/b1.png",
        url:"",
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
    wx.navigateTo({
      url:'../details/details?imgUrl=' + e.currentTarget.dataset.item.url
    })

  }
})
