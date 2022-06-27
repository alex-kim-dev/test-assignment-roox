/* eslint-disable react/button-has-type */

import clsx from 'clsx';

import { Spinner } from '~/components/Spinner/Spinner';

import css from './Button.module.scss';

interface ButtonProps {
  active?: boolean;
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'success';
}

export const Button: React.FC<ButtonProps> = ({
  active = false,
  as: Element = 'button',
  disabled = false,
  loading = false,
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <Element
      className={clsx(css.button, {
        [css.success]: variant === 'success',
        [css.active]: active,
        [css.loading]: loading,
      })}
      disabled={disabled}
      {...props}>
      {children}
      {loading && (
        <span className={css.spinnerWrapper}>
          <Spinner />
        </span>
      )}
    </Element>
  );
};
