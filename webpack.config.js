const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');



module.exports = {

  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "demo.js"
  },
  // HtmlWebpackPlugin 插件
  // npm install --save-dev html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: 'madge demo',
      template: 'index.html'
    }),
    new VueLoaderPlugin() // 加载vue-loader（识别.vue文件)
  ],
  // webpack-dev-server 为我们提供了一个简单的web服务器，
  // 并且能够实时重新加载（live reloading）
  // npm install --save-dev webpack-dev-server
  devServer: {
    contentBase: "./dist"
  },
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "demo.js"
  },
  module: {
    rules: [
      // 引入babel，vue时会用到很多es6的语法，
      // 但是现在很多浏览器对es6的支持不是很好，
      // 所以在编译时需要将这些语法转换es5的语法，此时我们使用babel来进行编译。
      // npm install --save-dev babel-core babel-loader
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      // 引入css
      // npm install --save-dev css-loader style-loader
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader'
        use: ['style-loader', 'css-loader'] // 上述格式不正确，加载多个插件，需要用use
      },
      // 图片资源加载
      // npm install --save-dev file-loader url-loader
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false, // 加载图片时出现esModule
          limit: 10000
        }
      },
      // 字体加载
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      // 引入对.vue文件的使用
      // npm install --save-dev vue-loader vue-template-compiler
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },



  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify/'),
      os: require.resolve("os-browserify/browser"),
      constants: require.resolve("constants-browserify"),
      assert: require.resolve("assert/"),
      fs:false,
      child_process:false,
      module:false
    },
    // 如果确认不需要node polyfill，设置resolve.alias设置为false
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  // node: {
  //   fallback : {
  //     fs:false
  //   }
  // },



}


