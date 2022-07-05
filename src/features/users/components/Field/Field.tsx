import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import { useUserProfile } from '../../hooks';
import { isFieldValid } from '../../utils/userProfileValidation';
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
  // eslint-disable-next-line react/require-default-props
  as,
  initValue = '',
  label,
  className,
  ...props
}: FieldProps<E>) => {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const { isFormTouched } = useUserProfile();

  const Component = as || defaultElement;
  const name = label.replaceAll(' ', '').toLowerCase();

  const validate = useCallback(
    (val: string) => setError(!isFieldValid(name, val)),
    [name]
  );

  useEffect(() => {
    if (isFormTouched) validate(value);
  }, [isFormTouched, validate, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    setValue(currentValue);
    if (isTouched || isFormTouched) validate(currentValue);
  };

  const handleBlur = () => {
    setTouched(true);
    validate(value);
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
