const path = require("path");

// 통신을 위한 설정
module.exports = {
  // VUE Build 경로 설정
  outputDir: path.resolve(
    __dirname,
    "../backend/src/main/resources/static"
  ),

  devServer: {

      proxy: { // proxyTable 설정
          '/api': { // api 로 시작하는 소스 는 traget으로 잡아준다. > 사용할때 url 이 api 가 있어야 한다.
              target: 'http://localhost:9000',
              changeOrigin: true
          }
      }
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:9000",
    //     ws: true,
    //     changeOrigin: true, // Cors 에러를 막기위한 옵션
    //   },
    // },

    // proxy:{
    //   target:'http://localhost:9999',
    //   changeOrigin: true, // Cors 에러를 막기위한 옵션

    // }
  },
  
};
 