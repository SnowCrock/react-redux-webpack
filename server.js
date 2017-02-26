var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js')

var compiler = webpack(config)
var server = new webpackDevServer(compiler,{
  historyApiFallback:true,
  hot:true,
  inline:true,
  // contentBase:'./app',
  stats:{colors:true}
})

config.entry.unshift("webpack-dev-server/client?http://localhost:3000/","webpack/hot/dev-server")

server.listen(3000,'localhost',function(err){
  if(err){
    console.log(err)
  }
  console.log('Listening at localhost:3000...')
})