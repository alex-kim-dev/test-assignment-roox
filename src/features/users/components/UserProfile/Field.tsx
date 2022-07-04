/* eslint-disable react/require-default-props */

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { toSnakeCase } from '~/utils';

import css from './Field.module.scss';
import { useForm } from './formContext';
import { isFieldValid } from './validate';

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
  const { isFormTouched } = useForm();

  const Component = as || defaultElement;
  const name = toSnakeCase(label);

  useEffect(() => {
    if (isFormTouched) setError(!isFieldValid(name, value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormTouched]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    setValue(currentValue);
    if (isTouched || isFormTouched) setError(!isFieldValid(name, currentValue));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(!isFieldValid(name, value));
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
        name={name}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};
