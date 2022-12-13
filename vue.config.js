module.exports = {
  devServer:{
    proxy: {
      "/api-docs/": {
        // target: "http://ccrm.paat.org/api/",
        target: "https://www.baidu.com/api-docs/",
        // target: "http://172.16.86.14:10801/",
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api-docs/": ""
        }
      }
    },
  }
}