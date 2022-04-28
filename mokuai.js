let a="模块数据"
let b=function(){
  console.log("模块函数")
}
let c=789
//通过module.exports暴露部分数据给外部使用
module.exports.obj={
  a,
  b
}