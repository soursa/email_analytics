import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';

type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = props => {
	const {
		className,
	} = props;

	return (
		<div
			className={classNames(cls.Sidebar, {}, [className])}
		>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langSwitcher}/>
			</div>
		</div>
	);
};
