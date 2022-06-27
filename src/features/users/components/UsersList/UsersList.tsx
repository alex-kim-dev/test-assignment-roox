import { Spinner } from '~/components';

import { useUsers } from '../../api/getUsers';
import css from './UsersList.module.scss';

export const UsersList: React.FC = () => {
  const { users, isLoading, error } = useUsers();

  if (isLoading)
    return (
      <div className={css.spinnerWrapper}>
        <Spinner />
      </div>
    );

  if (error) return <p className={css.errorMsg}>{`Error: ${error.message}`}</p>;

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
};
