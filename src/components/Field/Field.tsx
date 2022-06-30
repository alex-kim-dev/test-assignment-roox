/* eslint-disable react/require-default-props */

import clsx from 'clsx';
import { useState } from 'react';

import { toSnakeCase } from '~/utils';

import css from './Field.module.scss';

interface FieldOwnProps<E extends React.ElementType = React.ElementType> {
  as?: E;
  initValue?: string;
  label: string;
}

type FieldProps<E extends React.ElementType> = FieldOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof FieldOwnProps>;

const defaultElement = 'input';

export const Field = <E extends React.ElementType = typeof defaultElement>({
  as,
  initValue = '',
  label,
  className,
  ...props
}: FieldProps<E>) => {
  const [value, setValue] = useState<string>(initValue);
  const [error, setError] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const Component = as || defaultElement;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = event.currentTarget.value;
    setValue(current);

    if (isTouched) {
      setError(!/\w/.test(current));
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    setError(!/\w/.test(event.currentTarget.value));
  };

  return (
    <label
      className={clsx(css.label, Component === 'textarea' && css.fullWidth)}>
      {label}
      <Component
        aria-invalid={error}
        className={clsx(
          css.field,
          Component === 'textarea' && css.textarea,
          className
        )}
        name={toSnakeCase(label)}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};
