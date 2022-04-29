// pages/details/details.js
Page({
  test(){
    // 获取用户信息(假登陆)
    // wx.getUserProfile({
    //   desc: '测试用'
    // }).then(res=>{
    //   this.setData({
    //     pic:res.userInfo.avatarUrl
    //   })
    // })

    // 获取用户openid
    // wx.login().then(res=>{
    //   console.log(res.code) //用户临时id
    //   //request向小程序后台发送数据换取用户openid
    //   wx.request({
    //     url: 'https://api.weixin.qq.com/sns/jscode2session',
    //     data:{
    //       js_code:res.code,
    //       appid:"wxe4a862fa43e4a618",
    //       grant_type:"authorization_code",
    //       secret:"04811a42d6b36dfcfa4fb7f677a1c2de" //小程序秘钥
    //     },
    //     success(val){
    //       console.log(val.data.openid) // 获取用户openid
    //     }
    //   })
    // })


    // 页面跳转
    // wx.navigateTo({
    //   url: '../index/index?a=666&b=999',
    // })


    // wx.showToast({
    //   title: '加入成功',
    //   duration:2000,
    //   icon:"loading",
    //   success(){
    //     console.log(666)
    //   }
    // })

    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })


    // wx.showLoading({
    //   title: '加载中',
    // })

    // setTimeout(()=>{
    //   wx.hideLoading()
    // },1000)

    wx.setNavigationBarTitle({
      title:"123456789"
    })
    wx.showNavigationBarLoading()

    wx.setBackgroundColor({
      backgroundColor:"#999999"
    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    pic:null,
    today: null,
    bool: false,
    num: 10
  },
  takepic() {
    let asd = wx.createCameraContext()
    asd.takePhoto({
      success: function (res) {
        console.log(res.tempImagePath)
      }
    })
  },
  keycode(event) {
    console.log(event.detail.value)
  },
  choose(event) {
    console.log(event.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) { //options用来接收get数据
    console.log("详情页面加载", options)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})