import {FC, PropsWithChildren} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps & PropsWithChildren> = (props) => {
	const {
		className
	} = props
	const {t, i18n} = useTranslation()

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<div
			className={classNames('', {}, [className])}
		>
			<Button
				onClick={toggleLanguage}
			>
				{t('Язык')}
			</Button>
		</div>
	)
};
