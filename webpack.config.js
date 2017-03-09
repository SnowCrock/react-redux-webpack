var webpack = require('webpack')
var path = require('path')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
var config={
  entry:[     //入口文件
    path.resolve(__dirname,'app/index.js')  
  ],  
  output:{    //出口，定义打包输出的文件
    path:path.resolve(__dirname),
    filename:'bundle.js',
    publicPath:'./',
  },  
  devtool: 'source-map',    //webpack 打包方式配置项
  resolve:{   // 定义能够被打包的文件，文件后缀名,指定可以被import的文件后缀,导入时可不写后缀名
    extensions:['.js','.jsx','.css','.less'],
    alias:{
      pages:path.resolve(__dirname,'app/pages'),
      styles:path.resolve(__dirname,'styles')
      actions:path.resolve(__dirname,'app/actions')
      reducers:path.resolve(__dirname,'app/reducers')
    }
  }, 
  module:{    //webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
    loaders:[
      {
        loader:'babel-loader',
        exclude:'node_modules'
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
    ]
  },  
  plugins:[   //定义一些额外的插件
    new webpack.HotModuleReplacementPlugin(),  //代码热替换
    new openBrowserWebpackPlugin({url:'http://localhost:3000'}),//自动打开浏览器地址
  ], 
}

module.exports = config