import path from 'path'
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'src', 'index.ts')
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.ProgressPlugin()
	],
};

export default config;