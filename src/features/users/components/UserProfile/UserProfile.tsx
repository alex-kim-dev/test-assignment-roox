import { useState } from 'react';

import { Button, Field } from '~/components';

import type { User } from '../../types';
import css from './UserProfile.module.scss';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isReadonly, setReadonly] = useState(true);

  const handleEditClick = () => {
    setReadonly((prev) => !prev);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        </fieldset>
        <Button
          className={css.submit}
          disabled={isReadonly}
          type='submit'
          variant='success'>
          Send
        </Button>
      </form>
    </>
  );
};
