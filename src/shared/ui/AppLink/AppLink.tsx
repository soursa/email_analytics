import {FC, PropsWithChildren} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = 'primary',
	PRIMARY_INVERTED = 'primary--inverted',
	SECONDARY = 'secondary',
	SECONDARY_INVERTED = 'secondary--inverted'
}

interface AppLinkProps extends LinkProps{
	className?: string;
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = (props) => {
	const {
		to,
		theme = AppLinkTheme.PRIMARY,
		className,
		children,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
};
