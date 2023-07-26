import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<LoaderProps> = props => {
  const {
    className,
  } = props;

  return (
    <div
      className={classNames(cls['lds-grid'], {}, [className])}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
