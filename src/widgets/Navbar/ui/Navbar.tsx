import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
	const {
		className,
	} = props
	const {toggleTheme} = useTheme()

	return (
		<div
			className={classNames(cls.Navbar, {}, [className])}
		>
			<button onClick={toggleTheme}>Toggle theme</button>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.PRIMARY_INVERTED}>MainPage</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.PRIMARY_INVERTED}>AboutPage</AppLink>
			</div>
		</div>
	)
};
