// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"cloud1-7gjq9owx32373562"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let {a,b}=event //读取传过来的参数
  return { //返回云函数结果
    a,
    b,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}