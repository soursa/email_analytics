import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

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
			<AppRouter />
		</div>
	);
};

export default App;