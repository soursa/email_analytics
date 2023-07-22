import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {type BuildOptions} from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		open: true,
		port: options.port,
		historyApiFallback: true,
		hot: true,
	};
}
