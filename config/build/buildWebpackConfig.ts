import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode} = options;

	return {
		mode,
		entry: {
			main: paths.entry
		},
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders()
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options)
	};
}