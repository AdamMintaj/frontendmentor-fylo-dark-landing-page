const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "[name][ext]",
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: path.resolve(__dirname, "dist"),
		port: 3000,
		open: true,
		hot: true,
		watchFiles: path.resolve(__dirname, "src"),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{ test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "Frontend Mentor | Fylo landing page",
			filename: "index.html",
			template: path.resolve(__dirname, "src/template.html"),
			favicon: path.resolve(__dirname, "src/assets/favicon-32x32.png"),
		}),
	],
};
