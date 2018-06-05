const path = require("path");
// 自动生成dist目录下的index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 每次构建清理dist文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	output: {
		filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist"),
	},
	plugins: [
		new CleanWebpackPlugin(["../dist"]),
		new HtmlWebpackPlugin({
            title: "Production",
            template: 'index.html'
        }),
    ],
    module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
            },
            {
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.san$/,
				use: ["san-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			// {
			// 	test: /\.js$/,
			// 	use: ["babel-loader"]
			// }
		]
    },
  
};
