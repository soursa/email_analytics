import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

const PageError: FC = () => {
  const {t} = useTranslation();
  const onReload = () => {
    location.reload();
  };

  return (
    <div
      className={classNames('', {}, [])}
    >
      <div>
        {t('Occurred error')}
      </div>
      <Button
        onClick={onReload}
      >
        {t('Reload page')}
      </Button>
    </div>
  );
};

export default PageError;
