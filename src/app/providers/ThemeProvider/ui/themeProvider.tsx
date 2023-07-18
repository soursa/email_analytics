import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "../lib/themeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const [theme, setTheme] = useState(defaultTheme);

	const defaultValue: ThemeContextProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultValue}>
			{children}
		</ThemeContext.Provider>
	);
};