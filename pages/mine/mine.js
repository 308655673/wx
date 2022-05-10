// 连接数据库(页面连接，仅当前页面范围内有效)
let db = wx.cloud.database()
// 关联集合
let admin = db.collection("users")
// 使用查询条件
let _ = db.command

// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    move: null,
    test: {
      age: _.gte(17)
    }
  },
  delfile(){
    //云储存删除
    wx.cloud.deleteFile({
      fileList:[
        "cloud://cloud1-7gjq9owx32373562.636c-cloud1-7gjq9owx32373562-1306268956/123.jpg",
        "cloud://cloud1-7gjq9owx32373562.636c-cloud1-7gjq9owx32373562-1306268956/FDQPCneNOPzZ6b50227bd4b3e9ff651c4c98423262c6.png"
      ],
      success(){
        console.log("删除成功")
      }
    })
  },
  upfile(){
    //选择文件
    wx.chooseImage({
      count: 1,
    }).then(res=>{
      console.log(res)
      let filename=res.tempFilePaths[0].substr(11)
      //文件上传并设置保存名
      wx.cloud.uploadFile({
        filePath:res.tempFilePaths[0],
        cloudPath:filename
      })
    })

   
  },
  downfile() {

    wx.showLoading({
      title: '下载中...',
    })

    //云存储下载
    wx.cloud.downloadFile({
      fileID: "cloud://cloud1-7gjq9owx32373562.636c-cloud1-7gjq9owx32373562-1306268956/node-object.rar"
    }).then(res => {

      //保存文件到本地
      let save=wx.getFileSystemManager()
      save.saveFile({
        tempFilePath: res.tempFilePath,
        success(){
           wx.hideLoading()
        }
      })
    })

  },
  yunget() {
    //使用云函数获取数据可避开权限问题，以及突破20条限制（100）
    wx.cloud.callFunction({
      name: "get"
    }).then(res => {
      console.log(res)
    })
  },
  yunlogin(event) {
    // 使用云函数登录，获取用户openid
    // 需要在project.config.json配置云函数存放目录

    // console.log(event.target.dataset.test)

    wx.cloud.callFunction({
      name: "login",
      data: {
        a: event.target.dataset.test,
        b: 456
      }
    }).then(res => {
      console.log(res)
    })

  },
  add() {
    //关联云环境(局部关联，仅当前函数范围有效)
    // wx.cloud.init({
    //   env:"cloud1-7gjq9owx32373562"
    // })

    // 连接数据库(局部连接，仅当前函数范围有效)
    // let db=wx.cloud.database()
    // 关联集合
    // let admin = db.collection("users")

    //添加数据
    for (let i = 1; i < 25; i++) {
      admin.add({
        data: {
          name: "张三" + i,
          age: 17 + i
        }
      }).then(res => {
        console.log(res)
      })
    }
  },
  read() {
    // 读取数据（云函数可避免权限问题和条数问题）
    // 注意权限限制（只能读取当前用户添加的数据）   
    // 每次只能读取20条
    // where构建条件查询
    // orderBy("age","asc")按照age属性的升序排序  desc 降序
    // field 在结果中排出某些字段不显示
    // limit 限制条数（不能突破20）
    // skip 跳过前面n条数据



    admin.where({
      age: _.gte(23)
    }).orderBy("age", "asc").field({
      _openid: false,
      _id: false
    }).limit(5).skip(5).get().then(res => {
      console.log(res)
    })

  },
  del() {
    //删除数据
    // 注意权限问题
    admin.where({
      age: _.gte(17)
    }).remove().then(res => {
      console.log(res)
    })
  },
  change() {
    // 更新数据（修改 50>= age>=17 的所有数据）
    admin.where(_.and([{
        age: _.gte(17)
      },
      {
        age: _.lte(50)
      }
    ])).update({
      data: {
        name: "李四123"
      }
    }).then(res => {
      console.log(res)
    })
  },
  start() {
    let a = wx.createAnimation()

    let b = a.translateX(200).step({
      duration: 2000
    }).translateY(100).step({
      duration: 1000
    }).export()

    let c = a.translateY(0).step({
      duration: 1000
    }).translateX(0).step({
      duration: 2000
    }).export()

    this.setData({
      move: this.data.num % 2 == 0 ? c : b,
      num: this.data.num + 1
    })

  },
  onPageScroll(event) {
    console.log("监听页面滚动", event)
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
  onPullDownRefresh() {
    console.log("下拉刷新触发")
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