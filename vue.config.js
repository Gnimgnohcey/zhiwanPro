const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    .set('_c', resolve('src/components'))
    .set('httpLib',resolve('src/api'))
    // _c代表全局组件路径简写
   }
}