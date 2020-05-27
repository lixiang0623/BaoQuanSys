const webpack = require("webpack");
var px2rem = require('postcss-px2rem');
// var proxy = require('http-proxy-middleware');

exports.pluginName = '@ali/kylin-plugin-custom';
exports.default = function () {
  return {
    // 修改 webpack 配置
    webpack: function modifyWebpackConfig(webpackConfig) {

      //  如果要开启 px2rem, cnpm i --save-dev postcss-px2rem 安装该模块并取消下面的注释
      webpackConfig.vue.postcss.push(
        px2rem({
          remUnit: 20
        })
      );

      // webpackConfig.vue.loaders.scss = __dirname + '/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader!sass-loader'
      // webpackConfig.vue.loaders.sass = `${__dirname}/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader!sass-loader?indentedSyntax`

      // webpackConfig.module.loaders.push({
      //   test: /\.scss$/,
      //   loaders: ["style", "css", "sass"]
      // })

      webpackConfig.plugins[7].minChunks = 2;  //把重复出现2次以上的module都提取到一个公共chunk  默认3

      // webpackConfig.plugins.push(
      //   new webpack.optimize.CommonsChunkPlugin({
      //     name: 'deep',
      //     children: true,
      //     deepChildren: true,
      //     minChunks: 2,
      //   }),
      // )

      // webpackConfig.entry.aaa = ['./src/common/utilities/index.js']


      // webpackConfig.plugins.push(
      //   new webpack.optimize.CommonsChunkPlugin({
      //     name: 'eee',
      //     chunks: ['aaa']
      //   }),
      // )



      // webpackConfig.plugins.push(
      //   new webpack.optimize.CommonsChunkPlugin({
      //     name: 'utility',
      //     filename: 'utility.js',
      //     chunks: ['my-bankcard','transaction-details','my-order','account-information','my-coupon','manage-bankcard','index','add-bankcard']
      //   }),
      // )

      // console.log('webpackConfig', webpackConfig)
      // webpackConfig.plugins.map(v => console.log(v))
      // console.log('heihei loaders', webpackConfig.module.loaders)


      return webpackConfig;
    },

    // 修改 babel 配置
    babel: function modifyBabelConfig(babelConfig) {
      return babelConfig;
    },

    //  接入 express 插件, 依赖 build@ 0.1.49+ 及以上版本
    express: function modifyExpress(expressInstance) {
      //  如果要使用 http-proxy-middleware, cnpm i --save-dev http-proxy-middleware 安装该模块并取消下面的注释

      // expressInstance.use(
      //     proxy('/api', {target: 'http://localhost:3000'})
      // );

      //// http://localhost:8090/api/foo/bar -> http://localhost:3000/api/foo/bar
    },
  }
}
