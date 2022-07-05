import { useMemo, useState } from 'react';

import { Button } from '~/components';

import { useUpdateUserProfile } from '../../api/updateUserProfile';
import type { User, UserProfileData } from '../../types';
import { UserProfileProvider } from '../../utils/userProfileContext';
import { isFormValid } from '../../utils/userProfileValidation';
import { Field } from '../Field/Field';
import css from './UserProfile.module.scss';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [isFormTouched, setFormTouched] = useState(false);
  const { updateUserProfile, isLoading: isSubmitting } = useUpdateUserProfile(
    user.id
  );

  const context = useMemo(() => ({ isFormTouched }), [isFormTouched]);

  const handleEditClick = () => {
    setReadonly((prev) => !prev);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as UserProfileData;
    const isValid = isFormValid(data);

    if (isValid) updateUserProfile(data);
    setFormTouched(true);
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
          <UserProfileProvider value={context}>
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
          </UserProfileProvider>
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
