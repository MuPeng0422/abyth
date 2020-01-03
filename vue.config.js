// module.exports = {
//   devServer: {
//     open: true,
//     host: 'localhost',
//     port: 8080,
//     https: false,
//     //以上的ip和端口是我们本机的;下面为需要跨域的
//     proxy: { //配置跨域
//       'api': {
//         target: 'http://192.168.9.117:8301', //这里后台的地址模拟的;应该填写你们真实的后台接口
//         ws: true,
//         changOrigin: true, //允许跨域
//         pathRewrite: {
//           '^/api': '' //请求的时候使用这个api就可以
//         }
//       }
//     }
//   }
// }

const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },

  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      'api': {
        target: 'http://192.168.9.117:8301', //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' //请求的时候使用这个api就可以
        }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/reset.styl'),
      ],
    })
}
