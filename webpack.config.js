var webpack = require('webpack')
var path = require('path')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var config={
  // entry 可以使数组 对象 字符串
  /*entry:[     //入口文件
    path.resolve(__dirname,'app/index.js'),
    // vendor:['react'] //提取react模块作为公共的js文件
  ],*/  
  entry:{
    app:[
      path.resolve(__dirname,'app/index.js'),
    ],
    // vendor:['react']
  },
  output:{    //出口，定义打包输出的文件
    path:path.resolve(__dirname,'dist'),
    // filename:'bundle.js',
    filename:'bundle.js',  //注意这里，用[name]可以自动生成路由名称对应的js文件
    chunkFilename: '[name].js', //注意这里，用[name]可以自动生成路由名称对应的js文件
    // publicPath:'./dist',
  },  
  devtool: 'source-map',    //webpack 打包方式配置项
  resolve:{   // 定义能够被打包的文件，文件后缀名,指定可以被import的文件后缀,导入时可不写后缀名
    extensions:['.js','.jsx','.css','.less'],
    alias:{
      pages:path.resolve(__dirname,'app/pages'),
      styles:path.resolve(__dirname,'app/styles'),
      actions:path.resolve(__dirname,'app/actions'),
      reducers:path.resolve(__dirname,'app/reducers'),
      store:path.resolve(__dirname,'app/store'),
      utils:path.resolve(__dirname,'app/utils'),
    }
  }, 
  module:{    //webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
    rules:[
      {
        loader:'babel-loader',
        exclude:'node_modules'
      },
      {
        test: /\.css$/,
        // loader:'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]'
        use:[
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]'
        ]
      },
      {
        test: /\.less$/,
        // loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]!less-loader'
        use:[
          'style-loader',
          'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]', 
          'less-loader?sourceMap'
        ]
        /*use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]', 
            'less-loader?sourceMap'
          ]
        })*/
      },
    ]
  },  
  plugins:[   //   定义一些额外的插件
    new webpack.HotModuleReplacementPlugin(),  //代码热替换
    new openBrowserWebpackPlugin({url:'http://localhost:3000'}),//自动打开浏览器地址
    //react的公共模块
    /*new webpack.optimize.CommonsChunkPlugin({
      names:['bundle'],
      filename:'bundle.js'
    })*/
    new ExtractTextPlugin('style.css')
  ], 
}

module.exports = config