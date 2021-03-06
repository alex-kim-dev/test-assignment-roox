/* eslint-disable react/button-has-type */

import clsx from 'clsx';

import { Spinner } from '~/components/Spinner/Spinner';

import css from './Button.module.scss';

interface ButtonProps {
  active?: boolean;
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'primary' | 'success';
}

export const Button: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({
  active = false,
  disabled = false,
  loading = false,
  className,
  type = 'button',
  variant = 'primary',
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(css.button, className, {
        [css.success]: variant === 'success',
        [css.active]: active,
        [css.loading]: loading,
      })}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}>
      {children}
      {loading && (
        <span className={css.spinnerWrapper}>
          <Spinner />
        </span>
      )}
    </button>
  );
};
