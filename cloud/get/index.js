// 云函数入口文件
const cloud = require('wx-server-sdk')

//初始化数据库
cloud.init({
  env: "cloud1-7gjq9owx32373562"
})
//连接数据
let db = cloud.database()
//连接集合
let admin = db.collection("users")
//设置查询条件
let _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {

  return admin.where({
    age: _.gte(17)
  }).get().then(res => res)
}