const webpack = require('webpack');
module.exports = {
  entry: {
    js:"./src/soap/main.js"
  },
  output:{
    path:"./dist",
    filename:"garoonUtility.min.js"
  },
  plugins :[
    new webpack.optimize.UglifyJsPlugin()
  ]
}
