import path from 'path'
import webpack from 'webpack';

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
};

export default config;