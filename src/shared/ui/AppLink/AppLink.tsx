import {type FC, type PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {Link, type LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	PRIMARY_INVERTED = 'primary--inverted',
	SECONDARY = 'secondary',
	SECONDARY_INVERTED = 'secondary--inverted',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps & PropsWithChildren> = props => {
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
	);
};
