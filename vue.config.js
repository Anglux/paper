module.exports = {
  chainWebpack: config => {
  config
  .plugin('html')
  .tap(args => {
      args[0].title = '快速降重'
      return args
  })},
  devServer:{
    hot: true,
    proxy: {
      "/apis": {
        // target: "http://192.168./",
        target: "http://wpx.51alf.cn/api/",
        // target: "https://ccrm.paat.vip/api/",
        // target: "http://172.16.86.14:10801/",
        changeOrigin: true,
        pathRewrite: {
          "^/apis": ""
        }
      }
    },
  }
}