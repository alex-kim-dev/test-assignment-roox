/* eslint-disable react/button-has-type */

import clsx from 'clsx';

import { Spinner } from '~/components/Spinner/Spinner';

import css from './Button.module.scss';

interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'primary' | 'success';
  onClick?: (event: React.PointerEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  active = false,
  disabled = false,
  loading = false,
  type = 'button',
  variant = 'primary',
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(css.button, {
        [css.success]: variant === 'success',
        [css.active]: active,
        [css.loading]: loading,
      })}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {children}
      {loading && (
        <span className={css.spinnerWrapper}>
          <Spinner />
        </span>
      )}
    </button>
  );
};
