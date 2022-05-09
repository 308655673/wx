// app.js
App({
  onLaunch() {
   console.log("小程序初始化")

   //关联云环境(全局关联)
    wx.cloud.init({
      env:"cloud1-7gjq9owx32373562"
    })

  },
  onShow(){
    console.log("小程序切换显示")
  },
  onHide(){
    console.log("小程序切换隐藏")
  },
  a:123,
  b(){
    console.log(this.a)
  }
})
