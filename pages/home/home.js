let app=getApp() //获取全局app实例
let mokuai=require("../../mokuai.js") //加载模块内容
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:6,
    meg:"hello",
    bool:true,
    arr:[
      {tit:"11111"},
      {tit:"22222"},
      {tit:"33333"},
      {tit:"44444"}
    ]
  },
  turn(event){
    //读取全局app内容
    console.log(app.a)
    app.b()

    //读取模块内容
    console.log(mokuai.obj.a)
    mokuai.obj.b()
    
    //读取事件的传值
    console.log(event.target.dataset)
    console.log(event.currentTarget.dataset)

    console.log(this.data.bool) //读取data数据中的相关值
    this.setData({ //修改data数据
      bool:!this.data.bool
    })
  },
  maopao(event){
    console.log(event.target.dataset) //底层元素上绑定的数据
    console.log(event.currentTarget.dataset) //当前元素上绑定的数据
  },
  zujian(val){ //用形参val接收子组件传过来的值
    this.setData({
      meg:val.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("渲染")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底触发")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
console.log("分享自动触发")
  }
})