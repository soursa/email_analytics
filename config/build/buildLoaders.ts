import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
	const scss = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]"
					},
				}
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	}

	const typeScript = {
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}

	return [
		typeScript,
		scss
	]
}