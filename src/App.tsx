import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './index.scss'

const App = () => {
	return (
		<div className="app">
			<Link to="/">MainPage</Link>
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