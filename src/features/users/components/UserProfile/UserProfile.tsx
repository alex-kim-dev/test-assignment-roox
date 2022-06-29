import { useState } from 'react';

import { Button } from '~/components';

import type { User } from '../../types';
import css from './UserProfile.module.scss';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [name, setName] = useState(user.name);

  const handleEditClick = () => {
    setReadonly((prev) => !prev);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
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
      <form className={css.form} id='user-profile' onSubmit={handleFormSubmit}>
        <fieldset disabled={isReadonly}>
          <label className={css.label}>
            Name
            <input
              className={css.field}
              name='name'
              type='text'
              value={name}
              onChange={handleInput}
            />
          </label>
        </fieldset>
      </form>
      <Button
        className={css.submit}
        disabled={isReadonly}
        form='user-profile'
        type='submit'
        variant='success'>
        Send
      </Button>
    </>
  );
};
