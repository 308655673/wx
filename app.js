// app.js
App({
  onLaunch() {
   console.log("小程序初始化")
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
