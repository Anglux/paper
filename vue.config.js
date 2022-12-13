module.exports = {
  devServer:{
    hot: true,
    proxy: {
      "/apis/": {
        target: "https://ccrm.paat.vip/api/",
        // target: "http://172.16.86.14:10801/",
        changeOrigin: true,
        pathRewrite: {
          "^/apis/": ""
        }
      }
    },
  }
}