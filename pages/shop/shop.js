// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:["aa","bb","cc"],
    video:null
  },
  test() {  
    // ajax请求
    // wx.request({
    //   url: 'http://localhost:3000/posts',
    //   data:{
    //     title:"aaa"
    //   },
    //   method:"GET",
    //   success(res){
    //     console.log(res)
    //   },
    //   fail(){

    //   }
    // })

    // 下载文件
    // wx.downloadFile({
    //   url: 'http://localhost:3000/123.doc',
    //   success(res){
    //     console.log(res)
    //     // 打开文件查看
    //     wx.openDocument({
    //       filePath: res.tempFilePath,
    //     })
    //   }
    // })


    // 设置或存储本地存储数据
    // wx.setStorage({
    //   key:"shopping",
    //   data:this.data.arr
    // }).then(res=>{
    //   // 提示信息
    //   wx.showToast({
    //     title: '添加成功',
    //     duration:2000
    //   })
    // })
    

    //获取本地存储的对应数据
    // wx.getStorage({
    //   key:"shopping"
    // }).then((res) => {
    //     console.log(res)
    // })


    //获取当前定位坐标(第一次需要配置app.json，并会弹出授权窗口)
    // wx.getLocation().then(res=>{
    //   console.log(res)
    // })

    //地图上选择位置
    // wx.chooseLocation().then(res=>{
    //   console.log(res)
    // })

    //地图上查看位置
    // wx.chooseLocation({
    //   latitude:28,
    //   longitude:112
    // }).then(res=>{
    //   console.log(res)
    // })


    //选择图片
    // wx.chooseImage({
    //   count: 1,
    // }).then(res=>{
    //   console.log(res.tempFilePaths[0])

    //   //保存本地相册
    //   wx.saveImageToPhotosAlbum({
    //     filePath:res.tempFilePaths[0]
    //   }).then(val=>{
    //     console.log(val)
    //   })

    // })

    //选择视频
    // wx.chooseVideo().then(res=>{
    //   console.log(res.tempFilePath)
    //   this.setData({
    //     video:res.tempFilePath
    //   })
    // })


    // 开始录音
    // let n=wx.getRecorderManager()
    // n.start()

    // 结束录音
    // setTimeout(function () {
    //   n.stop() 
    // }, 5000)

    //调用camera相机标记 进行拍照并保存
    // let xj=wx.createCameraContext()
    // xj.takePhoto({
    //   success(res){

    //     wx.saveImageToPhotosAlbum({
    //        filePath:res.tempImagePath
    //     }).then(val=>{
    //       console.log(val)
    //     })

    //   }
    // })

    //获取收货地址(没有地址，则自动跳转新增编辑)
    // wx.chooseAddress({
    //   success(res){
    //     console.log(res)
    //   }
    // })

    //选择联系人
    // wx.chooseContact({
    //   success(res){
    //     //拨打电话
    //     wx.makePhoneCall({
    //       phoneNumber:res.phoneNumber
    //     })     

    //   }
    // })

    
  },
  play(){
    //播放视频（通过id名关联video标记）
    // let m=wx.createVideoContext('asd')
    // m.play()

    


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