import {type ButtonHTMLAttributes, type FC, type PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps & PropsWithChildren> = props => {
  const {
    theme = ButtonTheme.CLEAR,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type='button'
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
