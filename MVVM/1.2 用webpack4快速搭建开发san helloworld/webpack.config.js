const path = require("path");
// 自动生成dist目录下的index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 每次构建清理dist文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");
// webpack及其插件似乎“知道”应该哪些文件生成
var ManifestPlugin = require("webpack-manifest-plugin");
// 
const webpack = require('webpack');
module.exports = {
	entry: {
		app: "./src/index.js",
	},
	output: {
		filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new ManifestPlugin(),
		new HtmlWebpackPlugin({
			title: "Output Management"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	],
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
      },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			}
		]
	}
};
