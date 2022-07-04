import { useMemo, useState } from 'react';

import { Button } from '~/components';

import type { User } from '../../types';
import { Field } from './Field';
import { FormProvider } from './formContext';
import css from './UserProfile.module.scss';
import { isFormValid } from './validate';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isFormTouched, setFormTouched] = useState(false);

  const context = useMemo(() => ({ isFormTouched }), [isFormTouched]);

  const handleEditClick = () => {
    setReadonly((prev) => !prev);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const isValid = isFormValid(data);

    setFormTouched(true);

    if (isValid) console.info('Submitting:', JSON.stringify(data, null, 2));
    setSubmitting(false);
  };

  return (
    <>
      <header className={css.header}>
        <h1>User Profile</h1>
        <Button active={!isReadonly} type='button' onClick={handleEditClick}>
          Edit
        </Button>
      </header>
      <form onSubmit={handleFormSubmit}>
        <fieldset className={css.fieldset} disabled={isReadonly}>
          <FormProvider value={context}>
            <Field initValue={user.name} label='Name' type='text' />
            <Field initValue={user.username} label='User name' type='text' />
            <Field initValue={user.email} label='Email' type='email' />
            <Field initValue={user.address.street} label='Street' type='text' />
            <Field initValue={user.address.city} label='City' type='text' />
            <Field
              initValue={user.address.zipcode}
              label='Zip code'
              type='text'
            />
            <Field initValue={user.phone} label='Phone' type='tel' />
            <Field initValue={user.website} label='Website' type='text' />
            <Field as='textarea' label='Comment' />
          </FormProvider>
        </fieldset>
        <Button
          className={css.submit}
          disabled={isReadonly}
          loading={isSubmitting}
          type='submit'
          variant='success'>
          Send
        </Button>
      </form>
    </>
  );
};
