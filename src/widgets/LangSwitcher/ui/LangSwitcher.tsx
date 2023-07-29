import { type FC, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps & PropsWithChildren> = (
  props,
) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(
      () => undefined,
      () => undefined,
    );
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={toggleLanguage}>{t('Language')}</Button>
    </div>
  );
};
