import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './styles/index.scss'
import {useTheme} from "./themes/useTheme";

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<br />
			<Link to="/">MainPage</Link>
			<br />
			<Link to="/about">AboutPage</Link>
			<Suspense fallback={"..."}>
				<Routes>
					<Route path="/" element={<MainPageAsync/>}/>
					<Route path="/about" element={<AboutPageAsync/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;