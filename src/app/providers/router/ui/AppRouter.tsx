import React, {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={""}>
			<Routes>
				{Object.values(routeConfig).map(({element, path}) => (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				))}
			</Routes>
		</Suspense>
	)
};
