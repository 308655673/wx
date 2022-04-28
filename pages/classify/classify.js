// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: "测试",
    bool: false,
    arr:"abcdefghi",
    xiala:true,
    on:true,
    num:1
  },
  off(){
    this.setData({
      on:!this.data.on
    })
  },
  picturn(event) {
    console.log(event.detail)
    this.setData({
      // bool:event.detail.source=="touch"
      // bool: event.detail.x > 150
    })

  },
  dibu(){
    console.log("到底了")
  },
  add(){

this.setData({
  arr:"0123456789abcdefghi",
  xiala:false
  
})

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

    setInterval(()=>{
      this.setData({
        num:this.data.num>=100?1:this.data.num+1
      })
    },1000)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
console.log("分类隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("分类卸载")

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