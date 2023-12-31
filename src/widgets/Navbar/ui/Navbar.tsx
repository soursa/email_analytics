import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={cls.mainLink}
          theme={AppLinkTheme.PRIMARY_INVERTED}
        >
          {t('Main page')}
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY_INVERTED}>
          {t('About page')}
        </AppLink>
      </div>
    </div>
  );
};
