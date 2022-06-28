import { useParams } from 'react-router-dom';

import { Spinner } from '~/components';

import { useUser } from '../../api/getUser';
import css from './UserProfile.module.scss';

export const UserProfile: React.FC = () => {
  const { userId } = useParams();
  const { user, isLoading, error } = useUser(Number(userId));

  if (isLoading)
    return (
      <div className={css.spinnerWrapper}>
        <Spinner />
      </div>
    );

  if (error) return <p className={css.errorMsg}>{`Error: ${error.message}`}</p>;

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};
