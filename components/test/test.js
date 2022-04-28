// components/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mn:{
      type:String
    },
    xy:{
      value:"默认值"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    com:"组件数据"
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    chuang(){
      // 创建自定义事件传值
      let str=this.data.com
      console.log(str)
      this.triggerEvent("zhi",str)
    }
  }
})
