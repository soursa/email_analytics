import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<br />
			<Link to="/">MainPage</Link>
			<br />
			<Link to="/about">AboutPage</Link>
			<Suspense fallback={"..."}>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;