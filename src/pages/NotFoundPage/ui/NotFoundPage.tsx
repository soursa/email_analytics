import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      {t('Page not found')}
    </div>
  );
};

export default NotFoundPage;
